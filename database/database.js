function search_bar() {
    let input = document.getElementById("searchbar").value
    input = input.toLowerCase()
    let x = document.getElementsByClassName("userBox")
    let userInfo = document.getElementsByClassName("userInfo")

    for (i = 0; i < x.length; i++) {
        if (x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "block"
            userInfo[i].style.display = "flex"
        } else {
            x[i].style.display = "none"
            userInfo[i].style.display = "none"
        }
    }
}