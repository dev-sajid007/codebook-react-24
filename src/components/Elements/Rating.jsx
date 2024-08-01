
const Rating = ({ rating }) => {

  const ratingArr = new Array(5).fill(false);

  for (let i = 0; i < rating; i++) {
    ratingArr[i] = true;
  }

  
  return (
    <>
        {ratingArr.map((value,idx) => (
            value ? (
                <i key={idx} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
            ):(
                <i key={idx} className="text-lg bi bi-star text-yellow-500 mr-1"></i>
            )
        ))}
    </>
  );
};

export default Rating;
