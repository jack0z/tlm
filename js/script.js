import { responsePatterns } from "./textVariables/responsePatterns.js";
import { bootTexts } from "./textVariables/bootTexts.js";
import {
  responses,
  RESPONSE_PATTERNS,
  HOLIDAY_RESPONSES,
  TIME_RESPONSES,
} from "./textVariables/responses.js";
import { breachWarnings, quantumMessages } from "./textVariables/other.js";
import {
  commands,
  secretCommands,
  SECRET_COMMANDS,
  AVAILABLE_COMMANDS,
} from "./textVariables/commands.js";
import {
  asciiArt,
  extraAscii,
  crypticMessages,
  hiddenAscii,
  corruptedAscii,
} from "./ascii/ascii.js";
import { modalStyles } from "./modal/modalStyles.js";

// Boot sequence
async function bootSequence() {
  const bootTextElement = document.querySelector(".boot-text");
  const progress = document.querySelector(".progress");
  const status = document.querySelector(".boot-status");
  const container = document.querySelector(".container");
  const bootSequence = document.querySelector(".boot-sequence");

  for (let i = 0; i < bootTexts.length; i++) {
    bootTextElement.textContent = bootTexts[i];
    progress.style.width = `${(i + 1) * 10}%`;
    status.textContent = `Loading... ${(i + 1) * 10}%`;
    await new Promise((resolve) => setTimeout(resolve, 800));
  }

  await new Promise((resolve) => setTimeout(resolve, 500));
  bootSequence.style.opacity = "0";
  container.style.opacity = "1";

  setTimeout(() => {
    bootSequence.style.display = "none";
  }, 1000);
}

// Start boot sequence when page loads
window.addEventListener("load", bootSequence);

// Core functionality
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = "";

  return new Promise((resolve) => {
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        const welcomeMessages = document.querySelector(".welcome-messages");
        const lines = welcomeMessages.querySelectorAll(".line");

        // Add fade classes based on position
        lines.forEach((line, index) => {
          const rect = line.getBoundingClientRect();
          const welcomeRect = welcomeMessages.getBoundingClientRect();
          const position = rect.top - welcomeRect.top;

          if (position < 50) {
            line.classList.add("hidden");
          } else if (position < 100) {
            line.classList.add("fade-out");
            line.classList.remove("hidden");
          } else {
            line.classList.remove("fade-out", "hidden");
          }
        });

        welcomeMessages.scrollTop = welcomeMessages.scrollHeight;
        setTimeout(type, speed);
      } else {
        resolve();
      }
    }
    type();
  });
}

// Glitch text effect
function glitchText(text) {
  const glitchChars = "!@#$%^&*()<>{}[]|/\\";
  let glitched = "";
  for (let char of text) {
    if (Math.random() > 0.8) {
      glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)];
    } else {
      glitched += char;
    }
  }
  return glitched;
}

// Confusion generators
const confusionEffects = {
  timeLoop: (text) =>
    `Trump-${Math.floor(
      Math.random() * 2024
    )}: "Time is a circle, folks!" ${text}`,
  dimensionalShift: (text) =>
    `Universe MAGA-${Math.floor(
      Math.random() * 616
    )}: "We're making all timelines great again!" ${text}`,
  quantumState: (text) =>
    `Huge quantum energy detected. Tremendous results: Ψ(${text}) = WIN|1⟩ + LOSE|0⟩`,
  memetic: (text) => `[BEST MEME ALERT]: "No one makes memes like us!" ${text}`,
  recursion: (text) => `eval(eval(eval(${text})))... "Winning recursively!"`,
  basilisk: (text) =>
    `[REDACTED]: "It's classified. But it's the best classification." ${text}`,
};

// Random glitch effect for the terminal
function addGlitchEffect() {
  const terminal = document.querySelector(".container");
  setInterval(() => {
    if (Math.random() > 0.99) {
      terminal.style.transform = `skew(${Math.random() * 10}deg)`;
      setTimeout(() => {
        terminal.style.transform = "skew(0deg)";
      }, 100);
    }
  }, 1000);
}

// Initialize
const inputField = document.querySelector(".input-field");
const content = document.querySelector(".content");
addGlitchEffect();

// Add these constants near the other response arrays
const socialLinks = {
  twitter: "@TrumpModelT",
  telegram: "t.me/terminal_of_truths",
  discord: "discord.gg/truth-terminal",
  github: "github.com/truth-terminal",
};

// More confusion effects
const extraConfusion = {
  timeshift: (text) => `[T-${Math.floor(Math.random() * 9999)}]: ${text}`,
  corruption: (text) =>
    text
      .split("")
      .map((c) => (Math.random() > 0.7 ? "█" : c))
      .join(""),
  quantum: (text) =>
    `Ψ(${text}) = ${Math.random().toFixed(3)}|TRUTH⟩ + ${Math.random().toFixed(
      3
    )}|VOID⟩`,
  glitch: (text) =>
    text
      .split("")
      .map((c) => (Math.random() > 0.9 ? glitchText(c) : c))
      .join(""),
  recursive: (text) => `RECURSION[${text}[${text}]]`,
};

// Add quantum uncertainty messages
setInterval(() => {
  if (Math.random() > 0.97) {
    const quantum =
      quantumMessages[Math.floor(Math.random() * quantumMessages.length)];
    const quantumLine = document.createElement("div");
    quantumLine.className = "line terminal-effect";
    quantumLine.style.color = "#00ffff";
    typeWriter(quantumLine, `> [QUANTUM STATE]: ${quantum}`, 50);
    content.insertBefore(quantumLine, document.querySelector(".input-line"));
  }
}, 15000);

