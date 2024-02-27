const container = document.querySelector('#container');
const input = document.querySelector('input');
let defaultSize = 16;
resizePanel(defaultSize)

const button = document.querySelector('button');
button.addEventListener('click', () => {
    size = input.value == '' ? defaultSize: input.value > 80 ? 80 : input.value;
    resizePanel(size)
})

function resizePanel(size = 16) {
    container.innerHTML = ''
    size = size > 100 ? 100: size
    for (let i = 0; i < size; ++i) {
        const outerDiv = document.createElement('div')
        outerDiv.classList.add('outerDiv')
        for (let j = 0; j < size; ++j) {

            const insideDiv = document.createElement('div')
            insideDiv.classList.add('insideDiv')

            insideDiv.style.height = String((600/size) - 2) + 'px'
            insideDiv.style.width = String((600/size) - 2)  + 'px'

            insideDiv.addEventListener("mouseover", (e) => {
                console.log(e.target.style)
                e.target.style.backgroundColor = 'black'
            })

            outerDiv.appendChild(insideDiv)
            
        }
        container.appendChild(outerDiv)
    }
}

