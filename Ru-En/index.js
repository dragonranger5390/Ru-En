
let myLeads = []

localStorage.setItem("lang", "")
let lang = localStorage.getItem("lang")

const inputPH = ["Ask the TopG!", "Окей, Анас!", "Спроси у Анаса!", "Ask the BiGBoSS!"]

const bodyEl = document.getElementById("body-el")
const inputEl = document.getElementById("input-el")

const toggleBtn = document.getElementById("toggle-btn")

const saveBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")

const enRuBtn = document.getElementById("enRu-btn")
const ruEnBtn = document.getElementById("ruEn-btn")

const meaningEnBtn = document.getElementById("meaningEn-btn")

const meaningRuBtn = document.getElementById("meaningRu-btn")
const synoBtn = document.getElementById("syno-btn")
const compBtn = document.getElementById("comp-btn")
const assosBtn = document.getElementById("assos-btn")
const stressBtn = document.getElementById("stress-btn")

// const ArRuBtn = document.getElementById("ArRu-btn")
// const RuArBtn = document.getElementById("RuAr-btn")

// const dictionaryArBtn = document.getElementById("dictionaryAr-btn")


const ulEl = document.getElementById("ul-el")

// const iframeEl = document.getElementById("iframe-el")
// random placeholder
const randomInputPH = Math.floor(Math.random()*4)
inputEl.placeholder = `${inputPH[randomInputPH]}`
// random background
// const randomNumBG = Math.floor(Math.random()*3 +1) 
// console.log (randomNumBG)
// bodyEl.style.backgroundImage = `url("${randomNumBG}.png")`



enRuBtn.addEventListener("click", function(){
    if (inputEl.value != "") {
        let inVal = inputEl.value 
        const urlEnTranslation = `https://translate.google.ru/?sl=en&tl=ru&text=${inVal}&op=translate`
        newTab(urlEnTranslation)
        let newWordTag = `${inVal} -gt`
        savingWords(newWordTag)
    } 
})

ruEnBtn.addEventListener("click", function(){
    if (inputEl.value != "") {
        let inVal = inputEl.value 
        const urlRuTranslation = `https://translate.google.ru/?sl=ru&tl=en&text=${inVal}&op=translate`
        newTab(urlRuTranslation)
        let newWordTag = `${inVal} -gt`
        savingWords(newWordTag)
    } 

})

meaningEnBtn.addEventListener("click", function(){
    if (inputEl.value != "") {
        let inVal = inputEl.value 
        const urlEnMeaning = `https://dictionary.cambridge.org/dictionary/english/${inVal}`
        newTab(urlEnMeaning)
        let newWordTag = `${inVal} -meaning`
        savingWords(newWordTag)
    }
})

meaningRuBtn.addEventListener("click", function(){
    if (inputEl.value != "") {
        let inVal = inputEl.value 
        const urlRuMeaning = `https://kartaslov.ru/значение-слова/${inVal}`
        newTab(urlRuMeaning)
        let newWordTag = `${inVal} -значение`
        savingWords(newWordTag)
    }
})

synoBtn.addEventListener("click", function(){
    if (inputEl.value != "") {
        let inVal = inputEl.value 
        const urlSynonyms = `https://kartaslov.ru/синонимы-к-слову/${inVal}`
        newTab(urlSynonyms)
        let newWordTag = `${inVal} -синонимы`
        savingWords(newWordTag)
    }
})

compBtn.addEventListener("click", function(){
    if (inputEl.value != "") {
        let inVal = inputEl.value 
        const urlCompat = `https://kartaslov.ru/сочетаемость-слова/${inVal}`
        newTab(urlCompat)
        let newWordTag = `${inVal} -сочетаемость`
        savingWords(newWordTag)
    }

})

assosBtn.addEventListener("click", function(){
    if (inputEl.value != "") {
        let inVal = inputEl.value 
        const urlAssos = `https://kartaslov.ru/ассоциации-к-слову/${inVal}`
        newTab(urlAssos)
        let newWordTag = `${inVal} -ассоциации`
        savingWords(newWordTag)
    }


})


stressBtn.addEventListener("click", function(){
    if (inputEl.value != "") {
        let inVal = inputEl.value 
        const urlStress = `https://где-ударение.рф/в-слове-${inVal}/`
        newTab(urlStress)
        let newWordTag = `${inVal} -ударение`
        savingWords(newWordTag)
    }
})

// dictionaryArBtn.addEventListener("click", function(){
//     if (inputEl.value != "") {
//         let inVal = inputEl.value 
//         const urlDictAr = `https://www.almaany.com/ar/dict/ar-ar/${inVal}/`
//         newTab(urlDictAr)
//         let newWordTag = `${inVal}`
//         savingWords(newWordTag)
//     }
// })

