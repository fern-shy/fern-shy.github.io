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

if (entry.target.id === 'pink') {
    const popup = document.createElement('div');
    popup.textContent = 'Call him +1 (667) 222-5469';
    popup.style.position = 'fixed';
    popup.style.top = `${Math.random() * 100}vh`;
    popup.style.left = `${Math.random() * 100}vw`;
    popup.style.backgroundColor = 'white';
    popup.style.padding = '10px';
    document.body.appendChild(popup);
}