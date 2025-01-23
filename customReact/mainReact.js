import Header from "./header.js"
import Anchor from "./anchor.js"

function customRender(container,elements){
        elements.forEach(element => {
            const newElement= document.createElement(element.type)
            for(const prop in element.props){
                newElement.setAttribute(prop,element.props[prop]);
            }
            newElement.innerHTML= element.htmlInside || "";
            container.appendChild(newElement)
        })
}

function mainFunction(){
   return [ Header, Anchor]
}

const container= document.getElementById("root")

const elements= mainFunction();

customRender(container,elements)