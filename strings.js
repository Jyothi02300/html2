//strings concepts
 //methods 
let str1="welcome to the college  "
let str2="campus"
console.log("the count of length",str1.length);//find the length of string
console.log(str1[6])//individual character know use idx value
console.log("uppercase:",str1.toUpperCase())//upper
console.log("lowercase",str1.toLowerCase())//lower
console.log(str1.concat(str2))//join the two strings
console.log("trime is used for remove the stating and ending space:",str1.trim());
console.log(str2.replace("campus","main"))//replace with new value of string
console.log(str1.charAt(3))//idx value
console.log(str1.slice(0,3))// print the range between the particular letter
console.log(str1.replace("welcome to the college",""))// replace all

let name="We are IT student from mrec"
let val="main campus"
console.log("the length of th string",name.length)
console.log(name[5])
console.log("uppercase:",name.toUpperCase())
console.log("lowercase:",name.toLowerCase())
console.log(name.concat(val))
console.log(name.charAt(4))
console.log(name.slice(0,5))
console.log(val.replace("main",""))


let sports="cricket"
let dem="leagues"
console.log(`i will play ${sports} everyday to select in tournament ${dem} like IPL`)

let fullname="jyothi"
let namelength=fullname.length;
let username=`@${fullname}${namelength}`;
console.log(username)

let str="this is jyothi"
console.log(str.replace(/\s+/g,"_"))

function isThirdCharVowel(str) {
    if (str.length < 3) {
        return false; // or handle differently if string too short
    }
    
    const thirdChar = str[2].toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    return vowels.includes(thirdChar);
}

let str3="mrec main campus"
let vowels="a,e,i,o,u"
if(str3[3]=vowels){
    console.log("the third character a given string is a vowel")
}
else{
    console.log("the third character a given string is not a vowel")
}

let str4="mrec main campus"
console.log(str4.charAt(0).toUpperCase()+str4.slice(1).toLowerCase())

let str5="my first Blog post "
console.log(str5.toLowerCase().replaceAll(" ","-"))


let str6="madam"
let str7="screen"
console.log(str6.split("").reverse().join(""))
console.log(str7.split("").reverse().join(""))

let marks=[34,78,45,23,38]
let sum=0
  for(let i=0;i<marks.length;i++){
    sum =sum + marks[i]
  }

  let average=sum/marks.length
  console.log("average marks:",average)

//array method
  let num=[1,5,7,8,9,28,45]
  let num1=[20,40]
  console.log("original array",num);
  num.push(36)
  console.log("after push",num);//add at end value
  console.log("after pop",num.pop()) //removed the last element
  console.log("convert to string",num.toString())
  let val1=num.concat(num1);
  console.log("join the two arrays",val1)

  console.log(num.shift())//removed from starting element
  let va2=num.unshift(60)
  console.log(num.unshift(60))// add the value at 0 index

  console.log(num.slice(2,4))// range between the index value

  console.log(num.splice(2,7,90))
  console.log(num.sort)


  