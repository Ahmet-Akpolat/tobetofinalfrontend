import axiosInstance from '../utilities/axiosInterceptors';
import { StudentResponse } from './../models/responses/StudentResponses';
 
class StudentService {
  async getStudent(id: string): Promise<StudentResponse> {
    try {
      const response = await axiosInstance.get<StudentResponse>(`Students/${id}`);
      return response.data;
    } catch (error) {
      console.error('API çağrısı sırasında bir hata oluştu:', error);
      throw error; // Hata bilgisini dışarı fırlat
    }
  }
}

export default StudentService;
