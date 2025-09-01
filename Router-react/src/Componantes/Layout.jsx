import { Link, Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/aboutus">Aboutus</Link>
                <Link to="/contactus">Contactus</Link>
            </nav>
            <Outlet/>
        </>
    );
}
export default Layout;