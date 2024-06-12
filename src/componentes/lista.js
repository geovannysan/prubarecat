import { useEffect } from "react"

export default function ListaView(props) {
    let { lista, agregados, Quitarlista, agregar, filtaratnombre } = props
    function verificarCmparacion(item) {
        if (agregados.length == 0) return false
        if (agregados.length > 0) {
            let consulta = agregados.filter(e => e.id_producto == item.id_producto)
            if (consulta.length == 0) return false
            return true
        }

    }
    function sacarImagen(item) {
        try {
            console.log(item.productoimagen[0]['ruta'])
            return item.productoimagen[0]['ruta']

        } catch (err) {
            return ''
        }
    }
    return (
        <div className="container py-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {lista.length > 0 ?
                    filtaratnombre('').map((elem, i) => {
                        return (<div className="col" key={i}>
                            <div className="card h-100">
                                <img src={sacarImagen(elem)} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {elem.nombre}
                                    </h5>
                                    <p className="card-text">{
                                        elem.descriptin}</p>
                                    <div className="d-flex ">
                                        {!verificarCmparacion(elem) ?
                                            <button className="btn btn-success"
                                                onClick={() => agregar(elem)}
                                            ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                </svg></button> :
                                            <button className="btn btn-dabger"
                                                onClick={() => Quitarlista(elem)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                                </svg>
                                            </button>}
                                    </div>
                                </div>
                            </div>
                        </div>)
                    })
                    : ""}

            </div>
        </div>
    )
}