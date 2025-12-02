import '../css/SmallCard.css'

function SmallCard({smallcard}) {
    
    return(
        <div className="small-card">
            <div className="small-card-img-top">
                  <img src={smallcard.src} alt={smallcard.nombre}/>
            </div>
            <div className="small-card-body">
                <h2 className="small-card-title">{smallcard.nombre}</h2>
            </div>
        </div>
    );
}

export default SmallCard;