//GLOBAL
const tienFirst  = 500;
const tienSecond = 650;
const tienThird  = 850;
const tienForth  = 1100;
const tienLast   = 1300;


//lấy thẻ Element
function getElement(elementID){
    return document.getElementById(elementID);
}

//kiểm tra rỗng
function isCheckEmpty(number){
    return (number == "") ? true : false;
}

//kiểm tra nhập phải là số ko
function isCheckNumber(number){
    return isNaN(number) ? false : true
}

//tính và kiểm tra
function calculate(soKW){
    var tongTien = 0;

    if (soKW > 0 && soKW <= 50) {
        tongTien = soKW * tienFirst;
    } else if (soKW > 50 && soKW <= 99) {
        tongTien = tienFirst + (soKW - 1) * tienSecond;
    } else if (soKW > 100 && soKW <=199) {
        tongTien = tienFirst + (99 * tienSecond) + (soKW - 99) * tienThird;
    } else if (soKW > 200 && soKW <= 349){
        tongTien = tienFirst + (99 * tienSecond) + (soKW - 99) + (199 * tienThird) + (soKW - 199) * tienForth;
    } else if(soKW > 350){
        tongTien = tienFirst + (99 * tienSecond) + (soKW - 99) + (199 * tienThird) + (soKW - 199) + (349 * tienForth) + (soKW - 349) * tienLast;
    }

    return tongTien;
}

//In kết quả
function result(ketQua, alert){
    var txtKiemTra = getElement("txtTinh");
    txtKiemTra.setAttribute("class","alert alert-"+alert);
    txtKiemTra.innerHTML = ketQua;
}


//sư kiện submit
var btnTinh = getElement("btnTinh").addEventListener("click",function(e){
    e.preventDefault();

    var soKW   = getElement("inputSo").value;
    var ten    = getElement("inputTen").value;

    if(isCheckEmpty(soKW) || isCheckEmpty(ten)){
        result("chưa nhập thông tin", "danger");
    }else{
        if(!isCheckNumber(soKW)){
            result("số KW phải là số", "danger");
        }else{
            soKW = parseFloat(soKW);
            var ketQuaTienDien = calculate(soKW);
            result(ketQuaTienDien,"success");
        }
    }
});