import styles from './style/product.module.css'
import { useState } from 'react';
import PropTypes from 'prop-types';
function Item ({title, image, price, index, removeCart}) {
    
    return(
        <div className={styles.product}>
            <h3>{title}</h3>
            <img src = {image} alt = {title} />
            <p className="price"><span>$</span>{price}</p>
            <form onSubmit={(e) => removeCart(e, index)} className={styles.interactions}>
                <button type='submit'>Remove from Cart</button>
            </form>
        </div>
    )
}
Item.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    index: PropTypes.number,
    removeCart: PropTypes.func.isRequired
  };
export default Item