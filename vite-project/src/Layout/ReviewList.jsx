import ReviewItem from "../Components/ReviewItem"

function ReviewList(review) {

    if(!review || review.length ===0){
        return <div className="container">
            <p>no review yet</p>
        </div>
     }


  return (
    <>
      <div>
        {review.map((item =>(
            <div key={item.id}>
                <ReviewItem review={item} />
                
            </div>
        )))}
      </div>
    </>
  )
}

export default ReviewList
