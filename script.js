const forgiveBtn = document.getElementById("forgiveBtn");
const angryBtn = document.getElementById("angryBtn");

const responseBox = document.getElementById("responseBox");

const responseTitle = document.getElementById("responseTitle");
const responseMessage = document.getElementById("responseMessage");

const reply = document.getElementById("reply");
const sendBtn = document.getElementById("sendBtn");

const status = document.getElementById("status");


// Store which button she selected
let selectedResponse = "";


// Forgive button

forgiveBtn.addEventListener("click", function () {

    selectedResponse = "Okay, I forgive you ❤️";

    responseTitle.textContent = "Thank you 🥹❤️";

    responseMessage.textContent =
        "That genuinely means a lot to me. You can still tell me anything you want to say.";

    responseBox.style.display = "block";

    responseBox.scrollIntoView({
        behavior: "smooth"
    });

});


// Still angry button

angryBtn.addEventListener("click", function () {

    selectedResponse = "I'm still angry 😤";

    responseTitle.textContent = "That's okay. 🥺";

    responseMessage.textContent =
        "I understand. You don't have to forgive me immediately. If you want, tell me what I did wrong or how you felt.";

    responseBox.style.display = "block";

    responseBox.scrollIntoView({
        behavior: "smooth"
    });

});


// Send response

sendBtn.addEventListener("click", async function () {

    const message = reply.value.trim();

    if (!message) {

        status.textContent =
            "Write something first — even if you're angry. 😭";

        return;
    }


    sendBtn.disabled = true;

    sendBtn.textContent = "Sending...";


    const formData = new FormData();

    formData.append(
        "response",
        selectedResponse
    );

    formData.append(
        "message",
        message
    );

    formData.append(
        "website",
        "Sorry Website"
    );


    try {

        const response = await fetch(
            "https://formspree.io/f/xyezznev",
            {
                method: "POST",

                body: formData,

                headers: {
                    "Accept": "application/json"
                }
            }
        );


        if (response.ok) {

            status.textContent =
                "Response sent successfully. ❤️";

            reply.value = "";

            sendBtn.textContent = "Sent ✓";

        } else {

            throw new Error("Failed");

        }

    } catch (error) {

        status.textContent =
            "Something went wrong. Please try again.";

        sendBtn.disabled = false;

        sendBtn.textContent =
            "Send Response 💌";

    }

});


// Floating hearts

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML =
        Math.random() > 0.5 ? "❤️" : "♡";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.querySelector(".hearts").appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 10000);

}


setInterval(createHeart, 700);