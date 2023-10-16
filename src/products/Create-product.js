import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import ProductService from "../service/ProductService";

const CreateProduct = () => {
    const [product, setProduct] = useState({id: 0, title: "", price: 0, description: ""})
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setProduct({...product, [name]: value});
    }
    const create = () => {
        setProduct({...product})
        ProductService.creatProduct(product)
                .then(data => {
                    console.log(data)
                    navigate("/")
                })
                .catch(function (err) {
                    console.log(err)
                })

    };
    return (
        <div className="container">
            <h2>Create new product</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Id</th>
                    <th><input name="id" onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>Title</th>
                    <th><input name="title" onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>Price</th>
                    <th><input name="price" onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>Description</th>
                    <th><input name="description" onChange={handleInputChange}/></th>
                </tr>

                <button onClick={create}>Create</button>

                </thead>
            </table>
        </div>
    );

}
export default CreateProduct;