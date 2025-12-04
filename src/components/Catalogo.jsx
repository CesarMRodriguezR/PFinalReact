import ProductCard from "../components/ProductCard";

function Catalogo({soloDestacados = false}) {
    
    const products = [
        {id: 1, nombre: "Licor De Manzana", emprendedor: "Del Huerto de Santiago", src: "/images/LicorDelHuerto.png", precio: "$90.00", destacado: true},
        {id: 2, nombre: "Miel De Abeja Cruda", emprendedor: "Abellamia", src: "/images/MielAbellamia.png", precio: "$100.00", destacado: true},
        {id: 3, nombre: "Salsa Cambray", emprendedor: "Los Cavazos", src: "/images/CambrayCavazos.png", precio: "$130.00", destacado: true},
        {id: 4, nombre: "Salsa Doña Macha", emprendedor: "Chilito Pikín", src: "/images/DonaMacha.png", precio: "$150.00", destacado: true},
        {id: 5, nombre: "Salsa La Compita", emprendedor: "Chilito Pikín", src: "/images/LaCompita.png", precio: "$35.00", destacado: true},
        {id: 6, nombre: "Rollo De Guayaba", emprendedor: "Dulces Finos Victoria", src: "/images/DulceGuayaba.png", precio: "$70.00", destacado: true},
        {id: 7, nombre: "Miel Como Hecho En Casa", emprendedor: "La Monita", src: "/images/MielMonita.png", precio: "$100.00", destacado: true},
        {id: 8, nombre: "Chimichurri", emprendedor: "Somos Sabores", src: "/images/ChimichurriSomosSabores.png", precio: "$50.00", destacado: true},
        {id: 9, nombre: "Salsa La Mashi", emprendedor: "Chilito Pikín", src: "/images/LaMashi.png", precio: "$140.00", destacado: false},
        {id: 10, nombre: "Salsa De Jamaica Con Morita", emprendedor: "Somos Sabores", src: "/images/SalsaJamaica.png", precio: "$160.00", destacado: false},
        {id: 11, nombre: "Salsa Macha", emprendedor: "Pikabite Pro", src: "/images/SalsaPikabite.png", precio: "$130.00", destacado: false},
        {id: 12, nombre: "Cacao Garapiñado", emprendedor: "Olartesanal", src: "/images/CacaoGarapinado.png", precio: "$60.00", destacado: false},
        {id: 13, nombre: "Glorias", emprendedor: "Dulces Finos Victoria", src: "/images/GloriasDulcesFinos.png", precio: "$110.00", destacado: false},
        {id: 14, nombre: "Mermelada Artesanal", emprendedor: "MASEDI", src: "/images/MermeladaArtesanal.png", precio: "$120.00", destacado: false},
        {id: 15, nombre: "Sazonador Del Patrón", emprendedor: "Grill Kong", src: "/images/SazonadorDelPatron.png", precio: "$100.00", destacado: false},
        {id: 16, nombre: "Estuche 3 Mini Botellas", emprendedor: "Linaje de Perros", src: "/images/EstucheBotellas.png", precio: "$200.00", destacado: false},
        {id: 17, nombre: "Té 7 Azahares", emprendedor: "Manos Nativas", src: "/images/TeManosNativas.png", precio: "$20.00", destacado: false}
    ];

    const productsFilter = (() => {
        if (soloDestacados === true) {
            return products.filter((product) => product.destacado === true);
        } 
        else {
            return products;
        }
    })();

  return (
    <>
        {productsFilter.map((productData) => (
            <ProductCard key={productData.id} product={productData}/>
        ))}
    </>
  )
}

export default Catalogo