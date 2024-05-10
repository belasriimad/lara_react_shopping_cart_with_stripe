import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice'

export default function ProductListItem({product}) {
    const dispatch = useDispatch()

    return (
        <div className="col-md-4 mb-2">
            <div className="card h-100">
                <img src={product.product_image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.product_name}</h5>
                    <p className="card-text">{product.product_desc}</p>
                    <p>
                        <span className="fw-bold text-danger">
                            ${product.product_price}
                        </span>
                    </p>
                    <button 
                        onClick={() => dispatch(addToCart(product)) } 
                        className="btn btn-primary">
                        <i className="bi bi-cart-check"></i> add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}