import { LoginResponseModel } from "./../../models/responses/AuthResponses/LoginResponseModel";
import axios, { AxiosError } from "axios";
import { AuthLoginRequest } from "../../models/requests/auth/AuthLoginRequest";
import { CreateStudentRequest } from "../../models/requests/StudentRequests";
import { TokenModel } from "../../models/responses/AuthResponses/TokenModel";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInterceptors";
import { baseUrl } from "../../env/env";

class AuthService {
  public async login(data: AuthLoginRequest): Promise<TokenModel | null> {
    try {
      const response = await axios.post<LoginResponseModel>(
        `${baseUrl}/Auth/StudentLogin`,
        data
      );
      const loginResponse = response?.data;

      if (loginResponse && loginResponse.accessToken?.token) {
        localStorage.setItem("RefreshToken", loginResponse.refreshToken);
        localStorage.setItem("Token", loginResponse.accessToken.token);

        return loginResponse.accessToken;
      } else {
        return null;
      }
    } catch (error: any) {
      toast.error(
        error.response.data.detail
      );
      return null;
    }
  }

  async register(data: CreateStudentRequest) {
    try {
      await axios.post(`${baseUrl}/Students`, data);
    } catch (error: any) {
      toast.error(
        error.response.data.detail
      );
    }
  }

  async changePassword(data: any) {
    try {
      await axiosInstance.put(
        `${baseUrl}/Students/forPassword`,
        data
      );
    } catch (error: any) {
      toast.error(
        error.response.data.detail
      );
    }
  }
}

export default new AuthService();
