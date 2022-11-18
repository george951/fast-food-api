const getItems = async() => {
    try {
        const {data : {items}} = await axios.get("api/v1/items")
        let table = document.getElementById("table-menu")
        let titleName = localStorage.getItem("name")
        items.forEach((obj, index) => {
            const {name, type, size, side, price, currency} = obj
            if (name === titleName){
                let row = table.insertRow(table)
                row.insertCell(0).innerHTML = type
                row.insertCell(1).innerHTML = size
                row.insertCell(2).innerHTML = side
                row.insertCell(3).innerHTML = price
                row.insertCell(4).innerHTML = currency
                row.insertCell(5).innerHTML = `<button id="order-${name}-${index}">Order</button>`
            }
        })
        
        items.forEach((el, index) => {
            if (el.name == titleName){
                document.getElementById(`order-${el.name}-${index}`).onclick = () => {
                    localStorage.setItem("item", el._id)
                    location.href = "./makeOrder.html"
                }
            }
        })
    } catch(error) {
        console.log(error)
    }
}

getItems()
