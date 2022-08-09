function fibsReq(num){
    let arr = []
    if (num === 2){
        return [0,1]
    }
    else if (num === 1){
        return [0]
    }
    else {
        return arr.concat(fibsReq(num - 1), fibsReq(num - 1)[num - 2] + fibsReq(num - 1)[num - 3])
    }
}

console.log(fibsReq(8))