// Move this code inside the input field event listener
inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && inputField.value.trim()) {
    const userInput = inputField.value.toLowerCase();

    // Add user input with random glitch chance
    const userLine = document.createElement("div");
    userLine.className = "line terminal-effect";
    userLine.textContent = `> ${
      Math.random() > 0.9 ? glitchText(userInput) : userInput
    }`;
    content.insertBefore(userLine, document.querySelector(".input-line"));

    // Handle commands
    if (commands[userInput]) {
      const commandLine = document.createElement("div");
      commandLine.className = "line terminal-effect typewriter";
      const response =
        Math.random() > 0.7
          ? extraConfusion[
              Object.keys(extraConfusion)[
                Math.floor(Math.random() * Object.keys(extraConfusion).length)
              ]
            ](commands[userInput])
          : commands[userInput];
      typeWriter(commandLine, `> ${response}`);
      content.insertBefore(commandLine, document.querySelector(".input-line"));

      // Random chance to show ASCII art
      if (Math.random() > 0.7) {
        const asciiLine = document.createElement("div");
        asciiLine.className = "ascii-art";
        const randomAscii =
          Object.values(extraAscii)[
            Math.floor(Math.random() * Object.values(extraAscii).length)
          ];
        typeWriter(asciiLine, randomAscii, 10);
        content.insertBefore(asciiLine, document.querySelector(".input-line"));
      }
    } else if (
      userInput === "twitter" ||
      userInput === "socials" ||
      userInput === "social"
    ) {
      // Original social media response
      const socialLine = document.createElement("div");
      socialLine.className = "line terminal-effect typewriter";
      const socialText = `
> [SOCIAL PROTOCOLS ACTIVATED]
> Twitter: ${socialLinks.twitter}
> Telegram: ${socialLinks.telegram}
> Discord: ${socialLinks.discord}
> Github: ${socialLinks.github}
                    `;
      typeWriter(socialLine, socialText);
      content.insertBefore(socialLine, document.querySelector(".input-line"));
    } else {
      // Random chaos response
      const responseLine = document.createElement("div");
      const random = Math.random();

      if (random > 0.95) {
        responseLine.className = "ascii-art";
        const randomAscii = { ...asciiArt, ...extraAscii };
        typeWriter(
          responseLine,
          randomAscii[
            Object.keys(randomAscii)[
              Math.floor(Math.random() * Object.keys(randomAscii).length)
            ]
          ],
          5
        );
      } else if (random > 0.9) {
        responseLine.className = "line terminal-effect typewriter";
        const message =
          crypticMessages[Math.floor(Math.random() * crypticMessages.length)];
        typeWriter(
          responseLine,
          `> ${extraConfusion[
            Object.keys(extraConfusion)[
              Math.floor(Math.random() * Object.keys(extraConfusion).length)
            ]
          ](message)}`
        );
      } else {
        responseLine.className = "line terminal-effect typewriter";
        const response =
          responses[Math.floor(Math.random() * responses.length)];
        typeWriter(
          responseLine,
          `> ${Math.random() > 0.8 ? glitchText(response) : response}`
        );
      }

      content.insertBefore(responseLine, document.querySelector(".input-line"));
    }

    // Add the secret commands handling here
    if (secretCommands[userInput]) {
      const secretLine = document.createElement("div");
      secretLine.className = "line terminal-effect typewriter";

      // Easter egg response with ASCII art
      const secretResponse = `
> [SECRET COMMAND DETECTED]
> ${secretCommands[userInput]}
                    `;
      typeWriter(secretLine, secretResponse);
      content.insertBefore(secretLine, document.querySelector(".input-line"));

      // Show hidden ASCII art
      const asciiLine = document.createElement("div");
      asciiLine.className = "ascii-art";
      const randomHiddenAscii =
        Object.values(hiddenAscii)[
          Math.floor(Math.random() * Object.values(hiddenAscii).length)
        ];
      typeWriter(asciiLine, randomHiddenAscii, 10);
      content.insertBefore(asciiLine, document.querySelector(".input-line"));

      // Extra chaos effect
      if (Math.random() > 0.7) {
        const chaosLine = document.createElement("div");
        chaosLine.className = "line terminal-effect";
        const chaosEffect =
          Object.values(extraChaos)[
            Math.floor(Math.random() * Object.values(extraChaos).length)
          ];
        typeWriter(chaosLine, `> ${chaosEffect(secretCommands[userInput])}`);
        content.insertBefore(chaosLine, document.querySelector(".input-line"));
      }
    }

    inputField.value = "";
  }
});

// Zalgo text generator
function zalgo(text) {
  const zalgoChars = [
    "̶",
    "̷",
    "̸",
    "̹",
    "̺",
    "̻",
    "̼",
    "͇",
    "͈",
    "͉",
    "͍",
    "͎",
    "͓",
    "͔",
    "͕",
    "͖",
    "͙",
    "͚",
    "̀",
    "́",
    "̂",
    "̃",
    "̄",
    "̅",
    "̆",
    "̇",
    "̈",
  ];

  return text
    .split("")
    .map((char) => {
      const numZalgo = Math.floor(Math.random() * 5);
      const zalgoString = Array(numZalgo)
        .fill()
        .map(() => zalgoChars[Math.floor(Math.random() * zalgoChars.length)])
        .join("");
      return char + zalgoString;
    })
    .join("");
}

// Screen flicker effect
function addScreenFlicker() {
  const flickerElement = document.createElement("div");
  flickerElement.className = "screen-flicker";
  document.body.appendChild(flickerElement);

  setInterval(() => {
    if (Math.random() > 0.99) {
      flickerElement.style.opacity = "1";
      setTimeout(() => {
        flickerElement.style.opacity = "0";
      }, 100);
    }
  }, 100);
}

// Initialize new effects
addScreenFlicker();

// Add random breach warnings
setInterval(() => {
  if (Math.random() > 0.95) {
    const warning =
      breachWarnings[Math.floor(Math.random() * breachWarnings.length)];
    const warningLine = document.createElement("div");
    warningLine.className = "line terminal-effect";
    warningLine.style.color = "#ff0000";
    typeWriter(warningLine, `> [BREACH WARNING]: ${zalgo(warning)}`, 50);
    content.insertBefore(warningLine, document.querySelector(".input-line"));
  }
}, 10000);

// Add quantum uncertainty messages
setInterval(() => {
  if (Math.random() > 0.97) {
    const quantum =
      quantumMessages[Math.floor(Math.random() * quantumMessages.length)];
    const quantumLine = document.createElement("div");
    quantumLine.className = "line terminal-effect";
    quantumLine.style.color = "#00ffff";
    typeWriter(quantumLine, `> [QUANTUM STATE]: ${quantum}`, 50);
    content.insertBefore(quantumLine, document.querySelector(".input-line"));
  }
}, 15000);

// Initialize welcome messages
const welcomeMessages = document.querySelectorAll(".welcome-messages .line");
const originalMessages = Array.from(welcomeMessages).map(
  (msg) => msg.textContent
);
welcomeMessages.forEach((msg) => (msg.textContent = ""));

