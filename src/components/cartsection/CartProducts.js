import React, { useState, useEffect } from 'react';
import './CartProducts.css';
import '../mediaQueries/mediaQueries.css';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../../store/cartSlice';

const CartProducts = () => {
    const [quantities, setQuantities] = useState({}); // State to manage quantities for each product
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);

    // Calculate subtotal based on the quantities of each product
    const cartSubtotal = products.reduce((subtotal, product) => {
        const quantity = quantities[product.id] || 1; // Default quantity is 1 if not set
        return subtotal + product.price * quantity;
    }, 0);

    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    const handleQuantityChange = (productId, value) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [productId]: value,
        }));
    };

    return (
        <div>
            {/* Cart section */}
            <section id="cart" className="section-p1">
                <table width="100%">
                    <thead>
                        <tr>
                            <td>Remove</td>
                            <td>Image</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Subtotal</td>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>
                                    <a href="#">
                                        <i
                                            className="far fa-times-circle"
                                            onClick={() => handleRemove(product.id)}
                                        ></i>
                                    </a>
                                </td>
                                <td>
                                    <img src={product.img} alt="" />
                                </td>
                                <td>{product.name}</td>
                                <td>{product.price}$</td>
                                <td>
                                    <input
                                        type="number"
                                        onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                                        min="1"
                                        value={quantities[product.id] || 1}
                                    />
                                </td>
                                <td>
                                    {product.price * (quantities[product.id] || 1)}$
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            {/* Cart-add Section */}
            <section id="cart-add" className="section-p1">
                <div id="subTotal">
                    <h3>Cart Total</h3>
                    <table>
                        <tr>
                            <td>Cart Subtotal</td>
                            <td>${cartSubtotal}</td>
                        </tr>
                        {/* Other rows for Shipping, Total */}
                        {/* ... */}
                    </table>
                    <button className="normal">Proceed to Checkout</button>
                </div>
            </section>
        </div>
    );
};

export default CartProducts;
