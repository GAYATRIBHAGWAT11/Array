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

// let channels=[{
//     name:'apna college'
//     subscriber: 10000
// }, {
//     name:'apni kasksha'
//     subscriber: 10000
// }, {
//     name:'aman dhattrwal'
//     subscriber: 10000
// }]
// console.log(channels.includes({
//     name:'apni kasksha'
//     subscriber: 10000
// }));

// it exist still it is returning false bcz it doesn't work with refernece datatype


let names1=["gayatri", "aishwarya", "ekta", "krutika", "niraja", "gayatri", "ekta" ]
let names2=[1,2,3,4,5]

console.log(names1.concat(names2));

// slice=> removes value, slice(start, end)
console.log(names1.slice(2,4));
// return ekta and krutika

// spread operator=> add arrays

let names3=[...names1,...names2]
console.log(names3);

// for loop

for(let i=0;i<names.length;i++){
    console.log(names[i]);
}


// for of

for(let name of names){
    console.log(names);
}

// for each

// names.forEach(function(names,index)){
//     console.log(name, index);
// }


// join

let student=['g','a','y', 'u']
console.log(student.join('_'));

// split

// console.log(student.split('_'));


// splice

console.log(student.splice(0, 1));