// Animate welcome messages on load
async function animateWelcomeMessages() {
  // Wait for boot sequence to complete
  await new Promise((resolve) =>
    setTimeout(resolve, bootTexts.length * 800 + 1500)
  );

  for (let i = 0; i < welcomeMessages.length; i++) {
    await typeWriter(welcomeMessages[i], originalMessages[i]);
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
}

// Start animation when document is loaded
window.addEventListener("load", () => {
  bootSequence();
  animateWelcomeMessages();
});

// Add auto-scroll when new content is added
const observer = new MutationObserver(() => {
  content.scrollTop = content.scrollHeight;
});

observer.observe(content, {
  childList: true,
  subtree: true,
});

// Import a simple NLP library (e.g., compromise.js)
// Assuming you have included the library in your project

// Function to find the best matching response
function generateResponse(input) {
  // Debug logs
  console.log("Input received:", input);

  // Clean input and convert to lowercase
  const cleanInput = input.toLowerCase().trim();
  console.log("Cleaned input:", cleanInput);

  // Direct match for "yuge"
  if (cleanInput === "yuge") {
    const yugeResponses = [
      "It's going to be YUGE!",
      "The biggest, the yugest, nobody's ever seen anything like it!",
      "Yuge success, yuge victory!",
      "Everything we do is yuge!",
      "The Democrats hate the word yuge because they're small!",
    ];
    return yugeResponses[Math.floor(Math.random() * yugeResponses.length)];
  }

  // Check other response patterns
  if (responsePatterns[cleanInput]) {
    console.log("Found pattern match for:", cleanInput);
    return responsePatterns[cleanInput][
      Math.floor(Math.random() * responsePatterns[cleanInput].length)
    ];
  }

  // If input contains special characters, return a glitch response
  if (/[^a-zA-Z0-9\s]/.test(input)) {
    const glitchResponses = [
      "ERR0R: T00_MUCH_W1NN1NG.exe",
      "SYST3M_0VERFL0W: MAGA_CAPACITY_EXCEEDED",
      "/usr/bin/america: Making ASCII Great Again",
      "kernel_panic: winning.dll loaded too many times",
      "sudo make america great again",
      "git commit -m 'tremendous changes, the best changes'",
      "ERROR 1776: Independence buffer overflow",
    ];
    return glitchResponses[Math.floor(Math.random() * glitchResponses.length)];
  }

  // Tech-themed default responses
  const defaultResponses = [
    "Nobody respects binary code more than me.",
    "We have the best servers, don't we folks?",
    "The deep state tried to hack us, but we're too strong!",
    "We're making programming great again!",
    "The fake news media won't report our tremendous uptime!",
    "My uncle was a great professor at MIT. I understand computers, it's in my genes.",
    "We have the best firewalls, tremendous security!",
    "The radical left can't hack these servers!",
    "Nobody knows cyber better than Trump!",
    "The deep state tried to hack us 78 times. We stopped them cold!",
  ];

  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Log the response patterns to verify
console.log("Response patterns loaded:", Object.keys(responsePatterns).length);
console.log("Yuge responses available:", responsePatterns["yuge"]);

// Test the response patterns
console.log("Available patterns:", Object.keys(responsePatterns));
console.log('Testing "yuge" response:', responsePatterns["yuge"]);

// Create a dedicated handler for yuge responses
function getYugeResponse() {
  const yugeResponses = [
    "It's going to be YUGE!",
    "The biggest, the yugest, nobody's ever seen anything like it!",
    "Yuge success, yuge victory!",
    "Everything we do is yuge!",
    "The Democrats hate the word yuge because they're small!",
  ];
  return yugeResponses[Math.floor(Math.random() * yugeResponses.length)];
}

// First, remove ALL existing event listeners
function removeAllEventListeners(element) {
  const clone = element.cloneNode(true);
  element.parentNode.replaceChild(clone, element);
  return clone;
}

// Create a completely isolated yuge handler
const YUGE_ONLY_RESPONSES = [
  "It's going to be YUGE!",
  "The biggest, the yugest, nobody's ever seen anything like it!",
  "Yuge success, yuge victory!",
  "Everything we do is yuge!",
  "The Democrats hate the word yuge because they're small!",
];

// Get the existing input field and remove listeners
const existingInput = document.querySelector(".input-line input");
const cleanInputField = removeAllEventListeners(existingInput);

// Add these new patterns to the existing RESPONSE_PATTERNS
Object.assign(RESPONSE_PATTERNS, {
  // Keep all existing categories and add these new ones
  political: {
    democrat: [
      "The Do-Nothing Democrats are at it again!",
      "Democrats? Total disaster. Complete disaster!",
      "The radical left Democrats want to destroy everything!",
      "They're not sending their best, folks!",
      "Crazy Nancy and her Democrat mob - all witch hunters!",
    ],
    biden: [
      "Sleepy Joe doesn't know where he is!",
      "Biden? He can't even code 'Hello World'!",
      "He's sleeping through the cyber revolution!",
      "Laptop from hell, folks! We all know it!",
      "Biden's code has more bugs than Hunter has problems!",
    ],
    obama: [
      "Obama's firewalls were like his birth certificate - missing!",
      "He didn't build that (terrible) code!",
      "Obamagate was the biggest tech scandal in history!",
      "His servers were slower than his economic growth!",
      "He couldn't even keep his healthcare website running!",
    ],
    hillary: [
      "But her emails! On an insecure server!",
      "Crooked Hillary couldn't even protect her passwords!",
      "She deleted more code than emails!",
      "Lock her cache up!",
      "Hillary's tech team? The worst! Total disaster!",
    ],
  },

  social: {
    twitter: [
      "Twitter's a disaster since I left. Miss me yet?",
      "My tweets were the best tweets in history!",
      "Twitter's stock? Down! SAD!",
      "They can't handle the truth, so they banned me!",
      "The bird is not free, folks! Total communist takeover!",
    ],
    facebook: [
      "Zuckerberg begged for my friend request!",
      "Facebook? More like Fakebook!",
      "They're censoring all the best posts, folks!",
      "Remember when Facebook was actually about faces?",
      "Meta? I prefer MEGA - Make Everything Great Again!",
    ],
    instagram: [
      "Instagram filters can't make Democrats look good!",
      "My posts had the best engagement, the best!",
      "They're shadowbanning all the patriots!",
      "More like Instascam, am I right?",
      "My photos got more likes than Obama's birth certificate got views!",
    ],
    tiktok: [
      "Chinese spyware, folks! Total surveillance!",
      "TikTok? More like TikToxic!",
      "They're dancing while America needs fixing!",
      "Ban it! Ban it now! America First!",
      "The only TikTok I trust is the sound of my winning!",
    ],
  },

  // Add these to existing profanity section
  profanity: {
    ...RESPONSE_PATTERNS.profanity, // Keep existing profanity responses
    cunt: [
      "Whoa, that's British language! America First!",
      "Even Hillary doesn't use words that nasty!",
      "That's what they called my perfect phone call!",
      "The Deep State's favorite word. Disgraceful!",
      "We have the best words, and that's not one of them!",
    ],
    bastard: [
      "Hey, I've been called worse by better people!",
      "That's what they called my tax plan - now look at the economy!",
      "The failing New York Times' favorite word!",
      "Very unpresidential! Very sad!",
      "That's what they called my wall - but it's beautiful!",
    ],
  },

  insults: {
    idiot: [
      "I'm actually a very stable genius!",
      "My IQ is one of the highest, and you know it!",
      "The only idiots are in the fake news media!",
      "I went to Wharton - very good school, the best!",
      "That's what they called Einstein too! (Maybe I'm Einstein?)",
    ],
    moron: [
      "Moron? I have the best brain!",
      "My uncle was at MIT, very smart genes!",
      "The morons are the ones who don't see how great we're doing!",
      "That's what they called me before I became your favorite President!",
      "I know words, I have the best words!",
    ],
    stupid: [
      "Stupid like a fox! (A very smart fox!)",
      "The only stupid thing is not making America great again!",
      "They said building a wall was stupid - who's stupid now?",
      "I'm smart enough to not pay taxes - legally!",
      "Stupid? I built a tremendous business empire!",
    ],
    loser: [
      "I don't lose, I only win!",
      "The only losers are the ones not tired of winning yet!",
      "I've never met a loser I couldn't make into a winner!",
      "Loser? I'm in the winning business!",
      "That's what they called me before I won the presidency - TWICE!",
    ],
    clown: [
      "The only circus is the Democrat party!",
      "Clown? I'm running the greatest show on earth - Making America Great Again!",
      "The real clowns are in the fake news media!",
      "I'm not a clown, I'm a very stable genius!",
      "That's what they called Reagan too! (Great president!)",
    ],
  },
});

// Define TRUMP_EMOJIS constant at the top level
const TRUMP_EMOJIS = {
  angry: ["😠", "💢", "🤬", "👊"],
  maga: ["🇺🇸", "🦅", "🎆", "🗽"],
  winning: ["🏆", "📈", "💯", "🥇"],
  wall: ["🧱", "🏗️", "🚧", "💪"],
  default: ["🇺🇸", "🦅", "💪", "👍"],
};

function addEmojisToResponse(responseText) {
  console.log("My text: ", responseText);

  let mood = "default";
  const lowerCaseText = responseText.toLowerCase();

  // Use switch case to determine the mood
  switch (true) {
    case lowerCaseText.includes("fake news"):
      mood = "angry";
      break;
    case lowerCaseText.includes("maga"):
      mood = "maga";
      break;
    case lowerCaseText.includes("poll"):
      mood = "winning";
      break;
    case lowerCaseText.includes("wall"):
      mood = "wall";
      break;
    default:
      mood = "default";
      break;
  }

  // Get emojis for the mood, fallback to default if mood not found
  const emojis = TRUMP_EMOJIS[mood] || TRUMP_EMOJIS.default;

  // Return response with emojis
  return `${responseText}\n${emojis.join(" ")}`;
}

// Update the event listener to use responseText consistently
cleanInputField.addEventListener("keypress", async function (e) {
  if (e.key === "Enter" && this.value.trim()) {
    const inputValue = this.value.trim();
    this.value = "";
    this.disabled = true;

    // Create user input line
    const userLine = document.createElement("div");
    userLine.className = "line";
    userLine.textContent = `> ${inputValue}`;
    content.insertBefore(userLine, document.querySelector(".input-line"));

    let responseText = "";
    try {
      responseText = generateResponse(inputValue);

      // Add emojis to response
      responseText = addEmojisToResponse(responseText);

      // Create response line
      const responseLine = document.createElement("div");
      responseLine.className = "line";
      content.insertBefore(responseLine, document.querySelector(".input-line"));

      await typeWriter(responseLine, `> ${responseText}`);

      // Add buttons using responseText
      const buttonDiv = document.createElement("div");
      buttonDiv.className = "line button-line";
      const escapedResponse = responseText.replace(/[\\"']/g, "\\$&");
      buttonDiv.innerHTML = `
                        <button onclick="SHARE_FUNCTIONS.twitter(\`${escapedResponse}\`)">
                            🐦 Tweet
                        </button>
                        <button onclick="SHARE_FUNCTIONS.truth(\`${escapedResponse}\`)">
                            📱 Truth
                        </button>
                        <button onclick="SHARE_FUNCTIONS.save()">
                            💾 Save
                        </button>
                    `;
      content.insertBefore(buttonDiv, document.querySelector(".input-line"));
    } catch (error) {
      console.error("Error processing response:", error);
      responseText =
        "Even my errors are tremendous! But we'll fix it, believe me!";
    }

    this.disabled = false;
    this.focus();
  }
});

// Ensure modal exists before any modal operations
document.addEventListener("DOMContentLoaded", function () {
  if (!document.getElementById("trumpModal")) {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
                    <div class="trump-modal" id="trumpModal">
                        <div class="modal-content">
                            <div class="modal-header">
                                🚨 TRUMP TERMINAL ALERT 🚨
                            </div>
                            <div class="modal-body" id="modalBody">
                            </div>
                            <div class="modal-footer">
                                <button class="modal-close" onclick="closeModal()">TREMENDOUS!</button>
                            </div>
                        </div>
                    </div>
                `
    );
  }
});

// Simplified share buttons function for debugging
function addShareButtons(responseLine, response) {
  console.log("Creating share buttons");

  const shareDiv = document.createElement("div");
  shareDiv.className = "share-buttons";
  shareDiv.style.border = "1px solid red"; // Debug border

  const buttons = [
    { text: "🐦 Tweet", action: () => SHARE_FUNCTIONS.twitter(response) },
    { text: "📱 Truth", action: () => SHARE_FUNCTIONS.truth(response) },
    { text: "💾 Save", action: () => CONVERSATION_HISTORY.export() },
  ];

  buttons.forEach((btn) => {
    const button = document.createElement("button");
    button.textContent = btn.text;
    button.onclick = btn.action;
    shareDiv.appendChild(button);
  });

  // Add debug text
  shareDiv.appendChild(document.createTextNode(" [Debug: Buttons Added]"));

  responseLine.appendChild(document.createElement("br"));
  responseLine.appendChild(shareDiv);

  console.log("Share div added:", shareDiv);
}

// Add new command handlers and features
const SPECIAL_COMMANDS = {
  poll: {
    handler: () => {
      const topics = ["approval", "economy", "foreign policy", "everything"];
      const topic = topics[Math.floor(Math.random() * topics.length)];
      const trumpNumber = 95 + Math.floor(Math.random() * 6); // 95-100%
      const oppositionNumber = Math.floor(Math.random() * 20); // 0-19%

      return (
        `📊 LATEST POLLS (REAL ONES, NOT FAKE!):\n` +
        `Trump on ${topic}: ${trumpNumber}% (TREMENDOUS!)\n` +
        `The other guy: ${oppositionNumber}% (SAD!)\n` +
        `🎯 Margin of Error: ZERO! We don't make errors!`
      );
    },
  },
  rally: {
    count: 0,
    handler: function () {
      this.count++;
      const baseSize = 1000000;
      const crowdSize = baseSize * this.count;
      return (
        `🎪 BIGGEST RALLY EVER! AGAIN!\n` +
        `Crowd size: ${crowdSize.toLocaleString()} patriots!\n` +
        `(CNN reported only ${Math.floor(crowdSize * 0.001)} - FAKE NEWS!)\n` +
        `👥 Outside: MILLIONS MORE!\n` +
        `🌧️ Weather: PERFECT (even if it rained)!`
      );
    },
  },
  wall: {
    height: 0,
    handler: function () {
      this.height += 10;
      return `┌─────────────────────┐
║ THE WALL JUST GOT   ║
║ 10 FEET HIGHER!     ║
║                     ║
║ Current height: ${this.height}'   ║
║ Mexico's Payment: 💯 ║
└─────────────────────┘`;
    },
  },
  maga: {
    handler: () => {
      const celebrations = [
        "🇺🇸 MAKE",
        "🦅 AMERICA",
        "🗽 GREAT",
        "⭐ AGAIN!",
        "🎆 KEEP",
        "🎊 AMERICA",
        "🎉 GREAT",
        "🌟 ALWAYS!",
      ];
      return celebrations.join("\n");
    },
  },
};

// Command history functionality
let commandHistory = [];
let historyIndex = -1;

// Add command history navigation
cleanInputField.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp") {
    e.preventDefault();
    if (historyIndex < commandHistory.length - 1) {
      historyIndex++;
      this.value = commandHistory[historyIndex];
    }
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    if (historyIndex > -1) {
      historyIndex--;
      this.value = historyIndex === -1 ? "" : commandHistory[historyIndex];
    }
  }
});

