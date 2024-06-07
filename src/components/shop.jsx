import Nav from './navbar'
import styles from './style/shop.module.css'
import Product from './product'
function Shop () {
    return (
        <>
            <div className="shop">
                <div className="catalog">
                    {/* title, image, price*/}
                    <Product title = "I'm a product(test)" image = "https://static.wixstatic.com/media/a9ff3b_2dc1e209d10945a7b4329d2328dfcd7b.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a9ff3b_2dc1e209d10945a7b4329d2328dfcd7b.jpg" price = "10" />
                </div>
            </div>
        </>
    )
}
export default Shop