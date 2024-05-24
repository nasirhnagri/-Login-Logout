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
const render = () => {
    let email = document.getElementById("mail").value
    let password = document.getElementById("pass").value
    // console.log(email,password)

    let authentication = signUpData?.filter((item) => {
        if(item.email === email && item.password === password){
            return item
        }
    }).length;
    console.log(authentication)
    let newPage = "";
    let page = document.getElementById("page-two")
    if (authentication) {
        signUpData.map((item) => {
            newPage += `
            <table>
            <div id="secretData">
            <tr class="flex"> 
            <th>Email</th>
            <td class="Data">E-mail::${item.email}</td> 
            <th>password</th>
            <td class="Data">Password::${item.password}</td>
            </tr>
            <div class="btns">
            <button onclick="openDaletModel(${item.id})" id="delet">Delet<button>
            <button onclick="edit(${item.id})" id="edit">Edit<button>
            <button onclick="Veiw(${item.id})" id="forest">View<button>
            </div>
            </div>
            </table>
            `
        })
        page.innerHTML = newPage
        page.style.display = "flex"
    } else {
        let error = document.getElementById("Error")
        let errorOne = "";
        errorOne = `
     <h5 class= "incorrect">E-mail and password is Incorrect</h5>
     `
        error.innerHTML = errorOne;
        error.style.display = "flex"
        if (errorOne) {
            setTimeout(() => {
                error.style.display = "none"
            }, 3000);
        }
    }
    authentication ? offForm.style.display = "none" : offForm.style.display = "block";
}
const openDaletModel = (id)=>{
    const openData= [...signUpData]
    let open = "";
    const dataIndex = openData.findIndex((x)=> x.id===id)
    console.log(dataIndex) 
     if(dataIndex){
        let view = document.getElementById("view")
            open = `
            <div id="warning">
            <div onclick="cute()" class="mult">&times</div>
            <h4>Are you sure</h4>
            <hr></hr>
            <h5>Do you want to delet</h5>
            <div class="Btns">
            <button onclick="cute()" class="btnClosed">NO</button>
            <button onclick="confirmDelet()" class="btnInter">yes</button>
            </div>
            </div>
            `
            view.innerHTML= open;
            view.style.display= "flex"
    }
}
const confirmDelet  =() =>{
    let deletData = [...signUpData]
    // console.log(deletData)
    let id ="";
    let index =  deletData.findIndex((x)=>
    x.id===signUpData.id)
    if(index){
        signUpData.splice(index,1)
    }
    console.log(index)
    render()
    cute()
}