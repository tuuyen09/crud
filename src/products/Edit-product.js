import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import ProductService from "../service/ProductService";

const EditProduct = () => {
    const [product, setProduct] = useState({id: 0, title: "", price: 0, description: ""})
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        ProductService.getProductById(id)
            .then(data => {
                setProduct(data.data);
            })
            .catch(function (err) {
                console.log(err)
            })
    },[]);
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        let obj = {...product, [name]: value}
        setProduct(obj);
    };

    const edit = () => {
        setProduct({...product});
        ProductService.editProduct(id, product)
            .then(data => {
                console.log(data)
                navigate("/");

            })
            .catch(function (err) {
                console.log(err)
            })
    }
    return (
        <div className="container">
            <h2>Edit product</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Id</th>
                    <th><input name="id" value={product.id} onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>Title</th>
                    <th><input value={product.title} name="title" onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>Price</th>
                    <th><input value={product.price} name="price" onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>Description</th>
                    <th><input value={product.description}  name="description" onChange={handleInputChange}/></th>
                </tr>

                <button onClick={edit} className="btn btn-warning">Update</button>
                <Link to={"/"}><button className="btn btn-danger">Back</button></Link>
                </thead>
            </table>
        </div>
    )
}
export default EditProduct;