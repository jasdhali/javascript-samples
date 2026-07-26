function reverseString(str){
    return str.split('').reverse().join('')
}

const orgStr= "jaspal";
const revStr= reverseString(orgStr);

console.log("org -> " + orgStr );
console.log("reversed -> " + revStr );