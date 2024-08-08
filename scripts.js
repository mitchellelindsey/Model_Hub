// JavaScript to handle section clicks and content reveal
document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('click', function() {
        const contentReveal = document.getElementById('content-reveal');
        contentReveal.style.display = 'block';
        contentReveal.innerHTML = `<h3>${this.querySelector('h2').innerText} Profiles</h3>`;
        // Placeholder content - replace with actual profiles later
        contentReveal.innerHTML += `<p>Here are the profiles for ${this.querySelector('h2').innerText}</p>`;
    });
});

