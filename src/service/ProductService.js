import axios from "axios";

class ProductService {
    static getAllProduct() {
        return axios.get("http://localhost:3000/products");
    }
    static getProductById(productId) {
        return axios.get("http://localhost:3000/products/" + productId);
    }
    static creatProduct(product){
        return axios.post("http://localhost:3000/products", product);
    }
    static editProduct(productId, product) {
        return axios.put("http://localhost:3000/products/" + productId, product);
    }
    static deleteProductById(productId){
        return axios.delete("http://localhost:3000/products/" + productId);
    }
}
export default ProductService;