
function submit() {
    let nameLogIn = document.getElementById('username').value
    let passLogIn = document.getElementById('password').value
    if (nameLogIn === 'admin' && passLogIn === '123456') {
        alert('Đăng nhập thành công')
        localStorage.setItem("userName", nameLogIn)
        window.location.href = '../home/index.html'
    } else {
        alert('Vui lòng nhập lại tên tài khoản!')
    }
}
window.addEventListener('Loaded', function(event) {
    let username = localStorage.getItem("userName");
    if (username) {
        document.getElementById("login").innerHTML = username;
        document.getElementById("edit").style.display = "block";
        document.getElementById("delete").style.display = "block";
        document.getElementById("").style.display = "block";
        showProduct()
    }
});
// function dangnhap1() {
//     localStorage.clear()
//     location.href = '/';
// }