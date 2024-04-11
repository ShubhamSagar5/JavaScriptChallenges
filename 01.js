




const Sentence = " This is thapa technical javascriptChallege series in that he cover 100 question in 100 days "

// First Way
const findOutLongestString = (str) => {

    if(str.trim().length === 0){
        return false
    }

    let word = str.trim().split(" ")
    word = word.sort((a,b)=>(a.length - b.length))

    console.log(word.at(-1))

    // const result = word.length - 1

    // console.log(word[result])
}

console.log(findOutLongestString(Sentence))


// 02 ---reduce 


const findLongestString = (str) => {

    if(str.trim().length === 0){
        return false
    }

    let word = str.trim().split(" ")

  return  word.reduce((acc,curr)=>(curr.length > acc.length ? curr : acc),"")

    console.log(word)
}

console.log(findLongestString(Sentence))

