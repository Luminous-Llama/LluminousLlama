document.addEventListener('DOMContentLoaded', function() {
    // Category selection functionality
    const categoryCheckboxes = document.querySelectorAll('input[name="categories"]');
    
    categoryCheckboxes.forEach(checkbox => {
        const label = checkbox.closest('label');
        
        // Set initial state
        updateLabelStyle(checkbox, label);
        
        checkbox.addEventListener('change', function() {
            updateLabelStyle(checkbox, label);
        });
    });
    
    function updateLabelStyle(checkbox, label) {
        if (checkbox.checked) {
            label.className = label.className.replace(/bg-white\/20.*?hover:bg-white\/30/, 'bg-white text-purple-600 shadow-lg');
        } else {
            label.className = label.className.replace(/bg-white text-purple-600 shadow-lg/, 'bg-white/20 text-white border border-white/30 hover:bg-white/30');
        }
    }
    
    // Search suggestions (if you want to add this feature later)
    const searchInput = document.querySelector('input[name="q"]');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            // Add search suggestions logic here if needed
        });
    }
    
    // Smooth scroll for results
    const results = document.querySelectorAll('.hover-lift');
    results.forEach(result => {
        result.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        result.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
