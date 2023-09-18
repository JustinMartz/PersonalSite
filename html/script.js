function init() {
    const articles = document.querySelectorAll('article');
    const links = document.querySelectorAll('.nav-link a');

    const guitarTechURL = 'http://3.13.216.67:8080/GuitarTech/';
    const dualityURL = 'http://3.131.63.12:8080/Duality';
    const parkpalsURL = 'http://3.13.216.67:8080/ParkPals/';
    const aboutLink = document.getElementById('about-link');
    
    document.getElementById('guitartech').addEventListener('click', () => {
        window.open(guitarTechURL, '_blank');
    });

    document.getElementById('duality').addEventListener('click', () => {
        window.open(dualityURL, '_blank');
    });

    document.getElementById('parkpals').addEventListener('click', () => {
        window.open(parkpalsURL, '_blank');
    });

    aboutLink.addEventListener('click', (event) => {
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    });

    function setActiveLink() {
        const fromTop = window.scrollY + 100;

        articles.forEach(article => {
            const id = article.id;
            const offset = article.offsetTop;
            const height = article.offsetHeight;

            if (fromTop >= offset && fromTop < offset + height) {
                links.forEach(link => {
                    link.parentElement.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.parentElement.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);

    setActiveLink();
}

window.addEventListener('load', init);
