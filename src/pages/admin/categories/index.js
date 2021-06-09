import React from 'react'
import { Link } from 'react-router-dom';

const AdminCategoryPage = (props) => {
    return (
        <div className="my-20">
            <div className="d-flex justify-content-between items-center">
                <h1 className="font-extrabold text-3xl my-3">Category Manager</h1>
                <div>
                    <Link to="/admin/category/add" className="btn btn-primary">Add</Link>
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Danh mục</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.categories.map((category, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{category.name}</td>
                            <td>
                                <Link to={`/admin/category/${category._id}`} className="btn btn-primary mx-2">Edit</Link>
                                
                                <Link ><button className="btn btn-danger" onClick={() => props.onHandeleDeleteCate(category._id)}>Delete</button></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminCategoryPage