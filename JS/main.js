function calcularTotalConIva(monto) {
    let iva = monto * 0.21
    let total = monto + iva
    return total
}

const calcularDescuento = (monto, porcentaje) => monto * (1 - porcentaje)

function mostrarResumen(nombre, subtotal, totalConIva, totalFinal, formaPago) {
    let mensaje = "RESUMEN DE COMPRA:\n" +
                  "Cliente: " + nombre + "\n" +
                  "Subtotal: " + subtotal + "\n" +
                  "Total con IVA (21%): " + totalConIva + "\n" +
                  "Forma de pago: " + formaPago + "\n" +
                  "Total final a pagar: " + totalFinal;

    alert(mensaje)
    console.log(mensaje)
}
function iniciarSimulador() {
    alert("Bienvenido al simulador de compras")

    let nombre = prompt("Ingresa tu nombre:")

    let continuar = true
    let subtotal = 0

    while (continuar) {
        let precio = prompt("Ingresa el precio del producto sin IVA:")
        precio = parseFloat(precio)

        if (precio > 0) {
            subtotal = subtotal + precio
        } else {
            alert("Precio no valido, intenta de nuevo.")
        }

        let respuesta = prompt("Deseas agregar otro producto? (si / no)")
        if (respuesta !== "si") {
            continuar = false
        }
    }

    let totalConIva = calcularTotalConIva(subtotal)
    let formaPago = prompt("Elige forma de pago: 'efectivo' (10% descuento) o 'tarjeta' (con IVA)")
    let montoFinal = 0

    if (formaPago === "efectivo") {
        montoFinal = calcularDescuento(totalConIva, 0.10)
    } else {
        montoFinal = totalConIva
    }

    mostrarResumen(nombre, subtotal, totalConIva, montoFinal, formaPago)
}

iniciarSimulador()