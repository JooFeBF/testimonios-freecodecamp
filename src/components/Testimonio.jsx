/* eslint-disable react/prop-types */
import '../css/Testimonio.css'

function Testimonio (props) {
    return (
        <div className="contenedor-testimonio" >
            <img src={require(`../assets/testimonio-${props.image}.png`)} alt={`Foto de ${props.image}`}/>
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio">
                    <strong>{props.name}</strong> en {props.country}
                </p>
                <p className="cargo-testimonio">
                    {props.position} en <strong>{props.company}</strong>
                </p>
                <p className="texto-testimonio">&quot;{props.testimony}&quot;</p>
            </div>
        </div>
    )
}

export default Testimonio