import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductAPI from './api/productAPI';
import Routers from './Routers';
import CategoryAPI from './api/categoryAPI';
function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    // call api
    const getTodos = async () => {
      try {
        const { data: products } = await ProductAPI.getAll();
        //console.log(products.data);

        setProducts(products.data)


        const {data : categories } = await CategoryAPI.getAll();
        setCategory(categories.categories);
        
      } catch (error) {
        console.log(error)
      }
      
    }
    getTodos();
  }, [])
  
  const onHandleAdd = async (product) => {
    console.log(product) // { name : 'new product', price: 200 }
    try {
      await ProductAPI.add(product);
      setProducts([
        ...products,
        product
      ]);
    } catch (error) {
      console.log(error)
    }

  }
  const onHandleEditProduct = async (id, product) => {
    try {
      const { data } = await ProductAPI.update(id, product);
      const newProducts = products.map(item => (item._id === data._id ? data : item));
      console.log('newProducts', newProducts);
      setProducts(newProducts)

    } catch (error) {
      console.log(error)
    }
  }
  const onHandleDelete = async (id) => {
    try {
      await ProductAPI.remove(id);
      const newProducts = products.filter(product => product._id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log(error)
    }

    // console.log(todos);
  }
  const onHandleAddCategory = async (category) => {
    console.log(category)
    try {
      const { data } = await CategoryAPI.add(category);
      setCategory([
        ...categories,
        data
      ]);
    }catch (error) {
      console.log(error);
    }
  }
  const onHandeleDeleteCate = async (id) => {
    // let confirmRemove = window.confirm('bạn có chắc muốn xóa danh mục này')
    // if (confirmRemove) {
      try {
        await CategoryAPI.remove(id)
        const newCate = categories.filter(category => category._id !== id);
        setCategory(newCate)
      } catch (error) {
        console.log(error);
      
    }
  }

  return (
    <div className="container">
      {/* <TodoForm onAdd={onHandleAdd} />
      <TodoList data={todos} onDelete={onHandleDelete} /> */}
      <Routers products={products} onDelete={onHandleDelete} 
      categories={categories} 
      onAdd={onHandleAdd} onEdit={onHandleEditProduct} 
      deleteCate={onHandeleDeleteCate}
      onAddCategory={onHandleAddCategory}/>
    </div>
  );
}

export default App;