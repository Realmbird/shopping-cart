import Nav from "./navbar"
import { Outlet } from "react-router-dom";
function Template () {
    return(
        <>
            <Nav />
            <Outlet />
        </>
    )
   
}
export default Template