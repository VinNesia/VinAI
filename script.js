document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const freeMode = document.getElementById('freeMode');

    // Simpel search functionality (placeholder)
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        // This would filter tools in a real app, here we just log
        console.log('Searching for:', query);
    });

    // Toggle free mode (placeholder)
    freeMode.addEventListener('change', () => {
        console.log('Free mode:', freeMode.checked);
    });
});
