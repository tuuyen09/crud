import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import ProductService from "../service/ProductService";

const DeleteProduct = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
            if (window.confirm("Are you sure?")) {
                ProductService.deleteProductById(id)
                    .then(function () {
                        navigate("/")
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            }
            navigate("/")
        }
    )
}
export default DeleteProduct;