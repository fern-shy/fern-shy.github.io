const sections = document.querySelectorAll('section');

const options = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove all previous background classes
            document.body.className = '';
            document.body.classList.add(`${entry.target.id}-bg`);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});