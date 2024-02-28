//EXERCISE 1: function expression

function sum(num1,num2) {
    console.log(`${num1} + ${num2} = `,num1+num2);
}
sum(9,10);
//EXERCISE 2: find max

function findMax(array) {
    console.log(`Max of ${array} is `,Math.max(...array))
}
findMax([1,2,30,4,10,100,-2,9,11])
//EXERCISE 3: Higher Order Function
function mathOperation(num1,num2,Callback) {
    console.log(Callback(num1,num2));
    
}
function add(num1,num2) {
    return num1+num2
}
function subtract(num1,num2) {
    return num1-num2
}
function multiply(num1,num2) {
    return num1*num2
}
function divide(num1,num2) {
    return num1/num2
}
mathOperation(20,10,multiply)
//EXERCISE 4: Function as a Parameter

function applyFunction(array,func) {
    console.log('Before ->>', array);
    console.log('After ->>',func(array));
}
function sortArray(array){
    return array.sort((a,b)=> a-b);
}
applyFunction([0,20,2,1,9,10,11],sortArray)
//EXERCISE 5: Callback Functions
function getUserData(id,CallBackFn) {
    const data = fetchToGetUserData(id);
    if(data){
        CallBackFn(data);
    }else{
        console.log(`Could not find user data of user id ${id}`);
    }
    
}

function fetchToGetUserData(id){
    console.log(id);
    if(id==1){
        return {
            userId : 1,
            name: "BackEnd AU01"
        }
    }
    return false
}
getUserData(1,(data)=>console.log("return data ->",data));