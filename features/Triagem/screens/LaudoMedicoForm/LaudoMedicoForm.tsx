'use client';
import Button from "@/components/Button/Button";
import { Checkbox } from "@/components/Checkbox/Checkbox";
import { Dropdown } from "@/components/Dropdown/Dropdown";
import { FormField } from "@/components/FormField/FormField";
import { Textarea } from "@/components/Textearea/Textearea";
import { usePageFormNavigation } from "@/hooks/use-page-form-navigation";
import { RiInformationFill } from "@remixicon/react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

export const LaudoMedicoForm = () => {
  const { getStoredFormData, goNextPage } = usePageFormNavigation();
  const { formState: { errors }, control, handleSubmit } = useForm({
    defaultValues: getStoredFormData(),
    mode: "onChange"
  });
  const router = useRouter();

  return (
    <section className='w-[29.625rem] flex flex-col gap-8'>

      <FormField
        label={"Possui alguma deficiência e/ou limitação física-psicológica?"}
        campoObrigatorio
        hasError={!!errors.deficiency}
        message={errors?.deficiency?.message?.toString()}
        icon={errors.deficiency && RiInformationFill}>

        <Controller
          name="deficiency"
          control={control}
          rules={{ required: 'É obrigatório informar sobre a existência de alguma deficiência e/ou limitação física-psicológica!' }}
          render={({ field }) => (
            <Checkbox
              {...field}
              options={[
                { label: "Sim", value: "sim" },
                { label: "Não", value: "nao" }
              ]} />
          )} />

      </FormField>

      <FormField
        label={"Se sim, quais?"}>
        <Textarea maxLength={500} name="deficiencyTextarea" control={control} />
      </FormField>

      <FormField
        campoObrigatorio
        label={"Precisa de assistência legal?"}
        hasError={!!errors.assistance}
        message={errors?.assistance?.message?.toString()}
        icon={errors.assistance && RiInformationFill}>

        <Controller
          name="assistance"
          control={control}
          rules={{ required: 'Informe se precisa de assistência legal!' }}
          render={({ field }) => (
            <Checkbox
              {...field}
              options={[
                { label: "Sim", value: "sim" },
                { label: "Não", value: "nao" }
              ]} />
          )} />

      </FormField>

      <FormField
        campoObrigatorio
        label={"Faz uso de algum medicamento regularmente?"}
        hasError={!!errors.medicines}
        message={errors?.medicines?.message?.toString()}
        icon={errors.medicines && RiInformationFill}>

        <Controller
          name="medicines"
          control={control}
          rules={{ required: 'É obrigatório informar se há uso de medicamento regularmente!' }}
          render={({ field }) => (
            <Checkbox
              {...field}
              options={[
                { label: "Sim", value: "sim" },
                { label: "Não", value: "nao" }
              ]} />
          )} />

      </FormField>

      <FormField
        label={"Se sim, quais?"}>
        <Textarea maxLength={500} name="medicinesTextarea" control={control} />
      </FormField>

      <FormField
        label={"Possui diagnóstico de NMO?"}
        campoObrigatorio
        hasError={!!errors.nmo}
        message={errors?.nmo?.message?.toString()}
        icon={errors.nmo && RiInformationFill}>

        <Controller
          name="nmo"
          control={control}
          rules={{ required: 'Informe se possui diagnóstico de NMO!' }}
          render={({ field }) => (
            <Dropdown
              {...field}
              placeholder="Anti-AQP4 positivo"
              options={[
                { label: "Anti-AQP4 positivo", value: "feminino" },
                { label: "Anti-MOG positivo", value: "masculino" },
                { label: "Negativo para ambos", value: "na" },
                { label: "Não possuo diagnóstico", value: "outro" }
              ]} />
          )} />

      </FormField>

      <div className="grid grid-cols-2 gap-3 mb-40 text-label-sm">
        <Button
          onClick={() => router.push('/triagem/form/dados')}
          className='w-full bg-[#F6F8FA] text-label-sm text-neutral-950 mt-8 hover:brightness-[90%]'>
          Voltar
        </Button>
        <Button
          disabled={Object.keys(errors).length > 0}
          onClick={handleSubmit((data) => goNextPage({ data, path: '/triagem/form/rede-apoio' }))}
          className={`w-full text-label-sm bg-[#008B62] mt-8 ${Object.keys(errors).length > 0 ? 'cursor-not-allowed' : 'hover:brightness-[90%] cursor-pointer'}`}>
          Próxima etapa
        </Button>
      </div>
    </section>
  );
}
