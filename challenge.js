const e = require("express");

let input = [
  [
    "or",
    [
      "or",
      false,
      true,
      false,
      ["and", true, true, true, true, false, false, false],
      [
        "or",
        true,
        false,
        ["or", true, true, true, true, true, false],
        true,
        ["and", true, false, false, false]
      ]
    ],
    false,
    false
  ],
  ["or", true],
  [
    "and",
    false,
    false,
    ["and", false],
    true,
    false,
    false,
    true,
    [
      "and",
      ["or", ["or", true, true, false, true, false, true], false],
      true,
      ["and", false, false, ["and", true, true, true, false, false, false]]
    ],
    false
  ],
  [
    "and",
    true,
    [
      "and",
      false,
      [
        "or",
        true,
        true,
        ["and", true, false, false, true],
        false,
        ["and", false, false, false],
        ["or", false, true, false],
        ["or", false, false, false, false]
      ],
      false
    ],
    true,
    false,
    [
      "or",
      [
        "and",
        true,
        false,
        ["and", false, true, false, false, false, false],
        ["and", false, true],
        true
      ],
      ["or", false, ["or", false, true, false, true, true]],
      [
        "or",
        ["or", false, false, true],
        false,
        ["or", true, true, true, false],
        false,
        true,
        true
      ]
    ],
    false,
    true,
    false
  ],
  [
    "or",
    ["or", ["and", ["and", true, true]], true, true, false, false],
    true,
    [
      "and",
      [
        "and",
        true,
        ["and", true, true, true, true, true],
        false,
        ["and", false, true, true]
      ],
      true,
      true,
      true
    ],
    false
  ],
  [
    "or",
    [
      "and",
      ["and", false, ["and", false, true, true, false, false], false, false],
      false,
      true,
      false,
      ["and", true, false, true],
      true,
      true
    ]
  ],
  [
    "and",
    [
      "or",
      [
        "or",
        ["or", false, true, true],
        false,
        ["or", true, true, true],
        ["and", false],
        ["or", true, false, true, false],
        ["or", false, true, true, true],
        true
      ],
      false,
      false
    ],
    true,
    true,
    [
      "and",
      true,
      ["and", false, false, false, false],
      [
        "and",
        ["or", false, false],
        true,
        true,
        true,
        ["or", false, true, false, false, true, true]
      ],
      true,
      ["or", ["or", true, false, true, true], false, true],
      false
    ],
    false,
    true,
    ["and", true, true, true]
  ],
  ["and", ["and", false, true, true], false, true, true, true, false],
  [
    "and",
    false,
    [
      "or",
      ["and", false, false, true, ["and", false, true, true]],
      [
        "and",
        false,
        ["or", true, false, true, true],
        ["or", true, true],
        ["or", true]
      ],
      ["and", true, ["and", false], ["and", true, true], true, true, true],
      ["and", ["and", true, false], true],
      false,
      true
    ],
    [
      "and",
      ["and", true],
      true,
      [
        "or",
        false,
        ["and", true, true, true, false, false, false],
        ["or", false, false, true],
        true,
        true
      ],
      true,
      [
        "and",
        true,
        true,
        ["and", true, true, true],
        ["and", false],
        false,
        false,
        true
      ],
      true
    ],
    true,
    false
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
