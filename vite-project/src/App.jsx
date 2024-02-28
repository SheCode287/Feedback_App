
import Header from "./Layout/Header"
import { useState } from "react"
// import { data } from "./Components/Data"
import data from "./data/reviewData"
import ReviewItem from "./Components/ReviewItem"

function App() {
 const [review, setReview] = useState(data)
  

  return (
    <>
      <Header text='Review Application'/>
       <div className="container"> 
           <ReviewList reviews={review}/> 
           
           
           
       </div>
    </>
  )
}

export default App
