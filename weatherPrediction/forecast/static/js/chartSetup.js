const canvas = document.getElementById('chart');

if (canvas) {
    const times = canvas.dataset.times.split(',');
    const temps = canvas.dataset.temps.split(',').map(Number);

    new Chart(canvas, {
        type: 'line',
        data: {
            labels: times,
            datasets: [
                {
                    data: temps,
                    borderColor: '#ff9d3d',
                    backgroundColor: 'rgba(255, 157, 61, 0.18)',
                    borderWidth: 2,
                    tension: 0.45,
                    fill: true,
                    pointRadius: 4,
                    pointBackgroundColor: '#ff9d3d',
                    pointBorderColor: '#ff9d3d',
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        title: (items) => times[items[0].dataIndex],
                        label: (item) => `${item.parsed.y}°C`,
                    },
                },
            },
            scales: {
                x: { display: false },
                y: { display: false },
            },
        },
    });
}
