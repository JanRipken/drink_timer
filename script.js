document.addEventListener('DOMContentLoaded', function () {
    // Set the target date and time in UTC (YYYY, MM-1, DD, HH, MM, SS)
    var targetDate = new Date('2024-01-26T13:00:00Z');
 var partyAnimationShown = false;


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
            document.getElementById('countdown-values').innerHTML = countdownHTML;
        } else {
            if (!partyAnimationShown) {
                showPartyAnimation();
                partyAnimationShown = true; // Setze die Variable auf true, um anzuzeigen, dass die Animation gezeigt wurde
            }
        }
    }


    function showPartyAnimation() {
        // Verstecke den Countdown
        document.getElementById('countdown').style.display = 'none';

        // Erstelle ein neues Bild-Element für das Gif
        var partyGif = document.createElement('img');
        partyGif.src = 'assets/start_drinking.gif';
        partyGif.alt = 'Party Gif';

  partyGif.style.width = '700px'; // Adjust the width as needed
    partyGif.style.height = '500px'; // Adjust the height as needed
        // Füge das Bild dem DOM hinzu
        document.getElementById('party-animation-container').appendChild(partyGif);

        console.log('Partyanimation wird angezeigt!');
    }

    // Initial update
    updateCountdown();

    // Update the countdown every second
    setInterval(updateCountdown, 1000);

});




