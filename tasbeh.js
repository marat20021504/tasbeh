document.querySelector(".tugma").addEventListener("click", function() {
    let ekran = document.querySelector(".ekran")
    console.log(ekran);
    ekran.value = parseInt(ekran.value) + 1

document.querySelector(".nolga").addEventListener("click", function() {
    document.querySelector(".ekran").value = 0
})
});