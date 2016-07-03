function fibonacci (n) {
    var i;
    var array=[];
    array[0]=1;
    array[1]=1;
    if (n<3)
      return 1;
    else {
        for (i=2; i<=n; i++) {
            array[i]=array[i-2]+array[i-1];
        }
        return array[n-1];
    }
}
var N=Number (prompt("Введіть номер числа Фібоначчі"));
var result=fibonacci(N);
alert (result);