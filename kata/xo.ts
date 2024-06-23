export function xo(str: string) : boolean {
  return str.match(/[x]/gi)?.length == str.match(/[o]/gi)?.length ? true : false
}


console.log(xo("ooxx")); // => true
console.log(xo("xooxx")); // => false
console.log(xo("ooxXm")); // => true
console.log(xo("zpzpzpp")); // => true // when no 'x' and 'o' is present should return true
console.log(xo("zzoo")); // => false