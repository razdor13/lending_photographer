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
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

document.getElementById("app").addEventListener("click", function (event) {
    const clickedElement = event.target;

    // Перевірка, чи було натиснуто на саму кнопку або її дочірній елемент
    const tabButton = clickedElement.closest(".tab-btn");
    if (tabButton) {
        const tabButtons = document.querySelectorAll(".tab-btn");
        const tabs = document.querySelectorAll(".tabs__content");

        tabButtons.forEach((tabButton) => {
            tabButton.classList.remove("tab-btn__active");
        });
        tabButton.classList.add("tab-btn__active");

        const selectedTabId = tabButton.getAttribute("data-tab-content-id");
        const selectedTab = document.getElementById(selectedTabId);

        tabs.forEach((tab) => {
            tab.classList.add("hidden");
        });
        selectedTab.classList.remove("hidden");
    }
});
