import '../css/ProductCard.css'

function ProductCard({product}) {
    
    return(
        <div className="card">
            <div className="card-img-top">
                  <img src={product.src} alt={product.nombre}/>
            </div>
            <div className="card-body">
                <h2 className="card-title">{product.nombre}</h2>
                <p>{product.emprendedor}</p>
                <span class="price"><p>{product.precio}</p></span>
            </div>
        </div>
    );
}

export default ProductCard;