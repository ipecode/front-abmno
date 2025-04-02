import { ReactNode } from "react";
import { Sidebar } from "../Sidebar/Sidebar";

type LayoutProps = {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="pt-16 pl-16 flex gap-16">
      <Sidebar />
      {children}
    </div>
  )
}