import React from 'react'
import { NavLink } from 'react-router-dom'

const LayoutAdmin = (props) => {
    return (
        <div className="row">
            {/* <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <NavLink className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/">FAKE Shop</NavLink>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <NavLink exact className="nav-link " to="/">Trang chủ</NavLink>
                    </li>
                </ul>
            </header> */}

            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-gray-600 sidebar collapse border border-black-700">
                <div className="col-4">

                    <div className="position-sticky pt-3">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <NavLink exact className="nav-link " to="/admin/dashboard">DashBoard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link " to="/admin/product">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link " to="/admin/category">Category</NavLink>
                            </li>
                            <li className="nav-item">

                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
            <div className="col-8">
                {props.children}
            </div>
        </div>
    )
}

export default LayoutAdmin
