import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQ, incrementQ, removeFromCart } from '../../redux/slices/cartSlice'
import Stripe from '../payments/Stripe'

export default function Cart() {
    const { cartItems } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const total = cartItems.reduce((acc,item) => acc += item.product_price * item.quantity,0)
    
    return (
        <div className='row my-4'>
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Subtotal</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>
                                                <img src={item.product_image} 
                                                    className='fluid rounded'
                                                    width={60}
                                                    height={60}    
                                                    alt={item.product_name} />
                                            </td>
                                            <td>
                                                {item.product_name}
                                            </td>
                                            <td>
                                                <i 
                                                    onClick={() => dispatch(incrementQ(item))}
                                                    style={{cursor: 'pointer'}}
                                                    className="bi bi-caret-up"></i>
                                                <span className="mx-2">
                                                    {item.quantity}
                                                </span>
                                                <i 
                                                    onClick={() => dispatch(decrementQ(item))}
                                                    style={{cursor: 'pointer'}}
                                                    className="bi bi-caret-down"></i>
                                            </td>
                                            <td>
                                                ${item.product_price}
                                            </td>
                                            <td>
                                                ${item.product_price * item.quantity} 
                                            </td>
                                            <td>
                                                <i 
                                                    onClick={() => dispatch(removeFromCart(item))}
                                                    style={{cursor: 'pointer'}}
                                                    className="bi bi-cart-x text-danger"></i>
                                            </td>
                                        </tr>
                                    ))
                                }
                                <tr>
                                    <th colSpan={3} className='text-center'>
                                        Total
                                    </th>
                                    <td colSpan={3} className='text-center'>
                                        <span className="badge bg-danger rounded-pill">
                                            ${ total }
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        {
                            total > 0 && <Stripe />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}