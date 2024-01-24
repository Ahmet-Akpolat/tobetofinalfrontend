import { LoginResponseModel } from './../../models/responses/AuthResponses/LoginResponseModel';
import axios from "axios";
import { AuthLoginRequest } from "../../models/requests/auth/AuthLoginRequest";
import { CreateStudentRequest } from "../../models/requests/StudentRequests";
import { baseURL } from '../../environment/environment';
import { TokenModel } from '../../models/responses/AuthResponses/TokenModel';


class AuthService {
    
	public async login(data: AuthLoginRequest): Promise<TokenModel | null> {
        try {
            const response = await axios.post<LoginResponseModel>( baseURL + "Auth/StudentLogin", data);
            const loginResponse = response.data;

            if (loginResponse && loginResponse.accessToken?.token) {
                return loginResponse.accessToken;
            } else {
                // Token yoksa veya yanıt beklenen formatta değilse
                return null;
            }
        } catch (error) {
            console.error(error);
            // Hata durumunda null döndür
            return null;
        }
    }

	async register(data:CreateStudentRequest) {
		await axios.post(baseURL + "Auth/Register", data)
	}
}

export default new AuthService();