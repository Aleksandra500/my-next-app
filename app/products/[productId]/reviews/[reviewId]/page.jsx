export default function ProductReview ({params}) {
    const {productId, reviewId} = params
    return(
 
        <h1>Review {reviewId} for products {productId}</h1>
    )
}