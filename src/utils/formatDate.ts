export const formatDate = (dateString:any) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
  
    // Ayların isimlerini tutan bir array
    const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    const month = months[date.getMonth()]; // getMonth() 0'dan başlar
    
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    return `${day} ${month} ${year} ${hours}:${minutes}`;
  };