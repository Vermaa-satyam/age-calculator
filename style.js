const inputbutton = document.querySelector(".age-dob-input");
const calculatebutton = document.querySelector(".calculate-btn");
const ageresult= document.querySelector(".age-result");
const agee = document.querySelector(".age-op")
const monthh = document.querySelector(".month-op")
const datee = document.querySelector(".date-op")

calculatebutton.addEventListener("click", ()=>{
    if(inputbutton.value == ""){
        alert("please enter yor date of birth")
    }
    else{
        console.log("date", inputbutton.value)
        const dob = new Date(inputbutton.value)
        console.log("dob", dob)

        const newyr = dob.getFullYear();
        console.log( "new year",newyr)

        const oldmonth = dob.getMonth()+1;
        console.log( "oldmonth",oldmonth)

        const olddt = dob.getDate()
        console.log( "old date",olddt)

        

       
 
        //cuttent

        const now = new Date();
        console.log(now)
        const nowyr = now.getFullYear();
        console.log(nowyr)
        const age = nowyr-newyr;
        console.log( "age",age)

        const nowmoth = now.getMonth()+1;
        console.log("now month",nowmoth);

        const month = oldmonth-nowmoth;
        console.log("ogmonth" ,month)

        const newdt = now.getDate();
        console.log("new date",newdt);

        const date = olddt-newdt;
        console.log("og date",date)

        // ageresult.innerHTML = `your age is ${dayy}`

        agee.innerHTML = age;
        monthh.innerHTML = month;
        datee.innerHTML = date;

    
    

    }
})
