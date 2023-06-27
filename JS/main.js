// Mảng
class Phone {
    constructor (name,brand,price,img) {
        this.name= name;
        this.price= price
        this.img = img;
        this.brand = brand
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
        this.price=price;
    }
    setname(name) {
        this.name=name;
    }

    setImg(img){
        this.img=img;
    }
    setBrand(brand){
        this.brand=brand;
    }

    edit(name,brand,price,img){
        this.brand= brand
        this.name = name;
        this.price = price
        this.img = img
    }
    showProduct() {
        return `
        <div style="float:left ; ">
             <img src="${this.img}" alt="${this.name}" style="height: 300px; width: 350px;">
             <p>${this.name}</p> 
             <p>${this.brand}</p>
             <p>${this.price}</p>
         </div>
         `
    }
}
let Product1 = new Phone('IPHONE 14 Pro Max','iphone',26990000, '/img/iphone/iphone-14-pro-max-vang-1.jpg')
let Product2 = new Phone('IPHONE 14 Pro','iphone',24990000, '/img/iphone/iphone-14-pro-tim-1-1.jpg')
let Product3 = new Phone('IPHONE 14 Plus','iphone',22990000, '/img/iphone/iphone-14-plus-do-5.jpg')

let listProduct = [Product1,Product2,Product3]
var show =''
for (let i = 0; i< listProduct.length; i++) {
    let list = listProduct[i]
    show += list.showProduct()
}
document.getElementById('display').innerHTML = show;