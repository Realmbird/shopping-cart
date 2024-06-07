import Nav from './navbar'
import styles from './style/shop.module.css'
import Product from './product'
import { useEffect, useState } from 'react'
import { useOutletContext } from "react-router-dom";
function Shop () {
    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(true)
    const [cart, setCart] = useOutletContext();
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
    const addToCart = (e, item, quantity) => {
        e.preventDefault()
        const list = [...cart]
        for (let i = 0; i < quantity; i++) {
            list.push(item);
        }
        setCart(list)
    }
    return (
        <>
            <div className="shop">
                <div className={styles.catalog}>
                    {/* title, image, price */}
                   
                    {loading && <div>Loading</div>}
                    {response.map((res) => (
                       <Product  key={res.id} id = {res.id} title = {res.title} image = {res.image} price = {res.price} addToCart = {addToCart} />
                    ))}
                </div>
            </div>
        </>
    )
}
export default Shop