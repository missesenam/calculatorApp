const display = document.getElementById('inputfield');
const result = document.getElementById('showresult');
// display value
function displayval(val){
    display.value += val;
}
// clear all
function clearAll(){
    display.value = '';
    showresult.value = '';
}
// delete
function deleteElements(){
    display.value = display.value.toString().slice(0,-1);
    showresult.value = '';
}
// calculate
function calculate(){
    // if (display.value == ''){
    //     showresult.value = '' 
    // }else{
    // showresult.value = eval(display.value)
    // }
    try{
        showresult.value = eval(display.value)
    }
    catch{
        showresult.value = 'Error'
    }
}