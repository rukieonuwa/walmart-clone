import React,{useState, useEffect} from "react";




const Products = ()=>{
    let [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("http://206.189.124.254:9000/products")
          .then(res => res.json())
          .then(res => {
               let result = res.filter(function(val){
                   return val.category === "All Bath and Body";

               })
                  setProduct(result);
              
          })
          .catch(e => {
                console.log(e);
          })
    });



    return(
        <div> 
         <div className="grid-container">
                 {
            product.map(x =>
                  <div className="column" key={x.id} >
                    <div className="row"><img src={"http://206.189.124.254:9000" + x.image} alt="product" /></div>
                    <div className="row">{x.name}</div>
                    <div className="row">{x.quantity}</div>
                    <div className="row">{x.price}</div>
                    <div className="row">{x.description}</div>
                 </div>
            )
                 }            
         </div>   
        
        </div>
    );
};

export default Products;