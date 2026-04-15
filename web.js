
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
                "Step 1:Check Responsiveness",
                "Tap the person and shout: “Are you okay?”",
                "Step 2:Call for Help",
                "Call emergency services (e.g., 108 / 112 in India)",
                "Ask someone to bring an AED (Automated External Defibrillator) if available",
                "Step 3:Check Breathing",
                "Look for normal breathing (not gasping)",
                "If not breathing → start CPR immediately",
                "Step 4:Start Chest Compressions",
                "Place hands in center of chest",
                "Push hard & fast:",
                "Depth: 2–2.5 inches (5–6 cm)",
                "Rate: 100–120 compressions per minute",
                "Step 5:Give Rescue Breaths",
                "After 30 compressions → give 2 breaths",
                "Tilt head back, lift chin, pinch nose, give breath (1 second each)",
                "Step 6:Continue CPR Cycle",
                "Repeat 30 compressions : 2 breaths",
                "Continue until:",
                "Help arrives OR",
                "Person starts breathing",
                "Step 7:Use AED (if available)",
                "Turn it on and follow voice instructions",
            ],
            img1: "firstaid_images/firstaid_steps_images/cpr_adult_img1.png",
            img2: "firstaid_images/firstaid_steps_images/cpr_adult_img2.png"
        },

        Choking: {
            steps:[
                "Step 1:Check if the person can cough or speak",
                "If they can cough or talk → encourage coughing",
                "If cannot breathe, speak, or cough → severe choking",
                "Step 2:Call for Help",
                "Call emergency number 108 / 112 (India)",
                "Step 3:Give 5 Back Blows",
                "Stand behind the person",
                "Lean them slightly forward",
                "Give 5 sharp blows between shoulder blades using heel of your hand",
                "Step 4:Give 5 Abdominal Thrusts (Heimlich Maneuver)",
                "Stand behind and wrap arms around waist",
                "Make a fist, place it above the navel",
                "Grasp fist with other hand",
                "Give quick inward & upward thrusts",
                "Step 5:Repeat Cycle",
                "Continue 5 back blows + 5 thrusts",
                "Repeat until object comes out or person improves",
                "Step 6:If Person Becomes Unconscious",
                "Gently lay them down",
                "Start CPR immediately",
                "Check mouth for object before giving breaths",
            ],
            img1: "firstaid_images/firstaid_steps_images/choking_img1.png",
            img2: "firstaid_images/firstaid_steps_images/choking_img2.png"
        },
        Burns : {
            steps:[
                "Step 1:Cool the Burn<br>Place under cool running water for 10–20 minutes",
                "Reduces pain and damage",
                "Step 2:Remove Tight Items",
                "Remove rings, watches, or tight clothing before swelling starts",
                "Step 3:Do NOT Apply Ice",
                "Ice can damage the skin further",
                "Step 4:Apply Soothing Agent",
                "Use aloe vera gel or mild burn ointment",
                "Step 5:Cover the Burn",
                "Use clean, non-stick sterile gauze",
                "Do not wrap tightly",
                "Step 6:Avoid Breaking Blisters",
                "Let them heal naturally to prevent infection",
            ],
            img1: "firstaid_images/firstaid_steps_images/burns_img1.png",
            img2: "firstaid_images/firstaid_steps_images/burns_img2.png"
        },
        Severe_Bleeding: {
            steps:[
                "Step 1:Ensure Safety",
                "Make sure the area is safe",
                "Use gloves or cloth if available",
                "Step 2:Apply Direct Pressure",
                "Press firmly on the wound using clean cloth or bandage",
                "Do not remove if soaked—add more layers",
                "Step 3:Elevate the Injured Area",
                "Raise the injured part above heart level (if no fracture)",
                "Step 4:Apply Pressure Bandage",
                "Wrap a bandage firmly to maintain pressure",
                "Step 5:Use Tourniquet (if severe/uncontrolled)",
                "Apply above the wound",
                "Tighten until bleeding stops",
                "Note the time",
                "Step 6:Call Emergency Help",
                "Dial 108 / 112 (India)",
                "Step 7:Monitor the Person",
                "Watch for shock (pale skin, weakness, fast breathing)",
                "Keep them laying down and calm",
            ],
            img1: "firstaid_images/firstaid_steps_images/bleeding_img1.png",
            img2: "firstaid_images/firstaid_steps_images/bleeding_img2.png"
        },
        CPR_Infant : {
            steps:[
                "Step 1:Check Responsiveness<br>Tap the infant’s foot and call gently",
                "Look for any movement or response",
                "Step 2:Call for Help",
                "Call 108 / 112 (India)",
                "If alone → give CPR for 2 minutes, then call",
                "Step 3:Check Breathing",
                "Look for normal breathing (not gasping)",
                "If not breathing → start CPR",
                "Step 4:Chest Compressions",
                "Use 2 fingers in the center of chest (below nipple line)",
                "Depth: about 1.5 inches (4 cm)",
                "Rate: 100–120 per minute",
                "Step 5:Rescue Breaths",
                "After 30 compressions → give 2 gentle breaths",
                "Cover infant’s mouth and nose together with your mouth",
                "Step 6:Continue CPR Cycle",
                "Repeat 30 compressions : 2 breaths",
                "Continue until help arrives or infant recovers",
                "Step 7:Use AED (if available)",
                "Use pediatric pads if possible",
            ],
            img1: "firstaid_images/firstaid_steps_images/cpr_infant_img1.png",
            img2: "firstaid_images/firstaid_steps_images/cpr_infant_img2.png"
        },
        Nosebleed : {
            steps:[
                "Check nosebleed",
                "Call emergency (112)",
                "Start chest compressions",
                "Give rescue breaths",
                "Continue until help arrives"
            ],
            img1: "firstaid_images/firstaid_steps_images/nosebleed_img1.png",
            img2: "firstaid_images/firstaid_steps_images/nosebleed_img2.png"
        },
        Diziness : {
            steps:[
                "Check Diziness ",
                "Call emergency (112)",
                "Start chest compressions",
                "Give rescue breaths",
                "Continue until help arrives"
            ],
            img1: "firstaid_images/firstaid_steps_images/diziness_img1.png",
            img2: "firstaid_images/firstaid_steps_images/diziness_img2.png"
        },
        Low_Blood_Sugar: {
            steps:[
                "Check responsiveness Low Blood Sugar",
                "Call emergency (112)",
                "Start chest compressions",
                "Give rescue breaths",
                "Continue until help arrives"
            ],
            img1: "firstaid_images/firstaid_steps_images/lowbloodsugar_img1.png",
            img2: "firstaid_images/firstaid_steps_images/lowbloodsugar_img2.png"
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
            img1: "firstaid_images/firstaid_steps_images/asthma_img1.png",
            img2: "firstaid_images/firstaid_steps_images/asthma_img2.png"
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
            img1: "firstaid_images/firstaid_steps_images/stroke_img1.png",
            img2: "firstaid_images/firstaid_steps_images/stroke_img2.png"
        },
        Poisoning : {
            steps:[
                "Check responsiveness Poisoning",
                "Call emergency (112)",
                "Start chest compressions",
                "Give rescue breaths",
                "Continue until help arrives"
            ],
            img1: "firstaid_images/firstaid_steps_images/poison_img1.png",
            img2: "firstaid_images/firstaid_steps_images/poison_img2.png"
        },
        Snake_Bite : {
            steps:[
                "Check responsiveness Snake_Bite",
                "Call emergency (112)",
                "Start chest compressions",
                "Give rescue breaths",
                "Continue until help arrives"
            ],
            img1: "firstaid_images/firstaid_steps_images/sankebite_img1.png",
            img2: "firstaid_images/firstaid_steps_images/snakebite_img2.png"
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
