import axiosInstance from '../utilities/axiosInterceptors';
 
class AppealService {
  async getAppeal(id: string) {
    try {
      const response = await axiosInstance.get(`StudentAppeals?PageIndex=0&PageSize=999`);
      const studentAppeal = response.data.items.filter((item:any) => item.studentId === id);
      console.log(studentAppeal);
      return studentAppeal;
    } catch (error) {
      console.error('API çağrısı sırasında bir hata oluştu:', error);
      throw error; // Hata bilgisini dışarı fırlat
    }
  }
}

export default AppealService;
