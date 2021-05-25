export default class Persona{
    constructor(nombre,telefono,edad,padre){
        this.nombre=nombre,
        this.telefono=telefono,
        this.edad=edad,
        this.padre=padre
    }
    getNombre(){
        return this.nombre;
    }
    getTelefono(){
        return this.telefono;
    }
    getEdad(){
        return this.edad;
    }
    getPadre(){
        return this.padre;
    }
    setNombre(nombre){
        this.nombre=nombre
    }
    setNombre(telefono){
        this.telefono=telefono
    }
    setNombre(edad){
        this.edad=edad
    }
    setNombre(padre){
        this.padre=padre
    }
}