import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return (
        <div className="row mt-5">
            <div className="col-md-6 m-auto">
                <div className="card card-body text-center">
                    <h1>
                        <i className="fab fa-rocketchat fa-4x App-logo" />
                    </h1>
                    <h2>Welcome to Rocket-Chat</h2>
                    <p>Create an account or login</p>
                    <Link to="/register" className="btn btn-success btn-block mb-2">
                        Register
                    </Link>
                    <Link to="/login" className="btn btn-secondary btn-block mb-2">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
