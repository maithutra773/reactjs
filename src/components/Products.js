import React  from 'react';
import { Link } from 'react-router-dom';

// const Products = ({products,onDelete}) => {
//     //console.log(products);
//     const remove = (id)=>{
//         console.log(id)
//         onDelete(id)
//     }
const Products = (props)=>{
  return (
      <div>
          {/* <ul className="list-group grid grid-cols-4 gap-4 my-12">
        
              {products.length>0 ? products.map((todo, index) => {
                  return  <div className="">
                            <div className="card" style={{width: '18rem'}}>
                                <img src="https://i.pinimg.com/564x/dc/4d/3a/dc4d3a05064a5b87f1f7922fcad7c873.jpg" className="card-img-top" alt="" />
                                <div className="card-body">
                                <Link to={`/product/${todo._id}`}>{todo.name}</Link>
                                <h5 className="my-2">Giá : {todo.price}</h5>
                                <p className="card-text" />
                                <Link to={`/product/${todo._id}`} className="btn btn-dark">Detail</Link>
                                </div>
                             </div>
                        </div>        
              }) : ""}
          </ul> */}
          <div class="row">
              {props.products.map((product) => {
                  return(
                      <div className ="card-body">
                          <Link to={`/product/${product._id}`}><strong>{product.name}</strong></Link>
                      </div>
                  )
                  })}
          </div>
      </div >
  )
}

export default Products