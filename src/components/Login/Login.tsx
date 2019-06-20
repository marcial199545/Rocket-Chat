import React from "react";
import { Link } from "react-router-dom";
const Login: React.FC = () => {
    return (
        <div className="row mt-5">
            <div className="col-md-6 m-auto">
                <div className="card card-body">
                    <h1 className="text-center mb-3">
                        <i className="fas fa-sign-in-alt" /> Login
                    </h1>
                    <form action="/users/login" method="POST">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter Email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter Password"
                            />
                        </div>
                        <button type="submit" className="btn btn-success btn-block">
                            Login
                        </button>
                    </form>
                    <p className="lead mt-4">
                        No Account? <Link to="/register">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
