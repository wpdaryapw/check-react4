function Stars (props){
    const {rating} = props
    const roundedRating = rating ? Math.round(rating.rate) : 0

    const renderStars = () => {
        const stars = []
    
        for (let i = 0; i < 5; i++) {
          const starColor = i < roundedRating ? 'orange' : 'black'
    
          stars.push(
            <span
              key={i}
              style={{ color: starColor }}
            >
              &#9733;
            </span>
          )
        }
    
        return stars
      }
    
      return (
        <div>
          {renderStars()}
        </div>
      )
    }
  
  export default Stars
  
  