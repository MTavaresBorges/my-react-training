import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Cart } from "./pages/Cart.tsx";
import { Catalog } from "./pages/Catalog.tsx";

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/catalog" element={<Catalog />}></Route>
            </Routes>
        </Router>
    )
}