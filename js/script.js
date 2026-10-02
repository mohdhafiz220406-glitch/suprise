let currentPin = "";
const correctPin = "111007"; // Your secret PIN here

// Keypad Logic
function pressNum(num) {
    if (currentPin.length < 6) {
        currentPin += num;
        updateDisplay();
    }
}

function clearPin() {
    currentPin = "";
    updateDisplay();
}

function updateDisplay() {
    let display = currentPin.padEnd(6, '_');
    document.getElementById('pin-display').innerText = display;
}

function checkPin() {
    if (currentPin === correctPin) {
        document.getElementById('pin-screen').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        
        // Auto play music after correct PIN
        const music = document.getElementById('bg-music');
        if (music) {
            music.play().catch(e => console.log("Autoplay blocked by browser policy"));
        }
    } else {
        alert("Incorrect PIN code! Please try again.");
        clearPin();
    }
}

// Digital Bouquet Feature
function showFlowerMessage(message) {
    document.getElementById('flower-text').innerText = message;
}

// Random Reason Generator Feature (In English)
const reasons = [
    "You always know how to make my days brighter and happier.",
    "Your smile is easily my favorite thing in the entire world.",
    "Thank you for always being so patient and understanding with me.",
    "Every single moment spent with you feels truly priceless.",
    "I am so proud to have someone as incredible as you in my life!",
    "Your kindness and warmth never fail to amaze me every day."
];

function generateReason() {
    const randomIndex = Math.floor(Math.random() * reasons.length);
    document.getElementById('reason-text').innerText = reasons[randomIndex];
}