import { getMetals, getOrders, setMetal } from "./database.js"

const metals = getMetals()
const order = getOrders()

// Remember that the function you pass to find() must return true/false
const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    }
)




document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)


export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    const listItemsArray = metals.map(
        (metal) => {
            return `<li>
                <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
            </li>`
        }
    )
    html += listItemsArray.join("")

    html += "<ul>"
    return html
        
    
} 
    


    




