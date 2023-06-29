// Mảng
class Phone {
    constructor(name, brand, price, img, detail) {
        this.name = name;
        this.price = price
        this.img = img;
        this.brand = brand
        this.detail = detail
    }
}
let Product1 = new Phone(
    'IPHONE 14 Pro Max',
    'phone',
    26990000,
    'https://shopdunk.com/images/thumbs/0007808_iphone-14-pro-max-128gb.png',
    'Bảo hành chính hãng điện thoại <br> 1 năm tại các trung tâm bảo hành hãng')
let Product2 = new Phone(
    'IPHONE 14 Pro',
    'phone', 24990000,
    'https://shopdunk.com/images/thumbs/0008744_iphone-14-pro-128gb_550.png',
    'Bảo hành chính hãng điện thoại <br> 1 năm tại các trung tâm bảo hành hãng')
let Product3 = new Phone(
    'IPHONE 14 Plus',
    'phone',
    22990000,
    'https://shopdunk.com/images/thumbs/0009496_iphone-14-plus-128gb.webp',
    'Bảo hành chính hãng điện thoại <br> 1 năm tại các trung tâm bảo hành hãng')
let Product4 = new Phone(
    'Ipad pro M2 2023',
    'tab',
    19990000,
    'https://shopdunk.com/images/thumbs/0007315_ipad-pro-m2-129-inch-wifi-128gb_550.jpeg',
    'Bảo hành chính hãng điện thoại <br>1 năm tại các trung tâm bảo hành hãng')
let Product5 = new Phone(
    'Macbook Pro M2 2023',
    'mac', 29990000,
    'https://cdn.tgdd.vn/Products/Images/44/282828/Slider/vi-vn-apple-macbook-pro-13-inch-m2-2022-thumbvideo.jpg',
    'Bảo hành chính hãng điện thoại <br>1 năm tại các trung tâm bảo hành hãng')
let Product6 = new Phone(
    'Apple Watch Series 8',
    'watch',
    12990000,
    'https://shopdunk.com/images/thumbs/0002017_silver_550.png',
    'Bảo hành chính hãng điện thoại <br>1 năm tại các trung tâm bảo hành hãng')
let Product7 = new Phone(
    'Apple Watch Series 7 LTE',
    'watch',
    12990000,
    'https://shopdunk.com/images/thumbs/0001048_apple-watch-series-7-thep-gps-cellular_550.png',
    'Bảo hành chính hãng điện thoại <br>1 năm tại các trung tâm bảo hành hãng')
let Product8 = new Phone(
    'Apple Watch SE Nhôm GPS',
    'watch',
    5699000,
    'https://shopdunk.com/images/thumbs/0001810_gold_550.webp',
    'Bảo hành chính hãng điện thoại <br>1 năm tại các trung tâm bảo hành hãng'
)
let listProduct = [Product1, Product2, Product3, Product4, Product5, Product6, Product7,Product8]

function pushProduct(arr) {
    let product = '';
    for (let i = 0; i < arr.length; i++) {
        product += `
        <div style="float:left; text-align: center" id="items";>
             <img  src="${arr[i].img}" alt="${arr[i].name}" style="height: 250px; width: 280px;">
             <p id="nameP" style="font-style: italic">${arr[i].name}</p>
             <p style="display: none" >${arr[i].brand}</p>
             <p>${arr[i].price}</p>
             <p style="font-size: 10px">${arr[i].detail}</p>
             <button onclick="edit(${i})" id="edit" >Sửa</button>
             <button onclick="xoa(${i})" id="delele" >Xóa</button>
         </div> `
    }
    return product
}

function showProduct() {
    let str = pushProduct(listProduct)
    document.getElementById('display').innerHTML = str;
}

showProduct()
//*****************************


/// bắt đầu chức năng thêm sản phầm
function btnAdd() {
    table.style.display = "block"
    return table
}

function addProduct() {
    let name = document.getElementById('name').value;
    let brand = document.getElementById('brand').value;
    let price = document.getElementById('price').value;
    let image = document.getElementById('image').value;
    let detail = document.getElementById('detail').value;
    let newProduct = new Phone(name, brand, price, image, detail)
    if (name !== '' && brand !== '' && price !== '' && image !== '' && detail !== '') {
        listProduct.push(newProduct)
        clear()
        showProduct()
    } else {
        alert('Bạn chưa nhập đủ thông tin! ')
    }

}

// clear ô input
function clear() {
    document.getElementById('name').value = '';
    document.getElementById('brand').value = '';
    document.getElementById('price').value = '';
    document.getElementById('image').value = '';
    document.getElementById('detail').value = '';
}

function dong() {
    table.style.display = "none"
    return table
}

/// kết thúc thêm sản phầm
//**********************************************8
// sửa sản phẩm
var a

function edit(index) {
    btnAdd()
    a = index
    document.getElementById('name').value = listProduct[index].name;
    document.getElementById('brand').value = listProduct[index].brand;
    document.getElementById('price').value = listProduct[index].price;
    document.getElementById('image').value = listProduct[index].img;
    document.getElementById('detail').value = listProduct[index].detail;
}

function update() {
    listProduct[a].name = document.getElementById('name').value;
    listProduct[a].brand = document.getElementById('brand').value;
    listProduct[a].price = document.getElementById('price').value ;
    listProduct[a].img = document.getElementById('image').value;
    listProduct[a].detail = document.getElementById('detail').value;
    clear()
    showProduct()
}

/// end sửa
// ***************************88
/// start xóa
function xoa(index) {

    let check = confirm('Bạn có chắc chắc xóa?')
    if (check) {
        listProduct.splice(index, 1)
        showProduct()
    }
    showProduct()
}

// end xóa
function sortProduct() {
    
}
