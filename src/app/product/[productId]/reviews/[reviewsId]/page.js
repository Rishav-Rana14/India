import { notFound } from "next/navigation";

export default function ProductReviews ({params}) {
    if(parseInt(params.reviewsId)> 500){
        notFound();
    }
    return <h1> Reviews {params.reviewsId} product for {params.productId}</h1>
}