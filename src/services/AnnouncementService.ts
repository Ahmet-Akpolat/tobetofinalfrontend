import axiosInstance from '../utilities/axiosInterceptors';
 
class AnnouncementService {
  async getAnnouncement(id: string) {
    try {
      const response = await axiosInstance.get(`StudentAnnouncements?PageIndex=0&PageSize=999`);
      const studentAnnouncement = response.data.items.filter((item:any) => item.studentId === id);
      console.log(studentAnnouncement);
      return studentAnnouncement;
    } catch (error) {
      console.error('API çağrısı sırasında bir hata oluştu:', error);
      throw error; // Hata bilgisini dışarı fırlat
    }
  }
}

export default AnnouncementService;