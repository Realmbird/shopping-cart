import Nav from './navbar'
import styles from './style/shop.module.css'
import Product from './product'
import { useEffect, useState } from 'react'
function Shop () {
    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(true)
    // fetch on mount
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                setLoading(false)
                setResponse(json)
            }) 
    }, [])
    return (
        <>
            <div className="shop">
                <div className={styles.catalog}>
                    {/* title, image, price */}
                   
                    {loading && <div>Loading</div>}
                    {response.map((res) => (
                       <Product  key={res.id} title = {res.title} image = {res.image} price = {res.price} />
                    ))}
                </div>
            </div>
        </>
    )
}
export default Shop