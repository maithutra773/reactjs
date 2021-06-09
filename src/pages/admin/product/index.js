import React from 'react'
import { Link } from 'react-router-dom';

const AdminProductPage = (props) => {
    return (
        <div>
            <div className="d-flex justify-content-between items-center">
                <h1>Product Manager</h1>

            </div>
            <div>
                <Link to="/admin/product/add" className="btn btn-primary">Add</Link>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Descriptions</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((product, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td> <img src={`http://localhost:4000/api/product/photo/${product._id}`} height="100px" alt /></td>
                            <td>{product.description}</td>
                            <td>
                                <Link to={`/admin/product/${product._id}`} className="btn btn-primary">Edit</Link>
                                <button className="btn btn-danger" onClick={() => props.onDelete(product._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminProductPage