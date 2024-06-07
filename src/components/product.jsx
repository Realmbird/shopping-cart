import styles from './style/product.module.css'
import { useState } from 'react';
import PropTypes from 'prop-types';
function Product ({id, title, image, price, addToCart}) {
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

    return(
        <div className={styles.product}>
            <h3>{title}</h3>
            <img src = {image} alt = {title} />
            <p className="price"><span>$</span>{price}</p>
            <form onSubmit={(e) => addToCart(e, {id, title, image, price}, quantity)} className={styles.interactions}>
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
Product.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    addToCart: PropTypes.func.isRequired,
  };
export default Product