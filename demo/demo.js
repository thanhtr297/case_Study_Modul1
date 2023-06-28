class monAn {
    ten
    anh
    gia
    thongTin

    constructor(ten, anh, gia, thongTin) {
        this.ten = ten;
        this.anh = anh;
        this.gia = gia;
        this.thongTin = thongTin;
    }
}
function showMonAn(arr) {
    let showCombo = '';
    for (let i=0 ;i<arr.length ; i++){
        showCombo += `   <div  class="sanPham"  style="float:left ; width: 280px; height: 480px ; border: 1px solid #BEBEBE ;">
             <img src="${arr[i].anh}" alt="${arr[i].ten}" style="width: 250px;height: auto;margin-left:10px;">
            <div class="ttSanpham">
            <h3>${arr[i].ten}</h3>
             <p>${arr[i].gia}</p>
             <p>${arr[i].thongTin}</p>
             <button onclick="editProduce(${i})">Edit</button>
             <button onclick="deleteProduce(${i})">Delete</button>
             <button  style="background-color:#EEEEEE;color:#BEBEBE;border:none; width:215px; height:auto ;margin:10px; border-radius:20px;"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg></button>
</div>
         </div> `
    }
    return showCombo;
}
let combo1 = new monAn('Combo Nhóm 1' ,'IMG/combo nhóm/D6.jpg' ,'175.000₫','3 Miếng Gà + 1 Burger Zinger/Burger Tôm/Burger Gà Quay + 2 Lon Pepsi' )
let combo2 = new monAn('Combo Nhóm 2' ,'IMG/combo nhóm/D7-new.jpg' ,'195.000₫','4 Miếng Gà + 1 Khoai tây chiên lớn / 2 Thanh Bí Phô-mai + 2 Pepsi Lon' )
let combo3 = new monAn('Combo Nhóm 3' ,'IMG/combo nhóm/D8-new.jpg' ,'232.000₫','5 Miếng Gà + 1 Popcorn (Vừa) / 4 Gà Miếng Nuggets+ 2 Pepsi Lon' )
let dsCombo = [combo1,combo2,combo3]


function  sh
owComBo() {
    let str = showMonAn(dsCombo);
    document.getElementById('combo').innerHTML = str; }
function new_Product () {
    let ten = document.getElementById('name').value;
    let anh = document.getElementById('img').value;
    let gia = document.getElementById('price').value;
    let tt = document.getElementById('tt').value;
    let combo = new monAn(ten,anh,gia,tt);
    if(ten !== '' && anh !== '' && gia !== '' && tt !== '' ){
        dsCombo.push(combo)
    }
    document.getElementById('name').value='';
    document.getElementById('img').value='';
    document.getElementById('price').value = '';
    document.getElementById('tt').value = '';

    showComBo()
}
function deleteProduce(index) {
    dsCombo.splice(index, 1)
    showComBo()
}
let dem
function editProduce(index) {
    dem = indexdocument.getElementById('name').value= dsCombo[index].ten;
    document.getElementById('img').value= dsCombo[index].anh;
    document.getElementById('price').value = dsCombo[index].gia;
    document.getElementById('tt').value = dsCombo[index].thongTin;
    showComBo()
}
function update () {
    dsCombo[dem].ten=  document.getElementById('name').value
    dsCombo[dem].anh=  document.getElementById('img').value
    dsCombo[dem].gia=  document.getElementById('price').value
    dsCombo[dem].thongTin=  document.getElementById('tt').value
    document.getElementById('name').value='';
    document.getElementById('img').value='';
    document.getElementById('price').value = '';
    document.getElementById('tt').value = '';
    showComBo()
}
