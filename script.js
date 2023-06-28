function pick(event) {
    const pickColor = event.target.value;
    document.querySelector('body').style.backgroundColor = pickColor;
    document.querySelector('h1').innerHTML = pickColor;
}