import axiosInstance from '../utilities/axiosInterceptors';
 
class AppealService {
  async getAppeal() {
    try {
      const response = await axiosInstance.get(`StudentAppeals?PageIndex=0&PageSize=999`);
      return response.data.items;
    } catch (error) {
      console.error('API çağrısı sırasında bir hata oluştu:', error);
      throw error; // Hata bilgisini dışarı fırlat
    }
  }
}

export default AppealService;
