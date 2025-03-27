
import { Auth } from "@/features/Auth";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Auth.Layout>{children}</Auth.Layout>;
}
