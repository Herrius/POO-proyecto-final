
// export default clase
export default class Curso{
    constructor(nombre,poster,clase){
        this.nombre=nombre,
        this.poster=poster,
        this.clase=clase,
        this.inscritos=[]
    }
    getNombre(){
        return this.nombre;
    }
    getPoster(){
        return this.poster;
    }
    getClase(){
        return this.clase;
    }
    getInscritos(){
        return this.inscritos;
    }
    setNombre(nombre){
        this.nombre=nombre
    }
    setNombre(poster){
        this.poster=poster
    }
    setNombre(clase){
        this.clase=clase
    }
}