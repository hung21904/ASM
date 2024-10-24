type TLoaiSanPham = { id: number; ten: string; mota: string; };
type TSanPham = { id: number; ten: string; gia: number; loai: string; ngayRaMat: string; ghichu: string; };
type TCuaHang = { id: number; ten: string; diachi: string; hinh: string; };

const loaisp_arr: TLoaiSanPham[] = [
    { id: 1, ten: "Điện thoại", mota: "Các loại smartphone công nghệ mới nhất" },
    { id: 2, ten: "Laptop", mota: "Laptop hiệu năng cao cho công việc và giải trí" },
    { id: 3, ten: "Máy tính bảng", mota: "Máy tính bảng di động và mạnh mẽ cho công việc và giải trí" }
];

let sanpham_arr: TSanPham[] = [
    { id: 1, ten: "iPhone 14", gia: 23000000, loai: "Điện thoại", ngayRaMat: "2022-09", ghichu: "Mẫu iPhone mới nhất" },
    { id: 2, ten: "Samsung Galaxy S23", gia: 20000000, loai: "Điện thoại", ngayRaMat: "2023-01", ghichu: "Smartphone cao cấp của Samsung" },
    { id: 3, ten: "MacBook Pro", gia: 45000000, loai: "Laptop", ngayRaMat: "2023-06", ghichu: "Laptop mạnh mẽ cho dân chuyên nghiệp" },
    { id: 4, ten: "Dell XPS 13", gia: 35000000, loai: "Laptop", ngayRaMat: "2023-03", ghichu: "Laptop mỏng nhẹ hiệu suất cao" },
    { id: 5, ten: "iPad Pro", gia: 27000000, loai: "Máy tính bảng", ngayRaMat: "2023-09", ghichu: "Máy tính bảng mạnh mẽ từ Apple" },
    { id: 6, ten: "Samsung Galaxy Tab S8", gia: 18000000, loai: "Máy tính bảng", ngayRaMat: "2022-11", ghichu: "Máy tính bảng cao cấp của Samsung" }
];

const cuahang_arr: TCuaHang[] = [
    { id: 1, ten: "Cửa hàng Hồ Chí Minh", diachi: "123 Đường Lê Lợi, Quận 1, TP Hồ Chí Minh", hinh: "images/hcm_store.jpg" },
    { id: 2, ten: "Cửa hàng Hà Nội", diachi: "456 Đường Trần Duy Hưng, Quận Cầu Giấy, TP Hà Nội", hinh: "images/hcm_store.jpg" },
    { id: 3, ten: "Cửa hàng Đà Nẵng", diachi: "789 Đường 2/9, Quận Hải Châu, TP Đà Nẵng", hinh: "images/hcm_store.jpg" },
    { id: 4, ten: "Cửa hàng Cần Thơ", diachi: "321 Đường 30/4, Quận Ninh Kiều, TP Cần Thơ", hinh: "images/hcm_store.jpg" },
    { id: 5, ten: "Cửa hàng Hải Phòng", diachi: "654 Đường Lê Thánh Tông, Quận Ngô Quyền, TP Hải Phòng", hinh: "images/hcm_store.jpg" }
];

export { TLoaiSanPham, TSanPham, TCuaHang };
export { loaisp_arr,sanpham_arr ,cuahang_arr,  };
