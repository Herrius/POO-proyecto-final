// importa un clase javascript
import Curso from "./clases/Curso.js"
import Persona from "./clases/Persona.js"
//instanciando objetos
const html= new Curso("HTML desde cero","https://edteam-media.s3.amazonaws.com/courses/big/26557907-0555-427e-a40c-6ff207f98d72.png",10)
const js= new Curso("Javascript desde cero","https://edteam-media.s3.amazonaws.com/courses/big/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg",8)

const elem=document.getElementById("curso")

function mostratCurso(curso){
    const hijo= document.createElement("div")
    hijo.classList.add("card")
    hijo.innerHTML=`
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="${curso.getPoster()}" />
    </div>
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 class="t5 s-mb-2 s-center">${curso.getNombre()}</h3>
        <div class="s-center">    
            <span class="small">Clases ${curso.getClase()}</span>
        </div>
   </div>`
    elem.appendChild(hijo)
}

const formulario=document.getElementById("clases")
formulario.addEventListener("submit",e=>{
    e.preventDefault()
    const target=e.target
    const curso=new Curso(target.nombreCurso.value,target.posterCurso.value,target.claseCurso.value)
    mostratCurso(curso)
})
// la clase persona
const sujeto=document.getElementById("personas")

function mostrarPersona(persona){
    const humano=document.createElement("ul")
    humano.innerHTML+=`<h1>${persona.getNombre()}</h1>`
    humano.classList.add("feature-list")
    humano.innerHTML+=`
    <li>${persona.getTelefono()}</li>
    <li>${persona.getEdad()}</li>
    <li>${persona.getPadre()}</li>
    `
    sujeto.appendChild(humano)
}

const formularioPersona=document.getElementById("persona")
formularioPersona.addEventListener("submit",e=>{
    e.preventDefault()
    const target=e.target
    const persona=new Persona(target.nombrePersona.value,target.telefonoPersona.value,target.edadPersona.value,target.padrePersona.value)
    mostrarPersona(persona)
})