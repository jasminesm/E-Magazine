let totalHarga = 0;
let barang = [{
        name: `Masker Medis`,
        stok: 50,
        harga: 15000,
        image: './assets/images/MaskerMedis.jpg'
    },
    {
        name: `Masker KF94`,
        stok: 50,
        harga: 8000,
        image: './assets/images/MaskerKF94.jpg'
    },
    {
        name: `Masker KN95`,
        stok: 50,
        harga: 15000,
        image: './assets/images/MaskerKN95.jpg'
    },
    {
        name: `Hand Sanitizer`,
        stok: 50,
        harga: 30000,
        image: './assets/images/Handsanitizer.jpg'
    },
    {
        name: `Penghapus FaberCastell Hitam`,
        stok: 50,
        harga: 2500,
        image: './assets/images/ersfaberblc.jpg'
    },
    {
        name: `Penghapus Joyko Hitam`,
        stok: 50,
        harga: 1000,
        image: './assets/images/ersjoykoblc.jpg'
    },
    {
        name: `Penghapus Joyko Putih`,
        stok: 50,
        harga: 1000,
        image: './assets/images/ersjoykowht.jpg'
    },
    {
        name: `Pulpen Standard Hitam`,
        stok: 50,
        harga: 3000,
        image: './assets/images/penstandblc.jpg'
    },
    {
        name: `Pulpen Standard Biru`,
        stok: 50,
        harga: 3000,
        image: './assets/images/penstandblue.jpg'
    },
    {
        name: `Pulpen Standard Merah`,
        stok: 50,
        harga: 3000,
        image: './assets/images/penstandred.jpg'
    },
    {
        name: `Pulpen Faster Hitam`,
        stok: 50,
        harga: 3000,
        image: './assets/images/penfasterblc.jpg'
    },
    {
        name: `Pulpen Joyko Hitam`,
        stok: 50,
        harga: 5000,
        image: './assets/images/penjoykoblc.jpg'
    },
    {
        name: `Pulpen Kenko Hitam`,
        stok: 50,
        harga: 3000,
        image: './assets/images/penkenkoblc.webp'
    },
    {
        name: `Pulpen Snowman Hitam`,
        stok: 50,
        harga: 3000,
        image: './assets/images/pensnwblc.png'
    },
    {
        name: `Spidol Snowman Board`,
        stok: 50,
        harga: 6000,
        image: './assets/images/splsnw.jpg'
    },
    {
        name: `Spidol Snowman Permanent`,
        stok: 50,
        harga: 7000,
        image: './assets/images/splsnwper.jpg'
    },
    {
        name: `Penggaris 15cm Besi`,
        stok: 50,
        harga: 5000,
        image: './assets/images/rlr15cmbs.jpg'
    },
    {
        name: `Penggaris 15cm Plastik`,
        stok: 50,
        harga: 3000,
        image: './assets/images/rlr15cmplstk.jpg'
    },
    {
        name: `Penggaris 30cm Plastik`,
        stok: 50,
        harga: 5000,
        image: './assets/images/rlr30cmplstk.jpg'
    },
    {
        name: `Busur 360 Derajat`,
        stok: 50,
        harga: 6000,
        image: './assets/images/busur.png'
    },
    {
        name: `Gunting Kertas Kecil`,
        stok: 50,
        harga: 4000,
        image: './assets/images/cut 1.jpg'
    },
    {
        name: `Gunting Kertas Sedang`,
        stok: 50,
        harga: 6000,
        image: './assets/images/cut 2.jpg'
    },
    {
        name: `Cutter`,
        stok: 50,
        harga: 15000,
        image: './assets/images/cutter.jpg'
    },
    {
        name: `Jangka`,
        stok: 50,
        harga: 8000,
        image: './assets/images/jangka.jpg'
    },
    {
        name: `Double Tape`,
        stok: 50,
        harga: 5000,
        image: './assets/images/dtape.jpg'
    },
    {
        name: `Isolasi`,
        stok: 50,
        harga: 1500,
        image: './assets/images/isolasi.jpg'
    },
    {
        name: `Lakban`,
        stok: 50,
        harga: 4000,
        image: './assets/images/lakban.jpg'
    },
    {
        name: `Lem Stik`,
        stok: 50,
        harga: 4000,
        image: './assets/images/lem.jpg'
    },
    {
        name: `Lem UHU`,
        stok: 50,
        harga: 7000,
        image: './assets/images/lemuhu.jpeg'
    },
    {
        name: `Rautan Pensil`,
        stok: 50,
        harga: 1000,
        image: './assets/images/rautan.jpeg'
    },
    {
        name: `Stabilo Highlighter`,
        stok: 50,
        harga: 15000,
        image: './assets/images/stabilo.jpeg'
    },
    {
        name: `Papper Clips`,
        stok: 50,
        harga: 22000,
        image: './assets/images/paperclips.jpeg'
    },
    {
        name: `HVS A4`,
        stok: 10,
        harga: 45000,
        image: './assets/images/hvs.jpg'
    },
    {
        name: `File Folder`,
        stok: 50,
        harga: 3000,
        image: './assets/images/maps.jpg'
    },
    {
        name: `Buku Tulis A5`,
        stok: 50,
        harga: 2500,
        image: './assets/images/booka5.jpg'
    },
    {
        name: `Buku Tulis B5`,
        stok: 50,
        harga: 5000,
        image: './assets/images/bookb5.jpg'
    },
    {
        name: `Buku Gambar A3`,
        stok: 50,
        harga: 5000,
        image: './assets/images/a3.jpg'
    },
    {
        name: `Buku Agenda`,
        stok: 50,
        harga: 10000,
        image: './assets/images/book.jpg'
    },
    {
        name: `Correction Tape`,
        stok: 50,
        harga: 13000,
        image: './assets/images/crtape.jpg'
    },
    {
        name: `Correction Fluid`,
        stok: 50,
        harga: 9000,
        image: './assets/images/crfluid.jpg'
    },
    {
        name: `Box File Bindex`,
        stok: 40,
        harga: 20000,
        image: './assets/images/bindex.jpeg'
    },
    {
        name: `Stapler`,
        stok: 50,
        harga: 8000,
        image: './assets/images/stapler.jpg'
    },
    {
        name: `Sticky Notes`,
        stok: 50,
        harga: 5000,
        image: './assets/images/notes.jpg'
    },
    {
        name: `Kalkulator`,
        stok: 50,
        harga: 45000,
        image: './assets/images/kalkulator.jpeg'
    },
    {
        name: `Mouse Wireless`,
        stok: 50,
        harga: 60000,
        image: './assets/images/mouse.jpeg'
    },
    {
        name: `Kaos Kaki Hitam`,
        stok: 50,
        harga: 10000,
        image: './assets/images/sockblc.jpeg'
    },
    {
        name: `Kaos Kaki Putih`,
        stok: 50,
        harga: 10000,
        image: './assets/images/sockwht.jpeg'
    },
    {
        name: `Topi`,
        stok: 50,
        harga: 15000,
        image: './assets/images/topi.jpeg'
    },
    {
        name: `Dasi`,
        stok: 50,
        harga: 10000,
        image: './assets/images/dasi.jpeg'
    },
]

