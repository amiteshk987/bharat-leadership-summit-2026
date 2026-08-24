function togglePageMenu(){
    const navigation = document.getElementById("page-navigation");
    navigation.classList.toggle("active");
}

document.querySelectorAll("#page-navigation a").forEach(function(link){
    link.addEventListener("click",function(){
        document.getElementById("page-navigation").classList.remove("active");
    });
});

document.querySelectorAll(".social-placeholder").forEach(function(link){
    link.addEventListener("click",function(event){
        event.preventDefault();
    });
});

document.querySelectorAll(".ticker-track").forEach(function(tickerTrack){
    tickerTrack.append(...Array.from(tickerTrack.children).map(function(item){
        const copy = item.cloneNode(true);
        copy.setAttribute("aria-hidden","true");
        return copy;
    }));
});

function generatePitchApplicationId(){
    return `BLS-PS-2026-${Math.random().toString(36).slice(2,6).toUpperCase()}`;
}

function sendPitchStageConfirmationEmail(){
    // Reserved for the future backend email service after payment verification.
}

const pitchForm = document.getElementById("pitch-form");
const contestForm = document.getElementById("contest-form");

if(contestForm){
    contestForm.addEventListener("submit",function(event){
        event.preventDefault();
        const message = document.getElementById("contest-form-message");

        if(!contestForm.checkValidity()){
            contestForm.reportValidity();
            message.textContent = "Please complete the required details before continuing.";
            return;
        }

        message.textContent = "Registration Successful! Your Bharat Leadership Summit 2026 Contest registration has been received. Confirmation details will be sent to your registered email address after successful payment. Payment Gateway Integration — Coming Soon.";
    });
}

if(pitchForm){
    const formMessage = document.getElementById("pitch-page-message");

    pitchForm.addEventListener("submit",function(event){
        event.preventDefault();
        formMessage.textContent = "";

        if(!pitchForm.checkValidity()){
            pitchForm.reportValidity();
            formMessage.textContent = "Please complete the required details before continuing.";
            return;
        }

        formMessage.textContent = "Your details are ready. Payment Gateway Integration — Coming Soon. No registration has been submitted yet.";
    });
}
