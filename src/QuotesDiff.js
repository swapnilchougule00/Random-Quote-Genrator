import React, { useState } from 'react'
import data from './data'

function QuotesDiff() {

    const [index,setIndex] = useState(1)
    const lenght = data.length -1
    const [quote ,setQuote] = useState(data[index])


    const Next = ()=>{
        setIndex(index +1)
        if (index>9){
            setIndex(0) 
        }
            setQuote(data[index])
        
    }

    const prev = ()=>{
        
        setIndex(index -1)
        if (index==0){
            setIndex(lenght) 
        }
            setQuote(data[index])
        
    }




    console.log(index)

  return (
    <div className="title">
    <h1>Random Quote Genrator</h1>
      <div className="main">
        <div className="quote">
          <h2>{quote.quote}</h2>
        </div>

        <h3>{quote.auther}</h3>
        <button onClick={() => prev()}>Prev</button>

        <button onClick={() => Next()}>Next</button>
      </div>
    </div>
  )
}

export default QuotesDiff
