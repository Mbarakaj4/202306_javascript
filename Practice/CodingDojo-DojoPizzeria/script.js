//Ejemplo: Definimos un sandwich
/* var sandwich = {
    pan:    "masa madre",
    proteína:  "asado",
    queso:   "queso suizo lacey",
    salsas: ["lechuga romana", "tomates reliquia", "salsa de rábano"]
};
    
console.log(sandwich); */

//Ejemplo_1: Definimos una funcion que fabrique sandwiches
/* function sandwichFactory(pan, proteina, queso, salsas) {
    var sandwich = {};
    sandwich.pan = pan;
    sandwich.proteina = proteina;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    return sandwich;
}
    
var s1 = sandwichFactory("trigo", "pavo", "provolone", ["mostaza", "cebolla frita", "rúcula"]);
console.log(s1); */

//Ahora creamos una funcion llamada pizzaOven
function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;

}

var p1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
var p2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
var p3 = pizzaOven("mediana", "tradicional", ["mozzarella"], ["pepperoni","aceitunas"]);
var p4 = pizzaOven("grande", "tradicional", ["mozzarella"], ["aceitunas"]);
console.log(p1,p2,p3,p4);