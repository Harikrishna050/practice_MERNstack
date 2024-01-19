import React from 'react';
import "./Cart.scss";
import { MdDelete } from "react-icons/md";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

const Cart = ({ cartOpen, cartItems ,setCartItems}) => {
    let total = 0;

    const handleDelete=async(id)=>{
        try {
            const response = await axios.delete("/cart/delete/" + id);
            if (response.data.success) {
                alert("Your data successfully deleted!");
                const data = await axios.get("/cart");
                setCartItems(data.data.data);
            } else {
                alert("Deletion failed: " + response.data.message);
            }
        } catch (error) {
            console.error("An error occurred while deleting:", error);
            alert("Something went wrong");
        }
    }

    return (
        <div className={"cart-pop " + (cartOpen && "active")}>
            <h2>Your Favourite Items:</h2>
            <div className="details">
                <div className="items-container">
                    {cartItems.map((item) => {
                        total += item.price;

                        return (
                            <div className="item" key={item._id}>
                                <img src={item.img} alt="" />
                                <span>{item.itemName}</span>
                                <span>${item.price}</span>

                                <button className="delete" onClick={()=>handleDelete(item._id)}><MdDelete /></button>
                            </div>
                        );
                    })}
                    {(total===0 && (<p>No Items</p>))}
                </div>
                <div className="total">
                    Total:<span>${total}</span>
                </div>
            </div>
        </div>
    );
};

export default Cart;
