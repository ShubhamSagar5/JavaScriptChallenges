// Programming Question : Hash Tag Generator  

const hashTagGeneartor = (str) => {
    if(str.length > 200 || str.trim().length ===0){
        return false
    }

    let word = str.split(" ")

    // let arr = word.map((curr)=> {
    //     return (
    //         (curr.replace(curr[0],curr[0].toUpperCase()))
    //     )
    // })

    // arr = `#${arr.join("")}`
    // console.log(arr)

    let arr = word.map((curr)=> {
        return (
            (curr.charAt(0).toUpperCase()+curr.slice(1))
        )
    })
    
    arr = `#${arr.join("")}`
    console.log(arr)

}


console.log(hashTagGeneartor("my name is shubham"))
