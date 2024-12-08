const video = document.getElementById('video-background');
video.addEventListener('ended', () => video.play());

window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
        document.body.classList.add('bg-scroll');
    } else {
        document.body.classList.remove('bg-scroll');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("section-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.classList.add("section-hidden");
        observer.observe(section);
    });
});