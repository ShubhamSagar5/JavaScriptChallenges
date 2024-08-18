//1.Print all even numbers 

// for(let i = 0; i<=100 ; i++){
//     if(i%2 === 0){
//         console.log(i)
//     }
// }


//2.guess the number 

// const myNu = 5

// let userNumber = prompt("Enter Number")

// while(myNu != userNumber) {
//     userNumber  = prompt('you guess the wrong the number ')
// }

// console.log('you guess the right number ' + userNumber)



//3.The Name Generator 

// let userName = prompt("Enter your Name") 

// let res = "@" + userName + userName.length 

// console.log(res) 


// 4.Find out the average of marks of entire class 

// const mark = [ 22,25,36,4,5,87,9]

// let totalMark = 0 

// for(let m of mark){
//     totalMark = totalMark + m
// }
// const average = totalMark / mark.length 

// console.log('average mark of student is ' + average.toFixed(2)) 


//5.find the 10% off on given array 

// let arr = [50,60,70,100,200] 



// for(let i = 0 ; i < arr.length;i++){
//     let offerValue = arr[i] 

//     let calac = offerValue / 10 

//     offerValue = offerValue - calac 

//     arr[i] = offerValue

// }

// console.log(arr)


//6.create an array and apply below method 

// let company = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"] 

//  company.splice(2,1,"ola")
 

// console.log(company)

//-------------------------------------****************---------------------------------------

//Function 

//1.write a function which is return the vowles from string 


// function vowles (str){
//     let count = 0
//     for(let i of str){
//         if(i === 'a' || i ==='e'|| i ==='i'|| i ==='o'|| i ==='u'){
//             count++
//         }
           
//         }
//     console.log(count)
//     }

//     vowles('apple')


// const arrVowles = (str) => {
//     let count = 0
//     for(let char of str){
//         if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//             count++
//         }
//     }
// return count
// }


// console.log(arrVowles('aaeiou'))

//2.Print the squares for each number

// let number = [1,2,3,4,5,6] 

// const squaresArr = (number) => {
//     let newArr = []
//     number.forEach((val)=>{
//         newArr.push(val*val)
//     })
//     return newArr
// }

// console.log(squaresArr(number))


//3.filter the marks of students which have scored 90 

// const marks = [20,60,6,0,80,90,99,110]

// const user = marks.filter((val)=>{
//     return val >= 90
// })

// console.log(user)

//4.create an array based on user input 

// const nu = prompt("Enter the number") 

// let newArr = [] 

// for(let i = 1;i <=nu;i++){
//     // newArr.push(i)
//     newArr[i-1] = i
// }

// console.log(newArr) 

// const sum = newArr.reduce((prev,curr)=>{
//     return prev + curr
// })
// console.log(sum)

// const fact = newArr.reduce((prev,curr)=>{
//     return prev* curr
// })
// console.log(fact)
