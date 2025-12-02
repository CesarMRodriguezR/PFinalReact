import ProductCard from "../components/ProductCard";
import SmallCard from "../components/SmallCard";
import '../css/Home.css'

function Alimentos() {

  const products = [
    {nombre: "Licor De Manzana", emprendedor: "Del Huerto de Santiago", src: "/images/LicorDelHuerto.png", precio: "$90.00"},
    {nombre: "Miel De Abeja Cruda", emprendedor: "Abellamia", src: "/images/MielAbellamia.png", precio: "$100.00"},
    {nombre: "Salsa Cambray", emprendedor: "Los Cavazos", src: "/images/CambrayCavazos.png", precio: "$130.00"},
    {nombre: "Salsa Doña Macha", emprendedor: "Chilito Pikín", src: "/images/DonaMacha.png", precio: "$150.00"},
    {nombre: "Salsa La Compita", emprendedor: "Chilito Pikín", src: "/images/LaCompita.png", precio: "$35.00"},
    {nombre: "Rollo De Guayaba", emprendedor: "Dulces Finos Victoria", src: "/images/DulceGuayaba.png", precio: "$70.00"},
    {nombre: "Miel Como Hecho En Casa", emprendedor: "La Monita", src: "/images/MielMonita.png", precio: "$100.00"},
    {nombre: "Chimichurri", emprendedor: "Somos Sabores", src: "/images/ChimichurriSomosSabores.png", precio: "$50.00"}
  ];

  const smallcards = [
    {nombre: "Chilito Pikín", src: "/images/ChilitoPikinLogo.png"},
    {nombre: "Diadié", src: "/images/DiadieLogo.png"},
    {nombre: "Abellamia", src: "./images/mielAbellaMiaLogo.png"},
    {nombre: "Del Huerto de Santiago", src: "/images/HuertodeSantiagoLogo.png"},
    {nombre: "Somos Sabores", src: "/images/SomosSaboresLogo.png"},
    {nombre: "Los Cavazos", src: "/images/LosCavazosLogo.png"},
    {nombre: "Dulces Finos Victoria", src: "/images/DulcesFinosLogo.png"},
    {nombre: "Olartesanal", src: "/images/Olartesanal.png"},
    {nombre: "La Monita", src: "/images/LaMonitaLogo.png"},
    {nombre: "MASEDI", src: "/images/MASEDILogo.png"},
    {nombre: "Linaje de Perros", src: "/images/LinajePerrosLogo.png"},
    {nombre: "Manos Nativas", src: "/images/ManosNativasLogo.png"},
    {nombre: "Grill Kong", src: "/images/GrillKongLogo.png"},
    {nombre: "Pikabite Pro", src: "/images/PikabiteProLogo.png"},
    {nombre: "Sabun SENDIC", src: "/images/SabunSendicLogo.png"}
  ];

  return (
      <>
        <section className="productos-destacados">
            <h1>Nuestros productos destacados</h1>
            <div className="productos-scroll">
                {products.map((productData, index) => (
                    <ProductCard key={index} product={productData}/>
                ))}
            </div>
        </section>
        <section className="seccion-emprendedores">
            <h1>Nuestros emprendedores</h1>
            <div className="galery-display">
                {smallcards.map((smallcardData, index) => (
                    <SmallCard key={index} smallcard={smallcardData}/>
                ))}
            </div>
        </section>
      </>
  );
}

export default Alimentos