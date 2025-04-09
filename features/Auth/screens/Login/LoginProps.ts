export interface LoginProps {
  success: boolean;
  message?: string;
}

export interface LoginResponse {
  onLoginSuccess?: () => void;
}