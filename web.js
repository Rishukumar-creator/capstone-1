
let form = document.getElementById("search");

if(form){
    form.addEventListener("submit", function(evt){
        const chosen = document.getElementById("option").value;

        if(chosen === ""){
            evt.preventDefault();
            alert("Please select a guide");
        }
        else{
            evt.preventDefault(); // stop form submit

            window.location.href = "http://127.0.0.1:5500/3.thirdpage.html?topic=" + chosen;
            


        }

    });
}


window.onload = function(){

    const param = new URLSearchParams(window.location.search);
    const chosen = param.get("topic");

    var data = {
        CPR : {
            steps:[
                "Check responsiveness",
                "Call emergency (112)",
                "Start chest compressions",
                "Give rescue breaths",
                "Continue until help arrives"
            ],
            img1: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },

        Choking: {
            steps:[
                "Ask if person can speak",
                "Give back blows",
                "Give abdominal thrusts",
                "Repeat until object removed",
                "Call emergency if needed"
            ],
            img1: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        Burns : {
            steps:[
                "Check burn",
                "Call emergency (112)",
                "Start chest compressions",
                "Give rescue breaths",
                "Continue until help arrives"
            ],
            img1: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        Severe_Bleeding: {
            steps:[
                "Check severe bleeding",
                "Call emergency (112)",
                "Start chest compressions",
                "Give rescue breaths",
                "Continue until help arrives"
            ],
            img1: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        CPR_Infant : {
            steps:[
                "Check cpr infant",
                "Call emergency (112)",
                "Start chest compressions",
                "Give rescue breaths",
                "Continue until help arrives"
            ],
            img1: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        Nosebleed : {
            steps:[
                "Check nosebleed",
                "Call emergency (112)",
                "Start chest compressions",
                "Give rescue breaths",
                "Continue until help arrives"
            ],
            img1: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        Diziness : {
            steps:[
                "Check Diziness ",
                "Call emergency (112)",
                "Start chest compressions",
                "Give rescue breaths",
                "Continue until help arrives"
            ],
            img1: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        Low_Blood_Sugar: {
            steps:[
                "Check responsiveness Low Blood Sugar",
                "Call emergency (112)",
                "Start chest compressions",
                "Give rescue breaths",
                "Continue until help arrives"
            ],
            img1: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        Blisters : {
            steps:[
                "Check responsiveness Blisters",
                "Call emergency (112)",
                "Start chest compressions",
                "Give rescue breaths",
                "Continue until help arrives"
            ],
            img1: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        Asthma_Attacks : {
            steps:[
                "Check responsiveness Asthma_Attacks",
                "Call emergency (112)",
                "Start chest compressions",
                "Give rescue breaths",
                "Continue until help arrives"
            ],
            img1: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        Nausea : {
            steps:[
                "Check responsiveness Nausea",
                "Call emergency (112)",
                "Start chest compressions",
                "Give rescue breaths",
                "Continue until help arrives"
            ],
            img1: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        Stroke : {
            steps:[
                "Check responsiveness stroke",
                "Call emergency (112)",
                "Start chest compressions",
                "Give rescue breaths",
                "Continue until help arrives"
            ],
            img1: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        Poisoning : {
            steps:[
                "Check responsiveness Poisoning",
                "Call emergency (112)",
                "Start chest compressions",
                "Give rescue breaths",
                "Continue until help arrives"
            ],
            img1: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        Snake_Bite : {
            steps:[
                "Check responsiveness Snake_Bite",
                "Call emergency (112)",
                "Start chest compressions",
                "Give rescue breaths",
                "Continue until help arrives"
            ],
            img1: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        Hypothermia_and_Hyperthermia: {
            steps:[
                "Check responsiveness Hypothermia & Hyperthermia",
                "Call emergency (112)",
                "Start chest compressions",
                "Give rescue breaths",
                "Continue until help arrives"
            ],
            img1: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://plus.unsplash.com/premium_photo-1679047666642-b8d8e0202186?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    };

    const allsteps = document.querySelectorAll(".step3");
    const allimages = document.querySelectorAll(".image-box3");
    for (keys in data){
        if(chosen==keys){
            for(let i = 0; i < 5; i++){
                allsteps[i].querySelector("p").innerText = data[chosen].steps[i];
            }
           allimages[0].innerHTML = `<img src="${data[chosen].img1}" width="100%" height="130px">`;
           allimages[1].innerHTML = `<img src="${data[chosen].img2}" width="100%" height="130px">`; 
        }
    }
    document.querySelector(".footer3 h2").innerText = chosen;

};
