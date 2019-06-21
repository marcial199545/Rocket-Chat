import React, { Component, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
class Login extends Component<any, any> {
    handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(user);
    }
    constructor(props: any) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <div className="row mt-5">
                <div className="col-md-6 m-auto">
                    <div className="card card-body">
                        <h1 className="text-center mb-3">
                            <i className="fas fa-sign-in-alt" /> Login
                        </h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
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
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
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
    }
}

export default Login;