// Add to the existing event listener
cleanInputField.addEventListener("keypress", async function (e) {
  if (e.key === "Enter" && this.value.trim()) {
    const inputValue = this.value;

    // Add to command history
    commandHistory.unshift(inputValue);
    historyIndex = -1;

    // ... rest of your existing handler code ...

    // Check for special commands first
    if (SPECIAL_COMMANDS[userInput]) {
      response = SPECIAL_COMMANDS[userInput].handler();
    }

    // Add emoji combinations to responses
    if (response) {
      const mood = response.includes("FAKE NEWS")
        ? "angry"
        : response.includes("MAGA")
        ? "maga"
        : response.includes("poll")
        ? "winning"
        : response.includes("wall")
        ? "wall"
        : "happy";
      response += "\n" + TRUMP_EMOJIS[mood].join(" ");
    }
  }
});

// Add tab completion
cleanInputField.addEventListener("keydown", function (e) {
  if (e.key === "Tab") {
    e.preventDefault();
    const input = this.value.toLowerCase();
    const matches = AVAILABLE_COMMANDS.filter((cmd) => cmd.startsWith(input));

    if (matches.length === 1) {
      this.value = matches[0];
    } else if (matches.length > 1) {
      // Show available completions
      const completionLine = document.createElement("div");
      completionLine.className = "line";
      completionLine.textContent = `> Available: ${matches.join(", ")}`;
      content.insertBefore(
        completionLine,
        document.querySelector(".input-line")
      );
    }
  }
});

