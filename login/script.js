let usersDatabase = []
let attempt = 3

const userArr = localStorage.getItem('usersDatabase')

if (userArr !== null) {
    usersDatabase = JSON.parse(userArr)
}


document.querySelector('#username-login').addEventListener('input', function(e) {
    inputUsername = e.target.value
    
})

document.querySelector('#password-login').addEventListener('input', function(e) {
    inputPassword = e.target.value
})

document.querySelector('#login-form').addEventListener('click', function(e) {
    e.preventDefault()
    console.log('e')
    users = localStorage.getItem('usersDatabase')

    arrUsers = JSON.parse(users)

    let findUser = usersDatabase.findIndex(function (user) {
        let name = user.username === inputUsername 
        let pass = user.password === inputPassword
        let check = inputUsername === ''
        let check2 = inputPassword === ''
        return name &&  pass 
         
    })
    
    if (findUser > 0) {
        const p = document.createElement('p')
        p.textContent = 'Welcome  back'+ ' ' + inputUsername
        p.style.color = 'green'
        document.querySelector('#welcome').style.backgroundColor = ' rgba(0, 255, 0, 0.5)' 
        document.querySelector('#welcome').style.width = '300px'
        document.querySelector('#welcome').style.textAlign = 'center'
        
        document.querySelector('#welcome').style.fontSize = '30px'
        document.querySelector('#welcome').style.borderRadius = '10px'
        document.querySelector('#welcome').style.marginTop = '190px'
        document.querySelector('#yourPage').appendChild(p)
        const a = document.querySelector('#aPage')
        a.innerHTML = 'Go to your Page'
        a.style.fontSize = '15px'
        document.querySelector('#yourPage').appendChild(a)
        document.querySelector('.login-form').innerHTML = ''
        document.querySelector('.login-form').style.backgroundColor = 'transparent'

        // window.close('index.html')
        // window.open('../user/index.html')
        
    } else {
        document.querySelector('#wrongPass').innerHTML = 'Your username or password is wrong'
        document.querySelector('#wrongPass').style.color = 'red';
        document.querySelector('#wrongPass').style.backgroundColor = 'rgba(255, 0, 0, 0.39)'
        const but = document.createElement('button')
        but.textContent = 'x'
        // but.style.borderRadius = '16px'
        but.style.backgroundColor = 'transparent'
        but.style.border = '0px'
        but.style.marginLeft = '5px'
        but.style.color = 'red'
        document.querySelector('#wrongPass').appendChild(but)
        but.addEventListener('click', function () {
            document.querySelector('#wrongPass').innerHTML = ''
            document.querySelector('#wrongPass').style.backgroundColor = 'white';
        })
        
    }
    })
