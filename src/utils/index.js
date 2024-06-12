import axios from "axios"
import { datos } from "./listasproductos";
let local = "Lista";
export const ConsulatProdcuto = async () => {
    return datos
    /*try {
        let { data } = axios.get("http://127.0.0.1:8000/api/productos")
        return data;
    } catch (error) {
        return error
    }*/
}
export const filtaratnombre = async (parametros) => {
    try {
        let { data } = await axios.post("http://127.0.0.1:8000/api/productos", {
            parametros
        })
        return data
    } catch (error) {
        return error
    }
}
export function cargarLista() {
    let lista = JSON.parse(localStorage.getItem(local));
    if (!lista) return [];
    else return lista;
}
export const Quitar = async (parms) => {
    try {
        let lista = cargarLista();
        let dato = lista.filter((e) => e.id_producto !== parms.id_producto);
        localStorage.setItem(local, JSON.stringify(dato));
        return { mensaje: "eliminado", lista: dato };
    } catch (error) {
        console.log(error)
        return { mensaje: "hubo un error", lista: error };
    }
}
export const AgregarLista = async (parms) => {
    try {
        console.log(parms)
        let lista = cargarLista();
        console.log(lista)
        if (lista.length > 0) {
            let dato = lista.find((e) => e.id_producto === parms.id_producto);
            if (dato === undefined) {
                let parametros = [...lista, { ...parms }];
                localStorage.setItem(local, JSON.stringify(parametros));
                return { mensaje: "Agregado", lista: parametros };
            }
            return { mensaje: "Ya se encuentra agregado", lista: lista };
        } else {

            let parametros = [{ ...parms }];
            localStorage.setItem(local, JSON.stringify(parametros));
            return { mensaje: "Agregado", lista: parametros };
        }
    } catch (error) {
        return { mensaje: "Hubo un error", lista: error };
    }
};