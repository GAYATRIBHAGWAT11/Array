let subscriber;
const array=[1,2,3,4,5,6,7,8,9,10]
console.log(array[5]);
// push method to add element in array at the end of the array
console.log((array.push(11)))
// unshift similar to push but it add value add the start of the array
console.log((array.unshift(11)));

// pop removes element from the last we dont pass anything in pop
console.log((array.pop()));

// shift removes value from start, and we dont pass anything as parameter
console.log((array.shift()));

array[0]="gayatri"

console.log(array);


const names=["gayatri", "aishwarya", "ekta", "krutika", "niraja", "gayatri", "ekta" ]

names.indexOf("ekta", 3)
// console.log(names)
console.log(names.indexOf("ekta", 3));

// last occurance
console.log((names.lastIndexOf("ekta")))


// include => we can search that any element exist or not & return true or false

console.log(array.includes(6, 7));

// includes only work in primitive dattypes not in reference datatype for eample

let channels=[{
    name:'apna college'
    subscriber: 10000
}, {
    name:'apni kasksha'
    subscriber: 10000
}, {
    name:'aman dhattrwal'
    subscriber: 10000
}]
console.log(channels.includes({
    name:'apni kasksha'
    subscriber: 10000
}));

// it exist still it is returning false bcz it doesn't work with refernece datatype


