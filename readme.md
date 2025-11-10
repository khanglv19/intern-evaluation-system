# 🎓 Hệ thống đánh giá nhân viên học việc - VTOS

Một ứng dụng web hiện đại để quản lý và đánh giá nhân viên học việc, được xây dựng với React + Vite + Tailwind CSS.

## ✨ Tính năng chính

- 📊 **Dashboard thống kê**: Hiển thị tổng quan về nhân viên học việc
- 👥 **Quản lý nhân viên**: Thêm, sửa, xóa thông tin nhân viên
- ⭐ **Đánh giá chi tiết**: 6 tiêu chí đánh giá với thang điểm 0-5
- 🔍 **Tìm kiếm & Lọc**: Tìm kiếm theo tên/mã, lọc theo phòng ban và trạng thái
- 📈 **Tính toán tự động**: Điểm trung bình và trạng thái được cập nhật tự động
- 🎨 **Giao diện đẹp mắt**: Modern UI với gradient, shadows và animations

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js >= 16.0.0
- npm hoặc yarn

### Các bước cài đặt

1. **Tạo thư mục dự án và copy các file**
```bash
mkdir intern-evaluation-system
cd intern-evaluation-system
```

2. **Tạo cấu trúc thư mục**
```bash
mkdir -p src
```

3. **Copy các file vào đúng vị trí:**
   - `package.json` → thư mục gốc
   - `vite.config.js` → thư mục gốc
   - `tailwind.config.js` → thư mục gốc
   - `postcss.config.js` → thư mục gốc
   - `index.html` → thư mục gốc
   - `src/main.jsx` → thư mục src
   - `src/App.jsx` → thư mục src
   - `src/index.css` → thư mục src

4. **Cài đặt dependencies**
```bash
npm install
```

5. **Chạy ứng dụng**
```bash
npm run dev
```

6. **Mở trình duyệt**
```
http://localhost:3000
```

## 📁 Cấu trúc thư mục

```
intern-evaluation-system/
├── src/
│   ├── App.jsx           # Component chính
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles với Tailwind
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
└── README.md            # Tài liệu hướng dẫn
```

## 🎯 Hướng dẫn sử dụng

### 1. Thêm nhân viên mới
- Click nút **"Thêm mới"** ở góc trên bên phải
- Điền đầy đủ thông tin trong form
- Click **"Lưu"** để hoàn tất

### 2. Đánh giá nhân viên
- Click icon **👁️ (mắt)** ở cột "Thao tác"
- Sử dụng thanh trượt để đánh giá 6 tiêu chí
- Hệ thống tự động tính điểm trung bình
- Click **"Lưu đánh giá"**

### 3. Chỉnh sửa thông tin
- Click icon **✏️ (sửa)** ở cột "Thao tác"
- Cập nhật thông tin cần thiết
- Click **"Lưu"**

### 4. Xóa nhân viên
- Click icon **🗑️ (thùng rác)** ở cột "Thao tác"
- Xác nhận trong dialog
- Nhân viên sẽ được xóa khỏi danh sách

### 5. Tìm kiếm và lọc
- Sử dụng ô tìm kiếm để tìm theo tên hoặc mã nhân viên
- Chọn phòng ban từ dropdown để lọc
- Chọn trạng thái để xem các nhân viên cụ thể

## 🎨 Tùy chỉnh

### Thay đổi màu sắc
Chỉnh sửa file `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      // Thêm màu sắc tùy chỉnh
    }
  }
}
```

### Thêm phòng ban mới
Chỉnh sửa mảng `departments` trong `src/App.jsx`:
```javascript
const departments = [
  'Phòng Kinh Doanh',
  'Phòng Kỹ Thuật',
  'Phòng của bạn' // Thêm ở đây
];
```

### Thêm tiêu chí đánh giá
Chỉnh sửa mảng `ratingCategories` trong `src/App.jsx`:
```javascript
const ratingCategories = [
  { key: 'specialized', label: 'Kỹ năng chuyên môn' },
  { key: 'newCriteria', label: 'Tiêu chí mới' } // Thêm ở đây
];
```

## 🛠️ Công nghệ sử dụng

- **React 18** - UI Library
- **Vite** - Build tool siêu nhanh
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon set
- **JavaScript ES6+** - Modern JavaScript

## 📦 Build cho production

```bash
npm run build
```

File build sẽ được tạo trong thư mục `dist/`

## 🚀 Deploy

Bạn có thể deploy lên:
- **Vercel**: `vercel deploy`
- **Netlify**: Kéo thả thư mục `dist`
- **GitHub Pages**: Sử dụng GitHub Actions

## 💡 Mẹo và Tricks

1. **Lưu trữ dữ liệu**: Hiện tại dữ liệu chỉ lưu trong memory. Để lưu trữ lâu dài, bạn có thể:
   - Sử dụng `localStorage`
   - Kết nối với API backend
   - Sử dụng Firebase/Supabase

2. **Xuất báo cáo**: Nút "Xuất báo cáo" có thể được tích hợp với:
   - Export to Excel (sử dụng `xlsx` library)
   - Export to PDF (sử dụng `jspdf` library)
   - Send to email API

3. **Responsive**: Ứng dụng đã được tối ưu cho mobile, tablet và desktop

## 📝 Changelog

### Version 1.0.0 (2024)
- ✅ Khởi tạo dự án
- ✅ Hoàn thiện CRUD operations
- ✅ Tính năng đánh giá nhân viên
- ✅ Tìm kiếm và lọc
- ✅ Thống kê dashboard
- ✅ Responsive design

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Hãy tạo pull request hoặc mở issue.

## 📄 License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.

## 📞 Liên hệ

Nếu có bất kỳ câu hỏi nào, vui lòng liên hệ qua:
- Email: your-email@example.com
- GitHub: @your-username

---

**Made with ❤️ using Claude AI + React + Tailwind CSS**
