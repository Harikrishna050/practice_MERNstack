import React, { useState, useEffect } from 'react'
import "./WorkItem.scss";
import { WorkTypes } from '../../data';
import { useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

const WorkItem = ({ setCartItems }) => {
    const { id } = useParams();
    const numericId = parseInt(id, 10);
    const foundWorkType = WorkTypes.find(workType => workType.id === numericId);
    const ItemData = {
        itemName: foundWorkType.title,
        img: foundWorkType.img,
        price: foundWorkType.price,
    }
    const handleCart = async (e) => {
        e.preventDefault();
        console.log(ItemData);
        const data = await axios.post("/cart/add", ItemData);
        if (data.data.success) {
            const data = await axios.get("/cart");
            setCartItems(data.data.data);
            alert(data.data.message);
        } else {
            alert("something went wrong")
        }
    }




    return (
        <>
            <div className="work-details">
                <div className="left-desc">
                    <div className="item-pic">
                        <img src={foundWorkType.img} alt="" />
                    </div>
                    <div className="shop">
                        <button className="cart" onClick={handleCart} >Add To Cart</button>
                        <button className="buy-now">Buy Now</button>
                    </div>
                </div>
                <div className="right-desc">
                    <div className="item-title">
                        <h4>{foundWorkType.title}</h4>
                    </div>
                    <div className="rating">
                        <div className="rate">
                            <span>{foundWorkType.rating}</span><FaStar />
                        </div>
                        <div className="votes">
                            <span>({foundWorkType.votes})</span>
                        </div>
                    </div>
                    <div className="item-price-details">
                        <h3>${foundWorkType.price}</h3>
                        <span>{foundWorkType.offer}% off</span>
                    </div>
                    <div className="item-other-details">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse eius id ratione culpa velit repellendus, et natus facere earum hic quia odio vitae sunt ducimus ex doloribus, ipsam, maxime optio exercitationem error repellat! Voluptates repudiandae eaque quidem sequi assumenda fugit?</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default WorkItem
