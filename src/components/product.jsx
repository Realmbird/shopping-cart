import styles from './style/product.module.css'
import { useState } from 'react';
function Product ({title, image, price}) {
    const [quantity, setQuantity] = useState(0);
    const increaseQuantity = (e) => {
        e.preventDefault();
        setQuantity((quantity) => quantity + 1)
    }
    const decreaseQuantity = (e) => {
        e.preventDefault();
        setQuantity((quantity) => quantity - 1)
    }
    const changeQuantity = (e) => {
        // const input = Math.max(0, Number(e.target.value));
        const input = e.target.value
        if (input != ""){
            setQuantity(parseInt(input));
        }else {
            setQuantity(0);
        }
    }
    const addToCart = (e) => {
        e.preventDefault()
    }
    return(
        <div className={styles.product}>
            <h3>{title}</h3>
            <img src = {image} alt = {title} />
            <p className="price"><span>$</span>{price}</p>
            <form onSubmit={addToCart} className={styles.interactions}>
                <div className ={styles.quantity}>
                    <button onClick={decreaseQuantity}>-</button>
                    <input value = {quantity} onChange={changeQuantity} />
                    <button onClick={increaseQuantity}>+</button>
                </div>
                <button type='submit'>Add to Cart</button>
            </form>
        </div>
    )
}
export default Product