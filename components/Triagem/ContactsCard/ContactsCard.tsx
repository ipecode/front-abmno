import { LinkButton } from "@/components/LinkButton/LinkButton";
import { Icon } from "@/components/ui/input";
import { RiUser6Line } from "@remixicon/react";
import { ContactsCardProps } from "./ContactsCardProps";

export function ContactsCard({ name, familiarity, phone, onRemove }: ContactsCardProps) {
  return (
    <div className="border-[1px] border-[#E2E4E9] rounded-2xl p-4 flex justify-between items-center">
      <div className="flex">
        <Icon className="text-[#525866] border-[1px] border-bg-soft-200 h-10 w-10 p-2 rounded-full" as={RiUser6Line} />
        <p className="text-label-sm text-[#0A0D14] pl-3">{name} <br></br>
          <span className="text-label-xs text-text-sub-600 font-normal">{familiarity} | {phone}</span>
        </p>
      </div>
      <LinkButton onClick={onRemove} className="text-label-xs" text="Remover" />
    </div>
  )
}