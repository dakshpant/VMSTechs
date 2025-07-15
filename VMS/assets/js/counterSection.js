function Counter(tagId, maxCount, speed) {
    let count = 0;
    const element = document.getElementById(tagId);
    const interval = setInterval(() => {
        element.textContent = count;
        count++;
        if (count > maxCount) {
            clearInterval(interval);
        }
    }, speed);
}

// Scroll trigger using IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            Counter("Customer", 100, 20);
            Counter("Projects", 10, 100);  
            Counter("Revenue", 500, 1);  
            observer.disconnect(); 
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector('.widigitsSection'));
