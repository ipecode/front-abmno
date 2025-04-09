'use client';
import Button from "@components/Button/Button";
import { FormField } from "@components/FormField/FormField";
import { Label } from "@components/Label/Label";
import { ContactsCard } from "@components/Triagem/ContactsCard/ContactsCard";
import { Icon } from "@components/ui/button";
import { useContacts } from "@hooks/use-contacts";
import { RiAddLine, RiInformationFill } from '@remixicon/react';
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { phoneMask } from "../../../../utils/masks";

export const RedeApoioForm = () => {
  const { register, formState: { errors }, setValue, handleSubmit, getValues } = useForm({
    mode: "onChange"
  });
  const router = useRouter();
  const { add, remove, contacts } = useContacts();

  const handleAddContact = () => {
    const { nameFamiliarity, familiarity, phoneFamiliarity } = getValues();
    const newContact = {
      id: Date.now(),
      name: nameFamiliarity,
      familiarity,
      phone: phoneFamiliarity
    };

    add(newContact);

    setValue('nameFamiliarity', '');
    setValue('familiarity', '');
    setValue('phoneFamiliarity', '');
  }

  const handleRemoveContact = (idToRemove: number) => remove(idToRemove);

  const handleFinish = () => {
    const formDataRaw = sessionStorage.getItem('triagemFormData');
    const contactsRaw = sessionStorage.getItem('triagemFormContacts');

    const formData = formDataRaw ? JSON.parse(formDataRaw) : {};
    const contacts = contactsRaw ?? '';

    alert('Obrigado por enviar suas informações. Estamos analisando seu cadastro e entraremos em contato em breve.\n\n' +
      'Informações enviadas:\n' + JSON.stringify(formData, null, 2) +
      '\n\nContatos:\n' + contacts)

    setTimeout(() => {
      router.push('/');
      sessionStorage.clear();
    }, 3000)
  }

  return (
    <section className='w-[29.625rem] flex flex-col gap-4'>
      <div className="grid grid-cols-2 pt-4 gap-6">
        <FormField
          label={"Nome Completo"}
          type={"text"}
          maxLength={100}
          {...register('nameFamiliarity', {
            pattern: {
              value: /^([a-zA-Zà-úÀ-Ú]|\s+)+$/,
              message: "Somente letras são permitidas!"
            }
          })}
          placeholder={"Amélia dos Santos"}
          hasError={!!errors.nameFamiliarity}
          message={errors?.nameFamiliarity?.message?.toString()}
          icon={errors.nameFamiliarity && RiInformationFill} />

        <FormField
          label={"Parentesco"}
          type={"text"}
          maxLength={50}
          {...register('familiarity', {
            pattern: {
              value: /^([a-zA-Zà-úÀ-Ú]|\s+)+$/,
              message: "Somente letras são permitidas!"
            }
          })}
          placeholder={"Mãe"}
          hasError={!!errors.familiarity}
          message={errors?.familiarity?.message?.toString()}
          icon={errors.familiarity && RiInformationFill} />
      </div>

      <FormField
        label={"Telefone para contato (WhatsApp)"}
        type={"text"}
        maxLength={14}
        placeholder={"(11) 99999-9999"}
        {...register('phoneFamiliarity', {
          onChange: (e) => {
            const masked = phoneMask(e.target.value);
            setValue('phoneFamiliarity', masked);
          }
        })}
        hasError={!!errors.phoneFamiliarity}
        message={errors?.phoneFamiliarity?.message?.toString()}
        icon={errors.phoneFamiliarity && RiInformationFill} />

      <Button
        disabled={Object.keys(errors).length > 0}
        onClick={handleSubmit(handleAddContact)}
        className="w-full bg-[#F6F8FA] text-neutral-800 gap-1 text-label-sm mt-7 mb-14 hover:brightness-[90%]">
        Adicionar
        <Icon size="xxsmall" as={RiAddLine} />
      </Button>

      {contacts.length > 0 && (
        <>
          <Label label={"Contatos adicionados:"} />

          {contacts.map((contact) => (
            <ContactsCard
              key={contact.id}
              name={contact.name}
              familiarity={contact.familiarity}
              phone={contact.phone}
              onRemove={() => handleRemoveContact(contact.id)}
            />
          ))}
        </>
      )}

      <div className="grid grid-cols-2 gap-3 mt-14 mb-40 text-label-sm">
        <Button
          onClick={() => router.push('/triagem/form/laudo-medico')}
          className='w-full text-label-sm bg-[#F6F8FA] text-neutral-950 mt-8 hover:brightness-[90%]'>
          Voltar
        </Button>
        <Button
          onClick={handleFinish}
          className={`w-full text-label-sm bg-[#008B62] mt-8 ${Object.keys(errors).length > 0 ? 'cursor-not-allowed' : 'hover:brightness-[90%] cursor-pointer'}`}>
          Finalizar
        </Button>
      </div>
    </section>
  );
}