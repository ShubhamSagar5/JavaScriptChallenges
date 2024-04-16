// Count Occurance In String (Find Out that How Many Times Single-Character is Ocuured in String )


const countChar = (word,char) => {

    word = word.toLowerCase()
    char = char.toLowerCase()

    let arr = word.split("")
    console.log(arr)

    let result = arr?.reduce((acc,curr)=>{
        if(curr === char){
            acc++
        }
       
    },0)



    return result
    

}

console.log(countChar("apple","p"))