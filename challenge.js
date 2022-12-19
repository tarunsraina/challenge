const e = require("express");

let input = [
    ["or", true, ["and", false]],
    ["and", true],
    ["and", false],
    ["or", true, true],
    ["and", true, ["or", false, false, true], false]
];

let ans = []

function solver(inputArr) {
    
    let condition = inputArr[0];

    if(condition=="or"){
        for(let i=1;i<inputArr.length;i++){
            if(inputArr[i]==true){
                return true;
            }
        }
        return false;
    }else{
        for(let i=1;i<inputArr.length;i++){
            if(inputArr[i]==false){
                return false;
            }
        }
        return true;
    }
}

function main(input){
    for(let i=0;i<input.length;i++){
        ans.push(solver(input[i]))
    }
}

main(input)
console.log(ans);
