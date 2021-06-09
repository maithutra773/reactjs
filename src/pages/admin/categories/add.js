import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const AdminCategoryPage = ({ onAddCategory }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const onHandleSubmit = (data) => {
        
        const cate = new FormData();
        cate.append("name", data.name);
        //console.log(data);
        onAddCategory(cate,data);
        history.push('/admin/category')
    }
    return (
        <div className="my-20">
            <h1 className="font-medium text-3xl my-7">Category Add</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="category-name"
                        placeholder="Tên danh mục"
                        {...register('name', { required: true })}
                    />
                    <label htmlFor="category-name">Tên danh mục</label>
                    {errors.name && <span className="text-danger mt-2">This field is required</span>}
                </div>
                <button type="submit" className="btn btn-primary">Add Category</button>
            </form>

        </div>
    )
}

export default  AdminCategoryPage