// ArRuBtn.addEventListener("click", function(){
//     if (inputEl.value != "") {
//         let inVal = inputEl.value 
//         const urlArTranslation = `https://translate.google.ru/?sl=ar&tl=ru&text=${inVal}&op=translate`
//         newTab(urlArTranslation)
//         let newWordTag = `${inVal} -gt`
//         savingWords(newWordTag)
//     }
// })

// RuArBtn.addEventListener("click", function(){
//     if (inputEl.value != "") {
//         let inVal = inputEl.value 
//         const urlRuTranslation = `https://translate.google.ru/?sl=ru&tl=ar&text=${inVal}&op=translate`
//         newTab(urlRuTranslation)
//         let newWordTag = `${inVal} -gt`
//         savingWords(newWordTag)
//     }
// })


// rendering inframe
// function inframe(url) {
//     iframeEl.src = `${url}`
//     iframeEl.style.height = "100%"
// }



// rendering a new Tab
function newTab(url) {
    window.open(url, '_blank').focus()
}

// Delete button
deleteBtn.addEventListener("click", function(){
    myLeads.pop()
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

// parse Words
const leadsFromLS = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLS) {
    myLeads = leadsFromLS
    render(myLeads)
}

// Save Button
saveBtn.addEventListener("click", function() {
    savingWords(inputEl.value)
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
})


// myLeads.push(inputEl.value)
// inputEl.value = ""
// localStorage.setItem("myLeads", JSON.stringify(myLeads))


function savingWords(word) {
    if (word != "") {
        myLeads.push(word)
        inputEl.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
        console.log(localStorage.getItem("myLeads"))
    }
    
}

function render(leads) {
    let listItems = ""
    for (let i = 0 ; i < leads.length; i++) {
    listItems += `<li>${leads[i]}</li>`
    }
    ulEl.innerHTML = listItems
}


// language button
// toggleBtn.addEventListener("click", function() {
//     changeLang()
// })
// toggleBtn.addEventListener("dblclick", function(){
//     resetLang()
// })




function setLang() {
    if (lang === "RU") {
        // inputEl.style.width = "88%"
        toggleBtn.innerHTML = "RU"
        saveBtn.innerHTML = "СОХРАНИТЬ"
        deleteBtn.innerHTML = "УДАЛИТЬ"
        enRuBtn.style.display = "none"
        ruEnBtn.style.display = ""
        meaningEnBtn.style.display = "none"
        meaningRuBtn.style.display = ""
        assosBtn.style.display = ""
        synoBtn.style.display = ""
        compBtn.style.display = ""
        stressBtn.style.display = ""

    } else if (lang === "EN") {
        // inputEl.style.width = "88.3%"
        toggleBtn.innerHTML = "EN"
        saveBtn.innerHTML = "SAVE"
        deleteBtn.innerHTML = "DELETE"
        enRuBtn.style.display = ""
        ruEnBtn.style.display = "none"
        meaningEnBtn.style.display = ""
        meaningRuBtn.style.display = "none"
        assosBtn.style.display = "none"
        synoBtn.style.display = "none"
        compBtn.style.display = "none"
        stressBtn.style.display = "none"

    }
}

function changeLang() {
    if (lang === "RU") {
        setEN()
    } else if (lang === "EN") {
        setRU()
    } else {
        setRU()
    }
}

function resetLang() {
    // inputEl.style.width = "82%"
    toggleBtn.innerHTML = "RU|EN"
    saveBtn.innerHTML = "СОХРАНИТЬ-SAVE"
    deleteBtn.innerHTML = "УДАЛИТЬ-DEL"
    enRuBtn.style.display = ""
    ruEnBtn.style.display = ""
    meaningEnBtn.style.display = ""
    meaningRuBtn.style.display = ""
    assosBtn.style.display = ""
    synoBtn.style.display = ""
    compBtn.style.display = ""
    stressBtn.style.display = ""
}



function setRU() {
    localStorage.setItem("lang", "RU")
    lang = localStorage.getItem("lang")
    setLang()
}
function setEN() {
    localStorage.setItem("lang", "EN")
    lang = localStorage.getItem("lang")
    setLang()
}

// popup listener


// listItems += `<li><a target='_blank' href='https://${leads[i]}'>${leads[i]}</a></li>`


// function newTab(url) {
//     window.open(url, '_blank').focus()
// }

// "default_icon":{
//     "16" : "icons8-c-16.png",
//     "32" : "icons8-c-32.png", 
//     "64" : "icons8-c-64.png", 
//     "128" : "icons8-c-128.png"
// }