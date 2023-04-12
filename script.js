// Primero se va dar funcionalidad al menú de tres rayitas que se le dió nombre a su clase como "menuToggle"
// Se mapea crreando una constante con el mismo nombre, se usa document, haciendo referencia a el documento html y se usa querySelector para seleccionar un elemento HTML en la página utilizando un selector CSS. Este método devuelve el primer elemento que coincida con el selector especificado, en este caso, el div con la clase ".menuToggle".
const menuToggle = document.querySelector(".menuToggle");

// El segundo elemento es la lista de items, se usa "navigation" porque dentro contiene toda la lista y al menú que se va expandir, y deacuerdo a este es como se va comportar el resto de la lista.
const navigation = document.querySelector(".navigation");

//Teniendo capturados esos elementos, se comienza a dar funcionalidad:

// Se va controlar el menú de las 3 rayitas, el evento "onclick", es decir, cuando se le haga click al menú de 3 rayitas, y se le dice que ejecute una función en específico
menuToggle.onclick = function () {
  // En este caso, se le dice que la navegación active un "classList", es decir, va a recorrer toda la clase de lista que se tiene en el HTML. Se le dice que en esta classList busque el "toggle", esta función ya viene implementada en JS y va a mapearlo como un "toggle", o como un activador, como un switch pues que se va encender, y se le da un nombre en específico, en este caso "open", es decir, se va a abrir esa parte del menú, esas 3 rayitas.
  navigation.classList.toggle("open");
};

//Ahora, se le da funcionalidad cada vez que se le de click en cada uno de los items
// Se declara una variable constante para mapear el documento, y se usa el querySelectorAll porque se va mapear todas las clases que tengan como clase a list, que son cada uno de los elementos de la lista, son 5.
const list = document.querySelectorAll(".list");
// Ahora, se crea una función para activar los elementos de tipo link.
function activarLink() {
  // Se va recorrer la lista "list" que se declaró previamente, a través de un "forEach()" y dentro, se van a capturar los items a través de una función de flecha
  list.forEach((item) =>
    // Se capturan los items de toda la lista de la clase y se va remover "remove", todo elemento que tenga como estado al "active".
    // Esto es porque el "active" solo lo tiene el primer elemento, el de "home", entonces, al recorrer todos los elementos que tengan como clase el ".list" a través del "forEach()" se recorren estos items que se tenga, so, los recorre y encontrará 5 items, y primero se va a remover TODA clase que tenga "active", es decir, "home" aparece activo por la clase "active", y al hacer esto, remueve ese active, como que lo va a "deseleccionar"
    item.classList.remove("active")
  );
  // Una vez ya quitado de todas las clases, la clase que tenga el "active", se va a activar de nuevo con "add()", esto con el objetivo de que donde se halla activado "activarLink()" justo ahí se le va dar ese "active".  Para que esto funcione se le debe decir que va a acceder a este mismo elemento, así que se autoreferencia con "this".
  this.classList.add("active");
  // En resumen, primero se le quita el active a todos los items qiue pueda tenerlo, y posteriormente se le asigna a el elemento el cual se le halla dado click.
}
// Unav ez ya creada la función, se le que dice que en la list se va mapear a través de un forEach() y una función de flecha...
list.forEach((item) =>
  // Se le pide que en nuestro item se le va asignar un evento con addEventListener, que será el evento de click en el primer parámetro, y en el segund, a ese click se le da la función de "activarLink()"
  item.addEventListener("click", activarLink)
);
