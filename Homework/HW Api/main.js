const out = document.querySelector('.main__row')
const select = document.querySelector('.select')
const btnOut = document.querySelector('.btn-row')


btn.addEventListener('click', () => {
    fetch(`https://rickandmortyapi.com/api/character/${select.value}`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            out.innerHTML = `
        <div class="section__item">
            <h3>Серія: ${data.name} </h3>
            <img src="${data.image}" alt="">
        </div>
        `
        })
        .catch(err => console.log(err))
})

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
        .catch(err => console.log('Error: ', err));
}

function showFirst() {
    out.innerHTML = ``
    fetch('https://rickandmortyapi.com/api/character?page=1')
        .then(data => data.json())
        .then(data => {
            let arr = data.results;
            createSelect(data.results)
            arr.forEach((item) => {

                let newPers = createItem(item);
                out.innerHTML += newPers;
            })
        })
        .catch(err => console.log('Error ', err))
}

function pages(num) {
    out.innerHTML = ``
    fetch('https://rickandmortyapi.com/api/character?page=${num}')
        .then(data => data.json())
        .then(data => {
            let arr = data.results;
            createSelect(data.results)
            arr.forEach((item) => {
                let newPers = createItem(item);
                out.innerHTML += newPers;
            })
        })
        .catch(err => console.log('Error ', err))
}

function createItem(item) {
    return `
    <div class="main__item">
            <h2 class="main__title">${item.name}</h2>
            <img class="main__img" src="${item.image}" alt="">
            <p class="main__text">Стать: <b>${item.gender}</b></p>
            <p class="main__text">Вид: <b>${item.species}</b></p>
            <p class="main__text">Стан: <b>${item.status}</b></p>
            <p class="main__text">Дата: <i>${item.created}</i></p>
        </div>
    `
}

function createSelect(selItem) {
    let newArr = [];
    selItem.map((item) =>{
        newArr.push(item.species)
    })

    let newArr2 = new Set(newArr)

    newArr2.forEach((item)=>{
        select.innerHTML =+ `<option value ="${item}"> ${item} </option>`
    })
}