import * as Input from '@/components/ui/input';
 
export function InputDemo() {
  return (
    <div className='w-full max-w-[300px]'>
      <Input.Root>
        <Input.Wrapper>
          <Input.Input type='text' placeholder='Placeholder text...' />
        </Input.Wrapper>
      </Input.Root>
    </div>
  );
}