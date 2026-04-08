document.addEventListener('DOMContentLoaded', () => {
    // Navbar uses native Tailwind glassmorphism fixed styles
    const navbar = document.getElementById('navbar');

    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    mobileBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('translate-x-full');
            // Change icon to X
            mobileBtn.innerHTML = `
                <svg class="h-8 w-8 text-cf-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>`;
        } else {
            mobileMenu.classList.add('translate-x-full');
            // Change icon to Menu
            mobileBtn.innerHTML = `
                <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>`;
        }
    });
});
