(function () {
  const showCountdown = () => {
    const countdownWrapper = document.querySelector(
      ".pencilbox-countdown-wrapper"
    );

    countdownWrapper.innerHTML = `
            <div class="countdown-title">GRAND OPENING</div>
            <div class="countdown">
                <div>
                    <div class="digits">
                        <div class="digit"><span></span></div>
                        <div class="digit"><span></span></div>
                    </div>
                    <div class="unit">Days</div>
                </div>
                <div>
                    <div class="digits">
                        <div class="digit"><span></span></div>
                        <div class="digit"><span></span></div>
                    </div>
                    <div class="unit">Hours</div>
                </div>
                <div>
                    <div class="digits">
                        <div class="digit"><span></span></div>
                        <div class="digit"><span></span></div>
                    </div>
                    <div class="unit">Minutes</div>
                </div>
                <div>
                    <div class="digits">
                        <div class="digit"><span></span></div>
                        <div class="digit"><span></span></div>
                    </div>
                    <div class="unit">Seconds</div>
                </div>
            </div>
            <div class="countdown-widget-close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
            </div>
        `;

    const closeWidget = document.querySelector(".countdown-widget-close");

    if (closeWidget) {
      closeWidget.addEventListener("click", function () {
        countdownWrapper.classList.add("close-widget");
      });
    }

    // Specify the target timestamp
    const targetDate = "2024-12-31T11:00:00-06:00";

    // Initialize the target date
    const target = new Date(targetDate);

    // Function to update digit values with animation
    function updateDigitElements(container, value) {
      const digits = String(value).padStart(2, "0").split("");
      const digitContainers = container.querySelectorAll(
        ".pencilbox-countdown-wrapper .digit"
      );

      digits.forEach((digit, index) => {
        const digitContainer = digitContainers[index];
        const currentSpan = digitContainer.querySelector("span");

        if (currentSpan.textContent !== digit) {
          // Create a new span for the incoming digit
          const newSpan = document.createElement("span");
          newSpan.textContent = digit;

          // Add animate-out class to the old span
          currentSpan.classList.add("animate-out");

          // Add animate-in class to the new span
          newSpan.classList.add("animate-in");

          // Append the new span to the digit container
          digitContainer.appendChild(newSpan);

          // Remove the old span after the animation ends
          setTimeout(() => {
            currentSpan.remove();
          }, 400);

          // Remove the animate-in class after the animation ends
          setTimeout(() => {
            newSpan.classList.remove("animate-in");
          }, 400);
        }
      });
    }

    // Update the countdown every second
    const countdownElement = document.querySelector(
      ".pencilbox-countdown-wrapper .countdown"
    );
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        countdownElement
          .querySelectorAll(".pencilbox-countdown-wrapper .digits")
          .forEach((container) => {
            updateDigitElements(container, 0);
          });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      updateDigitElements(
        countdownElement.children[0].querySelector(
          ".pencilbox-countdown-wrapper .digits"
        ),
        days
      );
      updateDigitElements(
        countdownElement.children[1].querySelector(
          ".pencilbox-countdown-wrapper .digits"
        ),
        hours
      );
      updateDigitElements(
        countdownElement.children[2].querySelector(
          ".pencilbox-countdown-wrapper .digits"
        ),
        minutes
      );
      updateDigitElements(
        countdownElement.children[3].querySelector(
          ".pencilbox-countdown-wrapper .digits"
        ),
        seconds
      );
    }, 1000);
  };

  window.onload = function () {
    setTimeout(function () {
      showCountdown();
    }, 100);
  };
})();
