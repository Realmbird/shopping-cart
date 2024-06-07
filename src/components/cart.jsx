import { useOutletContext } from "react-router-dom";
import Item from "./shop-item";
import styles from './style/cart.module.css'
import { useEffect, useState } from "react";
function Cart () {
    const [cart, setCart] = useOutletContext();
    const removeCart = (e, index) => {
        e.preventDefault()
        const list = [...cart]
        list.splice(index, 1)
        console.log(list)
        setCart(list)
    }
    const checkout = () => {
        setCart([])
    }
    const [total, setTotal] = useState(0)
    const shipping = 25
    useEffect(() => {
        let sub = 0
        cart.forEach((item) => {
            sub += item.price
        })
        setTotal(sub)
    }, [])
    return (
        <div>
        <h2>Your Cart</h2>
            <div className={styles.cart}>
                <div className = {styles.right}>
                    {cart.map((item, index) => (
                    // <li key={index}>{item.title} - ${item.price}</li>
                    <Item key = {item.id.toString() + index} title = {item.title} image = {item.image} price = {item.price} index = {index} removeCart = {removeCart} />
                    ))}
                </div>
                <div className={styles.summary}>
                    <h3>Order Summary: </h3>
                    <p>Sub Total: <span className="dollar">$</span><span>{total}</span></p>
                    <p>Shipping charge: <span className="dollar">$</span><span>{shipping}</span></p>
                    <p className="summary-total">Total: <span className="dollar">$</span><span>{total + shipping}</span></p>
                    <button className={styles.checkout} onClick={checkout}>Checkout</button>
                </div>
            </div>
        </div>
    )
}
export default Cart