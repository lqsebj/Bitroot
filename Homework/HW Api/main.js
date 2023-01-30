
    // const out = document.querySelector('.main__row')
    // const select = document.querySelector('.select')
    // const btnOut = document.querySelector('.btn-row')

    // showButton() // Робимо кнопки
    // showFirst() // виводимо першу сторінку
    // // Async/await
    // // async function asArr() {
    // //     let arr = await fetch('https://rickandmortyapi.com/api/character/104')
    // //     let arrJason = await arr.json();
    // //
    // //     console.log(arrJason)
    // // }
    // //
    // // asArr()

    // // fetch('https://rickandmortyapi.com/api/character/4')
    // //     .then(data => data.json()) // потім
    // //     .then(data => {
    // //         console.log(data)
    // //         let newPers = createItem(data);
    // //         out.innerHTML = newPers;
    // //     }) // потім
    // //     .catch(err => console.log('Error: ', err)) // помилка
    // // //.finally() // в любому випадку відпрацює

    // // Виводимо всі сторінки
    // function showButton() {
    //     fetch('https://rickandmortyapi.com/api/character')
    //         .then(data => data.json()) // потім
    //         .then(data => {
    //             console.log(data) //data це обєкт

    //             let count = data.info.pages; // беру кількість кнопок

    //             // Цикл який малює кнопки
    //             for(let i = 1; i <= count; i++) {
    //                 let btn = document.createElement('button')
    //                 btn.setAttribute("value", `${i}`)
    //                 btn.classList.add('btn')
    //                 btn.innerHTML = `${i}`;
    //                 btn.onclick = () => {
    //                     pages(btn.value)
    //                 }
    //                 btnOut.append(btn)
    //             }
    //         }) // потім
    //         .catch(err => console.log('Error: ', err)) // помилка
    //     //.finally() // в любому випадку відпрацює
    // }

    // function showFirst() {
    //     out.innerHTML = ``
    //     fetch(`https://rickandmortyapi.com/api/character?page=1`)
    //         .then(data => data.json()) // потім
    //         .then(data => {
    //             let arr = data.results;
    //             console.log(data)
    //             createSelect(data.results)
    //             arr.forEach((item)=>{

    //                 let newPers = createItem(item);
    //                 out.innerHTML += newPers;
    //             })

    //         }) // потім
    //         .catch(err => console.log('Error: ', err)) // помилка
    //     //.finally() // в любому випадку відпрацює
    // }

    // function pages(num) {
    //     out.innerHTML = `` // Очищуемо out
    //     fetch(`https://rickandmortyapi.com/api/character?page=${num}`)
    //         .then(data => data.json()) // потім
    //         .then(data => {
    //             let arr = data.results;
    //             console.log(data)
    //             createSelect(data.results)
    //             arr.forEach((item)=>{
    //                 let newPers = createItem(item);
    //                 out.innerHTML += newPers;
    //             })

    //         }) // потім
    //         .catch(err => console.log('Error: ', err)) // помилка
    //     //.finally() // в любому випадку відпрацює
    // }

    // function createItem(item) {
    //     return `
    //         <div class="main__item">
    //                 <h2 class="main__title">${item.name}</h2>
    //                 <img class="main__img" src="${item.image}" alt="">
    //                 <p class="main__text">Стать: <b>${item.gender}</b></p>
    //                 <p class="main__text">Вид: <b>${item.species}</b></p>
    //                 <p class="main__text">Стан: <b>${item.status}</b></p>
    //                 <p class="main__text">Дата: <i>${item.created}</i></p>
    //             </div>
    //         `
    // }

    // function createSelect(selItem) {
    //     let newArr = [];
    //     selItem.map((item)=>{
    //         newArr.push(item.species)
    //     })
    //     let newArr2 = new Set(newArr)

    //     newArr2.forEach((item)=>{
    //         select.innerHTML += `<option value="${item}"> ${item} </option>>`
    //     })
    // }


// 1: Сортуємо по
    // 2; кольори станів Dead = сірий / Alive = зелений / unknown = ваш росуд
    const out = document.querySelector('.main__row')
    const select = document.querySelector('.select')
    const btnOut = document.querySelector('.btn-row')

    showButton()
    showFirst()

    function showButton() {
      fetch('https://rickandmortyapi.com/api/character')
        .then(data => data.json()) // потім
        .then(data => {
          console.log(data) //data це обєкт

          let count = data.info.pages; // беру кількість кнопок

          // Цикл який малює кнопки
          for (let i = 1; i <= count; i++) {
            let btn = document.createElement('button')
            btn.setAttribute("value", `${i}`)
            btn.classList.add('btn')
            btn.innerHTML = `${i}`;
            btn.onclick = () => {
              pages(btn.value)
            }
            btnOut.append(btn)
          }
        }) // потім
        .catch(err => console.log('Error: ', err)) // помилка
      //.finally() // в любому випадку відпрацює
    }

    function showFirst() {
      out.innerHTML = ``
      fetch(`https://rickandmortyapi.com/api/character?page=1`)
        .then(data => data.json()) // потім
        .then(data => {
          let arr = data.results;
          console.log(data)
          createSelect(data.results)

          arr.forEach((item) => {

            let newPers = createItem(item);
            out.innerHTML += newPers;
          })
          select.onchange = () => {
            out.innerHTML = ''
            arr.filter((item) => {
              if (item.species == select.value) {
                let newPers = createItem(item);
                out.innerHTML += newPers;
              } else if (select.value == 'all') {
                let newPers = createItem(item);
                out.innerHTML += newPers;
              }
              // console.log(item.species);
              console.log(select.value);
              //let newPers = createItem(item);
              //out.innerHTML += newPers;
            })
          }

        }) // потім
        .catch(err => console.log('Error: ', err)) // помилка
      //.finally() // в любому випадку відпрацює
    }

    function pages(num) {
      out.innerHTML = `` // Очищуемо out
      fetch(`https://rickandmortyapi.com/api/character?page=${num}`)
        .then(data => data.json()) // потім
        .then(data => {
          let arr = data.results;
          console.log(data)
          createSelect(data.results)
          arr.forEach((item) => {
            let newPers = createItem(item);
            out.innerHTML += newPers;
          })

        }) // потім
        .catch(err => console.log('Error: ', err)) // помилка
      //.finally() // в любому випадку відпрацює
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
      select.innerHTML = ''
      let newArr = [];
      selItem.map((item) => {
        newArr.push(item.species)
      })
      let newArr2 = new Set(newArr)
      select.innerHTML = `<option value="all"> all </option>`
      newArr2.forEach((item) => {
        select.innerHTML += `<option value="${item}"> ${item} </option>`
      })
    }

