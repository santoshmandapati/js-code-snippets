const arr = [[1, 2], [2, 3], [4, 5]];

//arr.flat() === [1, 2, 2, 3, 4, 5]

let flatArr = [];

const flat = (arr) => {
    if(typeof arr === "number") {
        flatArr.push(arr);
    } else if(Array.isArray(arr)) {
        for(let i = 0; i < arr.length; i++) {
            if(typeof arr[i] === "number") {
                flatArr.push(arr[i]);
            } else {
                flat(arr[i]);
            }
        }
    }
}

flat([[1,2], [3, 4], 5, [5, 6]]);
console.log(flatArr);
