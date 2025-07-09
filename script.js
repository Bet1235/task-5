let firstName = 'Ebere'
let lastName = 'Omeje'
let fullName = firstName + ' ' + lastName;
console.log(fullName.toUpperCase ())
const taskOne = 9;
const taskTwo = 8;
const taskThree = 8;
console.log (taskOne, taskTwo, taskThree)
let score = taskOne + taskTwo + taskThree;
console.log (score)
const result = [taskOne, taskTwo, taskThree];
let sum = 0;
for (let i = 0; i <result.length; i++)
    sum += result[i]
console.log(sum)
// const result = [taskOne, taskTwo, taskThree];
// result++
// console.log(result)
let mean = sum/result.length
console.log(mean)
const average = 8.333334;
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
let subjectScore = '9, 8, 8';
let averageScore = '8.34';
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