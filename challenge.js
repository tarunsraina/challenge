const e = require("express");

let input = [
  ["or", false],
  [
    "or",
    [
      "or",
      [
        "and",
        true,
        true,
        ["or", false, true, true],
        ["and", true, false, false, true, false, false],
        ["and", true, false],
        false,
        true
      ],
      [
        "or",
        ["and", false, false, false, false, true],
        true,
        ["and", true, true, false, false, true, true]
      ],
      [
        "and",
        ["and", false, true],
        false,
        false,
        ["and", true, false, false, true]
      ],
      true,
      true
    ],
    true,
    true,
    true
  ],
  ["or", false],
  [
    "and",
    [
      "and",
      true,
      [
        "and",
        false,
        false,
        false,
        ["and", false, true],
        ["and", false, true, true],
        false,
        false
      ],
      false,
      true,
      ["and", false, true, false, true, true]
    ],
    false,
    true,
    false,
    ["or", false],
    false,
    [
      "or",
      ["or", true, true, true, true, true, true, true],
      true,
      false,
      ["or", false, false, true, ["or", true, true, true], false, false],
      true,
      ["and", ["or", true, true, false, false], ["or", true]],
      false
    ]
  ],
  [
    "or",
    false,
    true,
    false,
    [
      "and",
      false,
      true,
      true,
      [
        "or",
        false,
        ["and", true, true, true],
        ["and", true, true, true],
        false,
        false,
        ["or", false, true, true, true, false, true],
        ["and", true, true, true]
      ]
    ],
    [
      "and",
      false,
      false,
      false,
      false,
      true,
      false,
      ["and", true, ["and", false, true], ["or", true]]
    ],
    [
      "or",
      false,
      true,
      ["and", false, true, true],
      ["and", false],
      true,
      false,
      [
        "and",
        true,
        ["and", false, true, false],
        false,
        ["and", false, false, false, true],
        true
      ]
    ],
    [
      "and",
      false,
      [
        "or",
        ["or", false, true, false],
        ["or", false, false, true, true, true],
        false,
        true,
        false,
        ["or", true, true, false, false, true, true]
      ],
      false,
      true,
      true
    ],
    [
      "or",
      [
        "and",
        ["and", false, true, true, false],
        true,
        ["and", false, false, false, false]
      ],
      ["or", true],
      true,
      true,
      ["or", true, false, ["and", true, false, true]],
      false
    ]
  ]
]
let ans = []
console.log("hereeeeeeeeeee")
 console.log(typeof input[0][1]);
console.log(input.length)

function solver(inputArr) {
    
    let condition = inputArr[0];

    let j=0;
    if(condition=="or"){
        for(let i=1;i<inputArr.length;i++){
            if(inputArr[i]==true){   
                return true;
            }else if(typeof inputArr[i]=='object'){
              return solver(inputArr[i])
            }
        }
        return false;
    }else{
        for(let i=1;i<inputArr.length;i++){
            
            if(inputArr[i]==false){
                return false;
            }else if(typeof inputArr[i]=='object'){
              return solver(inputArr[i])
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
