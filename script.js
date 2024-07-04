document.getElementById('changerButton').
    addEventListener('click', () => {
        let colors = randomGradient();
        console.log(colors)
        let color1 = colors.color1;
        let color2 = colors.color2;
        document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
        document.getElementById('color').innerHTML = `Gradient: ${color1} to ${color2}`; 
    })

function randomGradient() {
    let letters = '0123456789ABCDEF';
    let color = '#'
    let color1 = '#'
    let color2 = '#'
    let colors = []
    for (let i = 0; i<6; i++){
        color1 = color1 + letters[Math.floor(Math.random() * 16)] 
        color2 = color2 + letters[Math.floor(Math.random() * 16)] 
    }
    return {color1, color2};
}