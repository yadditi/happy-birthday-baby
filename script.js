// ===========================
// Loading Screen
// ===========================

window.addEventListener("load", () => {

    setTimeout(() => {
        showPage("welcome");
    }, 2500);

});


// ===========================
// Page Navigation
// ===========================

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    if(pageId === "final"){
        startTypewriter();
    }

}


// ===========================
// Gift Progress Tracker
// ===========================

let giftsOpened = {
    love: false,
    magic: false,
    letter: false
};


function openGift(giftName){

    giftsOpened[giftName] = true;

    if(giftName === "love"){
        document.getElementById("love-status").textContent = "✅";
    }

    if(giftName === "magic"){
        document.getElementById("magic-status").textContent = "✅";
    }

    if(giftName === "letter"){
        document.getElementById("letter-status").textContent = "✅";
    }

    checkSecretUnlock();

    showPage(giftName);

}


// ===========================
// Secret Unlock
// ===========================

function checkSecretUnlock(){

    if(
        giftsOpened.love &&
        giftsOpened.magic &&
        giftsOpened.letter
    ){

        document.getElementById("secretUnlock").innerHTML = `
            <div style="
                margin-top:25px;
                background:white;
                padding:15px;
                border-radius:20px;
                display:inline-block;
                font-weight:600;
                box-shadow:0 5px 20px rgba(0,0,0,.08);
            ">
                🌟 Secret Surprise Unlocked 🌟
            </div>
        `;

    }

}


// ===========================
// Birthday Wish
// ===========================

function makeWish(){

    const wishText = document.getElementById("wishText");

    wishText.innerHTML = `
        🎉 I hope every wish you make today
        finds its way to you. 💙
    `;

    launchConfetti();

}


// ===========================
// Confetti Effect
// ===========================

function launchConfetti(){

    const area = document.getElementById("confettiArea");

    area.innerHTML = "";

    const emojis = [
        "🎉",
        "✨",
        "💙",
        "🎊",
        "🌸"
    ];

    for(let i = 0; i < 30; i++){

        const confetti = document.createElement("span");

        confetti.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        confetti.style.position = "absolute";
        confetti.style.left = Math.random() * 100 + "%";
        confetti.style.top = "20%";
        confetti.style.fontSize =
            (Math.random() * 20 + 20) + "px";

        confetti.style.animation =
            `fall ${Math.random()*2+2}s linear`;

        area.appendChild(confetti);

    }

}


// ===========================
// Confetti Animation CSS
// ===========================

const style = document.createElement("style");

style.innerHTML = `

@keyframes fall {

0%{
transform:translateY(0);
opacity:1;
}

100%{
transform:translateY(400px);
opacity:0;
}

}

`;

document.head.appendChild(style);


// ===========================
// Typewriter Ending
// ===========================

let typingStarted = false;

function startTypewriter(){

    if(typingStarted) return;

    typingStarted = true;

    const text = `Happy Birthday Baby 💙

Thank you for coming into my life.

Thank you for staying.

Thank you for being my favorite person.

If I could choose again...

I would still choose you.

Today.

Tomorrow.

And every day after that.

💙 Forever & Always 💙

— Aditi`;

    let i = 0;

    const target =
        document.getElementById("typewriter");

    function type(){

        if(i < text.length){

            target.innerHTML += text.charAt(i);

            i++;

            setTimeout(type, 45);

        }

    }

    type();

}


// ===========================
// Extra Cute Hover Effect
// ===========================

document.addEventListener("DOMContentLoaded", () => {

    const gifts =
        document.querySelectorAll(".gift-box");

    gifts.forEach(gift => {

        gift.addEventListener("mouseenter", () => {

            gift.style.transform =
                "translateY(-10px) scale(1.06)";

        });

        gift.addEventListener("mouseleave", () => {

            gift.style.transform =
                "translateY(0px) scale(1)";

        });

    });

});