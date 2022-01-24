import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const Allproducts = () => {

    let [product, setProduct] = useState([]);
    let [edit, setEdit] = useState(false);
    let [editItem, setEditItem] = useState();
    let [name, setName] = useState("");
    let [description, setDescription] = useState("");
    let [rating, setRating] = useState("");
    let [price, setPrice] = useState("");
    let [category, setCategory] = useState("All Bath and Body");


    useEffect(() => {
        fetch("http://206.189.124.254:9000/products")
            .then(res => res.json())
            .then(res => {
                let result = res.filter(function (val) {
                    return val.category === "All Bath and Body";

                })
                setProduct(result);

            })
            .catch(e => {
                console.log(e);
            })
    }, []);


    let editProduct = (x) => {
        setEdit(true)
        setEditItem(x._id)
        setName(x.name)
        setRating(x.quantity)
        setPrice(x.price)
        setDescription(x.description)
        setCategory(x.category)

    };

    let cancel = () => {
        setEdit(false);
        setEditItem();
    }

    let saveEdit = (id) => {
        let body = {
            name,
            rating,
            description,
            category,
            price
        }
        body = JSON.stringify(body)
        fetch(`http://206.189.124.254:9000/update/product/${id}`, { method: 'PUT', body: body})
            .then(res => res.json())
            .then(res => {
                alert("product updated");
            })
    }

    let deleteProduct = (id) => {
        fetch(`http://206.189.124.254:9000/product/${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(res => {
                alert("product deleted");
            })


    };

    return (
        <div>

            <div className="adminpage">


                <div className="navigation">
                    <div className="admin">
                        <h2> <Link to="/admin">ADMIN</Link></h2>
                    </div>
                    <div className="allproducts">
                        <p> <Link to="/allproducts">ALL PRODUCTS</Link></p>
                    </div>
                    <div className="createproducts">
                        <p> <Link to="/createproduct">CREATE PRODUCT</Link></p>
                    </div>
                    <div className="allusers">
                        <p> <Link to="#">ALL USERS</Link></p>
                    </div>
                    <div className="createusers">
                        <p><Link to="#">CREATE USERS</Link></p>
                    </div>

                    <div className="emptyspace">
                        <h2>EMPTY</h2>
                    </div>
                </div>
                <div className="allproductsContent">
                    <div className="row header">
                        <div className="col_name"><b>Image</b></div>
                        <div className="col_name"><b>Name</b></div>
                        <div className="col_des"><b>Delivery</b></div>
                        <div className="col_price"><b>Price</b></div>
                        <div className="col_qty"><b>Ratings</b></div>
                        <div className="col_cat"><b>Category</b></div>
                        <div className="col_edit"><b>Edit</b></div>
                        <div className="col_del"><b>Delete</b></div>

                    </div>
                    <div>
                        {product.map(x => (
                            edit && x._id === editItem ? (
                                <div className="row body" >
                                    <div className="row_item"><img src={"http://206.189.124.254:9000" + x.image} key={x.id} height="40" width="40" alt=""/></div>
                                    <input className="row_name" onChange={(e) => setName(e.target.value)}
                                        value={name} />
                                    <input className="row_item" onChange={(e) => setDescription(e.target.value)}
                                        value={description} />
                                    <input className="row_price" onChange={(e) => setPrice(e.target.value)}
                                        value={price} />
                                    <input className="row_item" onChange={(e) => setRating(e.target.value)}
                                        value={rating} />
                                    <input className="row_item" onChange={(e) => setCategory(e.target.value)}
                                        value={category} />
                                    <div className="row_item"><button onClick={() => cancel(x._id)} className="editBtn">Cancel</button></div>
                                    <div className="row_item"><button onClick={() => saveEdit(x._id)} className="editBtn">Save</button></div>
                                </div>
                            ) : (
                                <div className="row body" >
                                    <div className="row_item"><img src={"http://206.189.124.254:9000" + x.image} key={x.id} height="40" width="40" alt="" /></div>
                                    <div className="row_name">{x.name}</div>
                                    <div className="row_item">{x.description}</div>
                                    <div className="row_price">{x.price}</div>
                                    <div className="row_item">{x.quantity}</div>
                                    <div className="row_item">{x.category}</div>
                                    <div className="row_item"><button onClick={() => editProduct(x)} className="editBtn">Edit</button></div>
                                    <div className="row_item"><button onClick={() => deleteProduct(x._id)} className="deleteBtn">Delete</button></div>

                                </div>
                            )))
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Allproducts;