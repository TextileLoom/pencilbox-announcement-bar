(function () {
    const showCountdown = () => {
        const countdownWrapper = document.querySelector('.pencilbox-countdown-wrapper');

        countdownWrapper.innerHTML = `
            <div class="countdown-title">GRAND OPENING</div>
        <div class="countdown">
            <div>
                <div class="digits">
                    <div class="digit"></div>
                    <div class="digit"></div>
                </div>
                <div class="unit">Days</div>
            </div>
            <div>
                <div class="digits">
                    <div class="digit"></div>
                    <div class="digit"></div>
                </div>
                <div class="unit">Hours</div>
            </div>
            <div>
                <div class="digits">
                    <div class="digit"></div>
                    <div class="digit"></div>
                </div>
                <div class="unit">Minutes</div>
            </div>
            <div>
                <div class="digits">
                    <div class="digit"></div>
                    <div class="digit"></div>
                </div>
                <div class="unit">Seconds</div>
            </div>
        </div>
        `;


        // Specify the target timestamp
        const targetDate = "2024-12-21T01:23:45CST";

        // Function to convert CST to UTC (browser doesn't parse CST directly)
        function convertToUTC(timestamp) {
            const date = new Date(timestamp.replace("CST", "-06:00"));
            return date;
        }

        // Initialize the target date
        const target = convertToUTC(targetDate);

        // Function to update digit values
        function updateDigitElements(container, value) {
            const digits = String(value).padStart(2, '0').split('');
            const digitElements = container.querySelectorAll('.pencilbox-countdown-wrapper .digit');
            digitElements[0].textContent = digits[0];
            digitElements[1].textContent = digits[1];
        }

        // Update the countdown every second
        const countdownElement = document.querySelector('.pencilbox-countdown-wrapper .countdown');
        const interval = setInterval(() => {
            const now = new Date();
            const difference = target - now;

            if (difference <= 0) {
                clearInterval(interval);
                countdownElement.querySelectorAll('.pencilbox-countdown-wrapper .digits').forEach(container => {
                    updateDigitElements(container, 0);
                });
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            updateDigitElements(countdownElement.children[0].querySelector('.pencilbox-countdown-wrapper .digits'), days);
            updateDigitElements(countdownElement.children[1].querySelector('.pencilbox-countdown-wrapper .digits'), hours);
            updateDigitElements(countdownElement.children[2].querySelector('.pencilbox-countdown-wrapper .digits'), minutes);
            updateDigitElements(countdownElement.children[3].querySelector('.pencilbox-countdown-wrapper .digits'), seconds);
        }, 1000);
    }

    window.onload = function() {
        setTimeout(function() {
            showCountdown();
        }, 100);
    }
})();