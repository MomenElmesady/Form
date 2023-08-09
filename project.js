`use strict`
let name = document.getElementById("name");
name.addEventListener("blur", function () {
    if (name.value == "") {
        console.log("The Name field is empty");
        name.focus()
    }
});

function checkValue() {
    let country = document.getElementById("country")
    let zip = document.getElementById("zip")
    if (country.value) {
        if (country.value == "") {
            zip.value = "??"
        }
        else if (country.value == "eg") {
            zip.value = "011"
        }
        else if (country.value == "su") {
            zip.value = "000"
        }
        else if (country.value == "qt") {
            zip.value = "111"
        }
    }
}

let email = document.getElementById("email")
email.addEventListener("blur", function () {
    if (email.value.includes("@")) {
        if (!email.value.split("@")[1].includes("."))
            console.log("False Email")

    }
    else
        console.log("False Email")
})

