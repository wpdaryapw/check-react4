import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Stars from "../components/Stars"

function ProductInfoPage(){


    const {id} = useParams()
    const [product, setProduct] = useState({})


    useEffect(() => {
        fetch('https://fakestoreapi.com/products/'+id)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [id])

    let navigate = useNavigate()

    return(
        <div className="product-info-card">
            {/* {console.log(product.rating)} */}
            <div className="info">
            <h1>{product.title}</h1>
            <img className="image" src={product.image} alt={product.title || "Product Image"} />
            <p>Price: {product.price}$</p>
            <p>Description: {product.description}</p>
            <Stars rating={product.rating}/>
        </div>
            <button className="btn" onClick={() => navigate(-1)}>Go back</button>
        </div>
    )
}

export default ProductInfoPage
