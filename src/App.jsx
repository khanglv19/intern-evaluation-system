// import React, { useState } from "react";
// import {
//   User,
//   Clock,
//   Award,
//   TrendingUp,
//   Eye,
//   Plus,
//   Trash2,
//   X,
//   Save,
//   Search,
//   Download,
// } from "lucide-react";

// const App = () => {
//   const [interns, setInterns] = useState([
//     {
//       id: "NV001",
//       name: "Trần Đào Thái An",
//       avatar: "👨‍💼",
//       department: "Phòng Triển Khai",
//       position: "Nhân viên triển khai",
//       mentor: "Mr. Quốc Phong",
//       startDate: "06/10/2025",
//       endDate: "06/12/2025",
//       score: 8.4,
//       status: "studying",
//       ratings: {
//         specialized: 5,
//         attitude: 5,
//         learning: 5,
//         communication: 5,
//         time: 5,
//         teamwork: 5,
//       },
//     },
//     {
//       id: "NV002",
//       name: "Lương Vĩnh Khang",
//       avatar: "👩‍💼",
//       department: "Phòng Triển Khai",
//       position: "Nhân viên triển khai",
//       mentor: "Mr. Quốc Phong",
//       startDate: "06/10/2025",
//       endDate: "06/12/2025",
//       score: 9.0,
//       status: "studying",
//       ratings: {
//         specialized: 5,
//         attitude: 5,
//         learning: 5,
//         communication: 5,
//         time: 5,
//         teamwork: 5,
//       },
//     },
//     {
//       id: "NV003",
//       name: "Trần Quang Vinh",
//       avatar: "👨‍🎓",
//       department: "Phòng Triển Khai",
//       position: "Nhân viên triển khai",
//       mentor: "Mr. Duy Linh",
//       startDate: "06/10/2025",
//       endDate: "06/12/2025",
//       score: 8.5,
//       status: "completed",
//       ratings: {
//         specialized: 5,
//         attitude: 4,
//         learning: 5,
//         communication: 5,
//         time: 5,
//         teamwork: 4,
//       },
//     },
//     {
//       id: "NV004",
//       name: "Trần Hoàng Anh Tú",
//       avatar: "👨‍💻",
//       department: "Phòng Triển Khai",
//       position: "Nhân viên triển khai",
//       mentor: "Mr. Duy Linh",
//       startDate: "06/10/2025",
//       endDate: "06/12/2025",
//       score: 6.3,
//       status: "incomplete",
//       ratings: {
//         specialized: 3,
//         attitude: 3,
//         learning: 3,
//         communication: 4,
//         time: 3,
//         teamwork: 3,
//       },
//     },
//     {
//       id: "NV005",
//       name: "Nguyễn Hoàng Duy",
//       avatar: "👩‍💼",
//       department: "Phòng Triển Khai",
//       position: "Nhân viên triển khai",
//       mentor: "Mr. Duy Linh",
//       startDate: "13/10/2025",
//       endDate: "13/12/2025",
//       score: 0,
//       status: "incomplete",
//       ratings: {
//         specialized: 0,
//         attitude: 0,
//         learning: 0,
//         communication: 0,
//         time: 0,
//         teamwork: 0,
//       },
//     },
//   ]);

//   const [showModal, setShowModal] = useState(false);
//   const [showRatingModal, setShowRatingModal] = useState(false);
//   const [selectedIntern, setSelectedIntern] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterDepartment, setFilterDepartment] = useState("all");
//   const [filterStatus, setFilterStatus] = useState("all");

//   const [formData, setFormData] = useState({
//     id: "",
//     name: "",
//     department: "",
//     position: "",
//     mentor: "",
//     startDate: "",
//     endDate: "",
//     avatar: "👤",
//   });

//   const departments = [
//     "Phòng Kỹ Thuật",
//     "Phòng Nhân Sự",
//     "Phòng Kế Toán",
//     "Phòng Triển Khai",
//     "Phòng Nghiệp Vụ",
//     "Phòng Phát Triển Phần Mềm",
//   ];
//   const avatars = ["👨‍💼", "👩‍💼", "👨‍💻", "👩‍💻", "👨‍🎓", "👩‍🎓", "👨‍🔧", "👩‍🔧"];

//   const ratingCategories = [
//     { key: "specialized", label: "Kỹ năng chuyên môn" },
//     { key: "attitude", label: "Thái độ làm việc" },
//     { key: "learning", label: "Khả năng học hỏi" },
//     { key: "communication", label: "Kỹ năng giao tiếp" },
//     { key: "time", label: "Tinh thần giờ" },
//     { key: "teamwork", label: "Làm việc nhóm" },
//   ];

//   const calculateStats = () => {
//     const total = interns.length;
//     const studying = interns.filter((i) => i.status === "studying").length;
//     const avgScore = interns.reduce((sum, i) => sum + i.score, 0) / total;
//     const passRate = (interns.filter((i) => i.score >= 7).length / total) * 100;
//     return {
//       total,
//       studying,
//       avgScore: avgScore.toFixed(1),
//       passRate: passRate.toFixed(1),
//     };
//   };

