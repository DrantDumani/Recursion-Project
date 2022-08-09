function fib(num){
    const seq = [];
    let prevNumA = 0;
    let prevNumB = 1;

    if (num > 1) {
        seq.push(prevNumA, prevNumB)
    }
    else if (num > 0) {
        seq.push(prevNumB)
    }
    else {
        return seq
    }
    for (let i = 2; i < num; i++){
        let next = prevNumA + prevNumB;
        seq.push(next)
        prevNumA = prevNumB;
        prevNumB = next;
    }
    return seq
}

console.log(fib(8))