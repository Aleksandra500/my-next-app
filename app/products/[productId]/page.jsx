export default function ProductDetails ({params}) {
    const productId = params.productId
    return(
        <>
        <h1>Details about product {productId}</h1>
        </>
    )
}