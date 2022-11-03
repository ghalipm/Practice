let array;
array=[3,2,5,7,4];

function findMax(array) {
    let max = array[0];
    for (let i = 1; i <array.length; i++) {
        if (max < array[i]) max = array[i];
    }
    return max;
}

console.log(findMax(array));