import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,

} from 'react-router-dom';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import NotFoundPage from './pages/404';
import Header from './components/Header';
import LayoutAdmin from './layouts/admin';
import SignUp from './user/SignUp';
import SignIn from './user/SignIn';
import LayoutWebsite from './layouts/website';
import ProductDetailPage from './pages/product-detail';
import AdminProductPage from './pages/admin/product';
import AdminProductAddPage from './pages/admin/product/add';
import Contact from './pages/contact'
import AdminCategoryPage from './pages/admin/categories';
import EditProduct from './pages/admin/product/edit';
import Products from './components/Products';
import AdminCategoryAddPage from './pages/admin/categories/add';
const Routers = (props) => {
    // { products: []}
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/admin/:path?/:path?">
                        <LayoutAdmin>
                            <Switch>
                                <Route exact path="/admin">
                                    <Redirect to="/admin/dashboard" />
                                </Route>
                                <Route exact path="/admin/dashboard">
                                    Dashboard
                                </Route>
                                <Route exact path="/admin/product">
                                    <AdminProductPage {...props} />
                                </Route>
                                <Route exact path="/admin/category">
                                    <AdminCategoryPage {...props} />
                                </Route>
                                <Route exact path="/admin/product/add">
                                    <AdminProductAddPage {...props} />
                                </Route>
                                <Route exact path="/admin/category/add">
                                    <AdminCategoryAddPage {...props} />
                                </Route>
                                <Route exact path="/admin/product/:id">
                                <EditProduct {...props} />
                            </Route>

                                <Route exact path="/admin/users">
                                    Users Manager
                                </Route>
                            </Switch>
                        </LayoutAdmin>
                    </Route>
                    <Route>
                        <LayoutWebsite >
                            <Switch>
                                <Route exact path="/">
                                    <HomePage {...props} />
                                </Route>
                                <Route exact path="/about">
                                    <AboutPage />
                                </Route>
                                <Route path="/signup">
                                    <SignUp />
                                </Route>
                                <Route path="/signin">
                                    <SignIn />
                                </Route>
                                <Route path="/contact">
                                    <Contact />
                                </Route>
                                <Route path="/product/:id">
                                    <ProductDetailPage />
                                </Route>
                                <Route path="/product">
                                    <Products />
                                </Route>
                                
                                <Route path="*">
                                    <NotFoundPage />
                                </Route>
                            </Switch>
                        </LayoutWebsite>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Routers
