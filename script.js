document.getElementById("toggleButton").addEventListener("click", function () {
  document.documentElement.classList.toggle("dark"); // Toggle on <html>, not <body>
});
