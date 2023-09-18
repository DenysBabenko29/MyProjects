const btn = document.getElementById('btn');
const code = document.getElementById('code-color');
btn.addEventListener('click', () => {
    let color = 1;
    for(let i = 0; i < 6 ; i++){
        color += Math.floor(Math.random() * 167772);
    }
    code.textContent = `#${color}`;
    document.body.style.backgroundColor = `#${color}`;
})