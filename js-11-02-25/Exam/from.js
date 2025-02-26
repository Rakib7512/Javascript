



function submitForm(){
let uName=document.getElementById("name").value
let contact=document.getElementById("contact").value
let remarks=document.getElementById("remarks").value
let sex=document.querySelector('input[name="sex"]:checked');

let course=document.querySelectorAll('input[name="course"]:checked');


let location=document.getElementById("location").value;

let subjectives=[];

for(let i=0; i<course.length;i++){
    subjectives.push(course[i].value);
}

let outPut= "Name"+uName+"<br>"
+ "Contact  "+contact+"<br>"
+ "Remarks  "+remarks+"<br>"
+ "sex "+sex.value+"<br>"
+ "course "+ subjectives +"<br>"
+ "location "+location;

let newWindow=window.open("","blank");
newWindow.document.write(outPut);
}