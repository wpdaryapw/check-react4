import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function NotFoundPage(){

    let location = useLocation()
    console.log(location)


    let navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/products')
        }, 5000)
    }, [])

    return(
        <div className="not_found">
            <button className="btn" onClick={() => navigate('/products')}>Go to Prod List</button>
            <img src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg"/>
        </div>
    )
}

export default NotFoundPage