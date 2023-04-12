let cars = [
    {
        id: 1,
        model: "urus",
        company: "lamborgini",
        price: 266000,
        engineForce: 6.5 
    },
    {
        id: 2,
        model: "cheron",
        company: "buggatti",
        price: 500000,
        engineForce: 7 
    },
    {
        id: 3,
        model: "malibu 2",
        company: "gm",
        price: 33000,
        engineForce: 2.4 
    },
    {
        id: 4,
        model: "gentra",
        company: "gm",
        price: 17000,
        engineForce: 1.5
    },
    {
        id: 5,
        model: "gelen vagen",
        company: "mercedes",
        price: 300000,
        engineForce: 4
    },
    {
        id: 6,
        model: "matiz",
        company: "daewoo",
        price: 3000,
        engineForce: 6
    }
]


let userInput = prompt("Введите модель или компанию машины:");

let filteredCars = cars.filter(c => c.model === userInput || c.company === userInput);

if (filteredCars.length === 0) {
  alert("Машина не найдена");
} else if (filteredCars.length === 1) {
  let car = filteredCars[0];
  let userPrice = +prompt(`Цена ${car.model} от ${car.price}. Введите сумму:`);
  while (userPrice < car.price) {
    alert("Недостаточно средств");
    userPrice = +prompt(`Цена ${car.model}: ${car.price}. Введите сумму:`);
  }
  let change = userPrice - car.price;
  alert(`Ваша сдача: ${change}`);
} else {
  let companyModels = filteredCars.map(c => c.model).join(", ");
  let chosenModel = prompt(`Какую из машин хотите? Доступные модели: ${companyModels}`);
  let car = filteredCars.find(c => c.model === chosenModel);
  let userPrice = +prompt(`Цена ${car.model} от ${car.price}. Введите сумму:`);
  while (userPrice < car.price) {
    alert("Недостаточно средств");
    userPrice = +prompt(`Цена ${car.model}: ${car.price}. Введите суму:`);
  }
  let change = userPrice - car.price;
  alert(`Ваша сдача: ${change}, Спасибо за покупку!`);
}






