console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
let partsNeeded = 40
console.log('1. Number of partsNeeded:',partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
let supplyChanges = [3,5,-6,0,7,11]
console.log('2. Array of supplyChanges:',supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array

console.log('3. Second supplyChange is:',supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
supplyChanges.pop();
console.log('4. Removed item:',supplyChanges);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
supplyChanges.push(25);
console.log('5. Adding 25 to supplyChanges.',supplyChanges);


// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 

for(let sup in supplyChanges){
    if( supplyChanges[sup] >0 ){
        console.log('Added ',supplyChanges[sup],' Parts')
    }
    else if(supplyChanges[sup] === 0){
        console.log('No Change')
    }
    else(console.log('Removed ',supplyChanges[sup],' Parts'))       
}

console.log('6. Showing supplyChanges...');


// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 

for(let sup1 of supplyChanges){
    if( sup1 >0 ){
        console.log('Added ',sup1,' Parts')
    }
    else if(sup1 === 0){
        console.log('No Change')
    }
    else(console.log('Removed ',sup1,' Parts'))

}
console.log('7. Showing supplyChanges with "for of" loop');



// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.

// [3,5,-6,0,7,11]  expected 20
let total = 0
for( let mth in supplyChanges){
    console.log(supplyChanges)
    console.log(total,'+',supplyChanges[mth], "=")
    total += supplyChanges[mth]
    console.log(total)
}

console.log('8. Total supplies available is:',total);

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.

let extra = 572
let box = 0
while(extra > 0){
    console.log(extra, box)
    extra -=7
    box++
    console.log(extra, box)
    
}
console.log('a total of',box,"box's were filled and there are", extra * -1,"remaining items which were not packed")
console.log('9. Filling boxes with a "while" loop');

/////////////////////////////////////////////////////////////////////////////////////
/*
//note loop from previous assingment strech goal. 

let color = ['yellow','orange','green'];
console.log(color);
// expected is a string yellow and orange and green 

let colorText = ''
let colorIndex = 0

for(let i = 0; i < color.length; i++) {
    console.log(color[i]);
    if (i === color.length -1){
        colorText += `${color[i]}`; 
    }
    else {
        colorText += `${color[i]} and `; //use a template literal = colorText += color[i] + ' and ';
}}
console.log(colorText);

//same with for of 
for(let clr of color){
    if(colorIndex === color.length -1){
        colorText += color}
    else {
        colorText += color + ' and '} 
    colorIndex ++;
}
//////////////////////////////////////////////////////////////////////////////////////

//while loop notes 

let food = ['salad','pizza','chicken']

let max = food.length;
let start = 0

while(start < max) {
    console.log(food[start]);
    start += 1 //avoids while loop 
}
*/