import { useRouter } from "next/navigation";

const STORAGE_KEY = 'triagemFormData';

const getStoredFormData = () => {
  const data = sessionStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : {};
}

const saveFormData = (data: Record<string, string>) => {
  const storedData = getStoredFormData();
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ ...storedData, ...data }));
}

export function usePageFormNavigation() {
  const router = useRouter();

  const goNextPage = ({ data, path }: { data: Record<string, string>; path: string }) => {
    saveFormData(data);
    router.push(path);
  }

  return { goNextPage, getStoredFormData };
}
