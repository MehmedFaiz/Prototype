document.addEventListener('DOMContentLoaded', () => {
    
    // Inisialisasi Chart.js
    const ctx = document.getElementById('salesChart').getContext('2d');
    
    // Mengambil nilai warna dari CSS Variable agar desain konsisten
    const rootStyles = getComputedStyle(document.documentElement);
    const successColor = rootStyles.getPropertyValue('--status-success').trim();
    const successColorLight = rootStyles.getPropertyValue('--status-success-light').trim();
    const borderCol = rootStyles.getPropertyValue('--color-border').trim();

    // Data Penjualan 7 Hari (Simulasi State)
    const salesData = [1.8, 2.3, 3.5, 2.5, 2.8, 2.0, 3.4]; // dalam jutaan

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Rab', 'Kam', 'Jum', 'Sab', 'Min', 'Sen', 'Hari ini'],
            datasets: [{
                label: 'Penjualan (Juta Rp)',
                data: salesData,
                borderColor: successColor,
                backgroundColor: 'rgba(39, 174, 96, 0.1)', // Warna hijau transparan untuk area bawah
                borderWidth: 3,
                pointBackgroundColor: '#ffffff', // color-white
                pointBorderColor: successColor,
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7,
                fill: true, // Membuat area di bawah garis terisi warna
                tension: 0.3 // Membuat garis agak melengkung (smooth)
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false // Sembunyikan legend karena sudah ada judul di HTML
                },
                tooltip: {
                    backgroundColor: '#1E293B', // color-navy
                    padding: 10,
                    titleFont: { family: 'Inter', size: 13 },
                    bodyFont: { family: 'Inter', size: 14, weight: 'bold' },
                    callbacks: {
                        label: function(context) {
                            return 'Rp ' + context.parsed.y + ' Juta';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 4,
                    ticks: {
                        stepSize: 1,
                        callback: function(value) {
                            return value + 'jt';
                        },
                        font: { family: 'Inter', size: 11 },
                        color: '#64748b' // color-text-muted
                    },
                    border: { display: false },
                    grid: {
                        color: borderCol,
                        drawTicks: false,
                        borderDash: [5, 5] // Grid putus-putus
                    }
                },
                x: {
                    ticks: {
                        font: { family: 'Inter', size: 11 },
                        color: '#64748b'
                    },
                    border: { display: false },
                    grid: { display: false } // Hilangkan grid vertikal
                }
            }
        }
    });

    // Interaktivitas Dropdown Filter
    const dateFilter = document.querySelector('.date-filter');
    dateFilter.addEventListener('change', (e) => {
        const selectedValue = e.target.value;
        // Di aplikasi nyata, ini akan memicu pembaruan data State & Chart
        console.log(`Filter diubah ke: ${selectedValue}`);
    });
});