let cart = [

];

let pembelian = [

];

function debug() {
    console.log(pembelian);
}

function checkAvailable() {
    var available = true;
    for (var i = 0; i < cart.length; i++) {
        for (var j = 0; j < food.length; j++) {
            if (cart[i].name === food[j].name) {
                if (food[j].stok < cart[i].jumlah) {
                    available = false;
                    alert(`Stok ${food[j].name} tinggal ${food[j].stok}`);
                    break;
                }
            }
        }
        if (!available) {
            break;
        }
    }

    return available
}

function orderFood() {
    // for(var i = 0; i<cart.length; i++){
    //     var notAvailable = false;
    //     for(var j = 0; j<food.length; j++){
    //         if(cart[i].name === food[j].name){
    //             if(food[j].stok < cart[i].jumlah){
    //                 notAvailable = true;
    //                 alert(`Stok ${food[j].name} tinggal ${food[j].stok}`);
    //                 break;
    //             }
    //             // if(!notAvailable){
    //             //     food[j].stok -= cart[i].jumlah;
    //             // }      
    //         }  
    //     }
    //     if(notAvailable){
    //         break;
    //     }
    // }
    if (checkAvailable()) {
        for (var x = 0; x < cart.length; x++) {
            for (var y = 0; y < food.length; y++) {
                if (cart[x].name === food[y].name) {
                    food[y].stok -= cart[x].jumlah;
                }
            }
        }
        var cartList = document.getElementById('cartList');

        // UNTUK MATIKAN CARTLIST
        cartList.setAttribute('style', 'display:none');
        alert(`Pesanan telah diterima, Mohon menunggu, Total Harga : Rp${toRupiah(totalHargaMakanan)},00`);
        cart.push(totalHargaMakanan);
        pembelian.push(cart);
        totalHargaMakanan = 0;
        cart = [];
        generateData();
    }
    console.log(pembelian);
    console.log(food);
}

function addtoCart(index) {
    console.log(food[index].name);
    var hasExist = false;
    var hasEmpty = false;
    if (food[index].stok <= 0) {
        alert(`${food[index].name} habis, silahkan pilih barang lainnya`);
        hasEmpty = true;
    }
    for (var i = 0; i < cart.length; i++) {
        if (food[index].name === cart[i].name) {
            if (food[index].stok - cart[i].jumlah <= 0) {
                alert(`${food[index].name} habis, silahkan pilih barang lainnya`);
                hasEmpty = true;
                break;
            } else {
                totalHargaMakanan += cart[i].harga;
                //console.log(totalHargaMakanan);
                cart[i].jumlah++;
                hasExist = true;
                break;
            }
        }
    }
    if (!hasExist && !hasEmpty) {
        let obj = {
            name: food[index].name,
            harga: food[index].harga,
            jumlah: 1,
            image: food[index].image,
        }
        totalHargaMakanan += food[index].harga;
        cart.push(obj);
    }
    generateData();
    var cartlist = document.getElementById('cartList');
    if (cart.length !== 0) {
        cartlist.setAttribute('style', 'display:inline-block');
    }
}

