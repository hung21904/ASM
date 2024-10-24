import { TLoaiSanPham, TSanPham, TCuaHang} from './data.js'
import { loaisp_arr, sanpham_arr, cuahang_arr} from './data.js'

const hienLoai = ( loai:TLoaiSanPham) => {
    return `<div>
     <h4>Tên loại: ${loai.ten} </h4>
     <p>Mô tả: ${loai.mota}</p>
    </div>`;
}

export const showlistLoai = () => {
     const html_arr = loaisp_arr.map(hienLoai); //call back
     return html_arr.join("");
}
const hienSP = (SP:TSanPham) =>{
    return `<div>
     <h4>Tên SP: ${SP.ten} </h4>
     <p>Điện thoại: ${SP.gia}</p>
     <p>Loại: ${SP.loai}</p>
     <p>Ngày ra mắt: ${SP.ngayRaMat}</p>
     <p>Ghi chú: ${SP.ghichu}</p>
    </div>`;
}  
export const showlistSP = ()=>{
    const html_arr = sanpham_arr.map(hienSP);
    return html_arr.join("");
}

const hienCoSo = (coso:TCuaHang) =>{
    return `<div>
     <img src="${coso.hinh}">
     <h4>${coso.ten} </h4>
     <p>${coso.diachi}</p>
    </div>`;
}
export const showlistcoso = ()=>{
    const html_arr =cuahang_arr.map(hienCoSo);
    return html_arr.join("");
}

const show1thuonghieu = (th) => {
  return `<div>${th.ten}</div> `;
}
export const showlistthuonghieu = async () =>{
   let thuonghieu_arr = await  fetch("http://localhost:3000/thuong_hieu")
    .then ( res => res.json())
    .then ( data  => {return data});
   let str=``;
   thuonghieu_arr.forEach ( th => str+= show1thuonghieu(th) )
   return str;
}