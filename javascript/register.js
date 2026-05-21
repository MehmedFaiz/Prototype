document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const passwordInput = document.getElementById('passwordReg');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const registerBtn = document.getElementById('registerBtn');

    // Event Listener: Form Submit & Validasi Password
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 1. Validasi kesamaan password
        if (passwordInput.value !== confirmPasswordInput.value) {
            alert('Konfirmasi password tidak cocok dengan password awal. Silakan periksa kembali.');
            confirmPasswordInput.focus();
            return;
        }

        // 2. Manipulasi DOM untuk State Loading
        const originalBtnText = registerBtn.textContent;
        registerBtn.textContent = 'Mendaftarkan...';
        registerBtn.style.opacity = '0.8';
        registerBtn.style.cursor = 'not-allowed';
        registerBtn.disabled = true;

        // 3. Simulasi pengiriman data
        // 3. Simulasi pengiriman data dan Redirect berdasarkan Role
        setTimeout(() => {
            // Mengambil nilai role yang dipilih pengguna
            const selectedRole = document.getElementById('role').value;
            
            // Logika perpindahan halaman (Routing)
            if (selectedRole === 'admin') {
                alert('Pendaftaran Admin Berhasil! Mengarahkan ke Dashboard Admin...');
                window.location.href = 'admin-dashboard.html';
            } else if (selectedRole === 'kasir') {
                alert('Pendaftaran Kasir Berhasil! Mengarahkan ke Dashboard Kasir...');
                window.location.href = 'kasir-dashboard.html'; // Kita siapkan tautannya untuk nanti
            } else {
                alert('Silakan pilih role terlebih dahulu!');
                // Mengembalikan state tombol jika gagal
                registerBtn.textContent = originalBtnText;
                registerBtn.style.opacity = '1';
                registerBtn.style.cursor = 'pointer';
                registerBtn.disabled = false;
            }
        }, 1500);
    });
});