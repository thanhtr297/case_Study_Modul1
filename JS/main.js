// Mảng
class Phone {
    constructor(name, brand, price, img, detail) {
        this.name = name;
        this.price = price
        this.img = img;
        this.brand = brand
        this.detail = detail
    }

    getname() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    getImg() {
        return this.img;
    }

    getBrand() {
        return this.brand
    }

    setPrice(price) {
        this.price = price;
    }

    setname(name) {
        this.name = name;
    }

    setImg(img) {
        this.img = img;
    }

    setBrand(brand) {
        this.brand = brand;
    }


    // edit(name, brand, price, img, detail) {
    //     this.brand = brand
    //     this.name = name;
    //     this.price = price
    //     this.img = img
    //     this.detail = detail
    // }

    pushProduct(type, index) {
        return `
        <div style="float:left; text-align: center" id="items">
             <img  src="${this.img}" alt="${this.name}" style="height: 250px; width: 280px;">
             <p id="nameP" style="font-style: italic">${this.name}</p>
             <p style="display: none" >${this.brand}</p>             
             <p>${this.price}</p>
             <p style="font-size: 10px">${this.detail}</p>
             <button onclick="edit('${type}', ${index})" id="edit">Sửa</button>
             <button onclick="xoa('${type}', ${index})" id="delele">Xóa</button>
         </div>
         `
    }
}

let Product1 = new Phone(
    'IPHONE 14 Pro Max',
    'phone',
    26990000,
    '/img/iphone/iphone-14-pro-max-vang-1.jpg',
    'Bảo hành chính hãng điện thoại <br> 1 năm tại các trung tâm bảo hành hãng')
let Product2 = new Phone(
    'IPHONE 14 Pro',
    'phone', 24990000,
    'https://cdn.viettelstore.vn/Images/Product/ProductImage/1896224739.jpeg',
    'Bảo hành chính hãng điện thoại <br> 1 năm tại các trung tâm bảo hành hãng')
let Product3 = new Phone(
    'IPHONE 14 Plus',
    'phone',
    22990000,
    'https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/p/h/photo_2022-09-28_21-58-56_5.jpg',
    'Bảo hành chính hãng điện thoại <br> 1 năm tại các trung tâm bảo hành hãng')
let Product4 = new Phone(
    'Ipad pro M2 2023',
    'tab',
    19990000,
    'https://cdn.tgdd.vn/Products/Images/522/294104/ipad-pro-m2-11-wifi-xam-thumb-600x600.jpg',
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
    'https://stcv4.hnammobile.com/downloads/5/thuc-hu-apple-watch-series-8-co-chuc-nang-noi-bat-moi-01656904033.jpg',
    'Bảo hành chính hãng điện thoại <br>1 năm tại các trung tâm bảo hành hãng')
let Product7 = new Phone(
    'Apple Watch Series 8',
    'watch',
    12990000,
    'https://stcv4.hnammobile.com/downloads/5/thuc-hu-apple-watch-series-8-co-chuc-nang-noi-bat-moi-01656904033.jpg',
    'Bảo hành chính hãng điện thoại <br>1 năm tại các trung tâm bảo hành hãng')

let listPhone =
    [Product1, Product2, Product3]
let listMac = [Product5]
let listTab = [Product4]
let listWatch = [Product6, Product7]
//*****************************
// sự kiện onclick show sản phẩm diễn ra
var a

function displayProducts(brand) {
    let products = '';
    for (let i = 0; i < listPhone.length; i++) {
        if (listPhone[i].getBrand() === brand) {
            products += listPhone[i].pushProduct(listPhone[i].getBrand(), i);
        }
    }
    for (let i = 0; i < listMac.length; i++) {
        if (listMac[i].getBrand() === brand) {
            products += listMac[i].pushProduct(brand, i);
        }
    }
    for (let i = 0; i < listTab.length; i++) {
        if (listTab[i].getBrand() === brand) {
            products += listTab[i].pushProduct();
        }
    }
    for (let i = 0; i < listWatch.length; i++) {
        if (listWatch[i].getBrand() === brand) {
            products += listWatch[i].pushProduct();
        }
    }
    document.getElementById('display').innerHTML = products;
}

function phoneDisplay() {
    displayProducts('phone');
}

function macDisplay() {
    displayProducts('mac');
}

function tabletDisplay() {
    displayProducts('tab');
}

function watchDisplay() {
    displayProducts('watch');
}

// kết thúc onclick show sản phẩm

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
    if (name === '' || brand === '' || price === '' || image === '' || detail === '') {
        alert('Bạn cần nhập đủ thông tin sản phẩm!')
    } else {
        clear()
        alert('Đã thêm sản phẩm thành công!' +
            ' Hãy tiếp tục thêm sản phẩm hoặc bấm vào bấm lưu!')
        let arrNew = new Phone(name, brand, price, image, detail);
        if (brand === 'phone') {
            listPhone.push(arrNew);
            displayProducts(listPhone);
        } else if (brand === 'mac') {
            listMac.push(arrNew);
            displayProducts(listMac);
        } else if (brand === 'tab') {
            listTab.push(arrNew);
            displayProducts(listTab);
        } else {
            listWatch.push(arrNew);
            displayProducts(listWatch);
        }
    }

}

function clear() {
    document.getElementById('name').value = '';
    document.getElementById('brand').value = '';
    document.getElementById('price').value = '';
    document.getElementById('image').value = '';
    document.getElementById('detail').value = '';
}


function save() {

    alert('Đã lưu thành công!')
    table.style.display = "none"
}

/// kết thúc thêm sản phầm
//**********************************************8
// sửa sản phẩm
function edit() {
    btnAdd()
}

/// end sửa
// ***************************88
/// start xóa
function xoa(type,index) {
    let check = confirm('Bạn muốn xóa sản phẩm?')
    switch (type) {
        case "mac":
            listMac.splice(index, 1)
            alert('Bạn đã xóa thành công!')
            break
        case "phone":
            listPhone.splice(index, 1)
            alert('Bạn đã xóa thành công!')
            break
    }
    // if (check) {
    //
    //        listPhone.splice(index, 1)
    //       alert('Bạn đã xóa thành công!')
    //        displayProducts()
    //
    // }
    displayProducts(type)

}

// end xóa