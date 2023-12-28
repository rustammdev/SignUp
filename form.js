const form = document.querySelector('#form')

const passJson = {
    login : '',
    password : ''
}
// Bosh listga tekshiruv
const clc = document.querySelectorAll(".clc")

form.addEventListener('submit', (e) => {
    passJson.login = form.username.value
    passJson.password = form.password.value
    
    if (passJson.login == "" && passJson.password == "") {
        e.preventDefault()
        clc.forEach((e) => {
            e.classList.add('required')
        })
    }
})

const inpUsr = document.querySelector('#username')
inpUsr.addEventListener('keydown', () => {
    clc.forEach((e) => {
        e.classList.remove('required')
    })
})