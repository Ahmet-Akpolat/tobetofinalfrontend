import { LoginResponseModel } from './../../models/responses/AuthResponses/LoginResponseModel';
import axios, { AxiosResponse } from "axios";
import { AuthLoginRequest } from "../../models/requests/auth/AuthLoginRequest";
import { CreateStudentRequest } from "../../models/requests/StudentRequests";



class AuthService {
	api_url: string = "";
	api_type: string = "";
	
	public async login(data: AuthLoginRequest): Promise<LoginResponseModel | null> {
        try {
            const response = await axios.post<LoginResponseModel>("http://localhost:60805/api/Auth/Login", data);
            const loginResponse = response.data;

            if (loginResponse && loginResponse.accessToken?.token) {
                return loginResponse;
            } else {
                // Token yoksa veya yanıt beklenen formatta değilse
                return null;
            }
        } catch (error) {
            console.error(error);
            // Hata durumunda null döndür veya uygun bir hata yönetimi yap
            return null;
        }
    }

	async register(data:CreateStudentRequest) {
		await axios.post("http://localhost:60805/api/Students", data)
	}
}

export default AuthService;