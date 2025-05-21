const welcomeMessage = document.getElementById("welcome-message");

function greetUser(greeting, name, emoji) {
    welcomeMessage.textContent = `${greeting}, ${name}! ${emoji}`;
}

greetUser("Welcome back", "Mik", "👋");