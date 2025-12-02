import '../css/ProductCard.css'

function ProductCard({product}) {
    
    return(
        <div className="product-card">
            <div className="product-card-img-top">
                  <img src={product.src} alt={product.nombre}/>
            </div>
            <div className="product-card-body">
                <h2 className="product-card-title">{product.nombre}</h2>
                <p>{product.emprendedor}</p>
                <span class="price"><p>{product.precio}</p></span>
            </div>
        </div>
    );
}

export default ProductCard