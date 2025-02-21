
function checkform(){
let uName=document.getElementById("uName").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

let subject=document.getElementById("subject").value;

let gender1=document.querySelector('input[name="gender"]:checked');

let hobby=document.querySelectorAll('input[name="hobby"]:checked');

let dob=document.getElementById("dob").value;

let hobbyValue=[];
for(let i= 0; i<hobby.length; i++){
   hobbyValue.push(hobby[i].value);
}

let outPut="uName: "+uName+"\n"
    +"email: "+email+"\n"
    +"Password: "+password+"\n"
    +"subject:"+subject+"\n"
    +"hobby:"+hobbyValue+"\n"
    +"gender"+gender1.value+"\n"
    +"dob:"+dob;

let newWindow=window.open("","_blank");
  newWindow.document.write("<pre>"+ outPut +"</pre>");

}