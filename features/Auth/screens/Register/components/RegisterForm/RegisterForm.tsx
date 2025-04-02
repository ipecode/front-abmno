import Button from '@components/Button/Button';
import { Checkbox } from '@components/Checkbox/Checkbox';
import { FormField } from '@components/FormField/FormField';

const RegisterForm = () => {
  const asteriskColor = '#DF1C41';

  return (
    <section className='flex w-full flex-col'>
      <div className='flex flex-col gap-3'>
        <FormField
          type='email'
          label='Endereço de email'
          placeholder=''
          asteriskColor={asteriskColor}
        />
        <FormField
          type='password'
          label='Senha'
          placeholder=''
          asteriskColor={asteriskColor}
        />
        <FormField
          type='password'
          label='Confirmar senha'
          placeholder=''
          asteriskColor={asteriskColor}
        />
      </div>
      <Checkbox
        name='terms'
        className='py-6'
        options={[
          {
            value: 'accepted',
            label:
              'Li e concordo com os Termos de Uso e Política de Privacidade',
          },
        ]}
      />
      <Button className='w-full'>Continuar</Button>
    </section>
  );
};

export default RegisterForm;
