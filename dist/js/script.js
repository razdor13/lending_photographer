const tabsItems = document.querySelectorAll(".tabs__item");

// Додаємо обробник подій для кожного ".tabs__item"
tabsItems.forEach((item) => {
    item.addEventListener("click", function () {
        const imageUrl = this.querySelector("img").getAttribute("src");

        // Створення об'єкту зображення для BasicLightbox
        const lightbox = basicLightbox.create(
            `<img src="${imageUrl}" alt="Enlarge">`
        );

        // Відображення вікна збільшення при кліку на ".tabs__item"
        lightbox.show();
    });
});