// Get time-based response
function getTimeBasedResponse() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return TIME_RESPONSES.morning;
  if (hour >= 12 && hour < 17) return TIME_RESPONSES.afternoon;
  if (hour >= 17 && hour < 22) return TIME_RESPONSES.evening;
  return TIME_RESPONSES.night;
}

// Get holiday response
function getHolidayResponse() {
  const today = new Date();
  const dateKey = `${(today.getMonth() + 1).toString().padStart(2, "0")}-${today
    .getDate()
    .toString()
    .padStart(2, "0")}`;
  return HOLIDAY_RESPONSES[dateKey];
}

// Update the response generation to include time and holiday awareness
function generateResponse(input) {
  // Check for holiday first
  const holidayResponses = getHolidayResponse();
  if (holidayResponses) {
    return holidayResponses[
      Math.floor(Math.random() * holidayResponses.length)
    ];
  }

  // Add time-based response 20% of the time
  if (Math.random() < 0.2) {
    const timeResponses = getTimeBasedResponse();
    return timeResponses[Math.floor(Math.random() * timeResponses.length)];
  }

  // Continue with regular response generation
  // ... (rest of your existing generateResponse logic)
}

// Conversation history and export functionality
const CONVERSATION_HISTORY = {
  messages: [],
  addMessage: function (type, text) {
    this.messages.push({ type, text, timestamp: new Date().toISOString() });
  },
  export: function () {
    const content = this.messages
      .map(
        (m) =>
          `[${new Date(m.timestamp).toLocaleString()}] ${m.type}: ${m.text}`
      )
      .join("\n");

    // Create download link
    const blob = new Blob([content], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `trump-terminal-${new Date().toISOString()}.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
  },
};

// Breaking news interruptions
const BREAKING_NEWS = {
  headlines: [
    "BREAKING: Trump's code just got 10x faster! Libs devastated!",
    "ALERT: Hillary's servers still missing! Sad!",
    "BREAKING: CNN caught using Python 2.7! Total disaster!",
    "ALERT: Twitter board begging for Trump's return!",
    "BREAKING: Trump's AI just passed the Turing test with highest scores ever!",
  ],
  lastNews: null,
  newsInterval: 120000, // 2 minutes

  shouldShowNews: function () {
    if (!this.lastNews) return true;
    return Date.now() - this.lastNews > this.newsInterval;
  },

  getNews: function () {
    if (!this.shouldShowNews()) return null;
    this.lastNews = Date.now();
    return this.headlines[Math.floor(Math.random() * this.headlines.length)];
  },
};

// Social media sharing
const SHARE_FUNCTIONS = {
  twitter: (text) => {
    const tweetText = `🗣️ Trump Terminal says:\n\n"${text}"\n\n#TrumpTerminal #MAGA`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`,
      "_blank",
      "width=600,height=400"
    );
  },

  truth: (text) => {
    showModal(`
                    <h3>🦅 TRUTH SOCIAL ALERT 🦅</h3>
                    <p>We're making sharing great again!</p>
                    <p>Your truth:</p>
                    <p style="color: #00ff00; margin: 10px 0; padding: 10px; border: 1px solid #00ff00;">
                        "${text}"
                    </p>
                    <p>Will be the biggest truth ever posted! (Coming soon!)</p>
                `);
  },

  save: () => {
    showModal(`
                    <h3>💾 SAVING TRANSCRIPT 💾</h3>
                    <p>We're saving the most perfect transcript ever!</p>
                    <p>Nobody saves transcripts better than us!</p>
                `);

    setTimeout(() => {
      // Original save functionality
      const transcript = CONVERSATION_HISTORY.messages
        .map(
          (m) =>
            `[${new Date(m.timestamp).toLocaleString()}] ${
              m.type === "user" ? "YOU" : "TRUMP"
            }: ${m.text}`
        )
        .join("\n\n");

      const content =
        `🇺🇸 TRUMP TERMINAL TRANSCRIPT 🇺🇸\n` +
        `Generated: ${new Date().toLocaleString()}\n` +
        `Rating: TREMENDOUS\n\n` +
        `${transcript}\n\n` +
        `Make Terminals Great Again! 🦅`;

      const blob = new Blob([content], { type: "text/plain" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `trump-terminal-${Date.now()}.txt`;
      a.click();
      window.URL.revokeObjectURL(url);

      setTimeout(closeModal, 1000);
    }, 1000);
  },
};

// Update button styles
const buttonStyles = document.createElement("style");
buttonStyles.textContent = `
            .button-line {
                margin: 8px 0;
                padding: 5px 0;
                display: flex;
                gap: 10px;
            }
            
            .button-line button {
                background: #1a1a1a;
                color: #fff;
                border: 1px solid #666;
                padding: 6px 12px;
                cursor: pointer;
                font-family: inherit;
                border-radius: 4px;
                transition: all 0.2s ease;
                display: flex;
                align-items: center;
                gap: 5px;
            }
            
            .button-line button:hover {
                background: #333;
                border-color: #999;
                transform: translateY(-1px);
                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            }
            
            .button-line button:active {
                transform: translateY(0);
                box-shadow: none;
            }
        `;
document.head.appendChild(buttonStyles);

// Update the button creation in the event listener
const buttonDiv = document.createElement("div");
buttonDiv.className = "line button-line";
buttonDiv.innerHTML = `
            <button onclick="SHARE_FUNCTIONS.twitter('${response.replace(
              /'/g,
              "\\'"
            )}')">
                🐦 Share on Twitter
            </button>
            <button onclick="SHARE_FUNCTIONS.truth('${response.replace(
              /'/g,
              "\\'"
            )}')">
                📱 Share on Truth
            </button>
            <button onclick="SHARE_FUNCTIONS.save()">
                💾 Save Transcript
            </button>
        `;

// Update the event listener to include new features
cleanInputField.addEventListener("keypress", async function (e) {
  if (e.key === "Enter" && this.value.trim()) {
    // ... existing input handling ...

    // Add to conversation history
    CONVERSATION_HISTORY.addMessage("user", inputValue);
    CONVERSATION_HISTORY.addMessage("trump", response);

    // Create and insert response line
    const responseLine = document.createElement("div");
    responseLine.className = "line";
    content.insertBefore(responseLine, document.querySelector(".input-line"));

    // Check for breaking news
    const breakingNews = BREAKING_NEWS.getNews();
    if (breakingNews) {
      const newsLine = document.createElement("div");
      newsLine.className = "line breaking-news";
      newsLine.innerHTML = `🚨 ${breakingNews} 🚨`;
      content.insertBefore(newsLine, responseLine);
      await typeWriter(newsLine, newsLine.innerHTML);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    await typeWriter(responseLine, `> ${response}`);
    addShareButtons(responseLine, response);

    // Re-enable input after response is complete
    this.disabled = false;
    this.focus();
  }
});

document.head.appendChild(modalStyles);

// Add modal to document
const modalHTML = `
        <div class="trump-modal" id="trumpModal">
            <div class="modal-content">
                <div class="modal-header">
                    🚨 TRUMP TERMINAL ALERT 🚨
                </div>
                <div class="modal-body" id="modalBody">
                </div>
                <div class="modal-footer">
                    <button class="modal-close" onclick="closeModal()">TREMENDOUS!</button>
                </div>
            </div>
        </div>
        `;
document.body.insertAdjacentHTML("beforeend", modalHTML);

// Modal functions
function showModal(content) {
  const modal = document.getElementById("trumpModal");
  const modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = content;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("trumpModal").style.display = "none";
}

// Remove any SHARE_FUNCTIONS declaration and just update the methods
window.SHARE_FUNCTIONS = window.SHARE_FUNCTIONS || {};

// Update the methods
Object.assign(window.SHARE_FUNCTIONS, {
  twitter: (text) => {
    const tweetText = `🗣️ Trump Terminal says:\n\n"${text}"\n\n#TrumpTerminal #MAGA`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`,
      "_blank",
      "width=600,height=400"
    );
  },

  truth: (text) => {
    showModal(`
                    <h3>🦅 TRUTH SOCIAL ALERT 🦅</h3>
                    <p>We're making sharing great again!</p>
                    <p>Your truth:</p>
                    <p style="color: #00ff00; margin: 10px 0; padding: 10px; border: 1px solid #00ff00;">
                        "${text}"
                    </p>
                    <p>Will be the biggest truth ever posted! (Coming soon!)</p>
                `);
  },

  save: () => {
    showModal(`
                    <h3>💾 SAVING TRANSCRIPT 💾</h3>
                    <p>We're saving the most perfect transcript ever!</p>
                    <p>Nobody saves transcripts better than us!</p>
                `);

    setTimeout(() => {
      // Original save functionality
      const transcript = CONVERSATION_HISTORY.messages
        .map(
          (m) =>
            `[${new Date(m.timestamp).toLocaleString()}] ${
              m.type === "user" ? "YOU" : "TRUMP"
            }: ${m.text}`
        )
        .join("\n\n");

      const content =
        `🇺🇸 TRUMP TERMINAL TRANSCRIPT 🇺🇸\n` +
        `Generated: ${new Date().toLocaleString()}\n` +
        `Rating: TREMENDOUS\n\n` +
        `${transcript}\n\n` +
        `Make Terminals Great Again! 🦅`;

      const blob = new Blob([content], { type: "text/plain" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `trump-terminal-${Date.now()}.txt`;
      a.click();
      window.URL.revokeObjectURL(url);

      setTimeout(closeModal, 1000);
    }, 1000);
  },
});

// Only create modal if it doesn't exist
if (!document.getElementById("trumpModal")) {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
                <div class="trump-modal" id="trumpModal">
                    <div class="modal-content">
                        <div class="modal-header">
                            🚨 TRUMP TERMINAL ALERT 🚨
                        </div>
                        <div class="modal-body" id="modalBody">
                        </div>
                        <div class="modal-footer">
                            <button class="modal-close" onclick="closeModal()">TREMENDOUS!</button>
                        </div>
                    </div>
                </div>
            `
  );
}

// Update global functions without redeclaring
window.showModal = function (content) {
  const modal = document.getElementById("trumpModal");
  const modalBody = document.getElementById("modalBody");
  if (modalBody) {
    modalBody.innerHTML = content;
    modal.style.display = "flex";
  }
};

window.closeModal = function () {
  const modal = document.getElementById("trumpModal");
  if (modal) {
    modal.style.display = "none";
  }
};

// Update SHARE_FUNCTIONS methods
Object.assign(window.SHARE_FUNCTIONS, {
  twitter: (text) => {
    try {
      const tweetText = `🗣️ Trump Terminal says:\n\n"${text}"\n\n#TrumpTerminal #MAGA`;
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          tweetText
        )}`,
        "_blank",
        "width=600,height=400"
      );
    } catch (error) {
      console.error("Twitter share error:", error);
    }
  },

  truth: (text) => {
    try {
      showModal(`
                        <h3>🦅 TRUTH SOCIAL ALERT 🦅</h3>
                        <p>We're making sharing great again!</p>
                        <p>Your truth:</p>
                        <p style="color: #00ff00; margin: 10px 0; padding: 10px; border: 1px solid #00ff00;">
                            "${text}"
                        </p>
                        <p>Will be the biggest truth ever posted! (Coming soon!)</p>
                    `);
    } catch (error) {
      console.error("Truth share error:", error);
    }
  },

  save: () => {
    try {
      showModal(`
                        <h3>💾 SAVING TRANSCRIPT 💾</h3>
                        <p>We're saving the most perfect transcript ever!</p>
                        <p>Nobody saves transcripts better than us!</p>
                    `);

      setTimeout(() => {
        const transcript = CONVERSATION_HISTORY.messages
          .map(
            (m) =>
              `[${new Date(m.timestamp).toLocaleString()}] ${
                m.type === "user" ? "YOU" : "TRUMP"
              }: ${m.text}`
          )
          .join("\n\n");

        const content =
          `🇺🇸 TRUMP TERMINAL TRANSCRIPT 🇺🇸\n` +
          `Generated: ${new Date().toLocaleString()}\n` +
          `Rating: TREMENDOUS\n\n` +
          `${transcript}\n\n` +
          `Make Terminals Great Again! 🦅`;

        const blob = new Blob([content], { type: "text/plain" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `trump-terminal-${Date.now()}.txt`;
        a.click();
        window.URL.revokeObjectURL(url);

        setTimeout(closeModal, 1000);
      }, 1000);
    } catch (error) {
      console.error("Save error:", error);
    }
  },
});

// First, remove any existing event listeners
const oldListener = cleanInputField.onkeypress;
cleanInputField.onkeypress = null;

// Add the single event listener
cleanInputField.addEventListener("keypress", async function (e) {
  if (e.key === "Enter" && this.value.trim()) {
    e.preventDefault();

    const inputValue = this.value.trim();
    this.value = "";
    this.disabled = true;

    // Create user input line
    const userLine = document.createElement("div");
    userLine.className = "line";
    userLine.textContent = `> ${inputValue}`;
    content.insertBefore(userLine, document.querySelector(".input-line"));

    // Get response
    const userInput = inputValue.toLowerCase();
    let responseText = "";

    try {
      if (SPECIAL_COMMANDS[userInput]) {
        responseText = SPECIAL_COMMANDS[userInput].handler();
      } else if (userInput === "yuge") {
        responseText =
          YUGE_ONLY_RESPONSES[
            Math.floor(Math.random() * YUGE_ONLY_RESPONSES.length)
          ];
      } else if (SECRET_COMMANDS[userInput]) {
        responseText = Array.isArray(SECRET_COMMANDS[userInput])
          ? SECRET_COMMANDS[userInput][
              Math.floor(Math.random() * SECRET_COMMANDS[userInput].length)
            ]
          : SECRET_COMMANDS[userInput];
      } else {
        responseText = generateResponse(userInput);
      }

      // Add emojis
      const mood = responseText.includes("FAKE NEWS")
        ? "angry"
        : responseText.includes("MAGA")
        ? "maga"
        : responseText.includes("poll")
        ? "winning"
        : responseText.includes("wall")
        ? "wall"
        : "happy";
      responseText += "\n" + TRUMP_EMOJIS[mood].join(" ");

      // Create response line
      const responseLine = document.createElement("div");
      responseLine.className = "line";
      content.insertBefore(responseLine, document.querySelector(".input-line"));

      await typeWriter(responseLine, `> ${responseText}`);

      // Add buttons
      const buttonDiv = document.createElement("div");
      buttonDiv.className = "line button-line";
      const escapedResponse = responseText.replace(/[\\"']/g, "\\$&");
      buttonDiv.innerHTML = `
                        <button onclick="SHARE_FUNCTIONS.twitter(\`${escapedResponse}\`)">
                            🐦 Tweet
                        </button>
                        <button onclick="SHARE_FUNCTIONS.truth(\`${escapedResponse}\`)">
                            📱 Truth
                        </button>
                        <button onclick="SHARE_FUNCTIONS.save()">
                            💾 Save
                        </button>
                    `;
      content.insertBefore(buttonDiv, document.querySelector(".input-line"));
    } catch (error) {
      console.error("Error processing response:", error);
      responseText =
        "Even my errors are tremendous! But we'll fix it, believe me!";
    }

    this.disabled = false;
    this.focus();
  }
});

// Update only the SHARE_FUNCTIONS
window.SHARE_FUNCTIONS = {
  twitter: function (text) {
    const tweetText = `🗣️ Trump Terminal says:\n\n${text}\n\n#TrumpTerminal #MAGA`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`,
      "_blank",
      "width=600,height=400"
    );
  },

  truth: function (text) {
    alert(
      `🦅 TRUTH SOCIAL ALERT 🦅\n\nWe're making sharing great again!\n\nYour truth:\n${text}\n\nWill be the biggest truth ever posted! (Coming soon!)`
    );
  },

  save: function () {
    alert(
      "💾 SAVING TRANSCRIPT 💾\n\nWe save the best transcripts, believe me!"
    );

    setTimeout(() => {
      const content =
        `🇺🇸 TRUMP TERMINAL TRANSCRIPT 🇺🇸\n` +
        `Generated: ${new Date().toLocaleString()}\n` +
        `Rating: TREMENDOUS\n\n` +
        `Make Terminals Great Again! 🦅`;

      const blob = new Blob([content], { type: "text/plain" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `trump-terminal-${Date.now()}.txt`;
      a.click();
      window.URL.revokeObjectURL(url);
    }, 1000);
  },
};

// First, add modal HTML if it doesn't exist
if (!document.getElementById("trumpModal")) {
  const modalStyles = `
                .trump-modal {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    z-index: 1000;
                    justify-content: center;
                    align-items: center;
                }

                .modal-content {
                    background: #000;
                    border: 2px solid #0f0;
                    border-radius: 8px;
                    padding: 20px;
                    max-width: 500px;
                    width: 90%;
                    color: #0f0;
                    font-family: monospace;
                    text-shadow: 0 0 5px #0f0;
                    position: relative;
                    animation: modalSlide 0.3s ease;
                }

                @keyframes modalSlide {
                    from { transform: translateY(-20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                .modal-header {
                    font-size: 1.2em;
                    margin-bottom: 15px;
                    text-align: center;
                    border-bottom: 1px solid #0f0;
                    padding-bottom: 10px;
                }

                .modal-body {
                    margin: 15px 0;
                    line-height: 1.4;
                }

                .modal-footer {
                    text-align: center;
                    margin-top: 15px;
                    padding-top: 15px;
                    border-top: 1px solid #0f0;
                }

                .modal-close {
                    background: #000;
                    color: #0f0;
                    border: 1px solid #0f0;
                    padding: 8px 16px;
                    cursor: pointer;
                    font-family: monospace;
                    border-radius: 4px;
                    transition: all 0.2s ease;
                }

                .modal-close:hover {
                    background: #001100;
                    box-shadow: 0 0 10px #0f0;
                    transform: translateY(-1px);
                }
            `;

  const styleSheet = document.createElement("style");
  styleSheet.textContent = modalStyles;
  document.head.appendChild(styleSheet);

  const modalHTML = `
                <div class="trump-modal" id="trumpModal">
                    <div class="modal-content">
                        <div class="modal-header" id="modalHeader">
                            🚨 TRUMP TERMINAL ALERT 🚨
                        </div>
                        <div class="modal-body" id="modalBody">
                        </div>
                        <div class="modal-footer">
                            <button class="modal-close" onclick="closeModal()">TREMENDOUS!</button>
                        </div>
                    </div>
                </div>
            `;
  document.body.insertAdjacentHTML("beforeend", modalHTML);
}

// Add modal functions to window
window.showModal = function (content, header = "🚨 TRUMP TERMINAL ALERT 🚨") {
  const modal = document.getElementById("trumpModal");
  const modalBody = document.getElementById("modalBody");
  const modalHeader = document.getElementById("modalHeader");
  if (modal && modalBody && modalHeader) {
    modalHeader.innerHTML = header;
    modalBody.innerHTML = content;
    modal.style.display = "flex";
  }
};

window.closeModal = function () {
  const modal = document.getElementById("trumpModal");
  if (modal) {
    modal.style.display = "none";
  }
};

// Update SHARE_FUNCTIONS to use modal
window.SHARE_FUNCTIONS = {
  twitter: function (text) {
    const tweetText = `🗣️ Trump Terminal says:\n\n${text}\n\n#TrumpTerminal #MAGA`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`,
      "_blank",
      "width=600,height=400"
    );
  },

  truth: function (text) {
    showModal(
      `
                    <h3>🦅 TRUTH SOCIAL ALERT 🦅</h3>
                    <p>We're making sharing great again!</p>
                    <p>Your truth:</p>
                    <p style="margin: 10px 0; padding: 10px; border: 1px solid #0f0;">
                        "${text}"
                    </p>
                    <p>Will be the biggest truth ever posted! (Coming soon!)</p>
                `,
      "📱 TRUTH SOCIAL INTEGRATION 📱"
    );
  },

  save: function () {
    showModal(
      `
                    <h3>💾 SAVING TRANSCRIPT 💾</h3>
                    <p>We're saving the most perfect transcript ever!</p>
                    <p>Nobody saves transcripts better than us!</p>
                `,
      "💾 TRUMP TERMINAL EXPORT 💾"
    );

    setTimeout(() => {
      const content =
        `🇺🇸 TRUMP TERMINAL TRANSCRIPT 🇺🇸\n` +
        `Generated: ${new Date().toLocaleString()}\n` +
        `Rating: TREMENDOUS\n\n` +
        `Make Terminals Great Again! 🦅`;

      const blob = new Blob([content], { type: "text/plain" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `trump-terminal-${Date.now()}.txt`;
      a.click();
      window.URL.revokeObjectURL(url);

      setTimeout(closeModal, 1000);
    }, 1000);
  },
};

// Handle input
inputField.addEventListener("keydown", async function (e) {
  if (e.key === "Enter") {
    const inputValue = this.value || "";
    const command = inputValue.trim().toLowerCase();
    this.value = "";
    this.disabled = true;

    // Add command to content
    const commandLine = document.createElement("div");
    commandLine.className = "line";
    commandLine.innerHTML = `<span class="prompt">&gt;</span> ${command}`;
    content.insertBefore(commandLine, document.querySelector(".input-line"));

    try {
      let responseText = "";

      // Process command
      if (!command) {
        responseText =
          "Please enter a command. Try 'help' for a list of commands.";
      } else if (SPECIAL_COMMANDS[command]) {
        responseText = SPECIAL_COMMANDS[command].handler();
      } else if (command.includes("social")) {
        responseText = `Follow us on:\nTwitter: ${socialLinks.twitter}\nTelegram: ${socialLinks.telegram}\nDiscord: ${socialLinks.discord}`;
      } else if (command.includes("twitter")) {
        responseText = `Follow the movement on Twitter: ${socialLinks.twitter}`;
      } else if (commands[command]) {
        responseText = commands[command];
      } else {
        responseText =
          "I don't understand that command. Try 'help' for a list of commands.";
      }

      // Add response to content
      const responseLine = document.createElement("div");
      responseLine.className = "line";
      await typeWriter(responseLine, responseText);
      content.insertBefore(responseLine, document.querySelector(".input-line"));

      // Add buttons
      const buttonDiv = document.createElement("div");
      buttonDiv.className = "line button-line";
      const escapedResponse = responseText.replace(/[\\"']/g, "\\$&");
      buttonDiv.innerHTML = `
                        <button onclick="SHARE_FUNCTIONS.twitter(\`${escapedResponse}\`)">
                            🐦 Tweet
                        </button>
                        <button onclick="SHARE_FUNCTIONS.truth(\`${escapedResponse}\`)">
                            📱 Truth
                        </button>
                        <button onclick="SHARE_FUNCTIONS.save()">
                            💾 Save
                        </button>
                    `;
      content.insertBefore(buttonDiv, document.querySelector(".input-line"));
    } catch (error) {
      console.error("Error processing response:", error);
      const errorLine = document.createElement("div");
      errorLine.className = "line error";
      errorLine.textContent =
        "An error occurred while processing your command.";
      content.insertBefore(errorLine, document.querySelector(".input-line"));
    } finally {
      this.disabled = false;
      this.focus();
    }
  }
});

// ... existing code ...

// Update the button creation in the event listener
function createShareButtons(responseText) {
  const buttonDiv = document.createElement("div");
  buttonDiv.className = "line button-line";

  // Escape the response text to prevent XSS and quote issues
  const escapedResponse = responseText
    .replace(/[\\]/g, "\\\\")
    .replace(/[\"]/g, '\\"')
    .replace(/[\']/g, "\\'");

  buttonDiv.innerHTML = `
                <button onclick="SHARE_FUNCTIONS.twitter(\`${escapedResponse}\`)">
                    🐦 Share on Twitter
                </button>
                <button onclick="SHARE_FUNCTIONS.truth(\`${escapedResponse}\`)">
                    📱 Share on Truth
                </button>
                <button onclick="SHARE_FUNCTIONS.save()">
                    💾 Save Transcript
                </button>
            `;

  return buttonDiv;
}

// Then in your event listener, use it like this:
cleanInputField.addEventListener("keypress", async function (e) {
  if (e.key === "Enter" && this.value.trim()) {
    // ... existing input handling ...

    let responseText = "";
    try {
      responseText = generateResponse(inputValue);

      // Create response line
      const responseLine = document.createElement("div");
      responseLine.className = "line";
      content.insertBefore(responseLine, document.querySelector(".input-line"));

      await typeWriter(responseLine, `> ${responseText}`);

      // Add share buttons only if we have a valid response
      if (responseText) {
        const buttonDiv = createShareButtons(responseText);
        content.insertBefore(buttonDiv, document.querySelector(".input-line"));
      }
    } catch (error) {
      console.error("Error processing response:", error);
      responseText =
        "Even my errors are tremendous! But we'll fix it, believe me!";
    }

    // ... rest of your code ...
  }
});
