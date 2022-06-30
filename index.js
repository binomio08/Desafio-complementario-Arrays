alert("Bienvenid@ a\n**********************\nPAGO MIS CUENTAS\n**********************")

let nombreUsuario = prompt("Ingrese su Usuario")

class Servicios {
    constructor(servicio, monto){
        this.servicio = servicio.toUpperCase()
        this.monto = "$" + monto
    }
    
}

function agregarServicios() {
    let totalServicios = parseInt(prompt("Hola "+nombreUsuario.toUpperCase() + " Ingrese cantidad de Servicios a Pagar"))
    let servicios = []

    for (let i = 0; i< totalServicios; i++){
        let servicio = prompt("Ingrese nombre del servivio a pagar ")
        let monto = parseInt(prompt("Ingrese el monto que figura en su factura"))

        let resgistrarServios = new Servicios(servicio, monto)
        servicios.push(resgistrarServios)
    }
    return servicios
}
function monstrarServicios(servicios){
    for(const servicio of servicios){
        console.log(servicio)
        console.log(servicio.monto)
    }
}

function main(){
    let serviocioIngresados = agregarServicios()
    monstrarServicios(serviocioIngresados)
}

main()