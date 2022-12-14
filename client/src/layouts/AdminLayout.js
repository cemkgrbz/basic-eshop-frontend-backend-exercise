import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function AdminLayout() {
    return ( 
        <div>
            <Header/>
            <Outlet/>

        </div>
    );
}

export default AdminLayout;