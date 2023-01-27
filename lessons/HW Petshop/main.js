const pets = [
  {
    name: "Скоттиш фолд", // Порода
    description: 'Золотой шотландский вислоухий кот ждет в гости кошечку для совместного времяпровождения. Одной встречи достаточно для получения красивого и здорового потомства. У полуторагодовалого',
    location: "Київ, Київська область",
    price: "4500 грн",
    url: 'https://d1opu7v3g3cdvy.cloudfront.net/213x160/4ZN2o7krAB7SsGcJjX93.webp'
  },
  {
    name: "Скоттиш фолд", // Порода
    description: 'Гарний ,охайний котик. Привчений до лотка,їсть сухий корм. Любить гратися. Котику майже 4 місяці.( В подарунок 2 лоточка для туалету.',
    location: "Київ, Київська область",
    price: "1500 грн",
    url: 'https://d1opu7v3g3cdvy.cloudfront.net/213x160/o4b5MCkz9QUV6sgVCPzV.webp'
  },
  {
    name: "Другая", // Порода
    description: 'Все вопросы обсуждаются в телефонном разговоре, а не в переписке. Большая просьба звонить с 10 до 20 часов.Елка - глазастая, красивая и яркая, но колкая, если хочешь прикоснуться. Елка из тех',
    location: "Київ, Київська область",
    price: "1 грн",
    url: 'https://d1opu7v3g3cdvy.cloudfront.net/213x160/jKmG4ZOy05MmybPcazEl.webp'
  },
  {
    name: "Экзотическая короткошерстная", // Порода
    description: 'Великолепный малыш Экзот, 2 месяца Лоток и когтеточку знает без проблем. Очень ласковый и нежная мальчик. Питание : сухой корм премиум класса и натуралка. Больше фото и видео вышлю в',
    location: "Київ, Київська область",
    price: "5000 грн",
    url: 'https://d1opu7v3g3cdvy.cloudfront.net/213x160/WZ0RZ4x6GQ2VUENFTPrm.webp'
  },
  {
    name: "Экзотическая короткошерстная", // Порода
    description: 'Экзотический мальчик медвежульного типа) Упитанный и классный! С отличным костяком Чистокровный, обучен лотку Пишите в вайбер вышлю больше фото, видео',
    location: "Київ, Київська область",
    price: "1300 грн",
    url: 'https://d1opu7v3g3cdvy.cloudfront.net/213x160/iV8s1E5lPpU7wdJIAO7K.webp'
  },

]
let out = document.querySelector('.pets__container');
let input = document.querySelector('.inp');
let show = document.querySelector('.btn1').addEventListener('click', showAll);
let but = document.querySelector('.btn-srch').addEventListener('click', finded);
let select = document.querySelector('.select'); //.addEventListener('change', onChange);
let btn1 = document.querySelector('.btnD').addEventListener('click', costSort);



function addElement(name, url, price, description, location) {
  const div = document.createElement('div');
  div.setAttribute('class', 'pets__item');
  const h3 = document.createElement('h3');
  h3.setAttribute('class', 'pets__name');
  h3.innerHTML = name;
  const img = document.createElement('img');
  img.setAttribute('class', 'pets__img');
  img.setAttribute('src', url);
  img.innerHTML = url;
  const divPrice = document.createElement('div');
  divPrice.setAttribute('class', 'pets__price');
  divPrice.innerHTML = price;
  const p = document.createElement('p');
  p.setAttribute('class', 'pets__description');
  p.innerHTML = description;
  const h5 = document.createElement('h5');
  h5.setAttribute('class', 'pets__loc');
  h5.innerHTML = location;
  out.append(div);
  div.append(h3, img, img, divPrice, p, h5);
}



function showAll() {
  out.innerHTML = '';
  pets.map((item) => addElement(item.name, item.url, item.price, item.description, item.location));
}

showAll();

function sell(name) {
  let opt = document.createElement('option');
  opt.setAttribute('value', '');
  opt.innerHTML = name;
  select.append(opt);
}



  const newPets = new Set();

  const unique = pets.map(e => {
    const isDuplicate = newPets.has(e.name);

    newPets.add(e.name);

    if (!isDuplicate) {
      return true
    }

    return false
    
  });
  newPets.forEach((i) => sell(i.name));


console.log(newPets);


// array.from > map

// const newPets = Array.from(new Set(pets.map((item) =>  item.name)));    
// newPets.map((i) => {
//   opt.setAttribute('value', .name);
//   select.append(opt);
//   sell(i.value);
// });





function finded() {
  out.innerHTML = '';
  pets.map((item) => {
    let string = input.value;
    if (string != '') {
      if (item.name.toLowerCase().includes(string)) {
        addElement(item.name, item.url, item.price, item.description, item.location);
      }
    }
  })
  input.value = '';
}


function costSort() {
  out.innerHTML = '';
  const prices = pets.sort((a, b) => a.price.valueOf() > b.price.valueOf());
  prices.map((item) => addElement(item.name, item.url, item.price, item.description, item.location));
}

function onChange() {
  out.innerHTML = '';
  pets.map((item) => {
    str = select.value;
    if (str === item.name) {
      addElement(item.name, item.url, item.price, item.description, item.location)
    }
  })
}

select.addEventListener('change', onChange);


