import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Headerr';
import AdminPage from './pages/AdminPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegistarPage';
import AuthContextProvider from './contexts/AuthContext';
import ProductPage from './pages/ProductPage';
import ProductContextProvider from './contexts/ProductContext';
import EditPage from './pages/EditPage';
import DetailPage from './pages/DetailPage';
import CommentContextProvider from './contexts/CommentContext';
import AddProduct from './components/AddProduct/AddProduct';

const MainRoutes = () => {
    return (
        <AuthContextProvider>
            <ProductContextProvider>
                <CommentContextProvider>
                            <BrowserRouter>
                                <Header />
                                <Routes>
                                    <Route path="/" element={<MainPage />} />
                                    <Route path="/admin" element={<AdminPage />} />
                                    <Route path="/product" element={<AddProduct />} />
                                    <Route path="/login" element={<LoginPage />} />
                                    <Route path="/register" element={<RegisterPage />} />
                                    <Route path="/products" element={<ProductPage />} />
                                    <Route path="/products/edit/:id" element={<EditPage />} />
                                    <Route path="/products/detail/:id" element={<DetailPage />} />
                                </Routes>
                            </BrowserRouter>
                </CommentContextProvider>
            </ProductContextProvider>
        </AuthContextProvider>
    );
};

export default MainRoutes;