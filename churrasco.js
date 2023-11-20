let adults = prompt('Quantos adultos que bebem álcool estarão nesse churrasco?');
let adultsNoAlchool = prompt('Quantos adultos que não bebem álcool estarão nesse churrasco?');
let children = prompt('Quantas crianças estarão nesse churrasco?');

let adultsTotal = Number(adults) + Number(adultsNoAlchool);
let totalPeople = Number(adultsTotal) + Number(children);
let totalCarne = Number((0.2 * children)) + Number((0.4 * adultsTotal));
let sideDishes = 0.2 * totalPeople;
let beer = adults * 2;
let soda = totalPeople * 0.5;
let water = totalPeople * 0.4;

if (adultsTotal === 0) {
    alert('Não é possível fazer um churrasco sem adultos responsáveis!');
} else {
    alert(`A quantidade de carne necessária será ${totalCarne.toFixed(2)}KG`);
    alert(`A quantidade de acompanhamentos necessários será de ${sideDishes.toFixed(2)}KG`);
    alert(`A quantidade de cerveja necessária será de ${beer.toFixed(2)}L`);
    alert(`A quantidade de refrigerante necessário será de ${soda.toFixed(2)}L`);
    alert(`A quantidade de água necessária será de ${water.toFixed(2)}L`);
};