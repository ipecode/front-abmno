import { cn } from "@utils/cn";

const Button = ({
  className,
  ...props
}: { className?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        'text-sm flex cursor-pointer items-center justify-center text-nowrap rounded-[10px] border-none bg-green-700 py-[10px] font-medium text-white outline-none',
        className,
      )}
      {...props}
    />
  );
};

export default Button;
