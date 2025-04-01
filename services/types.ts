export type signInDataInformation = {
  token: string;
    user: {
      id: string;
      name: string;
      email: string;
      role?: string;
      createdAt?: string;
    }
}

export type LoginResponse = {
  success: boolean;
  message?: string;
  data: signInDataInformation | null}

export type LoginProps = {
    email: string;
    password: string;
}