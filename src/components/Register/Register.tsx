import React, { Component, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
class Register extends Component<any, any> {
    handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        };
        console.log(user);
    }
    constructor(props: any) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            password_confirm: "",
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
                            <i className="fas fa-user-plus" /> Register
                        </h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    type="name"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    placeholder="Enter Name"
                                />
                            </div>
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
                                    placeholder="Create Password"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password2">Confirm Password</label>
                                <input
                                    value={this.state.password_confirm}
                                    onChange={this.handleInputChange}
                                    type="password"
                                    id="password_confirm"
                                    name="password_confirm"
                                    className="form-control"
                                    placeholder="Confirm Password"
                                />
                            </div>
                            <button type="submit" className="btn btn-success btn-block">
                                Register
                            </button>
                        </form>
                        <p className="lead mt-4">
                            Have An Account? <Link to="/login">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
