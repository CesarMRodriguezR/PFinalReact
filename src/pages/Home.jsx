import ProductCard from "../components/ProductCard";
import SmallCard from "../components/SmallCard";
import '../css/Home.css'


function Home() {

  const products = [
    {nombre: "Licor De Manzana", emprendedor: "Del Huerto de Santiago", src: "../resources/images/LicorDelHuerto.png", precio: "$90.00"},
    {nombre: "Miel De Abeja Cruda", emprendedor: "Abellamia", src: "../resources/images/MielAbellamia.png", precio: "$100.00"},
    {nombre: "Salsa Cambray", emprendedor: "Los Cavazos", src: "../resources/images/CambrayCavazos.png", precio: "$130.00"},
    {nombre: "Salsa Doña Macha", emprendedor: "Chilito Pikín", src: "../resources/images/DonaMacha.png", precio: "$150.00"},
    {nombre: "Salsa La Compita", emprendedor: "Chilito Pikín", src: "../resources/images/LaCompita.png", precio: "$35.00"},
    {nombre: "Rollo De Guayaba", emprendedor: "Dulces Finos Victoria", src: "../resources/images/DulceGuayaba.png.png", precio: "$70.00"},
    {nombre: "Miel Como Hecho En Casa", emprendedor: "La Monita", src: "../resources/images/MielMonita.png", precio: "$100.00"},
    {nombre: "Chimichurri", emprendedor: "Somos Sabores", src: "../resources/images/ChimichurriSomosSabores.png", precio: "$50.00"}
  ];

  const smallcards = [
    {nombre: "Chilito Pikín", src: "../resources/images/ChilitoPikinLogo.png"},
    {nombre: "Diadié", src: "../resources/images/DiadieLogo.png"},
    {nombre: "Abellamia", src: "../resources/images/mielAbellaMiaLogo.png"},
    {nombre: "Del Huerto de Santiago", src: "../resources/images/HuertodeSantiagoLogo.png"},
    {nombre: "Somos Sabores", src: "../resources/images/SomosSaboresLogo.png"},
    {nombre: "Los Cavazos", src: "../resources/images/LosCavazosLogo.png"},
    {nombre: "Dulces Finos Victoria", src: "../resources/images/DulcesFinosLogo.png"},
    {nombre: "Olartesanal", src: "../resources/images/Olartesanal.png"},
    {nombre: "La Monita", src: "../resources/images/LaMonitaLogo.png"},
    {nombre: "MASEDI", src: "../resources/images/MASEDILogo.png"},
    {nombre: "Linaje de Perros", src: "../resources/images/LinajePerrosLogo.png"},
    {nombre: "Manos Nativas", src: "../resources/images/ManosNativasLogo.png"},
    {nombre: "Grill Kong", src: "../resources/images/GrillKongLogo.png"},
    {nombre: "Pikabite Pro", src: "../resources/images/PikabiteProLogo.png"},
    {nombre: "Sabun SENDIC", src: "../resources/images/SabunSendicLogo.png"}
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
                    <SmallCard key={index} smallcard={productData}/>
                ))}
            </div>
        </section>
      </>
  );
}

export default Home