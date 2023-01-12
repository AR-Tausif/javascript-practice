let changeAbleDiv = document.querySelector('.changeable-div');
let changeColorBtn = document.getElementById('changeColorBtn')
changeColorBtn.addEventListener('click', function() {
    let RGBColor = generateRGBColor();
    changeAbleDiv.style.backgroundColor = RGBColor;
})
console.log(changeAbleDiv);


// RGB Random color Generate

function generateRGBColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
}
console.log(generateRGBColor());