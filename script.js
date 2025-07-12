const quotes = [
  "Believe you can and you're halfway there.",
  "The only way to do great work is to love what you do.",
  "You are stronger than you think.",
  "Dream it. Wish it. Do it.",
  "Success is not for the lazy."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteText = quotes[randomIndex];
  document.getElementById("quote").innerText = quoteText;
  document.getElementById("copy-msg").classList.add("hidden");
}

function copyQuote() {
  const quote = document.getElementById("quote").innerText;
  navigator.clipboard.writeText(quote).then(() => {
    const msg = document.getElementById("copy-msg");
    msg.classList.remove("hidden");
    setTimeout(() => msg.classList.add("hidden"), 2000);
  });
}