//   const stats = calculateStats();

//   const handleAdd = () => {
//     setFormData({
//       id: `NV${String(interns.length + 1).padStart(3, "0")}`,
//       name: "",
//       department: "",
//       position: "",
//       mentor: "",
//       startDate: "",
//       endDate: "",
//       avatar: "👤",
//     });
//     setIsEditing(false);
//     setShowModal(true);
//   };

//   const handleEdit = (intern) => {
//     setFormData(intern);
//     setIsEditing(true);
//     setShowModal(true);
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Bạn có chắc chắn muốn xóa nhân viên này?")) {
//       setInterns(interns.filter((i) => i.id !== id));
//     }
//   };

//   const handleSave = () => {
//     if (!formData.name || !formData.department || !formData.position) {
//       alert("Vui lòng điền đầy đủ thông tin!");
//       return;
//     }

//     if (isEditing) {
//       setInterns(interns.map((i) => (i.id === formData.id ? formData : i)));
//     } else {
//       setInterns([
//         ...interns,
//         {
//           ...formData,
//           score: 0,
//           status: "studying",
//           ratings: {
//             specialized: 0,
//             attitude: 0,
//             learning: 0,
//             communication: 0,
//             time: 0,
//             teamwork: 0,
//           },
//         },
//       ]);
//     }
//     setShowModal(false);
//   };

//   const handleRating = (intern) => {
//     setSelectedIntern(intern);
//     setShowRatingModal(true);
//   };

//   const handleRatingChange = (category, value) => {
//     setSelectedIntern({
//       ...selectedIntern,
//       ratings: {
//         ...selectedIntern.ratings,
//         [category]: value,
//       },
//     });
//   };

//   const handleSaveRating = () => {
//     const avgRating =
//       Object.values(selectedIntern.ratings).reduce((a, b) => a + b, 0) / 6;
//     const updatedIntern = {
//       ...selectedIntern,
//       score: parseFloat((avgRating * 2).toFixed(1)),
//       status:
//         avgRating >= 3.5
//           ? avgRating >= 4.5
//             ? "completed"
//             : "studying"
//           : "incomplete",
//     };
//     setInterns(
//       interns.map((i) => (i.id === updatedIntern.id ? updatedIntern : i))
//     );
//     setShowRatingModal(false);
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "studying":
//         return "bg-blue-100 text-blue-700";
//       case "completed":
//         return "bg-green-100 text-green-700";
//       case "incomplete":
//         return "bg-red-100 text-red-700";
//       default:
//         return "bg-gray-100 text-gray-700";
//     }
//   };

//   const getStatusText = (status) => {
//     switch (status) {
//       case "studying":
//         return "Đang học việc";
//       case "completed":
//         return "Đã hoàn thành";
//       case "incomplete":
//         return "Chưa đạt";
//       default:
//         return "Không xác định";
//     }
//   };

//   const filteredInterns = interns.filter((intern) => {
//     const matchSearch =
//       intern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       intern.id.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchDept =
//       filterDepartment === "all" || intern.department === filterDepartment;
//     const matchStatus =
//       filterStatus === "all" || intern.status === filterStatus;
//     return matchSearch && matchDept && matchStatus;
//   });

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 shadow-lg">
//         <div className="flex items-center justify-between max-w-7xl mx-auto">
//           <div className="flex items-center gap-3">
//             <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
//               <Award className="w-6 h-6" />
//             </div>
//             <div>
//               <h1 className="text-2xl font-bold">
//                 HỆ THỐNG ĐÁNH GIÁ NHÂN VIÊN HỌC VIỆC
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto p-6">
//         {/* Statistics Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//           <div className="bg-white rounded-xl shadow-sm border-l-4 border-blue-500 p-5 hover:shadow-md transition-shadow">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600 text-sm mb-1">
//                   Tổng nhân viên học việc
//                 </p>
//                 <p className="text-3xl font-bold text-blue-600">
//                   {stats.total}
//                 </p>
//               </div>
//               <div className="bg-blue-100 p-3 rounded-lg">
//                 <User className="w-6 h-6 text-blue-600" />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-sm border-l-4 border-green-500 p-5 hover:shadow-md transition-shadow">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600 text-sm mb-1">Đang học việc</p>
//                 <p className="text-3xl font-bold text-green-600">
//                   {stats.studying}
//                 </p>
//               </div>
//               <div className="bg-green-100 p-3 rounded-lg">
//                 <Clock className="w-6 h-6 text-green-600" />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-sm border-l-4 border-purple-500 p-5 hover:shadow-md transition-shadow">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600 text-sm mb-1">Điểm trung bình</p>
//                 <p className="text-3xl font-bold text-purple-600">
//                   {stats.avgScore}
//                 </p>
//               </div>
//               <div className="bg-purple-100 p-3 rounded-lg">
//                 <Award className="w-6 h-6 text-purple-600" />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-sm border-l-4 border-orange-500 p-5 hover:shadow-md transition-shadow">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600 text-sm mb-1">Tỷ lệ đạt</p>
//                 <p className="text-3xl font-bold text-orange-600">
//                   {stats.passRate}%
//                 </p>
//               </div>
//               <div className="bg-orange-100 p-3 rounded-lg">
//                 <TrendingUp className="w-6 h-6 text-orange-600" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Search and Filter Bar */}
//         <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
//           <div className="flex flex-wrap gap-3 items-center justify-between">
//             <div className="flex-1 min-w-[250px]">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="text"
//                   placeholder="Tìm kiếm theo tên hoặc mã nhân viên..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>
//             </div>

