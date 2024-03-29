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
// //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

document.getElementById("app").addEventListener("click", function (event) {
    const clickedElement = event.target;

    // Перевірка, чи було натиснуто на саму кнопку або її дочірній елемент
    const tabButton = clickedElement.closest(".tab-btn");
    console.log(clickedElement.closest(".tab-btn"));
    if (tabButton) {
        const tabButtons = document.querySelectorAll(".tab-btn");
        const tabs = document.querySelectorAll(".tabs__content");

        tabButtons.forEach((tabButton) => {
            tabButton.classList.remove("tab-btn__active");
        });
        tabButton.classList.add("tab-btn__active");

        const animateNames = tabButton.querySelectorAll(".animate__animated");

        // Видаляємо клас animate__pulse з усіх елементів з класом animate__animated
        animateNames.forEach((animateName) => {
            animateName.classList.remove("animate__pulse");
        });

        // Додаємо клас animate__pulse лише до елементів, які є дочірніми елементами натиснутої кнопки
        animateNames.forEach((animateName) => {
            animateName.classList.add("animate__pulse");
        });

        setTimeout(() => {
            animateNames.forEach((animateName) => {
                animateName.classList.remove("animate__pulse");
            });
        }, 500);
        const selectedTabId = tabButton.getAttribute("data-tab-content-id");
        const selectedTab = document.getElementById(selectedTabId);

        tabs.forEach((tab) => {
            tab.classList.add("hidden");
        });
        selectedTab.classList.remove("hidden");
    }
});

// //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const accordions = document.querySelectorAll(".wrapper_ask");

accordions.forEach(function (accordion) {
    accordion.addEventListener("click", function () {
        this.classList.toggle("active");
    });
});
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const mainHead = document.querySelector(".main-head");

mainHead.addEventListener("click", function () {
    if (this.classList.contains("active")) {
        this.classList.remove("active");
    } else {
        this.classList.add("active");
    }
});
// !!!!!!!!!!!!!!!!!
function valideForms(form) {
    $(form).validate({
        rules: {
            name: "required",
            phone: "required",
            email: {
                required: true,
                email: true,
            },
        },
    });
}

valideForms("#consultation-form");
valideForms("#consultation form");
valideForms("#order form");

// mask

$("input[name=phone]").mask("+38 (999) 999-99-99-99");

$("form").submit(function (e) {
    e.preventDefault();
    if ($(this).valid()) {
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize(),
        }).done(function () {
            $(this).find("input").val("");
            $("#consultation, #order").fadeOut();
            $(".overlay, #thanks").fadeIn("fast");

            $("form").trigger("reset");
        });
    }
    return false;
});
// smo0th scroll
$(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
        $(".pageup").fadeIn();
    } else {
        $(".pageup").fadeOut();
    }
});

$("a[href^=#up]").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
});
