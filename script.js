document.addEventListener('DOMContentLoaded', () => {
  // Clock
  const clock = document.getElementById("clock");
  if (clock) {
    function updateClock() {
      const now = new Date();
      clock.textContent = now.toLocaleString();
    }
    setInterval(updateClock, 1000);
    updateClock();
  }
}); 

  // Accordion Nav Toggle
  const accBtn = document.querySelector(".accordion-btn");
  const accContent = document.querySelector(".accordion-content");
  if (accBtn && accContent) {
    accBtn.addEventListener("click", () => {
      accContent.style.display = accContent.style.display === "block" ? "none" : "block";
    });
  }

  // Click Counter
  const clickBtn = document.getElementById("clickMe");
  const countDisplay = document.getElementById("clickCount");
  if (clickBtn && countDisplay) {
    let count = 0;
    clickBtn.addEventListener("click", () => {
      count++;
      countDisplay.textContent = count;
    });
  }

document.addEventListener('DOMContentLoaded', () => {
  // Your existing JS here...

  // Custom messages for each letter
  const customMessages = {
    a: "i hope you die",
    b: "leBRON James",
    c: "pretend like theres something interesting here please dont fail me cooper",
    d: "DIDDY BLUD😂😂😂😂😂😂😂😂😂😂😂😂",
    e: "there is nothing interesting that starts with e",
    f: "f like the failing grade im going to get for this final🥹",
    g: "goon",
    h: "h like how im going to hang myself after i get my final grade for this class",
    i: "iiiiiiiiiiiiiiiii dont know what to put here dont take points off for this.",
    j: "TRIGGER WARNING: JOB",
    k: "kill me",
    l: "lebron james^2",
    m: "MUSTARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRD",
    n: "genuinely what do i put for this?",
    o: "o like the letter o",
    p: "p like piss like the color yellow i hate that color",
    q: "this might be the most unusable letter in the entire alphabet",
    r: "i REALLY forgot how to code",
    s: "TRIGGER WARNING: SHOWER",
    t: "t like trump like our morally corrupt president?",
    u: "uglyyyyyy...",
    v: "volleyball like the sport that i am SO amazing at",
    w: "WHAT do i put for this letter AMIRIGHT😂😂😂😂😂😂😂😂",
    x: "ok i was wrong the most unusable letter is x not q",
    y: "whY did i sign up for this with no prior knowledge of coding?",
    z: "zoon like goon with a z"
  };

  // Keyboard event listener
  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    const keyDisplay = document.getElementById('keyDisplay');

    if (customMessages[key]) {
      keyDisplay.textContent = customMessages[key];
    } else {
      keyDisplay.textContent = `You pressed: ${event.key}`;
    }
  });
});