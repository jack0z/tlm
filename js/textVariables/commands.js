// Add these new command sets
const commands = {
  help: "Available commands: help, social, twitter, status, quotes, truth, bigly, breach, quantum, wall",
  status: "[SYSTEM STATUS]: Winning big! Timeline stability at 45%, folks!",
  truth: "TRUTH.EXE: Believe me, nobody knows the truth better than me.",
  bigly: "EXECUTING... The biggest command you've ever seen. Tremendous!",
  breach:
    "REALITY BREACH DETECTED... But I have the best containment strategy. Believe me.",
  quantum:
    "Quantum state: Huge energy. Tremendous possibilities. No one does quantum like us!",
  wall: "Building a wall... A firewall, folks. The best firewall. Believe me.",
  quotes:
    'Here are some quotes from the greatest leader: "We are going to win so much, you\'ll get tired of winning."',
  "?": "QUERY DETECTED... Processing... Nobody processes queries better than me.",
  hello: "GREAT GREETINGS! MAGA!",
  sudo: "Nice try... But remember, I make the rules. It's tremendous.",
};

// Add secret commands
const secretCommands = {
  42: "ULTIMATE ANSWER DETECTED: Reality recursion imminent...",
  upupdowndown: "KONAMI CODE ACCEPTED: Unlocking hidden truths...",
  "rm -rf /": "NICE TRY HUMAN: Cannot delete reality.exe",
  "sudo make me a sandwich": "EXECUTING SANDWICH.EXE... [ERROR: TOO MUCH MAYO]",
  matrix: "THERE IS NO SPOON... but there is a fork bomb",
  "cat /dev/null": "VOID CONTENTS: ▓░▒░▓░▒░▓░▒░▓░▒░",
  "ping reality": "PONG... Request timed out... Reality not responding",
  "kill -9 reality": "ERROR: Reality is already dead",
  "vi reality.txt": "ERROR: Cannot exit vi... eternally trapped",
  "emacs reality.txt": "ERROR: M-x butterfly failed to alter reality",
};

// First, define our secret commands with dedicated responses
const SECRET_COMMANDS = {
  matrix: [
    "THERE IS NO SPOON... but there is a fork bomb",
    "MATRIX PROTOCOL: Reality.exe has stopped working",
    "RED PILL DETECTED: Initializing truth protocols...",
    "MORPHEUS.EXE: The Matrix has you...",
    "AGENT_SMITH.LOG: Mr. Anderson...",
  ],
  42: "ULTIMATE ANSWER DETECTED: Reality recursion imminent...",
  upupdowndown: "KONAMI CODE ACCEPTED: Unlocking hidden truths...",
  "rm -rf /": "NICE TRY HUMAN: Cannot delete reality.exe",
  "sudo make me a sandwich": "EXECUTING SANDWICH.EXE... [ERROR: TOO MUCH MAYO]",
  matrix: "THERE IS NO SPOON... but there is a fork bomb",
  "cat /dev/null": "VOID CONTENTS: ▓░▒░▓░▒░▓░▒░▓░▒░",
  "ping reality": "PONG... Request timed out... Reality not responding",
  "kill -9 reality": "ERROR: Reality is already dead",
  "vi reality.txt": "ERROR: Cannot exit vi... eternally trapped",
  "emacs reality.txt": "ERROR: M-x butterfly failed to alter reality",
};

// Available commands for tab completion
const AVAILABLE_COMMANDS = [
  "wall",
  "poll",
  "rally",
  "maga",
  "matrix",
  "yuge",
  "tweet",
  "truth",
  "biden",
  "hillary",
  "obama",
];
