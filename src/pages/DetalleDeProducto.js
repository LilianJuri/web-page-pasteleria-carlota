import { useParams } from "react-router";

const DetalleDeProducto = () => {
    const parametros = useParams();

    console.log(parametros.productoID);

    return(
        <section>
            <h1>Detalle de Producto</h1>
            <p>{parametros.productoID}</p>
        </section>
    )
}

export default DetalleDeProducto;