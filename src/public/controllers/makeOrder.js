let typeID = document.getElementById("inputType1")
let sizeID = document.getElementById("inputSize1")
let sideID = document.getElementsByName("inputSide")
let priceID = document.getElementById("inputPrice1")
let currencyID = document.getElementsByClassName("currencies")
let changedCurrencyID = document.getElementById("currency-change")
let nameID = document.getElementById("inputName1")

const API_KEY = "eFhix0L6E9dJwcO7h0ltPgWSs2QWlaQp"

const postOrder = async () => {
    let getItem = localStorage.getItem("item")
    const {data:{item}} = await axios.get(`api/v1/items/${getItem}`)
    typeID.placeholder = item.type
    sizeID.placeholder = item.size
    priceID.placeholder = item.price
    for (data in currencyID) {
        if (currencyID[data].innerHTML === item.currency) {
            currencyID[data].selected = true
        }
    }

    sideID.forEach( side => {
        if (item.side) {
            sideID[0].checked = true
        } else {
            sideID[1].checked = true
        }
        side.disabled = true
    })
}

postOrder()

const currencyChange = async () => { 
    try {
        let getItem = localStorage.getItem("item")
        const {data:{item}} = await axios.get(`api/v1/items/${getItem}`)
       
        let initialValue = item.currency

        document.getElementById("currency-change").onchange = async () => {
            try {
                let currencies = document.getElementById("currency-change").value
                console.log(initialValue, currencies)
                if (currencies != initialValue) {
                    let {data:{info}} = await axios.get(`https://api.apilayer.com/fixer/convert?apikey=${API_KEY}&to=${currencies}&from=${initialValue}&amount=${item.price}`)
                    priceID.placeholder = (item.price * info.rate).toFixed(2)
                } else {
                    priceID.placeholder = item.price
                }
            } catch(error) {
                console.log(error)
            }
        }
    } catch(error) {
        console.log(error)
    }

}

currencyChange()

document.getElementById("order-submit").onclick = () => {
    localStorage.setItem("class", "alert")
    location.href = "/"
}
