function dis(num){
    //document.getElementById("display").value+=val
    $('#display').val($('#display').val()+num);
}

function solve(){
    //document.getElementById("display").value = eval(document.getElementById("display").value)
    $('#display').val(eval($('#display').val()));
}

function clr()
{
    //document.getElementById("display").value = ""
    $('#display').val('');
}
