import { useState } from "react";
import Nav from "./navbar"
import { Outlet } from "react-router-dom";
function Template () {
    const [cart, setCart] = useState([])
    return(
        <>
            <Nav cart = {cart}/>
            <Outlet context={[cart, setCart]} />
        </>
    )
   
}
export default Template