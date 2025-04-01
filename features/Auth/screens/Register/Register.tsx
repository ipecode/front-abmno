import Divider from '@components/Divider/Divider';
import Link from 'next/link';
import RegisterForm from './components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <>
      <h1 className='text-2xl pb-1 font-medium text-gray-950'>
        Primeiro acesso
      </h1>
      <p className='text-base font-normal text-gray-600'>
        Insira seus dados para criar sua conta.
      </p>
      <Divider className='my-6' />
      <RegisterForm />
      <div className='my-6 flex w-full items-center justify-center'>
        <Divider />
        <span className='text-xs px-[10px] font-medium uppercase text-gray-400'>
          ou
        </span>
        <Divider />
      </div>
      <div className='text-sm flex gap-1'>
        <p className='font-normal text-gray-600'>Já tem uma conta?</p>
        <Link href={'/'} className='font-medium text-gray-950'>
          Faça o login aqui
        </Link>
      </div>
    </>
  );
};

export default Register;
