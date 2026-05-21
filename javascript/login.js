document.addEventListener('DOMContentLoaded', () => {
    // Definisi Elemen DOM
    const togglePasswordBtn = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const eyeIcon = togglePasswordBtn.querySelector('.eye-icon');
    const eyeOffIcon = togglePasswordBtn.querySelector('.eye-off-icon');
    const loginForm = document.getElementById('loginForm');
    const loginBtn = document.getElementById('loginBtn');

    // Event Listener: Toggle Visibilitas Password dengan Ikon SVG
    togglePasswordBtn.addEventListener('click', () => {
        // Manipulasi DOM dan State
        if (passwordInput.getAttribute('type') === 'password') {
            // Ubah tipe ke teks
            passwordInput.setAttribute('type', 'text');
            // Sembunyikan ikon mata terbuka, tampilkan ikon mata tertutup
            eyeIcon.style.display = 'none';
            eyeOffIcon.style.display = 'block';
        } else {
            // Ubah tipe kembali ke kata sandi
            passwordInput.setAttribute('type', 'password');
            // Tampilkan ikon mata terbuka, sembunyikan ikon mata tertutup
            eyeIcon.style.display = 'block';
            eyeOffIcon.style.display = 'none';
        }
    });

    // Event Listener: Penanganan State Submit Form - Tetap
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const originalBtnText = loginBtn.textContent;
        loginBtn.textContent = 'Memproses...';
        loginBtn.style.opacity = '0.8';
        loginBtn.style.cursor = 'not-allowed';
        loginBtn.disabled = true;

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
    
    // Event Listener: Lupa Password menggunakan Prompt
    const forgotPasswordLink = document.querySelector('.forgot-password');
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah pindah halaman saat link diklik
        
        // Memunculkan kotak dialog prompt bawaan browser
        const emailToRecover = prompt('Masukkan email akun Anda untuk mengirimkan password:');
        
        // Mengecek hasil inputan dari prompt
        if (emailToRecover) {
            // Jika user mengisi email dan menekan OK
            alert(`Tautan pemulihan password telah dikirim ke: ${emailToRecover}\nSilakan cek kotak masuk Anda.`);
        } else if (emailToRecover === "") {
            // Jika user mengosongkan form tapi menekan OK
            alert('Aksi dibatalkan: Email tidak boleh kosong.');
        }
        // Jika user menekan tombol "Cancel", nilai emailToRecover adalah null
        // Kita tidak perlu melakukan apa-apa (kotak prompt akan tertutup begitu saja).
    });
});