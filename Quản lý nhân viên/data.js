const nhanVien = [
  {
    Ten: "Mai",
    hoDem: "Thục Anh",
    diaChi: "23 Hoàng Đạo Thủy, Thanh Xuân, Hà Nội"
  },

  {
    Ten: "Mai",
    hoDem: "Thục Anh",
    diaChi: "23 Hoàng Đạo Thủy, Thanh Xuân, Hà Nội"
  },

  {
    Ten: "Hoàng",
    hoDem: "Sinh Hồng",
    diaChi: "23 Hoàng Đạo Thủy, Thanh Xuân, Hà Nội"
  },

  {
    Ten: "Tính",
    hoDem: "Mai Trung",
    diaChi: "1411 Đường Láng, Cầu Giấy, Hà Nội"
  },

  {
    Ten: "Hồng",
    hoDem: "Nguyễn Văn",
    diaChi: "1411 Đường Láng, Cầu Giấy, Hà Nội"
  },
];

function kiemTra(){
    let Ten = document.getElementById("Ten").value.trim();
    let hoDem = document.getElementById("hoDem").value.trim();
    let diaChi = document.getElementById("diaChi").value.trim();

    let loiTen = document.getElementById("loiTen");
    let loiHodem = document.getElementById("loiHodem");
    let loiDiachi = document.getElementById("loiDiachi");

    loiTen.innerText = "";
    loiHodem.innerText = "";
    loiDiachi.innerText = "";

    if (Ten === "") {
        loiTen.innerText = "Tên nhân viên không được để trống";
        return false;
    }
    else if (Ten.length > 15){
        loiTen.innerText = "Tên nhân viên không được vượt quá 15 ký tự";
        return false;
    }

    if (hoDem === "") {
        loiHodem.innerText = "Họ đệm nhân viên không được bỏ trống";
        return false;
    }
    else if (hoDem.length > 20) {
        loiHodem.innerText = "Họ đệm nhân viên không được vượt quá 20 ký tự";
        return false;
    }

    if (diaChi === "") {
        loiDiachi.innerText = "Địa chỉ nhân viên không được bỏ trống";
        return false;
    }
    else if (diaChi.length > 50) {
        loiDiachi.innerText = "Địa chỉ nhân viên không được vượt quá 50 ký tự";
        return false;
    }

    return {
        Ten,
        hoDem,
        diaChi
    }
}

function themNhanVien() {
    if (!kiemTra()) return;
    bootstrap.Modal.getInstance(document.getElementById('themModal')).hide();
}