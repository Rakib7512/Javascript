



function submitForm(){
let uName=document.getElementById("name").value
let contact=document.getElementById("contact").value
let remarks=document.getElementById("remarks").value
let sex=document.querySelector('input[name="sex"]:checked');

let course=document.querySelectorAll('input[name="course"]:checked');


let location=document.getElementById("location").value;
let subjectives=[];

for(let i=0; i<subjectives.length;i++){
    subjectives.push(subjectives[i].value);
}

let outPut= "Name"+uName+"<br>"
+ "Contact  "+contact+"<br>"
+ "Remarks  "+remarks+"<br>"
+ "sex "+sex.value+"<br>"
+ "course "+course+"<br>"
+ "location "+location+"<br>"
+ "Contact "+contact+"<br>"
let newWindow=window.open("","blank");
newWindow.document.write(outPut);
}