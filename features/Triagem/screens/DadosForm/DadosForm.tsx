'use client';
import Button from "@/components/Button/Button";
import { Dropdown } from "@/components/Dropdown/Dropdown";
import { FormField } from "@/components/FormField/FormField";
import { usePageFormNavigation } from "@/hooks/use-page-form-navigation";
import { RiInformationFill } from '@remixicon/react';
import { Controller, useForm } from "react-hook-form";
import { cpfMask, phoneMask } from "../../../../utils/masks";
import { brazilianStates } from "../../../../constants/brazilianStates";

export const DadosForm = () => {
  const { goNextPage, getStoredFormData } = usePageFormNavigation();
  const { register, formState: { errors }, setValue, control, handleSubmit } = useForm({
    defaultValues: getStoredFormData(),
    mode: "onChange"
  });

  return (
    <section className='w-[29.625rem]'>
      <FormField
        campoObrigatorio
        label={"Nome Completo"}
        type={"text"}
        maxLength={100}
        {...register('name', {
          required: "Nome é obrigatorio!",
          pattern: {
            value: /^([a-zA-Zà-úÀ-Ú]|\s+)+$/,
            message: "Somente letras são permitidas!"
          }
        })}
        placeholder={"Fulano de Tal"}
        hasError={!!errors.name}
        message={errors?.name?.message?.toString()}
        icon={errors.name && RiInformationFill} />

      <div className="grid grid-cols-2 pt-4 gap-6">
        <FormField
          campoObrigatorio
          label={"Gênero"}
          hasError
          icon={errors.gender && RiInformationFill}
          message={errors?.gender?.message?.toString()}>
          <Controller
            name="gender"
            control={control}
            rules={{ required: "Gênero é obrigatório!" }}
            render={({ field }) => (
              <Dropdown
                {...field}
                placeholder="Feminino"
                options={[
                  { label: "Feminino", value: "feminino" },
                  { label: "Masculino", value: "masculino" },
                  { label: "Prefiro não dizer", value: "na" },
                  { label: "Outro", value: "outro" }
                ]}
              />
            )}
          />
        </FormField>

        <FormField
          campoObrigatorio
          label={"Data de nascimento"}
          type={"date"}
          placeholder={"25/07/1963"}
          {...register('dateBirth', {
            required: "Data de nascimento é obrigatorio!",
            validate: (date) => {
              const selectedDate = new Date(date);
              const today = new Date();

              if (selectedDate < new Date("1900-01-01")) return "Data inválida!";

              if (selectedDate > today) return "A data não pode estar no futuro!";

              return true;
            }
          })}
          hasError={!!errors.dateBirth}
          message={errors?.dateBirth?.message?.toString()}
          icon={errors.dateBirth && RiInformationFill} />
      </div>


      <div className="grid grid-cols-2 pt-4 gap-6">
        <FormField
          campoObrigatorio
          label={"Cidade"}
          maxLength={50}
          type={"text"}
          placeholder={"São Paulo"}
          {...register('city', {
            required: "Cidade é obrigatorio!"
          })}
          hasError={!!errors.city}
          message={errors?.city?.message?.toString()}
          icon={errors.city && RiInformationFill} />

        <FormField
          campoObrigatorio
          label={"Estado"}
          hasError
          icon={errors.state && RiInformationFill}
          message={errors?.state?.message?.toString()}>
          <Controller
            name="state"
            control={control}
            rules={{ required: "Estado é obrigatório!" }}
            render={({ field }) => (
              <Dropdown
                {...field}
                placeholder="SP"
                options={brazilianStates()} />
            )} />
        </FormField>
      </div>


      <div className="grid grid-cols-2 pt-4 gap-6" >
        <FormField
          campoObrigatorio
          label={"Telefone"}
          type={"text"}
          maxLength={14}
          placeholder={"(11) 99999-9999"}
          {...register('phone', {
            required: "Telefone é obrigatorio!",
            minLength: { value: 14, message: "Insira um telefone válido!" },
            onChange: (e) => {
              const masked = phoneMask(e.target.value);
              setValue('phone', masked);
            }
          })}
          hasError={!!errors.phone}
          message={errors?.phone?.message?.toString()}
          icon={errors.phone && RiInformationFill} />

        <FormField
          campoObrigatorio
          label={"CPF"}
          type={"text"}
          placeholder={"***-***-***-**"}
          {...register('cpf', {
            required: "CPF é obrigatorio!",
            minLength: { value: 14, message: "Insira um cpf válido!" },
            onChange: (e) => {
              const masked = cpfMask(e.target.value);
              setValue('cpf', masked);
            }
          })}
          hasError={!!errors.cpf}
          message={errors?.cpf?.message?.toString()}
          icon={errors.cpf && RiInformationFill} />
      </div>

      <Button
        onClick={handleSubmit((data) => goNextPage({ data, path: '/triagem/form/laudo-medico' }))}
        className={`w-full text-label-sm bg-[#008B62] mt-8 ${Object.keys(errors).length > 0 ? 'cursor-not-allowed' : 'hover:brightness-[90%] cursor-pointer'}`}>
        Próxima etapa
      </Button>
    </section>
  );
}