const Employee = [
  {
    Name: "Thomas Hardy",
    Email: "thomashardy@mail.com",
    Address: "89 Chiaroscuro Rd, Portland, USA",
    Phone: "(171) 555-2222"
  },

  {
    Name: "Dominique Perrier",
    Email: "dominiqueperrier@mail.com",
    Address: "Obere Str. 57, Berlin, Germany",
    Phone: "(313) 555-5735"
  },

  {
    Name: "Maria Anders",
    Email: "mariaanders@mail.com",
    Address: "25, rue Lauriston, Paris, France",
    Phone: "(503) 555-9931"
  },

  {
    Name: "Fran Wilson",
    Email: "franwilson@mail.com",
    Address: "C/ Araquil, 67, Madrid, Spain",
    Phone: "(204) 619-5731"
  },

  {
    Name: "Martin Blank",
    Email: "martinblank@mail.com",
    Address: "Via Monte Bianco 34, Turin, Italy",
    Phone: "(480) 631-2097"
  }
];

function kiemTra(){
    let Name = document.getElementById("Name").value.trim();
    let Email = document.getElementById("Email").value.trim();
    let Address = document.getElementById("Address").value.trim();
    let Phone = document.getElementById("Phone").value.trim();

    let loiName = document.getElementById("loiName");
    let loiEmail = document.getElementById("loiEmail");
    let loiAddress = document.getElementById("loiAddress");
    let loiPhone = document.getElementById("loiPhone");

    loiName.innerText = "";
    loiEmail.innerText = "";
    loiAddress.innerText = "";
    loiPhone.innerText = "";

    if (Name === "") {
        loiName.innerText = "Tên nhân viên không được để trống";
        return false;
    }

    const EmailError = /^\S+@\S+\.\S+$/;
    if (Email === "") {
        loiEmail.innerText = "Email không được bỏ trống";
        return false;
    }
    else if (!EmailError.test(Email)) {
        loiEmail.innerText = "Email không hợp lệ";
        return false;
    }

    if (Address === "") {
        loiAddress.innerText = "Địa chỉ không được bỏ trống";
        return false;
    }

    if (Phone === "") {
        loiPhone.innerText = "Số điện thoại không được bỏ trống";
        return false;
    }
    else if (Phone.length !== 10) {
        loiPhone.innerText = "Số điện thoại phải có độ dài chính xác 10 ký tự";
        return false;
    }
    else if (!Phone.startsWith("0")) {
        loiPhone.innerText = "Số điện thoại phải bắt đầu bằng số 0";
        return false;
    }

    return {
        Name,
        Email,
        Address,
        Phone
    }
}

function AddEmployee() {
    if (!kiemTra()) return;
    bootstrap.Modal.getInstance(document.getElementById('themModal')).hide();
}