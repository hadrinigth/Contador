let time = 0  // variavel do time
const valor = document.querySelector("#valor");//crie uma variavel e de a ela um valor (css) que fazer a modificaçao
const buttons =  document.querySelectorAll(".button")//crio uma variavel para receber todos os button 

buttons.forEach(function (buttons) {//pego a variavel e dou um"forEach" (para cada button ) que vai roda essa function em todos os buttons
    buttons.addEventListener("click", function (event){//adiciono o event desejado e adiciono a function
        let styles = event.currentTarget.classList;//crio uma variavel  e dou a ela o objeto desejado // currentTarget(objeto atual) o objeto atual e button + (classList) "mais"

        // vereficaçao
        if (styles.contains("menos")) { // se na variavel styles conter "menos" time - 1 no caso no html esta ("class = button menos") ou seja contem button e menos por isso e true
            time--;
        } else if (styles.contains('mais')) { // se repete a vereficao so que outro valor ("mais")
            time++;
        } else { // se nenhuma vereficaçao for true seleciona esse 
            time = 0 ;
        }

        if (time > 0 ) {
            valor.style.color = "green"
        }
        if (time < 0 ) {
            valor.style.color = "red"
        }
        if (time === 0 ) {
                valor.style.color = "#222"
        };
        valor.textContent = time // coloco minha varival na tela
    });
});