//             <select
//               value={filterDepartment}
//               onChange={(e) => setFilterDepartment(e.target.value)}
//               className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             >
//               <option value="all">Tất cả phòng ban</option>
//               {departments.map((dept) => (
//                 <option key={dept} value={dept}>
//                   {dept}
//                 </option>
//               ))}
//             </select>

//             <select
//               value={filterStatus}
//               onChange={(e) => setFilterStatus(e.target.value)}
//               className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             >
//               <option value="all">Tất cả trạng thái</option>
//               <option value="studying">Đang học việc</option>
//               <option value="completed">Đã hoàn thành</option>
//               <option value="incomplete">Chưa đạt</option>
//             </select>

//             <button
//               onClick={handleAdd}
//               className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
//             >
//               <Plus className="w-5 h-5" />
//               Thêm mới
//             </button>

//             <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
//               <Download className="w-5 h-5" />
//               Xuất báo cáo
//             </button>
//           </div>
//         </div>

//         {/* Interns Table */}
//         <div className="bg-white rounded-xl shadow-sm overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
//                 <tr>
//                   <th className="px-4 py-3 text-left text-sm font-semibold">
//                     Mã NV
//                   </th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold">
//                     Họ tên
//                   </th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold">
//                     Phòng ban
//                   </th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold">
//                     Vị trí
//                   </th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold">
//                     Người hướng dẫn
//                   </th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold">
//                     Thời gian
//                   </th>
//                   <th className="px-4 py-3 text-center text-sm font-semibold">
//                     Điểm TB
//                   </th>
//                   <th className="px-4 py-3 text-center text-sm font-semibold">
//                     Trạng thái
//                   </th>
//                   <th className="px-4 py-3 text-center text-sm font-semibold">
//                     Thao tác
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {filteredInterns.map((intern) => (
//                   <tr
//                     key={intern.id}
//                     className="hover:bg-blue-50 transition-colors"
//                   >
//                     <td className="px-4 py-3 text-sm font-medium text-gray-900">
//                       {intern.id}
//                     </td>
//                     <td className="px-4 py-3">
//                       <div className="flex items-center gap-3">
//                         <span className="text-2xl">{intern.avatar}</span>
//                         <span className="font-medium text-gray-900">
//                           {intern.name}
//                         </span>
//                       </div>
//                     </td>
//                     <td className="px-4 py-3 text-sm text-gray-700">
//                       {intern.department}
//                     </td>
//                     <td className="px-4 py-3 text-sm text-gray-700">
//                       {intern.position}
//                     </td>
//                     <td className="px-4 py-3 text-sm text-gray-700">
//                       {intern.mentor}
//                     </td>
//                     <td className="px-4 py-3 text-sm text-gray-600">
//                       {intern.startDate}
//                       <br />→ {intern.endDate}
//                     </td>
//                     <td className="px-4 py-3 text-center">
//                       <span
//                         className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
//                           intern.score >= 8
//                             ? "bg-green-100 text-green-700"
//                             : intern.score >= 6.5
//                             ? "bg-blue-100 text-blue-700"
//                             : intern.score > 0
//                             ? "bg-orange-100 text-orange-700"
//                             : "bg-gray-100 text-gray-500"
//                         }`}
//                       >
//                         {intern.score > 0
//                           ? `${intern.score} /10`
//                           : "Chưa đánh giá"}
//                       </span>
//                     </td>
//                     <td className="px-4 py-3 text-center">
//                       <span
//                         className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
//                           intern.status
//                         )}`}
//                       >
//                         {getStatusText(intern.status)}
//                       </span>
//                     </td>
//                     <td className="px-4 py-3">
//                       <div className="flex items-center justify-center gap-2">
//                         <button
//                           onClick={() => handleRating(intern)}
//                           className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//                           title="Đánh giá"
//                         >
//                           <Eye className="w-5 h-5" />
//                         </button>
//                         <button
//                           onClick={() => handleEdit(intern)}
//                           className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
//                           title="Sửa"
//                         >
//                           <Plus className="w-5 h-5" />
//                         </button>
//                         <button
//                           onClick={() => handleDelete(intern.id)}
//                           className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//                           title="Xóa"
//                         >
//                           <Trash2 className="w-5 h-5" />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="bg-gray-50 px-6 py-3 text-sm text-gray-600 border-t">
//             Hiển thị {filteredInterns.length} / {interns.length} nhân viên
//           </div>
//         </div>
//       </div>

//       {/* Add/Edit Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 flex items-center justify-between rounded-t-2xl">
//               <h2 className="text-xl font-bold">
//                 {isEditing
//                   ? "Chỉnh sửa nhân viên học việc"
//                   : "Thêm nhân viên học việc mới"}
//               </h2>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="hover:bg-white/20 p-1 rounded transition-colors"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             <div className="p-6 space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Mã nhân viên
//                   </label>
//                   <input
//                     type="text"
//                     value={formData.id}
//                     disabled
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Avatar
//                   </label>
//                   <select
//                     value={formData.avatar}
//                     onChange={(e) =>
//                       setFormData({ ...formData, avatar: e.target.value })
//                     }
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                   >
//                     {avatars.map((av) => (
//                       <option key={av} value={av}>
//                         {av}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Họ và tên *
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                   placeholder="Nhập họ tên"
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Phòng ban *
//                   </label>
//                   <select
//                     value={formData.department}
//                     onChange={(e) =>
//                       setFormData({ ...formData, department: e.target.value })
//                     }
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                   >
//                     <option value="">Chọn phòng ban</option>
//                     {departments.map((dept) => (
//                       <option key={dept} value={dept}>
//                         {dept}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Vị trí *
//                   </label>
//                   <input
//                     type="text"
//                     value={formData.position}
//                     onChange={(e) =>
//                       setFormData({ ...formData, position: e.target.value })
//                     }
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                     placeholder="Nhập vị trí"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Người hướng dẫn
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.mentor}
//                   onChange={(e) =>
//                     setFormData({ ...formData, mentor: e.target.value })
//                   }
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                   placeholder="Nhập tên người hướng dẫn"
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Ngày bắt đầu
//                   </label>
//                   <input
//                     type="date"
//                     value={formData.startDate}
//                     onChange={(e) =>
//                       setFormData({ ...formData, startDate: e.target.value })
//                     }
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Ngày kết thúc
//                   </label>
//                   <input
//                     type="date"
//                     value={formData.endDate}
//                     onChange={(e) =>
//                       setFormData({ ...formData, endDate: e.target.value })
//                     }
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gray-50 px-6 py-4 flex gap-3 justify-end rounded-b-2xl">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors font-medium"
//               >
//                 Hủy
//               </button>
//               <button
//                 onClick={handleSave}
//                 className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
//               >
//                 <Save className="w-5 h-5" />
//                 Lưu
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Rating Modal - Responsive */}
//       {showRatingModal && selectedIntern && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50">
//           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
//             <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-t-2xl sticky top-0 z-10">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-base sm:text-xl font-bold">
//                   Đánh giá nhân viên học việc
//                 </h2>
//                 <button
//                   onClick={() => setShowRatingModal(false)}
//                   className="hover:bg-white/20 p-1 rounded transition-colors flex-shrink-0"
//                 >
//                   <X className="w-5 h-5 sm:w-6 sm:h-6" />
//                 </button>
//               </div>
//               <div className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-3">
//                 <span className="text-2xl sm:text-3xl flex-shrink-0">
//                   {selectedIntern.avatar}
//                 </span>
//                 <div className="min-w-0">
//                   <p className="font-semibold text-sm sm:text-base truncate">
//                     {selectedIntern.name}
//                   </p>
//                   <p className="text-blue-100 text-xs sm:text-sm truncate">
//                     {selectedIntern.id} - {selectedIntern.department}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
//               {ratingCategories.map((category) => (
//                 <div key={category.key} className="space-y-2 sm:space-y-3">
//                   <div className="flex items-center justify-between gap-2">
//                     <label className="text-xs sm:text-sm font-medium text-gray-700 flex-1 min-w-0">
//                       {category.label}
//                     </label>
//                     <span className="text-base sm:text-lg font-bold text-blue-600 flex-shrink-0">
//                       {selectedIntern.ratings[category.key]}/5
//                     </span>
//                   </div>
//                   <div className="relative">
//                     <input
//                       type="range"
//                       min="0"
//                       max="5"
//                       step="1"
//                       value={selectedIntern.ratings[category.key]}
//                       onChange={(e) =>
//                         handleRatingChange(
//                           category.key,
//                           parseInt(e.target.value)
//                         )
//                       }
//                       className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//                       style={{
//                         background: `linear-gradient(to right, #2563eb 0%, #2563eb ${
//                           selectedIntern.ratings[category.key] * 20
//                         }%, #e5e7eb ${
//                           selectedIntern.ratings[category.key] * 20
//                         }%, #e5e7eb 100%)`,
//                       }}
//                     />
//                     <div className="flex justify-between mt-1 text-xs text-gray-500 px-1">
//                       <span>0</span>
//                       <span className="hidden xs:inline">1</span>
//                       <span className="hidden xs:inline">2</span>
//                       <span className="hidden xs:inline">3</span>
//                       <span className="hidden xs:inline">4</span>
//                       <span>5</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4">
//                 <div className="flex items-center justify-between gap-2">
//                   <span className="text-sm sm:text-base font-semibold text-gray-700">
//                     Điểm trung bình:
//                   </span>
//                   <span className="text-xl sm:text-2xl font-bold text-blue-600">
//                     {(
//                       (Object.values(selectedIntern.ratings).reduce(
//                         (a, b) => a + b,
//                         0
//                       ) /
//                         6) *
//                       2
//                     ).toFixed(1)}
//                     /10
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 flex flex-col-reverse sm:flex-row gap-2 sm:gap-3 justify-end rounded-b-2xl sticky bottom-0">
//               <button
//                 onClick={() => setShowRatingModal(false)}
//                 className="w-full sm:w-auto px-4 sm:px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm sm:text-base"
//               >
//                 Hủy
//               </button>
//               <button
//                 onClick={handleSaveRating}
//                 className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-sm sm:text-base"
//               >
//                 <Save className="w-4 h-4 sm:w-5 sm:h-5" />
//                 Lưu đánh giá
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import {
  User,
  Clock,
  Award,
  TrendingUp,
  Eye,
  Plus,
  Trash2,
  X,
  Save,
  Search,
  Download,
} from "lucide-react";
import CustomDropdown from "./CustomDropdown";

const App = () => {
  const [interns, setInterns] = useState([
    {
      id: "NV001",
      name: "Trần Đào Thái An",
      avatar: "👨‍💼",
      department: "Phòng Triển Khai",
      position: "Nhân viên triển khai",
      mentor: "Mr. Quốc Phong",
      startDate: "06/10/2025",
      endDate: "06/12/2025",
      score: 8.4,
      status: "studying",
      ratings: {
        specialized: 5,
        attitude: 5,
        learning: 5,
        communication: 5,
        time: 5,
        teamwork: 5,
      },
    },
    {
      id: "NV002",
      name: "Lương Vĩnh Khang",
      avatar: "👩‍💼",
      department: "Phòng Triển Khai",
      position: "Nhân viên triển khai",
      mentor: "Mr. Quốc Phong",
      startDate: "06/10/2025",
      endDate: "06/12/2025",
      score: 9.0,
      status: "studying",
      ratings: {
        specialized: 5,
        attitude: 5,
        learning: 5,
        communication: 5,
        time: 5,
        teamwork: 5,
      },
    },
    {
      id: "NV003",
      name: "Trần Quang Vinh",
      avatar: "👨‍🎓",
      department: "Phòng Triển Khai",
      position: "Nhân viên triển khai",
      mentor: "Mr. Duy Linh",
      startDate: "06/10/2025",
      endDate: "06/12/2025",
      score: 8.5,
      status: "completed",
      ratings: {
        specialized: 5,
        attitude: 4,
        learning: 5,
        communication: 5,
        time: 5,
        teamwork: 4,
      },
    },
    {
      id: "NV004",
      name: "Trần Hoàng Anh Tú",
      avatar: "👨‍💻",
      department: "Phòng Triển Khai",
      position: "Nhân viên triển khai",
      mentor: "Mr. Duy Linh",
      startDate: "06/10/2025",
      endDate: "06/12/2025",
      score: 6.3,
      status: "incomplete",
      ratings: {
        specialized: 3,
        attitude: 3,
        learning: 3,
        communication: 4,
        time: 3,
        teamwork: 3,
      },
    },
    {
      id: "NV005",
      name: "Nguyễn Hoàng Duy",
      avatar: "👩‍💼",
      department: "Phòng Triển Khai",
      position: "Nhân viên triển khai",
      mentor: "Mr. Duy Linh",
      startDate: "13/10/2025",
      endDate: "13/12/2025",
      score: 0,
      status: "incomplete",
      ratings: {
        specialized: 0,
        attitude: 0,
        learning: 0,
        communication: 0,
        time: 0,
        teamwork: 0,
      },
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [selectedIntern, setSelectedIntern] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    department: "",
    position: "",
    mentor: "",
    startDate: "",
    endDate: "",
    avatar: "👤",
  });

  const departments = [
    "Phòng Kỹ Thuật",
    "Phòng Nhân Sự",
    "Phòng Kế Toán",
    "Phòng Triển Khai",
    "Phòng Nghiệp Vụ",
    "Phòng Phát Triển Phần Mềm",
  ];
  const avatars = ["👨‍💼", "👩‍💼", "👨‍💻", "👩‍💻", "👨‍🎓", "👩‍🎓", "👨‍🔧", "👩‍🔧"];

  const ratingCategories = [
    { key: "specialized", label: "Kỹ năng chuyên môn" },
    { key: "attitude", label: "Thái độ làm việc" },
    { key: "learning", label: "Khả năng học hỏi" },
    { key: "communication", label: "Kỹ năng giao tiếp" },
    { key: "time", label: "Tinh thần giờ" },
    { key: "teamwork", label: "Làm việc nhóm" },
  ];

  const calculateStats = () => {
    const total = interns.length;
    const studying = interns.filter((i) => i.status === "studying").length;
    const avgScore = interns.reduce((sum, i) => sum + i.score, 0) / total;
    const passRate = (interns.filter((i) => i.score >= 7).length / total) * 100;
    return {
      total,
      studying,
      avgScore: avgScore.toFixed(1),
      passRate: passRate.toFixed(1),
    };
  };

  const stats = calculateStats();

  const handleAdd = () => {
    setFormData({
      id: `NV${String(interns.length + 1).padStart(3, "0")}`,
      name: "",
      department: "",
      position: "",
      mentor: "",
      startDate: "",
      endDate: "",
      avatar: "👤",
    });
    setIsEditing(false);
    setShowModal(true);
  };

  const handleEdit = (intern) => {
    setFormData(intern);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa nhân viên này?")) {
      setInterns(interns.filter((i) => i.id !== id));
    }
  };

  const handleSave = () => {
    if (!formData.name || !formData.department || !formData.position) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    if (isEditing) {
      setInterns(interns.map((i) => (i.id === formData.id ? formData : i)));
    } else {
      setInterns([
        ...interns,
        {
          ...formData,
          score: 0,
          status: "studying",
          ratings: {
            specialized: 0,
            attitude: 0,
            learning: 0,
            communication: 0,
            time: 0,
            teamwork: 0,
          },
        },
      ]);
    }
    setShowModal(false);
  };

  const handleRating = (intern) => {
    setSelectedIntern(intern);
    setShowRatingModal(true);
  };

  const handleRatingChange = (category, value) => {
    setSelectedIntern({
      ...selectedIntern,
      ratings: {
        ...selectedIntern.ratings,
        [category]: value,
      },
    });
  };

  const handleSaveRating = () => {
    const avgRating =
      Object.values(selectedIntern.ratings).reduce((a, b) => a + b, 0) / 6;
    const updatedIntern = {
      ...selectedIntern,
      score: parseFloat((avgRating * 2).toFixed(1)),
      status:
        avgRating >= 3.5
          ? avgRating >= 4.5
            ? "completed"
            : "studying"
          : "incomplete",
    };
    setInterns(
      interns.map((i) => (i.id === updatedIntern.id ? updatedIntern : i))
    );
    setShowRatingModal(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "studying":
        return "bg-blue-100 text-blue-700";
      case "completed":
        return "bg-green-100 text-green-700";
      case "incomplete":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "studying":
        return "Đang học việc";
      case "completed":
        return "Đã hoàn thành";
      case "incomplete":
        return "Chưa đạt";
      default:
        return "Không xác định";
    }
  };

  const filteredInterns = interns.filter((intern) => {
    const matchSearch =
      intern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      intern.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchDept =
      filterDepartment === "all" || intern.department === filterDepartment;
    const matchStatus =
      filterStatus === "all" || intern.status === filterStatus;
    return matchSearch && matchDept && matchStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header - Rounded */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 sm:px-6 py-3 sm:py-4 shadow-lg">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="bg-white/20 p-1.5 sm:p-2 rounded-2xl backdrop-blur-sm flex-shrink-0">
              <Award className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <h1 className="text-lg sm:text-2xl font-bold truncate">
                QUẢN LÝ VÀ ĐÁNH GIÁ NHÂN VIÊN HỌC VIỆC
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-3 sm:p-6">
        {/* Statistics Cards - More Rounded */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-white rounded-3xl shadow-sm border-l-4 border-blue-500 p-3 sm:p-5 hover:shadow-lg transition-all duration-300 card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-xs sm:text-sm mb-1">
                  Tổng nhân viên học việc
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-blue-600">
                  {stats.total}
                </p>
              </div>
              <div className="bg-blue-100 p-2 sm:p-3 rounded-2xl flex-shrink-0">
                <User className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border-l-4 border-green-500 p-3 sm:p-5 hover:shadow-lg transition-all duration-300 card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-xs sm:text-sm mb-1">
                  Đang học việc
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-green-600">
                  {stats.studying}
                </p>
              </div>
              <div className="bg-green-100 p-2 sm:p-3 rounded-2xl flex-shrink-0">
                <Clock className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border-l-4 border-purple-500 p-3 sm:p-5 hover:shadow-lg transition-all duration-300 card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-xs sm:text-sm mb-1">
                  Điểm trung bình
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-purple-600">
                  {stats.avgScore}
                </p>
              </div>
              <div className="bg-purple-100 p-2 sm:p-3 rounded-2xl flex-shrink-0">
                <Award className="w-4 h-4 sm:w-6 sm:h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border-l-4 border-orange-500 p-3 sm:p-5 hover:shadow-lg transition-all duration-300 card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-xs sm:text-sm mb-1">
                  Tỷ lệ đạt
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-orange-600">
                  {stats.passRate}%
                </p>
              </div>
              <div className="bg-orange-100 p-2 sm:p-3 rounded-2xl flex-shrink-0">
                <TrendingUp className="w-4 h-4 sm:w-6 sm:h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Bar - Custom Dropdown */}
        <div className="bg-white rounded-3xl shadow-sm p-3 sm:p-4 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
            <div className="flex-1 min-w-full sm:min-w-[250px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Tìm kiếm theo tên hoặc mã nhân viên..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 text-sm sm:text-base border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
            </div>

            <CustomDropdown
              value={filterDepartment}
              onChange={setFilterDepartment}
              options={[
                { value: "all", label: "Tất cả phòng ban" },
                ...departments.map((dept) => ({ value: dept, label: dept })),
              ]}
              className="flex-1 sm:flex-initial"
            />

            <CustomDropdown
              value={filterStatus}
              onChange={setFilterStatus}
              options={[
                { value: "all", label: "Tất cả trạng thái" },
                { value: "studying", label: "Đang học việc" },
                { value: "completed", label: "Đã hoàn thành" },
                { value: "incomplete", label: "Chưa đạt" },
              ]}
              className="flex-1 sm:flex-initial"
            />

            <button
              onClick={handleAdd}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-3 sm:px-4 py-2 rounded-2xl transition-colors duration-200 ease-in-out font-medium text-sm sm:text-base shadow-md hover:shadow-lg"
            >
              <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Thêm mới</span>
              <span className="sm:hidden">Thêm</span>
            </button>

            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-3 sm:px-4 py-2 rounded-2xl transition-colors duration-200 ease-in-out text-sm sm:text-base shadow-md hover:shadow-lg">
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Xuất báo cáo</span>
              <span className="sm:hidden">Xuất</span>
            </button>
          </div>
        </div>

        {/* Interns Table - Responsive */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Mã NV
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Họ tên
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Phòng ban
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Vị trí
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Người hướng dẫn
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Thời gian
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">
                    Điểm TB
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">
                    Trạng thái
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredInterns.map((intern) => (
                  <tr
                    key={intern.id}
                    className="hover:bg-blue-50 transition-colors"
                  >
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      {intern.id}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{intern.avatar}</span>
                        <span className="font-medium text-gray-900">
                          {intern.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {intern.department}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {intern.position}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {intern.mentor}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {intern.startDate}
                      <br />→ {intern.endDate}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                          intern.score >= 8
                            ? "bg-green-100 text-green-700"
                            : intern.score >= 6.5
                            ? "bg-blue-100 text-blue-700"
                            : intern.score > 0
                            ? "bg-orange-100 text-orange-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {intern.score > 0
                          ? `${intern.score} /10`
                          : "Chưa đánh giá"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          intern.status
                        )}`}
                      >
                        {getStatusText(intern.status)}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleRating(intern)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Đánh giá"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleEdit(intern)}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="Sửa"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(intern.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Xóa"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile/Tablet Card View */}
          <div className="lg:hidden divide-y divide-gray-200">
            {filteredInterns.map((intern) => (
              <div
                key={intern.id}
                className="p-4 hover:bg-blue-50 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl flex-shrink-0">
                    {intern.avatar}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900 text-base">
                        {intern.name}
                      </h3>
                      <span className="text-xs text-gray-500 flex-shrink-0">
                        {intern.id}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                      {intern.position}
                    </p>
                    <p className="text-xs text-gray-500">{intern.department}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                  <div>
                    <span className="text-gray-500 text-xs">
                      Người hướng dẫn:
                    </span>
                    <p className="text-gray-700 font-medium">{intern.mentor}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs">Thời gian:</span>
                    <p className="text-gray-700 text-xs">
                      {intern.startDate} → {intern.endDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      intern.score >= 8
                        ? "bg-green-100 text-green-700"
                        : intern.score >= 6.5
                        ? "bg-blue-100 text-blue-700"
                        : intern.score > 0
                        ? "bg-orange-100 text-orange-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {intern.score > 0 ? `${intern.score} /10` : "Chưa đánh giá"}
                  </span>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      intern.status
                    )}`}
                  >
                    {getStatusText(intern.status)}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleRating(intern)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-sm font-medium"
                  >
                    <Eye className="w-4 h-4" />
                    Đánh giá
                  </button>
                  <button
                    onClick={() => handleEdit(intern)}
                    className="flex items-center justify-center px-3 py-2 text-green-600 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(intern.id)}
                    className="flex items-center justify-center px-3 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 px-4 sm:px-6 py-3 text-xs sm:text-sm text-gray-600 border-t">
            Hiển thị {filteredInterns.length} / {interns.length} nhân viên
          </div>
        </div>
      </div>

      {/* Add/Edit Modal - More Rounded */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto modal-content">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between rounded-t-3xl sticky top-0 z-10">
              <h2 className="text-base sm:text-xl font-bold">
                {isEditing
                  ? "Chỉnh sửa nhân viên học việc"
                  : "Thêm nhân viên học việc mới"}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="hover:bg-white/20 p-1.5 rounded-full transition-all flex-shrink-0"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mã nhân viên
                  </label>
                  <input
                    type="text"
                    value={formData.id}
                    disabled
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border-2 border-gray-200 rounded-2xl bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Avatar
                  </label>
                  <CustomDropdown
                    value={formData.avatar}
                    onChange={(value) =>
                      setFormData({ ...formData, avatar: value })
                    }
                    options={avatars.map((av) => ({ value: av, label: av }))}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Nhập họ tên"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phòng ban *
                  </label>
                  <CustomDropdown
                    value={formData.department}
                    onChange={(value) =>
                      setFormData({ ...formData, department: value })
                    }
                    options={[
                      { value: "", label: "Chọn phòng ban" },
                      ...departments.map((dept) => ({
                        value: dept,
                        label: dept,
                      })),
                    ]}
                    placeholder="Chọn phòng ban"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vị trí *
                  </label>
                  <input
                    type="text"
                    value={formData.position}
                    onChange={(e) =>
                      setFormData({ ...formData, position: e.target.value })
                    }
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Nhập vị trí"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Người hướng dẫn
                </label>
                <input
                  type="text"
                  value={formData.mentor}
                  onChange={(e) =>
                    setFormData({ ...formData, mentor: e.target.value })
                  }
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Nhập tên người hướng dẫn"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ngày bắt đầu
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) =>
                      setFormData({ ...formData, startDate: e.target.value })
                    }
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ngày kết thúc
                  </label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) =>
                      setFormData({ ...formData, endDate: e.target.value })
                    }
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 flex flex-col-reverse sm:flex-row gap-2 sm:gap-3 justify-end rounded-b-3xl sticky bottom-0">
              <button
                onClick={() => setShowModal(false)}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 border-2 border-gray-300 rounded-2xl hover:bg-gray-100 hover:border-gray-400 transition-all font-medium text-sm sm:text-base"
              >
                Hủy
              </button>
              <button
                onClick={handleSave}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl transition-all font-medium text-sm sm:text-base shadow-md hover:shadow-lg"
              >
                <Save className="w-4 h-4 sm:w-5 sm:h-5" />
                Lưu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Rating Modal - More Rounded */}
      {showRatingModal && selectedIntern && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto modal-content">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-t-3xl sticky top-0 z-10">
              <div className="flex items-center justify-between">
                <h2 className="text-base sm:text-xl font-bold">
                  Đánh giá nhân viên học việc
                </h2>
                <button
                  onClick={() => setShowRatingModal(false)}
                  className="hover:bg-white/20 p-1.5 rounded-full transition-all flex-shrink-0"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-3">
                <span className="text-2xl sm:text-3xl flex-shrink-0">
                  {selectedIntern.avatar}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-sm sm:text-base truncate">
                    {selectedIntern.name}
                  </p>
                  <p className="text-blue-100 text-xs sm:text-sm truncate">
                    {selectedIntern.id} - {selectedIntern.department}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {ratingCategories.map((category) => (
                <div key={category.key} className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <label className="text-xs sm:text-sm font-medium text-gray-700 flex-1 min-w-0">
                      {category.label}
                    </label>
                    <span className="text-base sm:text-lg font-bold text-blue-600 flex-shrink-0">
                      {selectedIntern.ratings[category.key]}/5
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="5"
                      step="1"
                      value={selectedIntern.ratings[category.key]}
                      onChange={(e) =>
                        handleRatingChange(
                          category.key,
                          parseInt(e.target.value)
                        )
                      }
                      className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #2563eb 0%, #2563eb ${
                          selectedIntern.ratings[category.key] * 20
                        }%, #e5e7eb ${
                          selectedIntern.ratings[category.key] * 20
                        }%, #e5e7eb 100%)`,
                      }}
                    />
                    <div className="flex justify-between mt-1 text-xs text-gray-500 px-1">
                      <span>0</span>
                      <span className="hidden xs:inline">1</span>
                      <span className="hidden xs:inline">2</span>
                      <span className="hidden xs:inline">3</span>
                      <span className="hidden xs:inline">4</span>
                      <span>5</span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-3 sm:p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm sm:text-base font-semibold text-gray-700">
                    Điểm trung bình:
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-blue-600">
                    {(
                      (Object.values(selectedIntern.ratings).reduce(
                        (a, b) => a + b,
                        0
                      ) /
                        6) *
                      2
                    ).toFixed(1)}
                    /10
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 flex flex-col-reverse sm:flex-row gap-2 sm:gap-3 justify-end rounded-b-3xl sticky bottom-0">
              <button
                onClick={() => setShowRatingModal(false)}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 border-2 border-gray-300 rounded-2xl hover:bg-gray-100 hover:border-gray-400 transition-all font-medium text-sm sm:text-base"
              >
                Hủy
              </button>
              <button
                onClick={handleSaveRating}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl transition-all font-medium text-sm sm:text-base shadow-md hover:shadow-lg"
              >
                <Save className="w-4 h-4 sm:w-5 sm:h-5" />
                Lưu đánh giá
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
