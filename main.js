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
function calculate(diemSo1,diemSo2,diemSo3,diemKV,diemDT,diemChuan){
    var tongDiem = diemSo1 + diemSo2 + diemSo3 + diemKV + diemDT;
    if(diemSo1 == 0 || diemSo2 == 0 || diemSo3 == 0){
        result("tổng điểm là "+tongDiem+" - nhưng vẫn rớt do có điểm 0","danger");
    }else{
        if(tongDiem > diemChuan){
            result("tổng điểm là "+tongDiem+" - chúc mừng đã đậu","success");
        }else{
            result("tổng điểm là "+tongDiem+" - bạn đã rớt","danger");
        }
    }
}

//In kết quả
function result(ketQua, alert){
    var txtKiemTra = getElement("txtKiemTra");
    txtKiemTra.setAttribute("class","alert alert-"+alert);
    txtKiemTra.innerHTML = ketQua;
}


//sư kiện submit
var btnKiemTra = getElement("btnKiemTra").addEventListener("click",function(e){
    e.preventDefault();
    
    var diemChuan  = getElement("inputDiemChuan").value;
    var diemSo1    = getElement("inputDiem1").value;
    var diemSo2    = getElement("inputDiem2").value;
    var diemSo3    = getElement("inputDiem3").value;
    var diemKV     = parseInt(getElement("selectDiemKhuVuc").value);
    var diemDT     = parseInt(getElement("selectDoiTuong").value);

    if(isCheckEmpty(diemChuan) || isCheckEmpty(diemSo1) || isCheckEmpty(diemSo2) || isCheckEmpty(diemSo3)){
        result("chưa nhập thông tin", "danger");
    }else{
        if(!isCheckNumber(diemChuan) || !isCheckNumber(diemSo1) || !isCheckNumber(diemSo2) || !isCheckNumber(diemSo3)){
            result("điểm phải là số", "danger");
        }else{
            diemSo1 = parseFloat(diemSo1);
            diemSo2 = parseFloat(diemSo2);
            diemSo3 = parseFloat(diemSo3);
            calculate(diemSo1,diemSo2,diemSo3,diemKV,diemDT,diemChuan);
        }
    }

});