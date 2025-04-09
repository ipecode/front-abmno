import UserFill from '@components/icons/UserFill';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='flex min-h-screen w-full items-center justify-center bg-slate-50'>
      <section className='shadow-[0px 16px 32px -12px #585C5F1A;] mx-auto flex w-full max-w-[440px] flex-col items-center justify-center rounded-3xl bg-white p-8'>
        <div className='border-zinc-200 mb-2 flex h-[88px] w-full max-w-[88px] items-center justify-center rounded-full border bg-gradient-to-b from-[rgba(228,229,231,0.48)] to-[rgba(247,248,248,0)]'>
          <div className='shadow-[0px 2px 4px 0px #1B1C1D0A;] flex h-14 w-full max-w-14 items-center justify-center rounded-full border border-gray-200 bg-white'>
            <UserFill />
          </div>
        </div>
        {children}
      </section>
    </main>
  );
};

export default Layout;
