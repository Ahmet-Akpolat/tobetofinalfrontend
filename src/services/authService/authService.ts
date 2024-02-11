import { LoginResponseModel } from "./../../models/responses/AuthResponses/LoginResponseModel";
import axios, { AxiosError } from "axios";
import { AuthLoginRequest } from "../../models/requests/auth/AuthLoginRequest";
import { CreateStudentRequest } from "../../models/requests/StudentRequests";
import { TokenModel } from "../../models/responses/AuthResponses/TokenModel";
import { toast } from "react-toastify";
import ExceptionService from "../../utils/exceptionService";
import exceptionService from "../../utils/exceptionService";
import axiosInstance from "../../utils/axiosInterceptors";

class AuthService {
  public async login(data: AuthLoginRequest): Promise<TokenModel | null> {
    try {
      const response = await axios.post<LoginResponseModel>(
        "http://localhost:5278/api/Auth/StudentLogin",
        data
      );
      const loginResponse = response.data;

      if (loginResponse && loginResponse.accessToken?.token) {
        return loginResponse.accessToken;
      } else {
        return null;
      }
    } catch (error: any) {
      toast.error(
        exceptionService.errorSelector(JSON.stringify(error.response.data))
      );
      return null;
    }
  }

  async register(data: CreateStudentRequest) {
    try {
      await axios.post("http://localhost:5278/api/Students", data);
    } catch (error: any) {
      toast.error(
        exceptionService.errorSelector(JSON.stringify(error.response.data))
      );
    }
  }

  async changePassword(data: any) {
    try {
      await axiosInstance.put(
        "http://localhost:5278/api/Students/forPassword",
        data
      );
    } catch (error: any) {
      toast.error(
        exceptionService.errorSelector(JSON.stringify(error.response.data))
      );
    }
  }
}

export default new AuthService();
