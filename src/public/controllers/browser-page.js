document.getElementById("alert").hidden = true
const makeOrder = () => {
    document.getElementById("pizza").onclick = () => {
        localStorage.setItem("name", "pizza")
        location.href = "./menu.html"
    }
    document.getElementById("sandwich").onclick = () => {
        localStorage.setItem("name","sandwich")
        location.href = "./menu.html"
    }
    document.getElementById("burger").onclick = () => {
        localStorage.setItem("name", "burger")
        location.href = "./menu.html"
    }

}

if (localStorage.getItem("class") === "alert") {
    localStorage.clear()
    document.getElementById("alert").hidden = false
}

makeOrder()