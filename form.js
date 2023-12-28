const form = document.querySelector('#form')
const btn = document.querySelector('#btn')

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
    }else {
        /* ---------- create akkount uchun ---------- */
        /* 
        let usernameRegex = /^[a-zA-Z0-9]{6, 9999}+$/;
        let passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        if (!(usernameRegex.test(form.username.value))){
            e.preventDefault()
            clc[0].classList.add('required-login')
        }

        if (!(passwordRegex.test(form.password.value))){
            e.preventDefault()
            clc[1].classList.add('required-password')
        } */

        let err = false
        if (!(err)) {
            e.preventDefault()
            clc.forEach((e) => {
                e.classList.add('required')
            })
        }
    }

    
})

// Login yozish boshlanganda xatoni o'chirish 
const inpUsr = document.querySelector('#username')
inpUsr.addEventListener('keydown', () => {
    clc.forEach((e) => {
        e.classList.remove('required')
        e.classList.remove('required-login')
    })
})