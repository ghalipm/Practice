function fib(n){
    return (n>=0 & n<=1)?n:fib(n-1)+fib(n-2);
}

let n=10;

for (let i = 0; i < n; i++) {
    console.log(i+' th fib :'+fib(i));
}