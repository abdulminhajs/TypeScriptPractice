// can an function be save as a variable?
//Yes we can add function as a variable in JS
const person = {
    
    name: 'max',
    age: 25,
    greet: function() {
        console.log('hi, i am ' + this.name);
    }
}
console.log(person.name);// max
person.greet(); //hi, i am max



//what are anonymous functions in JS? Define there syntax.
// A function which does not have name is called anonymous function.

const add = function(a, b) {
    return a + b;
}

console.log('sum is ' + add(2,3));

//Is JS is synchornous explain it?

console.log('I am 1 line');
console.log('I am 2 line');
console.log('I am 3 line');
setTimeout(() => console.log('I am delayed line'), 2000);//this line will print at last
console.log('I am 4 line');
console.log('I am 5 line');

//what are call back functions in JS?
// Callback function is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of routine or action.

function fetchData(callback){
    setTimeout(() => {
        console.log("data fetched")
        const data = 'Sample data';
        callback(data)
    }, 2000);
}

function processData(data){
    console.log("processing " + data)
}

fetchData(processData);

//using promise concept
const processData1 = (data) => console.log("processing " + data);
const fetchDataUisngPromise = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("data fetched")

            const data = 'sample data';

            resolve(data);

        }, 2000);

    })

}

fetchDataUisngPromise().then(function(data){

    processData1(data)

})

//await iwe can use await also to make wait function till it execute
await fetchData();




