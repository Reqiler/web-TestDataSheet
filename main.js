const apiUrl = 'https://www.incomeparttimes.com';

// ทำ HTTP request ด้วย fetch ในลูป
function makeRequest() {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text(); // หรือ response.json() ถ้ามีข้อมูล JSON
    })
    .then(data => {
      console.log('API response:', data);
      // เรียกฟังก์ชันนี้อีกครั้งหลังจากทำ HTTP request เสร็จ
      makeRequest();
    })
    .catch(error => {
      console.error('Error:', error);
      // ลองทำ HTTP request อีกหลังจากเกิดข้อผิดพลาด
      makeRequest();
      
    });
}

// เริ่มต้นการทำ HTTP request เรื่อย ๆ
makeRequest();