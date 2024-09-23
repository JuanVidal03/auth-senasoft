import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./Private.routes.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";

const AllRoutes = () => {
    return (
        <Routes>
            {/* public routes */}
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            {/* private routes */}
            <Route element={<PrivateRoutes/>}>
                <Route path="/" />
            </Route>
        </Routes>
    );
}

export default AllRoutes;
