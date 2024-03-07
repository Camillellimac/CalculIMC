
const BMIData = [
    { name: "Maigreur", color: "midnightblue", range:[0, 18.5]},
    { name: "Bonne santé", color: "green", range: [18.5, 25] },
    { name: "Surpoids", color: "lightcoral", range: [25, 30] },
    { name: "Obésité modérée", color: "orange", range: [30, 35] },
    { name: "Obésité sévère", color: "crimson", range: [35, 40] }, 
    { name: "Obésité morbide", color:"purple", range: [40, Number.POSITIVE_INFINITY]}
]

// 1 On récupère la balise html et on la stocke dans une variable en js
const validationBtn = document.querySelector(".validation-btn")
const resultIMC = document.querySelector('.bmi-value')
const inputs = document.querySelectorAll('.bmi-input')
const message = document.querySelector('.comment')

// 2 on déclare un click sur le bouton, à chaque fois qu'on clique, on exécute la fonction associéee
validationBtn.addEventListener('click', onBtnClick)

function onBtnClick() {


    const height = inputs[0].value / 100
    const weight = inputs[1].value
    // afficher dans la console l'IMC => poids en kg / taille en m ² ** 2

    // vérifier les données utilisateur, pas de valeurs <= 0

    if (checkError(height, weight)) {
        resultIMC.style.color = "black"
        resultIMC.textContent = "0"
        return 
    }
    const bmi = (weight / height ** 2)

    resultIMC.textContent = bmi.toFixed(2)

    for(let i=0; i < BMIData.length; i++) {
        if(bmi > BMIData[i].range[0] && bmi <= BMIData[i].range[1]) {
            resultIMC.style.color = BMIData[i].color
            message.textContent = BMIData[i].name
        }
    }
}

function checkError(hParameter, wParameter) {

    if(!hParameter || hParameter < 0) {
        message.textContent = (`La taille  est incorrecte`)
        return true
    }

    if(!wParameter || wParameter < 0) {
    message.textContent = (`Le poids est incorrect`)
    return true
   }

 
}