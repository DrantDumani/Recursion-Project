function fibsReq(num){
    let arr = []
    if (num === 2){
        return [0,1]
    }
    else if (num === 1){
        return [0]
    }
    else {
        const resArr = fibsReq(num-1)
        return arr.concat(resArr, resArr[num - 2] + resArr[num - 3])
    }
}

console.log(fibsReq(8))