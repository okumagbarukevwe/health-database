let usersDatabase = []

const filters = {
    firstName: '',
    lastName: '',
    select: '',
    date: '',
    address: '',
    email: '',
    confirmEmail: '',
    username: '',
    password: '',
    confirmPassword: ''
}

// document.querySelector('.input-form').setCustomValidity('mad')
document.querySelector('#firstname-form').addEventListener('input', function (e) {
    filters.firstName = e.target.value  
})

document.querySelector('#lastname-form').addEventListener('input', function (e) {
    filters.lastName = e.target.value 
 })

 document.querySelector('#select-form').addEventListener('click', function (e) {
    filters.select = e.target.value 
 })

 document.querySelector('#date-form').addEventListener('input', function (e) {
    filters.date = e.target.value  
 })

 document.querySelector('#address-form').addEventListener('input', function (e) {
    filters.address = e.target.value  
 })

 document.querySelector('#email-form').addEventListener('input', function (e) {
    filters.email = e.target.value 
 })

 document.querySelector('#confemail-form').addEventListener('input', function (e) {
    filters.confirmEmail = e.target.value  
 })

 document.querySelector('#username-form').addEventListener('input', function (e) {
    filters.username = e.target.value 
 })

 document.querySelector('#password-form').addEventListener('input', function (e) {
    filters.password = e.target.value  
 })

 document.querySelector('#confpassword-form').addEventListener('input', function (e) {
    filters.confirmPassword = e.target.value  
 })

 document.querySelector('#submit-form').addEventListener('click', function (e) {
   // e.preventDefault() 
   userArr = localStorage.getItem('usersDatabase')

    if (userArr !== null) {
        usersDatabase = JSON.parse(userArr)
    }
    
    usersDatabase.push({
        firstName: filters.firstName ,
        lastName: filters.lastName ,
        sex: filters.select,
        date: filters.date ,
        address: filters.address,
        email: filters.email ,
        confirmEmail: filters.confirmEmail,
        username: filters.username,
        password: filters.password,
        confirmPassword: filters.confirmPassword ,
    })

    usersDatabase = JSON.stringify(usersDatabase)

    localStorage.setItem('usersDatabase', usersDatabase)

    document.getElementById("firstname-form").setAttribute("required", "");
 })

 


 
