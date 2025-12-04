import SmallCard from "../components/SmallCard"
import Catalogo from "../components/Catalogo"


function Home() {

  const smallcards = [
    {nombre: "Chilito Pikín", src: "/images/ChilitoPikinLogo.png"},
    {nombre: "Diadié", src: "/images/DiadieLogo.png"},
    {nombre: "Abellamia", src: "./images/mielAbellaMiaLogo.jpg"},
    {nombre: "Del Huerto de Santiago", src: "/images/HuertodeSantiagoLogo.jpg"},
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
                <Catalogo soloDestacados={true}/>
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

export default Home