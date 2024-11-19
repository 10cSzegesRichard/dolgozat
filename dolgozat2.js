function createArrayOfTiers(num) {
    let x = '';
    return [...num + ''].map((value)=> {
      return x += value;
    });
}


function myParseInt(str) {
    return /^\d+$/g.test(str.trim()) ? +str : NaN;
  }

  
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }


function factorial(n){
    return n ? n * factorial(n-1):1;
  }
