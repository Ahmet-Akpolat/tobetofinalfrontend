import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "../../env/env";
import { CreateStudentRequest } from "../../models/requests/StudentRequests";
import { AuthLoginRequest } from "../../models/requests/auth/AuthLoginRequest";
import { TokenModel } from "../../models/responses/AuthResponses/TokenModel";
import { store } from "../../store/configureStore";
import axiosInstance from "../../utils/axiosInterceptors";
import ExceptionService from "../../utils/exceptionService";
import { Logout } from "../../utils/logout";
import { LoginResponseModel } from "./../../models/responses/AuthResponses/LoginResponseModel";

class AuthService {
  public async login(data: AuthLoginRequest): Promise<TokenModel | null> {
    try {
      const response = await axios.post<LoginResponseModel>(
        `https://tobeto.azurewebsites.net/api/Auth/StudentLogin`,
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
      toast.error(ExceptionService.errorSelector(error.response.data));
      return null;
    }
  }

  async register(data: CreateStudentRequest) {
    try {
      await axios.post(`${baseUrl}/Students`, data);
    } catch (error: any) {
      toast.error(ExceptionService.errorSelector(error.response.data));
    }
  }

  async changePassword(data: any) {
    try {
      await axiosInstance.put(`/Students/forPassword`, data);
      Logout(store.dispatch);
    } catch (error: any) {
      toast.error(ExceptionService.errorSelector(error.response.data));
    }
  }

  async refreshToken() {
    var refreshTokenData = localStorage.getItem("RefreshToken");
    await axiosInstance
      .get(`${baseUrl}/Auth/RefreshForValue?refreshToken=` + refreshTokenData)
      .then((r: any) => {
        localStorage.setItem("RefreshToken", r.data.refreshTokenValue);
        localStorage.setItem("Token", r.data.accessToken.token);
      });
  }
}

export default new AuthService();
