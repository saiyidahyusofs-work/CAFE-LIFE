// Tunggu semua elemen dimuat turun
document.addEventListener('DOMContentLoaded', function() {
    
    // Cari borang dalam halaman
    const contactForm = document.getElementById('contact-form');
    
    // Jika borang wujud (berada di page about.html), pasang fungsi ini
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Halang borang dari me-reload page
            event.preventDefault();
            
            // Keluarkan mesej pop-up
            alert("Terima kasih! Mesej anda telah dihantar kepada pengurusan Cafe Meera.");
            
            // Kosongkan semula borang lepas hantar
            contactForm.reset();
        });
    }
    
});
