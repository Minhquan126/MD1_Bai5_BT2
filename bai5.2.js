function tiente(){
    let sotien = +document.getElementById('amout').value
    let from = document.getElementById('from').value
    let to = document.getElementById('to').value
    let result = document.getElementById('kq');
    if (from === to){
       result = sotien;
    } else {
        if (from === 'VND') {
            result = sotien / 24000
        } else {
            result = sotien * 24000
        }
    }
    document.getElementById('kq').innerHTML = result + to;
}