import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Stars from "../components/Stars"


function ProductsListPage(){


    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    return(
        <div className="product-info-container">
            <div className="product-info-item ">
            {products.map(elem => 
                    <div className="product-block">
                        <Link to={'/product/' +elem.id} key={elem.id}>
                        <h1>{elem.title}</h1>
                        <Stars rating={elem.rating}/>
                </Link>
                    </div>)}
            </div>
        </div>
    )
}

export default ProductsListPage