// Odds && evens

const array = [1,2,3,4,5,6,7,8,9,10]

function oddEven (arr){
    const oddArr = [];
    const evenArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenArr[evenArr.length] = arr[i]
        }else{
            oddArr[oddArr.length] = arr[i]
        }
    }
    console.log(oddArr,evenArr)
}

oddEven(array)


// calculate numbers
const arrayNums = [1,2,3,4,5]

function sumElements(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    console.log(sum)
}

function differenceElements (arr){
    let difference = 0;
    for(let i = 0; i < arr.length; i++){
        difference -= arr[i]
    }
    console.log(difference)
}

function multipleElements(arr){
    let multiple = arr[0];
    for(let i = 1; i < arr.length; i++){
        multiple *= arr[i]
    }
    console.log(multiple)
}


function divisionElements (arr){
    let division = arr[0];
    for(let i = 1; i < arr.length; i++){
        division /= arr[i]
    }
    console.log(division)
}

sumElements(array);
differenceElements(array);
multipleElements(array);
divisionElements(array)



// String

function cutText(text, str) {
    let cutedText = '';
    let tempCuted = '';
    for (let i = 0, j = 0; i < text.length; i++) {
        if(str[j] === text[i]){
            tempCuted += text[i]
            j++
        }else{
            if(j !== str.length){
                cutedText += tempCuted
            }
            cutedText += text[i]
            tempCuted = ''
            j = 0
        }
    }
  console.log(cutedText)
  }



cutText('this is some text', 'is')

// Objects

const obj = {
    name:'vahe',
    lastName:'chopuryan',
    firstName:'vahe',
    lastsName:'vahe',
}


function invertObj (obj){
    let invertedObject = {}
    for(let key in obj){
            if( invertedObject[obj[key]]){
                if( Array.isArray( invertedObject[obj[key]])){
                    invertedObject[obj[key]].push(key);
                } else {
                    invertedObject[obj[key]] = [invertedObject[obj[key]], key];
                }
            } else {
                invertedObject[obj[key]] = key
            }
        
    }
    console.log(invertedObject)
}

invertObj(obj)

function shallowCopare(a,b){
    for(let key in a){
        if(a[key] !== b[key] || !(key in b)){
            return false
        }
    }
    for(let key in b){
        if(b[key] !== a[key] || !(key in a)){
            return false
        }
    }
    return true
}
const obj2 = {
    a:{}
  }
  const obj1 = {
     a:{}
  }
  
  console.log(shallowCopare(obj,obj1))
