import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../contexts/ProductContext";
import './AddProduct.css'
import * as yup from "yup";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import { useNavigate,  } from "react-router-dom";




const AddProduct = () => {
    const {
        addProducts,
        getProducts,
        deleteProduct,
        products
    } = useContext(productContext);

    const schema = yup.object().shape({
        name: yup.string().min(2).max(30).required("Required"),
        category: yup.string().required("Required"),
        description: yup.string().min(5).max(100).required("Required"),
        image: yup.string().required("Required"),
        price: yup.string().min(3).max(255).required("Required"),
    });
    useEffect(() => {
        getProducts();
    }, []);
    const navigate = useNavigate();
    let addForm;

    let object = new URLSearchParams(window.location.search);
    const [categoryValue, setСategoryValue] = useState("");
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
        setСategoryValue(value);
    }

    useEffect(() => {
        setСategoryValue(object.get("category"));
    }, [object]);
   

    addForm = (

                        <Formik
                            validationSchema={schema}
                            onSubmit={(data, { resetForm }) => {
                                addProducts(data);
                                resetForm();
                            }}
                            initialValues={{
                                name: "",
                                category: "",
                                description: "",
                                image: "",
                                price: "",
                            }}
                        >
                            {({ handleSubmit, handleChange, values, touched, errors }) => (
                                <Form
                                    onSubmit={handleSubmit}
                                >
                                    <Form.Group className="mb-3" controlId="formBasicEmail1">
                                        <Form.Label>Категория</Form.Label>
                                        <Form.Select
                                            aria-label="Default select example"
                                            name="category"
                                            onChange={handleChange}
                                            isValid={!errors.category && touched.category}
                                            isInvalid={!!errors.category}
                                            value={values.category}
                                        >
                                            <option>Выберите категорию</option>
                                            <option value="Завтрак">Завтрак</option>
                                            <option value="Обед">Обед</option>
                                            <option value="Ужин">Ужин</option>
                                            <option value="Кофе">Кофе</option>
                                        </Form.Select>

                                        <Form.Control.Feedback type="invalid">
                                            {errors.category}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Название </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Введите название "
                                            name="name"
                                            onChange={handleChange}
                                            isValid={!errors.name && touched.name}
                                            isInvalid={!!errors.name}
                                            value={values.name}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.name}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Описание </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Введите описание "
                                            name="description"
                                            onChange={handleChange}
                                            isValid={!errors.description && touched.description}
                                            isInvalid={!!errors.description}
                                            value={values.description}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.description}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Картинка </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Вставьте адрес картинки "
                                            name="image"
                                            onChange={handleChange}
                                            isValid={!errors.image && touched.image}
                                            isInvalid={!!errors.image}
                                            value={values.image}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.image}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail2">
                                        <Form.Label>Цена </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Введите цену "
                                            name="price"
                                            onChange={handleChange}
                                            isValid={!errors.price && touched.price}
                                            isInvalid={!!errors.price}
                                            value={values.price}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.price}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Button
                                        style={{
                                            border: "none",
                                            marginLeft: "0",
                                            backgroundColor: "#1C374C",
                                        }}
                                        variant="primary"
                                        type="submit"
                                    >
                                        Отправить
                                    </Button>
                                </Form>
                            )}
                        </Formik>
    )
    return (
        <center>
            <div className="product-add-h2">
            <h2>Добавление товара </h2>
            </div>

            <div className="product-add-form">
            {addForm}
            </div>
        </center>

    );
};

export default  AddProduct