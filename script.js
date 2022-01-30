// W poleceniu stażysta otrzymał informację, że ma to być strona, która wyświetli listę bohaterów. 

// Tablica zastępuje tymczasowo JSON z przykładowymi danymi. W przypadku pliku JSON importowanego z API wykorzystamy funkcję parse, żeby zamienić string na Object. Wtedy można zamienić funkcję forEach na iterację po Object np. Object.values lub jeśli będzie przekazywane więcej parametrów na rozbudowaną o Object.keys. lub Object.entries, która zwróci tablicę z kolejnymi tablicami, które będą zawierać obie lub wg. potrzeby więce wartości.

let heroes = ["Hulk", "Spiderman", "Superman", "Geralt", "Batman", "Catwoomen"];

// Deklaruję obiekty HTML, do których będą pushowane wartości z tablicy heroes do listy.
const hallOfFame = document.querySelector("#hallOfFame");
let ul = document.createElement('ul');


// Funkcja pobiera każdy element z tablicy heroes, umieszcza go w <li>, następnie dodaje do <ul> i listę umieszcza w elemencie "hallOfFame".
heroes.forEach(function(item) {
    let li = document.createElement('li');

    hallOfFame.appendChild(ul);
    ul.appendChild(li);
    li.innerHTML = li.innerHTML + item;
});

// Jeśli strona miałaby zawierać więcej niż przykładowa lista, jak było w kodzie np. dodana wartość powerCount, można utworzyć prototyp klasy lub objekt. W takim przypadku tworzymy funkcję, która będzie pobierała wartości keys i value. W takim przypadku można dodać zdjęcia i pod każdym dodać przycisk z funkcją train, która będzie zwiększać wartość powerCount. 
