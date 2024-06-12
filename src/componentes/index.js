import { useEffect, useState } from "react"
import { AgregarLista, ConsulatProdcuto, Quitar } from "../utils";
import Headder from "./header";
import ListaView from "./lista";

export default function IndexView() {

    let [listas, setlista] = useState([]);
    let [agregados, setAgregados] = useState([])


    async function ListarProductos() {
        try {
            let data = await ConsulatProdcuto()
            console.log(data)
            if (data.length > 0) {
                setlista(data)
            }
        } catch (err) {

        }
    }
    function filtaratnombre(nombre) {
        if (nombre == '') {
            let datos = listas.sort(e => e.nombre)
            return datos
        }
        return  listas.reverse(e => e.nombre)
    }
    async function agregar(parms) {
        let dato = await AgregarLista(parms)
        console.log(dato)
        setAgregados(dato.lista)
        alert(dato.mensaje)
    }
    async function Quitarlista(parms) {
        try {
            let dato = await Quitar(parms)
            setAgregados(dato.lista)
            console.log(dato)
            alert(dato.mensaje)
        } catch (err) {
            console.log(err)
            alert(err.mensaje)
        }
    }
    useEffect(() => {
        ListarProductos()
    }, [])
    return (
        <div className="container-fluid">

            <Headder lista={agregados} />
            <ListaView
                lista={listas}
                agregados={agregados}
                Quitarlista={Quitarlista}
                agregar={agregar}
                filtaratnombre={filtaratnombre}
            />
        </div>
    )
}