function calcular() {
    let numero = 0;
    let soma = 0;
    numero = document.getElementById('number');
    const divExibir = document.getElementById("divExibir")
    const result = document.getElementById("result")
    if (numero.value < 0) {
        alert('O numero é Negativo!')
    }
    for (let index = 1; index < numero.value; index++) {

        if (index % 3 == 0 || index % 5 == 0) {
            soma += index
            divExibir.innerHTML += index + ' ' ;
        }
    }

    if (numero.value > 0) {
        result.innerHTML += soma;
    }

}