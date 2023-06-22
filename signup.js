let submit_btn = document.querySelector("#register-button")

submit_btn.addEventListener("click",(event)=>{
   event.preventDefault()
   let all_input = document.querySelectorAll("#register input")
   
   let obj={}
   for(let i=0;i<=all_input.length-1;i++){
    
     obj[all_input[i].id]=all_input[i].value
   }
   registerUser(obj)
})

async function registerUser(obj){
    try {
        console.log(obj)
       let register_rqst=await fetch("http://localhost:4500/users/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
       })
       if(register_rqst.ok){
        alert("Registration successful")
        window.location.href="./login.html"
    }

    } catch (error) {
        alert ("BAD REQUEST")
    }

   
}


  
  