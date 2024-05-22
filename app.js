
let logIn = document.getElementById("logInBtn")
let body = document.querySelector("body")
let signUp = document.getElementById("signUp")
let offForm = document.getElementById("user")
let form = document.querySelector("form")
const proPagation = (e) => {
    e.stopPropagation()
}

const signUpData = [
    {   
         id:1,
        FullName: "muzamil hussain",
        email: "meixuHussain.007@gmail.com",
        password: "12345",
        confirmPassword: "12345",
    }, {
        id:2,
        FullName: "imran ali",
        email: "a@gmail.com",
        password: "abcd",
        confirmPassword: "abcd"
    }, {
        id:3,
        FullName: "jabir jabir",
        email: " ",
        password: "zero1122",
        confirmPassword: "zero1122"
    },
    newSignUp={
        FirstName:"",
        Email:"",
        passPassword:"",
        passConfirmPassword:""
    }
]