// Modulo 1 Edteam conceptos de POO
const nombre="Enrique ubaldo";
const telefono="123456789";
const edad=26;
const padre={
    nombre:"Edgar",
    edad:55
}

const persona ={
    nombre,
    telefono,
    edad,
    padre,
    presentacion(){
        console.log(`Hola este son mis datos personales mi nombre ${this.nombre}, mi telefono ${this.telefono} y mi numero ${this.edad}`)
    }
}


let titulo= document.getElementById("padre");
let phone= document.getElementById("uno");
let age=document.getElementById("dos");
let father=document.getElementById("tres");
titulo.innerHTML=persona["nombre"]
phone.innerHTML="Su telefono es " + persona["telefono"]
age.innerHTML="La edad es " + persona.edad;
father.innerHTML=`El nombre del padre es ${persona.padre.nombre} y su edad es ${persona.padre["edad"]}`

persona.presentacion();

/*
Clases y objetos
Redudancia de clases no es lo optimo para trabajar ejemplo persona1,persona2,persona3
Funcion constructura para reutilizar
*/
// METODO ANTIGUO DE REALIZAR CLASES 
//function bG(nombre,jugadores,categoria,tiempo){
//     this.nombreG=nombre,
//     this.jugadores=jugadores,
//     this.categoria=categoria,
//     this.tiempo=tiempo
// }
// METODO ES6 DE REALIZR CLASES
class BoardGame{
    constructor(nombre,jugadores,categoria,tiempo){
        this.nombreG=nombre,
        this.jugadores=jugadores,
        this.categoria=categoria,
        this.tiempo=tiempo
    }
    //procedimiento
    mensajeDatos(){
        return `${this.nombreG} es un juego con duracion de ${this.tiempo} y de ${this.jugadores} jugadores`
    }
    getCategoria(){
        return this.categoria
    }
    getTiempo(){
        return this.tiempo
    }
    setCategoria(nuevaCategoria){
        this.categoria=nuevaCategoria
    }
}
//Herencia
class Conocedores extends BoardGame{
   constructor(nombreG,jugadores,categoria,tiempo,persona){
       super(nombreG,jugadores,categoria,tiempo)
       this.persona=persona
   }

}
class Proveedores extends BoardGame{
    constructor(nombreG,jugadores,categoria,tiempo,producto){
        super(nombreG,jugadores,categoria,tiempo)
        this.producto=producto
    }
}

const catan=new BoardGame("Catan","3-4","Familiar","45-60 min")
const carcassonne=new BoardGame("Carcassone","2-4","Familiar","20-40 min")

const clubUC=new Conocedores("Catan","3-4","Familiar","45-60 min",["Enrique","William","Juancarlos"])
const devir=new Proveedores("Catan","3-4","Familiar","45-60 min",["Catan","Carcassonne","Domino"])

carcassonne.setCategoria("Losetas")
console.log(carcassonne.mensajeDatos())
console.log(`Tiempo promedio de juegos ${carcassonne.getTiempo()} y categoria ${carcassonne.getCategoria()}`)
console.log(clubUC)