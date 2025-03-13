function switchLanguage() {
    let langButton = document.getElementById("lang-btn");
    let englishElements = document.querySelectorAll(".lang-en");
    let arabicElements = document.querySelectorAll(".lang-ar");

    if (document.documentElement.lang === "en") {
        document.documentElement.lang = "ar";
        langButton.innerText = "English";

        // Hide English text and show Arabic
        englishElements.forEach(el => el.style.display = "none");
        arabicElements.forEach(el => el.style.display = "block");
    } else {
        document.documentElement.lang = "en";
        langButton.innerText = "العربية";

        // Hide Arabic text and show English
        englishElements.forEach(el => el.style.display = "block");
        arabicElements.forEach(el => el.style.display = "none");
    }
}
