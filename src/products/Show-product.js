import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import ProductService from "../service/ProductService";

const ShowProduct = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        ProductService.getAllProduct()
            .then(data => {
                setProduct(data.data)
            })
            .catch(function (err) {
                console.log(err)
            })
    }, []);

    return (<>
        <div className="container">
            <h2>Product List</h2>
            <Link to={"/create"}>
                <button>Create</button>
            </Link>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    product.map((p) => {
                        return (
                            <tr>
                                <td>{p.id}</td>
                                <td><Link to={"/detail/" + p.id}>{p.title} </Link></td>
                                <td>{p.price}</td>
                                <td>{p.description}</td>
                                <td>
                                    <Link to={"/edit/" + p.id}>
                                        <button type="button" className="btn btn-warning">Edit</button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={"/delete/" + p.id}>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    </>)
}

export default ShowProduct;