import axios from 'axios';
import axiosInstance from '../utilities/axiosInterceptors';
 
class AppealService {
  async getAppeal(id: string) {
    try {
      const response = await axiosInstance.get(`StudentAppeals?PageIndex=0&PageSize=15`);
      if (response.data.items.studentId == id){
        return response.data.items
      }
      else{
        return null
      }
    } catch (error) {
      console.error('API çağrısı sırasında bir hata oluştu:', error);
      throw error; // Hata bilgisini dışarı fırlat
    }
  }
}

export default AppealService;
