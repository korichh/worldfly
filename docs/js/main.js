'use strict';

// Preloader
const preloader_init = function () {
    let preloader = document.querySelector('.preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.classList.add('_active');
        })
    }
}();

// Image background
const ibg_init = function () {
    let ibg = document.querySelectorAll('.ibg');
    for (let i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}();

// Navigation
const navigation_init = function () {
    let burgerIcon = document.querySelector('.burger__icon');
    let burgerNav = document.querySelector('.burger__nav');

    if (burgerIcon && burgerNav) {
        // Burger icon
        burgerIcon.addEventListener('click', () => {
            document.body.classList.toggle('_lock');
            burgerIcon.classList.toggle('_active');
            burgerNav.classList.toggle('_active');
        })
    }
}();

// Tab
const tab_init = function () {
    let id = 2;
    let tab = document.querySelector('.price__tab');
    if (tab) {
        // Tab switch
        let tabLinks = tab.querySelectorAll('.tab__link');
        if (tabLinks.length > 0) {
            for (let tabLink of tabLinks) {
                let link = tabLink.querySelector('a');
                let tabBody = tab.querySelector(link.hash);
                link.addEventListener('click', (e) => {
                    tabLinks.forEach(tabLink => {
                        let link = tabLink.querySelector('a');
                        let tabBody = tab.querySelector(link.hash);
                        if (link.classList.contains('_active')) {
                            link.classList.remove('_active');
                        }
                        if (tabBody.classList.contains('_active')) {
                            tabBody.classList.remove('_active');
                        }
                    })

                    link.classList.toggle('_active');
                    tabBody.classList.add('_active');

                    e.preventDefault();
                });
            }
        }

        // Tab add tour
        let tabItem = tab.querySelector('.tab__item').cloneNode(true);

        let tabRemoveHTML = `
        <button class="tab__remove-button">
            <img src="img/price/ic_close.svg" alt="close icon">
        </button>`
        tabItem.insertAdjacentHTML('beforeend', tabRemoveHTML);

        let tabAdd = tab.querySelector('.tab__add-button');
        tabAdd.addEventListener('click', (e) => {
            let tabItemHTML = tabItem.outerHTML;
            tabItemHTML = tabItemHTML.replaceAll('_0', `_${id}`);
            id++;

            tabAdd.insertAdjacentHTML('beforebegin', tabItemHTML);

            let resetButtons = tabAdd.previousElementSibling.querySelectorAll('.reset');
            for (let resetButton of resetButtons) {
                inputResetButton(resetButton);
            }

            let tabItems = tab.querySelectorAll('.tab__item');
            let tabRemove = tabAdd.previousElementSibling.querySelector('.tab__remove-button');
            tabRemove.addEventListener('click', (e) => {
                tabRemove.parentNode.remove();

                if (tabItems.length <= 6) {
                    tabAdd.style.display = '';
                }

                e.preventDefault();
            })

            if (tabItems.length >= 6) {
                tabAdd.style.display = 'none';
            }

            e.preventDefault();
        })

        // Input reset
        let resetButtons = tab.querySelectorAll('.reset');
        if (resetButtons.length > 0) {
            for (let resetButton of resetButtons) {
                inputResetButton(resetButton);
            }
        }

        function inputResetButton(resetButton) {
            let input = resetButton.parentNode.querySelector('input');
            input.addEventListener('input', inputHundler);
            function inputHundler() {
                if (input.value.length > 0) {
                    resetButton.classList.add('_active');
                } else {
                    resetButton.classList.remove('_active');
                }
            }
            inputHundler();

            resetButton.addEventListener('click', () => {
                input.value = '';
                inputHundler();
                input.focus();
            })
        }
    }
}();

const destination_init = function () {
    let destinationSwiperWrapper = document.querySelector('.destination__swiper-wrapper');
    let slideIcons = destinationSwiperWrapper.querySelectorAll('.slide__icon');
    for (let slideIcon of slideIcons) {
        slideIcon.addEventListener('click', (e) => {
            let slideCount = slideIcon.querySelector('.slide__count');
            if (slideIcon.classList.contains('_active')) {
                slideIcon.classList.remove('_active');
                slideCount.innerHTML = +slideCount.innerHTML - 1;
            } else {
                slideIcon.classList.add('_active');
                slideCount.innerHTML = +slideCount.innerHTML + 1;
            }

            e.preventDefault();
        });
    }
}();

const package_init = function () {
    let packageSelectWrapper = document.querySelector('.package__select-wrapper');
    let packageSelect = document.querySelector('.package__select');

    packageSelect.addEventListener('click', () => {
        packageSelectWrapper.classList.toggle('_active');
    })
    packageSelect.addEventListener('blur', () => {
        packageSelectWrapper.classList.remove('_active');
    })
}();

if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
    // Animation
    const animation_init = function () {
        let animLeft = document.querySelectorAll('.animLeft');
        let animRight = document.querySelectorAll('.animRight');
        let animBottom = document.querySelectorAll('.animBottom');

        let leftRightBlocks = [];
        leftRightBlocks.push(...animLeft, ...animRight);

        let heightForLeftRight = document.body.clientHeight / 1.3;
        let heightForBottom = document.body.clientHeight / 1.15;

        function animateBlocks() {
            for (let leftRightBlock of leftRightBlocks) {
                if (leftRightBlock.getBoundingClientRect().top <= heightForLeftRight) {
                    leftRightBlock.classList.add('_active');
                }
            }

            for (let bottomBlock of animBottom) {
                if (bottomBlock.getBoundingClientRect().top <= heightForBottom) {
                    bottomBlock.classList.add('_active');
                }
            }
        }
        animateBlocks();

        window.addEventListener('scroll', animateBlocks);
    }();
} else {
    let animLeft = document.querySelectorAll('.animLeft');
    let animRight = document.querySelectorAll('.animRight');
    let animBottom = document.querySelectorAll('.animBottom');

    let animBlocks = [];
    animBlocks.push(...animLeft, ...animRight, ...animBottom);
    animBlocks.forEach(el => {
        el.style.cssText += `
        transition: unset;
        transform: unset;
        opacity: 1;
        `;
    })
}