function removeFood(value) {

    //console.log(cart[value].jumlah);
    if (cart[value].jumlah > 0) {
        totalHargaMakanan -= cart[value].harga;
        cart[value].jumlah--;
    }
    if (cart[value].jumlah === 0) {
        cart.splice(value, 1);

    }
    generateData();
    var cartlist = document.getElementById('cartList');
    if (cart.length !== 0) {
        cartlist.setAttribute('style', 'display:inline-block');
    } else {

        // UNTUK MATIKAN CARTLIST


        cartlist.setAttribute('style', 'display:none');
    }
}

function toRupiah(harga) {
    var result = '';
    harga = String(harga);
    var arr = [];
    var count = 0;
    for (var i = harga.length - 1; i >= 0; i--) {
        if (count === 3 && harga[i] != undefined) {
            arr.push('.');
            arr.push(harga[i]);
            count = 1;
            // console.log(count,i,'MASUK'); 
        } else {
            arr.push(harga[i]);
            count++;
            //console.log(count,i-1);
        }
    }
    //console.log(arr);
    for (var i = arr.length - 1; i >= 0; i--) {
        result += arr[i];
    }
    return result;
}

//console.log(toRupiah(1910450));

function generateData() {
    const foodList = document.getElementById('foodList');
    const cartList = document.getElementById('cartList');
    foodList.innerHTML = '';
    cartList.innerHTML = '';

    for (var i = 0; i < food.length; i++) {
        let name = food[i].name;
        let stok = food[i].stok;
        let harga = food[i].harga;
        let image = food[i].image;

        let divCard = document.createElement('div');
        divCard.classList.add('card')


        let imageData = document.createElement('img')
        imageData.setAttribute("src", image);
        divCard.appendChild(imageData);

        let title = document.createElement('p');
        title.innerHTML = name;
        divCard.appendChild(title);

        let divAction = document.createElement('div');
        divAction.classList.add('action');

        let spanData = document.createElement('span');
        spanData.innerHTML = `Rp ${toRupiah(harga)},00 | Stok : ${stok}`;
        divAction.appendChild(spanData);

        let buttonAdd = document.createElement('button');
        buttonAdd.innerHTML = '<i class="fas fa-cart-plus"></i> Pesan';
        buttonAdd.setAttribute('value', i);
        buttonAdd.setAttribute('onclick', 'addtoCart(this.value)');
        divAction.appendChild(buttonAdd);
        divCard.appendChild(divAction);
        //console.log(divCard);
        foodList.appendChild(divCard);

    }

    let totalDiv = document.createElement('div');
    totalDiv.classList.add('total');

    let totalh1 = document.createElement('h1');
    totalh1.innerHTML = `TOTAL : Rp${toRupiah(totalHargaMakanan)},00`;
    totalDiv.appendChild(totalh1);

    let totalhr = document.createElement('hr');
    totalDiv.appendChild(totalhr);
    //console.log(totalDiv);
    cartList.appendChild(totalDiv);

    //console.log('BelumMasuk');
    for (var x = 0; x < cart.length; x++) {

        let name = cart[x].name;
        let jumlah = cart[x].jumlah;
        let harga = cart[x].harga;
        let image = cart[x].image;
        //console.log('MASUK');
        let divCardx = document.createElement('div');
        divCardx.classList.add('card-order');
        //console.log(divCardx);

        let divCardDetail = document.createElement('div');
        divCardDetail.classList.add('detail');

        let imageData = document.createElement('img')
        imageData.setAttribute("src", image);
        divCardDetail.appendChild(imageData);

        let foodName = document.createElement('p');
        // foodName.setAttribute('id','nameCart')
        foodName.innerHTML = name;
        divCardDetail.appendChild(foodName);

        let foodJumlah = document.createElement('span');
        foodJumlah.innerHTML = jumlah;
        divCardDetail.appendChild(foodJumlah);

        divCardx.appendChild(divCardDetail);

        let buttonCancel = document.createElement('button');
        buttonCancel.setAttribute('value', x);
        buttonCancel.setAttribute('id', 'cancelCart');
        buttonCancel.setAttribute('onclick', 'removeFood(this.value)');
        buttonCancel.innerHTML = '<i class="fas fa-trash"></i> Hapus';
        divCardx.appendChild(buttonCancel);
        //console.log(divCardx);

        cartList.appendChild(divCardx);
    }

    let divbutton = document.createElement('div');
    divbutton.classList.add("card-finish");

    let buttonOrder = document.createElement('button');
    //buttonOrder.classList.add('order');
    buttonOrder.setAttribute('onclick', 'orderFood()');
    buttonOrder.innerHTML = 'ORDER SEKARANG';
    divbutton.appendChild(buttonOrder);
    cartList.appendChild(divbutton);




}
generateData()