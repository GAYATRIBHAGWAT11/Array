// let inputArray=[1,3,4,3,2,5,7,1];
// let length=inputArray.length;
// // console.log(length);
// for(let i=0;i<length;i++){
//     let j;
//     for( j=0;j<length;j++){
//         if(i!=j && inputArray[i]==inputArray[j]){
//             console.log("true");
//             break;
//         }
//     }
//     if(j==length){
//         console.log(inputArray[i]);
//     }
// }


function nonRepeatingElement(inputArray){
    // let inputArray=[1,3,4,3,2,5,7,1];
    let length=inputArray.length;
    // console.log(length);
    for(let i=0;i<length;i++){
        let j;
        for( j=0;j<length;j++){
            if(i!=j && inputArray[i]==inputArray[j]){
                console.log("true");
                break;
            }
        }
        if(j==length){
            return inputArray[i];
        }
    }
}
console.log(nonRepeatingElement([1,3,4,4,3,2,5,7,1]));