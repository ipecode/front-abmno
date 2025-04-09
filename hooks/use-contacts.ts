import { useEffect, useState } from "react"

export interface Contact {
  id: number,
  name: string,
  familiarity: string,
  phone: string
}

export function useContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const stored = sessionStorage.getItem('triagemFormContacts');

    if (stored) setContacts(JSON.parse(stored));
  }, []);

  const save = (list: Contact[]) => {
    sessionStorage.setItem('triagemFormContacts', JSON.stringify(list));
    setContacts(list);
  }

  const add = (c: Contact) => save([...contacts, c]);
  const remove = (id: number) => save(contacts.filter(c => c.id !== id));

  return { contacts, add, remove };
}