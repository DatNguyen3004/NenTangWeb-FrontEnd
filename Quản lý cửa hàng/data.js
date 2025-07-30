const giaoDich = [
  {
    id: 1102,
    khachHang: "Võ Hoài An",
    nhanVien: "Mai Thục Anh",
    soTien: 250000,
    ngayMua: "2024-06-06T09:00:00"
  },

  {
    id: 1199,
    khachHang: "Hoàng Thị Thắng",
    nhanVien: "Nguyễn Văn Hồng",
    soTien: 600000,
    ngayMua: "2024-06-06T09:03:00"
  },

  {
    id: 1239,
    khachHang: "Nguyễn Huy Quang",
    nhanVien: "Nguyễn Văn Hồng",
    soTien: 934000,
    ngayMua: "2024-06-06T09:10:00"
  },

  {
    id: 1677,
    khachHang: "Huỳnh Văn Nam",
    nhanVien: "Mai Thục Anh",
    soTien: 150000,
    ngayMua: "2024-06-06T09:20:00"
  },

  {
    id: 1439,
    khachHang: "Nguyễn Hồng Minh",
    nhanVien: "Mai Thục Anh",
    soTien: 354000,
    ngayMua: "2024-06-06T09:24:00"
  }
];

function kiemTra(){
    let khachHang = document.getElementById("khachHang").value.trim();
    let nhanVien = document.getElementById("nhanVien").value.trim();
    let soTien = document.getElementById("soTien").value.trim();

    let loiKhachhang = document.getElementById("loiKhachhang");
    let loiNhanvien = document.getElementById("loiNhanvien");
    let loiSotien = document.getElementById("loiSotien");

    loiKhachhang.innerText = "";
    loiNhanvien.innerText = "";
    loiSotien.innerText = "";

    if (khachHang === "") {
        loiKhachhang.innerText = "Tên khách hàng không được để trống";
        return false;
    }
    else if (khachHang.length > 30){
        loiKhachhang.innerText = "Tên khách hàng không được vượt quá 30 ký tự";
        return false;
    }

    if (nhanVien === "") {
        loiNhanvien.innerText = "Tên nhân viên không được bỏ trống";
        return false;
    }
    else if (nhanVien.length > 30) {
        loiNhanvien.innerText = "Tên nhân viên không được vượt quá 30 ký tự";
        return false;
    }
    if (soTien === "") {
        loiSotien.innerText = "Số tiền không được bỏ trống";
        return false;
    }

    return {
        khachHang,
        nhanVien,
        soTien
    }
}

function themGiaoDich() {
    if (!kiemTra()) return;
    bootstrap.Modal.getInstance(document.getElementById('themModal')).hide();
}