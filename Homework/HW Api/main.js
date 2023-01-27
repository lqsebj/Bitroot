const out = document.querySelector('.main__row')
const select = document.querySelector('.select')
const btnOut = document.querySelector('.btn-row')


// btn.addEventListener('click', () => {
//     fetch(`https://rickandmortyapi.com/api/character/${select.value}`)
//         .then(data => data.json())
//         .then(data => {
//             console.log(data);
//             out.innerHTML = `
//         <div class="section__item">
//             <h3>Серія: ${data.name} </h3>
//             <img src="${data.image}" alt="">
//         </div>
//         `
//         })
//         .catch(err => console.log(err))
// })

function showButton() {
    fetch('https://rickandmortyapi.com/api/character')
        .then(data => data.json())
        .then(data => {
            let count = data.info.pages;

            count.forEach((item) => {
                let btn = document.createElement('button');
                btn.setAttribute("value", `${item}`)
                btn.classList.add('btn')
                btn.innerHTML = `${item}`;
                btn.onclick = () => {
                    pages(btn.value)
                }
                btnOut.append(btn)
            })
        })
        .catch(err => console.log('Error: ', err);)
}