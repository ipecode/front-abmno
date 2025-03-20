const API_URL = "http://localhost:5000/auth";  
// mudar pra API backend

export const login = async (id: string, email: string, password: string) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, email, password }),
  });

  if (!res.ok) throw new Error("Falha no login");
  return res.json();
};

