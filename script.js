document.addEventListener('DOMContentLoaded', () => {
  let startTime = new Date();

  const clockEl = document.getElementById("clock");
  if (clockEl) {
    function updateClock() {
      const now = new Date();

      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
      };

      clockEl.textContent = now.toLocaleString('en-US', options);
    }

    updateClock();
    setInterval(updateClock, 1000);
  }

  const openedAt = document.getElementById("open-time");
  if (openedAt) {
    openedAt.textContent = "Page opened at: " + startTime.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    });
  }

  const activeEl = document.getElementById("active-time");

  function updateActiveTime() {
    let now = new Date();
    let secs = Math.floor((now - startTime) / 1000);
    let hrs = Math.floor(secs / 3600);
    let mins = Math.floor((secs % 3600) / 60);
    secs = secs % 60;

    if (activeEl) {
      activeEl.textContent = `You've been here for: ${hrs}h ${mins}m ${secs}s`;
    }
  }

  updateActiveTime();
  setInterval(updateActiveTime, 1000);

  const customMessages = {
    a: "apple",
    b: "leBRON James",
    c: "pretend like theres something interesting here please dont fail me cooper",
    d: "DIDDY BLUD😂😂😂😂😂😂😂😂😂😂😂😂",
    e: "there is nothing interesting that starts with e",
    f: "f like the failing grade im going to get for this final🥹",
    g: "goon",
    h: "hahahahahahahahahahahahahaha",
    i: "iiiiiiiiiiiiiiiii dont know what to put here dont take points off for this.",
    j: "TRIGGER WARNING: JOB",
    k: "kill me",
    l: "lebron james^2",
    m: "MUSTARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRD",
    n: "geNuiNely what do i put for this?",
    o: "o like the letter o",
    p: "p like piss like the color yellow i hate that color",
    q: "this might be the most unusable letter in the entire alphabet",
    r: "i REALLY forgot how to code",
    s: "TRIGGER WARNING: SHOWER",
    t: "ts",
    u: "uglyyyyyy...",
    v: "volleyball like the sport that i am SO amazing at",
    w: "WHAT do i put for this letter AMIRIGHT😂😂😂😂😂😂😂😂",
    x: "ok i was wrong the most unusable letter is x not q",
    y: "whY did i sign up for this with no prior knowledge of coding?",
    z: "zoon like goon with a z"
  };

  document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    const keyDisplay = document.getElementById('keyDisplay');

    if (customMessages[key]) {
      keyDisplay.textContent = customMessages[key];
    } else {
      keyDisplay.textContent = `press one of the letters PLEASE...`;
    }
  });

  const clickBtn = document.getElementById("click-me");
  const countEl = document.getElementById("click-count");
  let clicks = 0;

  if (clickBtn && countEl) {
    clickBtn.addEventListener("click", () => {
      clicks++;
      countEl.textContent = clicks;
    });
  }

  const accordionBtn = document.querySelector(".accordion-button");
  const accordionBox = document.querySelector(".accordion-content");

  if (accordionBtn && accordionBox) {
    accordionBtn.addEventListener("click", () => {
      accordionBox.classList.toggle("open");
      accordionBtn.classList.toggle("open");
    });
  }
});