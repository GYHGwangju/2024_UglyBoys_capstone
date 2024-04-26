import React from 'react';
import { Outlet } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "../components/Header";

export default function MainLayout() {
    return (
        <>
            <Header />
            <Container className="container">
                <Outlet />
            </Container>
        </>
    );
}
