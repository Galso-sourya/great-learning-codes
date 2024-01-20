let primes=new Set([2,3,5,7,11,13]);
//similar functions are there like in map. size. delete
primes.add(17);
console.log(primes);
primes.add(17);//as 17 is already added, it will not get added further. no double values
console.log(primes);
console.log(primes.has(11));
