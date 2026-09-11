const countA = {};
const countB = {};

const strA = "tanishk";
const strB = "tanishk";


// create frequency arrays
for (let char of strA){
  countA[char] = (countA[char] || 0) + 1; 
}

for (let char of strB){
  countB[char] = (countB[char] || 0) + 1; 
} 

let invalidAnagramBool = false;


// compare the frequency  objects

for (let key in countA){
  if (countA[key] !== countB[key]){
    invalidAnagramBool = true;
  } 
}


if (!invalidAnagramBool){
  console.log("valid anagram");
} else {
  console.log("Invalid anagram");
}