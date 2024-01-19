import axiosInstance from '../utilities/axiosInterceptors';
 
class AnnouncementService {
  async getAnnouncement() {
    try {
      const response = await axiosInstance.get(`StudentAnnouncements?PageIndex=0&PageSize=999`);
      return response.data.items;
    } catch (error) {
      console.error('API çağrısı sırasında bir hata oluştu:', error);
      throw error; // Hata bilgisini dışarı fırlat
    }
  }
}

export default AnnouncementService;