'use strict';

if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
    const hero = document.querySelector('.hero');
    if (hero) {
        // DOM variables
        const cloud1 = hero.querySelector('.cloud1');
        const cloud2 = hero.querySelector('.cloud2');
        const cloud3 = hero.querySelector('.cloud3');
        const sun = hero.querySelector('.sun');
        const birds = hero.querySelector('.birds');
        const river = hero.querySelector('.river__outer');
        const frontHills = hero.querySelector('.front-hills__outer');
        const backHills = hero.querySelector('.back-hills__outer');
        const leftBackHills = hero.querySelector('.left-back-hills__outer');
        const centerBackHills = hero.querySelector('.center-back-hills__outer');

        // Coeffs
        const forSky = 7;
        const forHills = 15;

        // Spees
        const speed = 0.05;

        // Variables
        let positionX = 0, positionY = 0;
        let coordXpercent = 0, coordYpercent = 0;

        function setMouseParallaxStyle() {
            const distX = coordXpercent - positionX;
            const distY = coordYpercent - positionY;

            positionX = positionX + distX * speed;
            positionY = positionY + distY * speed;

            // Styles
            function setParallaxStyle(elem, coeff) {
                return elem.style.cssText += `transform: translate(${positionX / coeff}%, ${positionY / coeff}%)`;
            }
            setParallaxStyle(cloud1, forSky);
            setParallaxStyle(cloud2, forSky);
            setParallaxStyle(cloud3, forSky);
            setParallaxStyle(sun, forSky);
            setParallaxStyle(birds, forSky);
            setParallaxStyle(river, forHills);
            setParallaxStyle(frontHills, forHills);
            setParallaxStyle(backHills, forHills);
            setParallaxStyle(leftBackHills, forHills);
            setParallaxStyle(centerBackHills, forHills);

            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();

        hero.addEventListener('mousemove', (e) => {
            // Section width and height
            const parallaxWidth = hero.offsetWidth;
            const parallaxHeight = hero.offsetHeight;

            // Null in center
            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            // Get percents
            coordXpercent = coordX / parallaxWidth * 100;
            coordYpercent = coordY / parallaxHeight * 100;
        })
    }
}