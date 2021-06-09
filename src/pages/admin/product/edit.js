import React, { useEffect, useState } from 'react'
import { set, useForm } from 'react-hook-form'
import { useHistory, Link, useParams } from 'react-router-dom'
import { API } from '../../../config'
import ProductApi from '../../../api/productAPI'
const EditProduct = ({ onEdit }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const history = useHistory();
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await ProductApi.get(id);
                setProduct(data);
                reset(data)
            } catch (error) {
                console.log(error);
            }
        };
        getProduct()
    }, [])


    const onHandleSubmit = (data) => {

        const uploads = new FormData();
        uploads.append("name", data.name);
        uploads.append("price", data.price);
        uploads.append("description", data.description);
        uploads.append("shipping", data.shipping);
        uploads.append("detail", data.detail);
        onEdit(id, uploads)
        history.push('/admin/product')
        // console.log(data);
    }

    return (
        <div>
            <div className="d-flex justify-content-between items-center">
                <h1>Edit product</h1>

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
                        defaultValue={product.name}
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
                        defaultValue={product.price}
                        {...register('price', { required: true })}
                    />
                    <label htmlFor="price">Gía sản phẩm</label>
                    {errors.price && <span className="text-danger mt-2">Nhập giá sản phẩm</span>}
                </div>
                <div className=" mb-3">
                    <textarea type="text"
                        className="form-control"
                        id="description"
                        placeholder="Mô tả sản phẩm"
                        defaultValue={product.description}
                        {...register('description', { required: true })}
                    ></textarea>

                    {errors.description && <span className="text-danger mt-2">Nhập mô tả sản phẩm</span>}
                </div>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="detail"
                        defaultValue={product.detail}
                        placeholder="Chi tiết sản phẩm"
                        {...register('detail', { required: true })}
                    />
                    <label htmlFor="price">Chi tiết sản phẩm</label>
                    {errors.detail && <span className="text-danger mt-2">Nhập chi tiết</span>}
                </div>
                <div className="mb-3">
                    <p htmlFor="photo">Ảnh sản phẩm</p>
                    <input
                        type="files"
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
        </div>
    )
}

export default EditProduct
