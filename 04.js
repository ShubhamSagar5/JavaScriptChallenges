// Write a function call checkTriangle that takes three parameters representaing the length of a triangle-----"equilateral" "isoscales" "Scalene"



const checkTriangle = (a,b,c)=> {
    if(a === b && b === c){
        return "Equilateral Triangle"
    }
    if(a===b || b === c || c===a){
        return "Isoscales Triangle"
    }

    return "Scalene Triangle"
}


console.log(checkTriangle(2,2,2))
console.log(checkTriangle(2,1,2))
console.log(checkTriangle(1,2,3))