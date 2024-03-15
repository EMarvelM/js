#!/usr/bin/node

function isIsogram(str){
    //...
    let coun = 0;
    stri = str.split('');
    stri.forEach(
        ele => { coun += stri.filter(element => element === ele).length }
    )
    if (coun > str.length) {return false} else { return false }
}

console.log(isIsogram("ada"));
