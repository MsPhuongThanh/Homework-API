/* Kiểm tra tài khoản */
function ValidateID() {
    let taikhoan = dom("#TaiKhoan").value;
    let spanEl = dom("#InputAccount");
  
    if (!taikhoan) {
      spanEl.style.display = "Block";
      spanEl.innerHTML = "Tài khoản không được để trống";
      return false;
    }
    if (taikhoan.length < 4 || taikhoan.length > 10) {
      spanEl.style.display = "Block";
      spanEl.innerHTML = "Tài khoản phải từ 4 - 10 ký tự";
      return false;
    }
    if (!ValidatecheckID(taikhoan)) {
      showInfoMsg("Tài khoản đã có trên hệ thống. Vui lòng đăng ký tài khoản khác!")
      return false;
    }
    spanEl.style.display = "none";
    spanEl.innerHTML = "";
    return true;
  }
  /* Check tài khoản giống nhau */
  function ValidatecheckID(taikhoan) {
    let spanEl = dom("#InputAccount");
    let findId = users.find((user) =>{
      return user.taikhoan === taikhoan
    })
    if(findId) {
      spanEl.style.display = "Block";
      spanEl.innerHTML = "Tài Khoản đã tồn tại"
      return false;
    }
    return true
  }
  
  /* Kiểm tra họ tên */
  
  function ValidateName() {
    let name = dom("#HoTen").value;
    let spanEl = dom("#FullName");
  
    if (!name) {
      spanEl.style.display = "Block";
      spanEl.innerHTML = "Họ tên không được để trống";
      return false;
    }
    let regex =
      /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
    if (!regex.test(name)) {
      spanEl.style.display = "Block";
      spanEl.innerHTML = "Hãy điền vào chữ !";
      return false;
    }
    spanEl.style.display = "none";
    spanEl.innerHTML = "";
    return true;
  }
  
  /* Kiểm Tra Mật Khẩu */
  function ValidatePassword() {
    let password = dom("#MatKhau").value;
    let spanEl = dom("#InputPassword");
  
    if (!password) {
      spanEl.style.display = "Block";
      spanEl.innerHTML = "Mật khẩu không được để trống";
    }
    let regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if (!regex.test(password) || password.length < 6 || password.length > 8) {
      spanEl.style.display = "Block";
      spanEl.innerHTML =
        "Mật khẩu từ 6 đến 8 kí tự trong đó bao gồm 1 kí tự in hoa, 1 kí tự thường, 1 kí tự số và 1 kí tự đặc biệt";
      return false;
    }
    spanEl.style.display = "none";
    spanEl.innerHTML = "";
    return true;
  }
  /* Kiểm Tra Email */
  function ValidateEmail() {
    let email = dom("#Email").value;
    let spanEl = dom("#InputEmail");
  
    if (!email) {
      spanEl.style.display = "Block";
      spanEl.innerHTML = "Email không được để trống";
      return false;
    }
    let regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!regex.test(email)) {
      spanEl.style.display = "Block";
      spanEl.innerHTML = "Email sai định dạng";
      return false;
    }
    spanEl.style.display = "none";
    spanEl.innerHTML = "";
    return true;
  }
  /* Kiểm tra hình ảnh */
  function ValidateImage() {
    let image = dom("#HinhAnh").value;
    let spanEl = dom("#InputImage");
  
    if (!image) {
      spanEl.style.display = "Block";
      spanEl.innerHTML = "Hình ảnh không được không để trống";
      return false;
    }
    spanEl.style.display = "none";
    spanEl.innerHTML = "";
    return true;
  }
  /* Kiểm tra chức vự */
  function ValidateRole() {
    let loaiND = dom("#loaiNguoiDung").value;
    let spanEl = dom("#InputUser");
  
    if (!loaiND) {
      spanEl.style.display = "Block";
      spanEl.innerHTML = "Người dùng không được để trống";
      
    } else if(loaiND === "RoleList") {
      spanEl.style.display = "Block";
      spanEl.innerHTML = "Vui lòng chọn người dùng";
      return false;
    }
    spanEl.style.display = "none";
    spanEl.innerHTML = "";
    return true;
  }
  /* Kiểm tra Ngôn Ngữ */
  function ValidateLanguage() {
    let ngonngu = dom("#loaiNgonNgu").value;
    let spanEl = dom("#SelectLanguage");
  
    if (!ngonngu) {
      spanEl.style.display = "Block";
      spanEl.innerHTML = "Ngôn ngữ không được để trống"; 
    } else if(ngonngu === 'DSNgonNgu'){
      spanEl.style.display = "Block";
      spanEl.innerHTML = "Vui lòng chọn ngôn ngữ"; 
      return false;
    }
    spanEl.style.display = "none";
    spanEl.innerHTML = "";
    return true;
  }
  /* Kiểm tra Mô tả */
  function ValidateDescription(){
    let mota = dom('#MoTa').value
    let spanEl = dom('#InputDescription')
  
    if(!mota){
      spanEl.style.display = "Block";
      spanEl.innerHTML = "Mô tả không được để trống";
      return false;
    }
    if(mota.length < 10 || mota.length > 60){
      spanEl.style.display = "Block";
      spanEl.innerHTML = "Nhập mô tả bản thân không được nhỏ hơn 10 ký tự và không quá 60 ký tự";
      return false;
    }
    spanEl.style.display = "none";
    spanEl.innerHTML = "";
    return true;
  }
  
  function dom(selector) {
    return document.querySelector(selector);
  }
  