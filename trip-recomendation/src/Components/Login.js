import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login(props) {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const { currentUser } = useAuth();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const history = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch {
            setError("Failed to Login");
        }

        setLoading(false);
    }

    return (
        <>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height:"100vh", width: "100vw"}}>
            <Container className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh"}}>
                    <div className="w-100" style={{ maxWidth: "400px" }}>
                        <Card>
                            <Card.Body>
                                <h2 className="text-center mb-4">Login</h2>
                                {error && <Alert variant="danger">{error}</Alert>}
                                {!currentUser && <Alert variant="warning">Login to create a new poll</Alert>}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group id="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" ref={emailRef} required />
                                    </Form.Group>
                                    <Form.Group id="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" ref={passwordRef} required />
                                    </Form.Group>
                                    <Button
                                        disabled={loading}
                                        className="w-100 mb-2 mt-4"
                                        type="submit"
                                        style={{
                                            backgroundColor: "#00BFA6",
                                            borderColor: "#00BFA6"
                                        }}>
                                        Login
                                    </Button>
                                </Form>
                                <div className="w-100 text-center mt-3">
                                    <Link to="/forgot-password">Forgot Password?</Link>
                                </div>
                            </Card.Body>
                        </Card>
                        <div className="w-100 text-center mt-2">
                            Don't have an account? <Link to="/signUp">Sign Up</Link>
                        </div>
                    </div>
                </Container>
        </div>
        </>
    );
}

