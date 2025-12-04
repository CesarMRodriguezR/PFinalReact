import Catalogo from "../components/Catalogo";
import SmallCard from "../components/SmallCard";
import '../css/Home.css'

function Alimentos() {

  const smallcards = [
    {nombre: "Salsas", src: "/images/LaCompita.png"},
    {nombre: "Dulces", src: "/images/CacaoGarapinado.png"},
    {nombre: "Endulzantes", src: "./images/MielAbellamia.png"},
    {nombre: "Sazonadores", src: "/images/SazonadorDelPatron.png"},
    {nombre: "Bebidas", src: "/images/LicorDelHuerto.png"},
  ];

  return (
      <>
        <section className="subcategorias">
            <h1>Alimentos</h1>
            <div className="productos-scroll">
                {smallcards.map((smallcardData, index) => (
                    <SmallCard key={index} smallcard={smallcardData}/>
                ))}
            </div>
        </section>
        <section className="productos">
            <h1>Todos los productos</h1>
            <div className="galery-display">
                <Catalogo/>
            </div>
        </section>
      </>
  );
}

export default Alimentos