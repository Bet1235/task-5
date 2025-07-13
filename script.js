let firstName = 'Ebere'
let lastName = 'Omeje'
let fullName = firstName + ' ' + lastName;
console.log(fullName.toUpperCase ())
 
const initialName = 'Ebere'
const finalName = 'Omeje'
const completeName = initialName + ' ' + finalName;
console.log(completeName.toLowerCase ())

var startName = 'Ebere'
var finishName = 'Omeje'
var internName = startName + ' ' + finishName;
console.log(internName)
 
 

const taskOne = 9;

const taskTwo = 9;

const taskThree = 8;

console.log(taskOne, taskTwo, taskThree)

// let taskOne = 9;

// let taskTwo = 9;

// let taskThree = 8;

// console.log(taskOne, taskTwo, taskThree)

// var taskOne = 9;

// var taskTwo = 9;

// var taskThree = 8;

// console.log(taskOne, taskTwo, taskThree)



let score = taskOne + taskTwo + taskThree;
console.log(score)

const result = [taskOne, taskTwo, taskThree];
let sum = 0;
for (let i = 0; i <result.length; i++)
    sum += result[i]
console.log(sum)

let mean = sum/result.length
console.log(mean)

const average = '8.666667';
if(average>=9){
    console.log('A')
}else if(average>=8){
    console.log('B')
}else if(average>=7){
    console.log('C')
}else if(average>=6){
    console.log('D')
}else if(average<6){
    console.log('E')
}

let firtName = 'Ebere';
let surName = 'Omeje';
let subjectScore = '9, 9, 8';
let averageScore = '8.67';
let grade = 'B';
let message = 'could do better.'
let answer = `I am ${firstName} ${surName} and my task scores are ${subjectScore} with an average of ${averageScore} giving me a ${grade} but I think I ${message}`;
console.log(answer)

const grades = 'B'
switch(grades){
    case 'A':
    console.log('Excellent performance!');
    break;
    case 'B':
    console.log('Great job! Keep aiming high.');
    break;
    case 'C':
    console.log('Good effort. Try to improve.');
    break;
    case 'D':
    console.log("You're close. Keep working at it");
    break;
    case 'E':
    console.log("Don't give up.You can do better next time.");
    break;
    default:
        console.log('invalid grade')
}