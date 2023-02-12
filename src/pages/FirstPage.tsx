import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

const FirstPage = () => {
    const navigate = useNavigate();

    const clearStorageReload = () => {
      localStorage.removeItem("userDataKey");
      window.location.reload();
    };

    const visitSecondPage = () => {
        navigate("/second-page")
    }
    return(
        <div>
            <h1>Enter user information</h1>
            <Form/>
            <br />
            <button onClick={clearStorageReload}>
                Clear local storage and reload
            </button>
            <br />
            <br />
            <button onClick={visitSecondPage}>
                Visit Second Page
            </button>
        </div>
    )
}
export default FirstPage;