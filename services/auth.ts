import { api } from "./api"
import { LoginProps, LoginResponse } from "./types"

export const AuthService = {
  login: async (props: LoginProps): Promise<LoginResponse> => {
    try {
      // trocar para o endpoint correto
      const response = await api.post('/UserCustomerAuthentication/CheckCredentials', props)
      
      return {
        success: true,
        message: 'Login realizado com sucesso',
        data: response.data,
      } 
    } catch (error) {
      return {
        success: false,
        message: 'Erro ao fazer login',
        data: null
      }
    }
  }
}