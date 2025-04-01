import { cn } from "@utils/cn";

const Divider = ({ className }: { className?: string }) => {
  return <div className={cn("bg-gray-200 w-full h-[1px]", className)} />;
};

export default Divider;
