function ValidarNombre(){
    console.log("validando...")
    var txtName = document.getElementById("txtName")
    var validacionName = document.getElementById("validacionName")

    if(txtName.value.split(' ').length < 2)
    {
        validacionName.innerHTML = "Debe Ingresar 2 palabras"        
    }
    else
    {
        validacionName.innerHTML = ""
    }
}

function ValidarApellido(){
    console.log("validando...")
    var txtLastName = document.getElementById("txtLastName")
    var validacionLastName = document.getElementById("validacionLastName")

    if(txtLastName.value.split(' ').length < 2)
    {
        validacionLastName.innerHTML = "Debe Ingresar sus 2 apellidos"        
    }
    else
    {
        validacionLastName.innerHTML = ""
    }
}


function NoNumbers(){
    var numbers = [0,1,2,3,4,5,6,7,8,9,";","+", "-", "?", "¿", 
                    "¡", "!", ".", ",", "/", "#", "$", "%", "(", ")"]
    var txtName = document.getElementById("txtName")
    var txtLastName = document.getElementById("txtLastName")

    for(let i in numbers){
        txtName.value = txtName.value.replace(numbers[i], "")
        txtLastName.value = txtLastName.value.replace(numbers[i], "")
    }
}

function NoLetters(){
    var letters = 
                [   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                    "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", 
                    "v", "w", "x", "y", "z", ",", ".", "!", "'", "$", "%", "&",
                    "/", "(", ")", "=", "?", "¿", "¡", ".", ",", "*", "|", "´", "{", "}", "-"
                ]
    var txtFono = document.getElementById("txtFono")
    txtFono.value = txtFono.value.toLowerCase()
    for(let i in letters){
        txtFono.value = txtFono.value.replace(letters[i], "")
    }
}

function ValidarRut() {
    var chara = 
                [   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                    "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", 
                    "v", "w", "x", "y", "z", ",", ".", "!", "'", "$", "%", "&",
                    "/", "(", ")", "=", "?", "¿", "¡", ".", ",", "+", "*", "|", "´", "{", "}"
                ]
    var txtRut = document.getElementById("txtRut")
    var millon = ""
    var mil = ""
    var resto = ""
    txtRut.value = txtRut.value.toLowerCase()
    for(let i in chara){
        txtRut.value = txtRut.value.replace(chara[i], "")
    }
    if(txtRut.value.includes("-")) {
        txtRut.value = txtRut.value.replace(/-/g, "")
        txtRut.value = txtRut.value.slice(0, txtRut.value.length - 1) + "-" + txtRut.value.slice(txtRut.value.length - 1)
    }else
    {
        txtRut.value = txtRut.value.slice(0, txtRut.value.length - 1) + "-" + txtRut.value.slice(txtRut.value.length - 1)
    }
    if(txtRut.value.includes("k")) {
        txtRut.value = txtRut.value.replace(/k/g, "")
        txtRut.value += "k"
    }

    //sacar el guion
    if(txtRut.value.includes("-") && txtRut.value.length == 1){
        txtRut.value = ""
    }

    //Formateo de RUT
    if(txtRut.value.length == 10)
    {
        millon = txtRut.value.slice(0,2)
        mil = txtRut.value.slice(2,5)
        resto = txtRut.value.slice(5,11)
        txtRut.value = millon + "." + mil + "." + resto
    }

    if(txtRut.value.length == 9)
    {
        millon = txtRut.value.slice(0,1)
        mil = txtRut.value.slice(1,4)
        resto = txtRut.value.slice(4,10)
        txtRut.value = millon + "." + mil + "." + resto
    }

    if(txtRut.value.length == 8)
    {
        mil = txtRut.value.slice(0,3)
        resto = txtRut.value.slice(3,9)
        txtRut.value = mil + "." + resto
    }

    if(txtRut.value.length == 7)
    {
        mil = txtRut.value.slice(0,2)
        resto = txtRut.value.slice(2,8)
        txtRut.value = mil + "." + resto
    }

    if(txtRut.value.length == 6)
    {
        mil = txtRut.value.slice(0,1)
        resto = txtRut.value.slice(1,7)
        txtRut.value = mil + "." + resto
    }


}

function Rutletras(){
    var chara = 
                [   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                    "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", 
                    "v", "w", "x", "y", "z", ",", "!", "'", "$", "%", "&",
                    "/", "(", ")", "=", "?", "¿", "¡", ",", "+", "*", "|", "´", "{", "}", "#"
                ]
    var txtRut = document.getElementById("txtRut")
               
    for(let i in chara){
        if(txtRut.value.includes(chara[i]))
        {
            txtRut.value = ""
            validacionRut.innerHTML = "Solo Ingrese Numeros en su Run"
        }
        else
        {
            validacionRut.innerHTML = ""
        }

        if(txtRut.value.includes("..") || txtRut.value.includes("kk") )
        {
            txtRut.value = ""
            validacionRut.innerHTML = "Solo Ingrese Numeros en su Run"
        }
        else
        {
            validacionRut.innerHTML = ""
        }
    }

    if(txtRut.value.length < 11)
    {
        txtRut.value = ""
        validacionRut.innerHTML = "Ingrese al menos 8 digitos para su Run"
    }
    else
    {
        validacionRut.innerHTML = ""
    }
}

function Fonoletras(){
    var chara = 
                [   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                    "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", 
                    "v", "w", "x", "y", "z", ",", "!", "'", "$", "%", "&",
                    "/", "(", ")", "=", "?", "¿", "¡", ",", "*", "|", "´", "{", "}", "-", "°", "#", "."
                ]
    var txtFono = document.getElementById("txtFono")
               
    for(let i in chara){
        if(txtFono.value.includes(chara[i]))
        {
            txtFono.value = ""
            validacionFono.innerHTML = "Solo Ingrese Numeros o un unico +"
        }
        else
        {
            validacionFono.innerHTML = ""
        }

        if(txtFono.value.includes("++"))
        {
            txtFono.value = ""
            validacionFono.innerHTML = "Solo Ingrese Numeros o un unico +"
        }
        else
        {
            validacionFono.innerHTML = ""
        }
    }

    if(txtFono.value.length < 8)
    {
        txtFono.value = ""
        validacionFono.innerHTML = "Ingrese al menos 8 digitos 8 (Un unico + permitido)"
    }
    else
    {
        validacionFono.innerHTML = ""
    }
}

function ValidarCorreo() {
    var txtEmail = document.getElementById("txtEmail")
    var validacionCorreo = document.getElementById("validacionCorreo")
        if(txtEmail.value.includes("@") && ((txtEmail.value.includes(".com")) || (txtEmail.value.includes(".cl")) || (txtEmail.value.includes(".org")) || (txtEmail.value.includes(".net")))){
            validacionCorreo.innerHTML = ""
        }
        else
        {
            validacionCorreo.innerHTML = "Ingrese un Email Valido"
        }
}

