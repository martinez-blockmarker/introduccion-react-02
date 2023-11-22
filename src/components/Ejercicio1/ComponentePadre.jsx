import { userState} from "react"

function HijoComponente(props) {
    return (
        <div>
            <h3>Este es el componente hijo</h3>
            <p>props.mensaje</p>
        </div>
    )
}
export default function ComponentePadre() {}
    const [mensaje, setMensaje] = useState('Hola desde España')
    
    const cambiarMensaje = ()=> {
        setMensaje('Hola desde Africa')
    }
    return (
        <div>
            <h2>Este es el componente padre</h2>
            <HijoComponente propMensajeHijo ={mensaje} />

            <button onClick={cambiarMensaje}> Cambiar mensaje</button>
        </div>
    )
}


