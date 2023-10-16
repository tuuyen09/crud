import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import ProductService from "../service/ProductService";

const ProductDetail = () => {
    const [product, setProduct] = useState({id: 1, title: "", price: 0, description: ""});
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        ProductService.getProductById(id)
            .then(data => {
                setProduct(data.data)
            })
            .catch(function (err){
                console.log(err)
                navigate("/")
            })
    })
    return (
        <div className="container">
        <table className="table table-striped">
            <tr>
                <th>ID</th>
                <td>{product.id}</td>
            </tr>
            <tr>
                <th>Title</th>
                <td>{product.title}</td>
            </tr>
            <tr>
                <th>Price</th>
                <td>{product.price}</td>
            </tr>
            <tr>
                <th>Description</th>
                <td>{product.description}</td>
            </tr>
            <Link to={"/"}><button>Back</button></Link>
        </table>
        </div>
    )
}
export default ProductDetail;