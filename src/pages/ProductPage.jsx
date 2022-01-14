import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../contexts/ProductContext";
import * as yup from "yup";
import { Formik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Card, InputGroup, FormControl, Accordion } from "react-bootstrap";
import Pagination from "../components/Pagination";
import Body from "../components/body/Body";


const ProductPage = () => {
    const {
        getProducts,
        deleteProduct,
        products
    } = useContext(productContext);

    const schema = yup.object().shape({
        category: yup.string().required("Required"),
        name: yup.string().min(2).max(30).required("Required"),
        description: yup.string().min(5).max(100).required("Required"),
        image: yup.string().required("Required"),
        price: yup.string().min(3).max(255).required("Required"),
    });
    useEffect(() => {
        getProducts();
    }, []);
    const navigate = useNavigate();
    

    let object = new URLSearchParams(window.location.search);
    const [categoryValue, setCategoryValue] = useState("");
    const [resetFilter, setResetFilter] = useState(false)
    function filterProducts(key, value) {
        // if (key) {
        object.set(key, value);

        // console.log(resetFilter)
        let newUrl = `${window.location.pathname}?${object.toString()}`;
        if (!key) {
            newUrl = '/products'
        }
        console.log(newUrl)
        navigate(newUrl);
        getProducts();
        setCategoryValue(value);
    }

    useEffect(() => {
        setCategoryValue(object.get("category"));
    }, [object]);

    let user = JSON.parse(localStorage.getItem("user"));


    if (user) {
        if (user.role === "ADMIN") {
           
    }

    
}
    return (
        <center>
            <Body/>
            <InputGroup style={{width:"40vh", borderColor:"rgb(135, 87, 37)", boxShadow:"0 0 2rem rgb(135, 87, 37)"}} className="mb-3 ">
                    <FormControl
                        rows={1}
                        as="textarea"
                        placeholder="Поиск товара"
                        maxLength="140"
                        onChange={(e) => {
                            filterProducts("q", e.target.value);
                        }}
                    />
                </InputGroup>

        <div className="filter">
            <div className="in_filter">
                <h3 style={{ textAlign: "center" }}>Filter</h3>
                <Form.Group
                    className="mb-3"
                    value={categoryValue}
                    controlId="formBasicEmail"
                    onChange={(e) => {
                        filterProducts("category", e.target.value);
                    }}
                >
                    <Form.Check
                        block="true"
                        label="Завтрак"
                        value="Завтрак"
                        name="category"
                        type="radio"
                        id="inline-radio-1"
                        />

                    <Form.Check
                        block="true"
                        label="Обед"
                        value="Обед"
                        name="category"
                        type="radio"
                        id="inline-radio-2"
                        />

                    <Form.Check
                        block="true"
                        label="Ужин"
                        value="Ужин"
                        name="category"
                        type="radio"
                        id="inline-radio-2"
                        />

                    <Form.Check
                        block="true"
                        label="Кофе"
                        value="Кофе"
                        name="category"
                        type="radio"
                        id="inline-radio-2"
                        />


                    <Button style={{backgroundColor: "rgb(135, 87, 37)", borderColor: "rgb(135, 87, 37) "}} onClick={() => {
                        filterProducts("", "")
                        setCategoryValue("ais")
                    }}>Отменить</Button>
                </Form.Group>
            </div>

            <div style={{ width: "85%" }}>
                
                
                {products ? (
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-around",
                        }}
                    >
                        {/* {console.log(products)} */}
                        {products.map((item) => {
                            return (
                                <Card
                                    key={item.id}
                                    style={{ width: "18rem", border: ".5rem solid rgb(135, 87, 37)" , borderRadius: "1rem",color:"rgb(135, 87, 37)"}}
                                >
                                    <Card.Body>
                                        <Card.Img variant="top" src={item.image} />
                                        <Card.Title style={{ fontWeight: "bold" }}>
                                            {item.name}
                                        </Card.Title>
                                        <Card.Subtitle>category: {item.category}</Card.Subtitle>
                                        <Card.Text>
                                            Цена: {item.price}

                                        </Card.Text>
                                        {user.role !== "guest" ? (
                                            user.role === "ADMIN" &&
                                                user ? (
                                                <>
                                                    <Link to={"/products/edit/" + item.id}>
                                                        <Button
                                                            style={{
                                                                marginLeft: "0",
                                                                border: "none",
                                                                backgroundColor: "rgb(135, 87, 37)",
                                                            }}
                                                        >
                                                            Редактировать
                                                        </Button>
                                                    </Link>
                                                    <Button
                                                        style={{
                                                            marginLeft: "5px",
                                                            border: "none",
                                                            backgroundColor: "rgb(135, 87, 37)",
                                                        }}
                                                        onClick={() => {
                                                            deleteProduct(item.id);
                                                        }}
                                                    >
                                                        Удалить
                                                    </Button>
                                                </>
                                            ) : (
                                                <>
                                                    
                                                </>
                                            )
                                        ) : (
                                            <></>
                                        )}
                                        {user ? (
                                            <Link to={"detail/" + item.id}>
                                                <Button
                                                    style={{
                                                        marginLeft: "50px",
                                                        marginTop: "10px",
                                                    }}
                                                    variant="dark"
                                                >
                                                    Подробнее
                                                </Button>
                                            </Link>
                                        ) : (
                                            <></>
                                        )}
                                    </Card.Body>
                                </Card>
                            );
                        })}
                    </div>
                ) : (
                    <h2>Loading...</h2>
                )}
                <Pagination />
            </div>
        </div>
        </center>

    );
};

export default ProductPage;