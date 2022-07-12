//arrys

//Funciom dividir//

const dividir = (numero1,numero2) => numero1 / numero2;

 let ingresarOtroUsuario

//variables//
/*
const valor de btc = 2.5557
const valor de eth = .35454
const valor deDai = 1
const valor Usdc = 270
*/

const dolar =271

class Usuario {
    constructor(nombre, apellido, nombreDeUsuario, pesosIngresados,dolaresEquivalentes) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombreDeUsuario = nombreDeUsuario;
        this.pesosIngresados = pesosIngresados;
        this.dolaresEquivalentes = dividir (this.pesosIngresados, dolar);

    }
}

let usuarios = [];

do{
    function crearUsuario(){
        const nombre = prompt("Ingrese su Nombre").toLowerCase();
        const apellido = prompt("Ingrese su Apellido").toLowerCase();
        const nombreDeUsuario = prompt("Ingrese del nombre del usuario").toLowerCase();
        const pesosIngresados = parseFloat(prompt("Ingrese el monto en pesos a invertir"));

        return new Usuario(nombre,apellido,nombreDeUsuario,pesosIngresados);
        }

        usuarios.push(crearUsuario());
         //console.log(usuario[0]

         for (let i = 0; i < usuarios.length; i++) {
            alert (`El usuario ${usuarios[i].nombreDeUsuario}tiene el equivalente a Us$ ${usuarios[i].dolaresEquivalentes}`);
            
        }
        ingresarOtroUsuario = (prompt("¿Desea ingresar otro usuario? por favor ingresar si o no ")).toLowerCase();
        } while (ingresarOtroUsuario=="si") 
        //desea ingresar otro usuario.


