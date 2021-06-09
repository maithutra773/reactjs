
import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, Link } from 'react-router-dom'
const AdminProductAddPage = ({ onAdd, categories }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const onHandleSubmit = (data) => {

        const uploads = new FormData();
        const image = document.querySelector("#photo").files[0];
        uploads.append("name", data.name);
        uploads.append("price", data.price);
        uploads.append("description", data.description);
        uploads.append("shipping", data.shipping);
        uploads.append("category", data.category);
        uploads.append("photo", image, data.photo);
        onAdd(uploads)
        history.push('/admin/product')
        console.log(data);
    }
    return (
        <div>
            <div className="d-flex justify-content-between items-center">
                <h1>Product Add</h1>
                <div className="mt-3">
                    <Link to="/admin/product" className="btn btn-primary">Quay lại</Link>
                </div>
            </div>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-floating mb-3 mt-3">
                    <input type="text"
                        className="form-control"
                        id="product-name"
                        placeholder="Tên sản phẩm"
                        {...register('name', { required: true })}
                    />
                    <label htmlFor="product-name">Tên sản phẩm</label>
                    {errors.name && <span className="text-danger mt-2">This field is required</span>}
                </div>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="price"
                        placeholder="giá sản phẩm"
                        {...register('price', { required: true })}
                    />
                    <label htmlFor="price">Gía sản phẩm</label>
                    {errors.price && <span className="text-danger mt-2">Nhập giá sản phẩm</span>}
                </div>
                <div className=" mb-3">
                    <textarea type="text"
                        className="form-control"
                        id="product-desc"
                        placeholder="Mô tả sản phẩm"
                        {...register('description', { required: true })}
                    ></textarea>
                    <label htmlFor="product-desc">Mô tả</label>
                    {errors.description && <span className="text-danger mt-2">Nhập mô tả sản phẩm</span>}
                </div>
                <div className="mb-3">
                    <label for="product-category" className="form-label">Danh mục:</label>
                    <select className="mb-3 ml-3" aria-label="Default select example"
                        id="product-category"
                        placeholder="Danh mục"
                        {...register('category', { required: true })}
                    >
                        {
                            categories.map((category, index) => {
                                return (
                                    <option value={`${category._id}`} key={`${index}`} >{category.name}</option>
                                )
                            })
                        }
                    </select>
                    {errors.category && <span className="text-danger mt-2">This fied is required</span>}
                </div>
                <div className="mb-3">
                    <p htmlFor="photo">Ảnh sản phẩm</p>
                    <input
                        type="file"
                        className="form-control"
                        id="photo"
                        {...register('photo')}
                    />
                    {errors.photo && <span className="text-danger mt-2">Chọn  ảnh</span>}

                </div>
                <div className="mb-3">
                    <input type="checkbox"{...register('shipping')} />Shipping
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div >
    )
}

export default AdminProductAddPage
