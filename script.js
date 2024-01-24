document.addEventListener('DOMContentLoaded', function () {
    // Set the target date and time in UTC (YYYY, MM-1, DD, HH, MM, SS)
    var targetDate = new Date('2024-01-26T14:00:00Z'); // 'Z' stellt UTC-Zeit dar

    function updateCountdown() {
        var currentDate = new Date();
        var timeDifference = targetDate - currentDate;

        if (timeDifference > 0) {
            // Berücksichtige die lokale Zeitzone
            var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            // Erstelle den HTML-Code für die Countdown-Werte
            var countdownHTML =
                '<p>' + days + ' Tage</p>' +
                '<p>' + hours + ' Stunden</p>' +
                '<p>' + minutes + ' Minuten</p>' +
                '<p>' + seconds + ' Sekunden</p>';

            // Aktualisiere den Countdown-Titel und -Werte
            document.getElementById('countdown-title').textContent = 'Get Drunk in:';
            document.getElementById('countdown-values').innerHTML = countdownHTML;
        } else {
            document.getElementById('countdown').innerHTML = '<p>Der Countdown ist abgelaufen!</p>';
        }
    }

    // Initial update
    updateCountdown();

    // Update the countdown every second
    setInterval(updateCountdown, 1000);
});




