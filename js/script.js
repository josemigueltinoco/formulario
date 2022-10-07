let tabla = [
    { cedula: "1001916649", nombre: "José", apellido: "Rodríguez", sexo: "Masculino", edad: "20", direccion: "Cra 101 24 8C", celular: "30483934", pais: "Colombia", ciudad: "Barranquilla", correo: "jmtinoco@gmail.com" },

]

const Listar = () => {


    let tbody = document.getElementById("data")
    let reg = "";
    for (let i = 0; i < tabla.length; i++) {
        reg += "<tr>";
        reg += "<td class='text-center'>" + (parseFloat(i) + parseFloat(1)) + "</td>";
        reg += "<td class='text-center'><b>" + tabla[i].cedula + "</b></td>";
        reg += "<td>" + tabla[i].nombre + " " + tabla[i].apellido + "</td>";
        reg += "<td>" + tabla[i].sexo + "</td>";
        reg += "<td>" + tabla[i].edad + "</td>";
        reg += "<td>" + tabla[i].direccion + "</td>";
        reg += "<td>" + tabla[i].celular + "</td>";
        reg += "<td>" + tabla[i].pais + "</td>";
        reg += "<td>" + tabla[i].ciudad + "</td>";
        reg += "<td>" + tabla[i].correo + "</td>";
        reg += "</tr>";
    }
    tbody.innerHTML = reg;


}

const Guardar = () => {
    const nombre = document.getElementById("nombre")
    const apellido = document.getElementById("apellido")
    const edad = document.getElementById("edad")
    const direccion = document.getElementById("direccion")
    const celular = document.getElementById("celular")
    const pais = document.getElementById("pais")
    const ciudad = document.getElementById("ciudad")
    const correo = document.getElementById("correo")
    const cedula = document.getElementById("cedula")
    const emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!nombre.value.trim()) {
        alert("Por favor, ingrese su nombre")
        nombre.focus()
        return
    }
    if (!apellido.value.trim()) {
        alert("Por favor, ingrese su apellido")
        apellido.focus()
        return
    }
    if (!document.querySelector('input[name="sexo"]:checked')) {
        alert("Por favor, seleccione el sexo")
        return
    }

    if (!edad.value.trim()) {
        alert("Por favor, ingrese su edad")
        edad.focus()
        return
    }
    if (edad.value.length != 2) {
        alert("Por favor, ingrese una edad valida")
        edad.focus()
        return
    }
    if (!direccion.value.trim()) {
        alert("Por favor, ingrese su dirección")
        direccion.focus()
        return
    }
    if (!celular.value.trim()) {
        alert("Por favor, ingrese su número de celular")
        celular.focus()
        return
    }
    if (celular.value.length != 10) {
        alert("Por favor, ingrese un número de celular valido de 10 dígitos")
        celular.focus()
        return
    }
    if (!ciudad.value.trim()) {
        alert("Por favor, ingrese su ciudad")
        ciudad.focus()
        return
    }
    if (!correo.value.trim()) {
        alert("Por favor, ingrese su correo electrónico")
        correo.focus()
        return
    }
    if (!emailRegex.test(correo.value)) {
        alert('Por favor, escriba un correo electrónico valido.')
        correo.focus()
        return
    }
    if (!cedula.value.trim()) {
        alert("Por favor, ingrese su número de cedula")
        cedula.focus()
        return
    }
    if (cedula.value.length != 10) {
        alert("Por favor, ingrese un número de cedula valido, debe tener 10 dígitos")
        cedula.focus()
        return
    }

    for (let i = 0; i < tabla.length; i++) {
        if (cedula.value == tabla[i].cedula) {
            alert("El cedula: " + cedula.value + " Registro invalido por favor valide los datos de cedula")
            cedula.focus()
            return
        }
        if (correo.value == tabla[i].correo) {
            alert("El correo electrónico: " + correo.value + " ya se encuentra registrado, Ingrese otro por favor.")
            correo.focus()
            return
        }
    }

    const sexo = document.querySelector('input[name="sexo"]:checked').value

    const nuevo = { cedula: cedula.value, nombre: nombre.value, apellido: apellido.value, sexo: sexo, edad: edad.value, direccion: direccion.value, celular: celular.value, pais: pais.value, ciudad: ciudad.value, correo: correo.value }
    tabla.push(nuevo)
    Listar()
    document.getElementById("form").reset();
}