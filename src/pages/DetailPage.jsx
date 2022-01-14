/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Button } from "react-bootstrap";
import { productContext } from "../contexts/ProductContext";
import Comment from "../components/comments/Comment";
import './DetailPage.css'

const DetailPage = () => {
    const {
        getProductsToEdit,
        productToEdit,
       
    } = useContext(productContext);
  
    const params = useParams();
    useEffect(() => {
        getProductsToEdit(params.id);
    }, []);
    let user = JSON.parse(localStorage.getItem("user"));
   
    return (
        <div className="container">
            {productToEdit ? (
                <div className="detailsMainBlock">
                    <div>
                        <img width="500vh" src={productToEdit.image} alt="product" />
                    </div>
                    <div className="detailsBlock">
                        <h2 className="detailsName">{productToEdit.name}</h2>
                        <h3 className="detailsDescription" >{productToEdit.description}</h3>
                        <p className="detailsPrice">
                            {productToEdit.price}
                        </p>
                        <p className="detailsCategory">category: {productToEdit.category} </p>
                        <div
                            style={{
                                marginBottom: "-10px",
                                width: "30px",
                                borderRadius: "50%",
                                height: "30px",
                                display: "inline-block",
                            }}
                        ></div>
                        <br />
                        <br />
                        
                    </div>
                </div>

                
            ) : (
                <h2>Loading</h2>
            )}

            <Comment />
        </div>
    );
};

export default DetailPage;