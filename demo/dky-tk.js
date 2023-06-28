// const inputUsernameRegister = document.querySelector(".input");
// const inputPasswordRegister = document.querySelector(".input");
// const btnRegister = document.querySelector(".submit");
//
// // validation form register and register user local storage
//
// btnRegister.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (
//         inputUsernameRegister.value === "" ||
//         inputPasswordRegister.value === ""
//     ) {
//         alert("vui lòng không để trống");
//     } else {
//         // array user
//         const user = {
//             username: inputUsernameRegister.value,
//             password: inputPasswordRegister.value,
//         };
//         let json = JSON.stringify(user);
//         localStorage.setItem(inputUsernameRegister.value, json);
//         alert("Đăng Ký Thành Công");
//         window.location.href ="Dang-nhap.html";
//     }
// });
function signup(){
    event.preventDefault(event);
    var username=document.getElementById("username").value
    var password=document.getElementById("password").value
    var confirm_password=document.getElementById("confirm_password").value
    var user ={
        username : username,
        password :password,
        confirm_password:confirm_password,
    }

    if(username === "" || password === "" || confirm_password === ""){
        alert("vui lòng điền thông tin")
    }else{
        var json =JSON.stringify(user)
        localStorage.setItem(username,json)
        alert("Đăng Ký Thành Công")
        window.location.href = "Dang-nhap.html"}
}