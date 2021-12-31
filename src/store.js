import {createStore} from "redux"

const initialState = {
    jugadores: [   {
        id: 1,
        nombre: "Pedro Sanchez",
        foto: "https://cdn.forbes.co/2020/09/Lionel-Messi-EFE-1280X720.jpg"
    },
    {
        id: 2,
        nombre: "Luis Perez",
        foto: "https://img.lalr.co/cms/2018/06/30111911/2018-06-30T153653Z_266444376_RC1E14815090_RTRMADP_3_SOCCER-WORLDCUP-FRA-ARG.jpg?size=xl"
    },
    {
        id: 3,
        nombre: "Hugo Pozo",
        foto: "https://e00-marca.uecdn.es/deporte/100-mejores-jugadores/imagenes/jugadores-portada2/cristiano-ronaldo.jpg"
    },
    {
        id: 4,
        nombre: "Juan Ticona",
        foto: "https://media.primicias.ec/2019/12/30122728/neyjrs-1024x574.jpg"
    },
    {
        id: 5,
        nombre: "Orlando Coca",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaA54_t8lpYXkzcdOM34nHUVHPsHJym7rLaA&usqp=CAU"
    },
    {
        id: 6,
        nombre: "Alberto Fuentes",
        foto: "https://www.acadef.es/wp-content/uploads/2020/09/halaand-mejor-jugador-joven.jpg"
    },
    {
        id: 7,
        nombre: "Israel Valdez",
        foto: "https://specials-images.forbesimg.com/imageserve/5f5bde381df59bfe04b23b1e/960x0.jpg?fit=scale"
    },
    {
        id: 8,
        nombre: "Manuel Boris",
        foto: "https://www.futbolsapiens.com/wp-content/uploads/2020/12/Ibrahimovic.jpg"
    },
    {
        id: 9,
        nombre: "Dorian Rojas",
        foto: "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F0514%2Fr542985_1296x729_16%2D9.jpg&w=570&h=321&format=jpg"
    },
    {
        id: 10,
        nombre: "Marcos Castro",
        foto: "https://e00-marca.uecdn.es/deporte/100-mejores-jugadores/imagenes/jugadores-portada2/aaron-ramsey.jpg"
    },
    {
        id: 11,
        nombre: "Pablo Gomez",
        foto: "https://www.sdpnoticias.com/resizer/XE72hhEspNC-Po1tedaAqwXkiqM=/440x248/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/sdpnoticias/DJTW3UEIZZFU5HVTW3U3CUB5CY.jpg"
    },
    {
        id: 12,
        nombre: "Tomas Lima",
        foto: "https://as.com/futbol/imagenes/2020/09/15/album/1600167689_952794_1600168016_album_grande.jpg"
    },
    {
        id: 13,
        nombre: "Percy Tuncar",
        foto: "https://images.ecestaticos.com/BhpFfwkPRZT_DTQSkMuQ_JvY-gQ=/199x0:2060x1390/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F72e%2Fc59%2F347%2F72ec593477d30d89263ad21833e72b38.jpg"
    }],
    titulares : [],
    suplentes: []
}
const reducerEntrenador = (state = initialState,action)=>{
    //console.log(action);
    if(action.type === "AGREGAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if(action.type ==="AGREGAR_SUPLENTE"){
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j=>j.id !== action.jugador.id)
        }
    }

    if(action.type === "QUITAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.filter(j=>j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if(action.type === "QUITAR_SUPLENTE"){
        return {
            ...state,
            suplentes: state.suplentes.filter(j=>j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }
    return state;
}

export default createStore(reducerEntrenador);