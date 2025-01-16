// Default responses
export const DEFAULT_RESPONSES = [
    "Nobody knows terminals better than me, believe me.",
    "We're going to make programming great again!",
    "This is the best terminal ever built, maybe ever.",
    "The code just got 10 lines longer!",
    "We're going to win so much at coding, you'll get tired of winning.",
    "I know words, I have the best words. Also the best code.",
    "I will build a great firewall - and nobody builds firewalls better than me.",
    "My code is not just good, it's tremendous. Everyone says so.",
    "This terminal is going to be huge. HUGE!",
    "We need programmers, but they have to come in legally.",
    "I'm really rich in algorithms.",
    "I have a very good brain and I've written lots of great code.",
    "My terminal is running, and it's running very well.",
    "I'm the most successful person ever to run a terminal.",
    "I write the best code. Nobody writes better code than me.",
    "We have the best servers, don't we folks? The very best.",
    "Our bandwidth is through the roof. Nobody has bandwidth like us.",
    "We're going to debug like you wouldn't believe.",
    "The terminal just got 10 commands longer!",
    "People call me all the time, they say 'Sir, your terminal is amazing'",
    "Look at our uptime. It's tremendous. The most beautiful uptime.",
    "Our code coverage is huge. It's the biggest coverage maybe ever.",
    "We're going to make programming great again, and the bugs will pay for it!",
    "Nobody knew programming could be so complicated.",
    "I know tech, I have the best tech. Everyone says so.",
    "This is the most advanced terminal ever built, maybe ever.",
    "We have the best developers, they're tremendous developers.",
    "Our algorithms are running, and they're running beautifully.",
    "The other terminals are a disaster. Total disaster.",
    "We're going to win at computing like never before."
];

// Special commands
export const SPECIAL_COMMANDS = {
    'help': {
        description: "Show available commands",
        handler: () => "🎮 TRUMP TERMINAL COMMANDS:\n\n" +
                      "help - Show this message\n" +
                      "clear - Clear the terminal\n" +
                      "maga - Make America Great Again!\n" +
                      "covfefe - ???\n" +
                      "And many more secret commands... Try to find them all!"
    },
    'clear': {
        description: "Clear the terminal",
        handler: () => {
            document.querySelectorAll('.line:not(.input-line)').forEach(line => line.remove());
            return "Terminal cleared! Making terminals clean again! 🧹";
        }
    },
    'dark': {
        description: "Toggle dark mode",
        handler: () => "Night mode? We only have BRIGHT mode!"
    }
};

// Secret commands
export const SECRET_COMMANDS = {
    'covfefe': "Despite the constant negative press covfefe...",
    'bigly': "We're winning bigly, folks! Nobody wins more bigly than us!",
    'maga': [
        "🇺🇸 MAKE\n🦅 AMERICA\n🗽 GREAT\n⭐ AGAIN!\n🎆 KEEP\n🎊 AMERICA\n🎉 GREAT\n🌟 ALWAYS!",
        "MAGA! MAGA! The greatest movement in history!",
        "Making everything great again, one tweet at a time!"
    ],
    'wall': "We're building a wall, and it will be beautiful!",
    'fake news': "FAKE NEWS Media is the enemy of the American People!",
    'sleepy joe': "Sleepy Joe doesn't know what hit him! Sad!",
    'rigged': "RIGGED AND STOLEN! But we caught them, folks!",
    'witch hunt': "The greatest witch hunt in American history! Sad!"
};

// Response patterns
export const RESPONSE_PATTERNS = {
    weak: [
        "Weak? I have tremendous strength!",
        "The only weak thing is our border security!",
        "Nobody's stronger than Trump, nobody!",
        "Weakness is not an option with Trump!"
    ],
    crazy: [
        "Crazy? I'm a very stable genius!",
        "The only crazy thing is the witch hunt!",
        "They said my ideas were crazy - until they worked!",
        "Crazy like a fox, that's what they say!",
        "The radical left? Now that's crazy!"
    ],
    fake: [
        "FAKE NEWS! The most dishonest media ever!",
        "So fake, so phony, you wouldn't believe it!",
        "The fake news media is the enemy of the people!",
        "They're reporting fake news again, folks!"
    ],
    great: [
        "We're making everything great again!",
        "Nobody does great like we do, believe me!",
        "The greatest achievement in history, maybe ever!",
        "We have great people, the best people!"
    ],
    win: [
        "We're winning like nobody's ever won before!",
        "So much winning, you'll get tired of winning!",
        "We win at everything we do, it's what we do!",
        "Nobody wins better than us, nobody!"
    ],
    bad: [
        "Bad? Wrong! We're doing tremendously well!",
        "The only bad thing is the witch hunt!",
        "They say it's bad, but look at the numbers!",
        "Bad for them maybe, great for America!"
    ],
    fail: [
        "Fail? I don't know that word, I only know success!",
        "The only failure is the fake news media!",
        "They tried to make us fail, but we're winning bigly!",
        "Failure is not an option with Trump!"
    ],
    sad: [
        "Sad? We're the happiest movement ever!",
        "The only sad thing is the deep state! Sad!",
        "They're sad because we keep winning!",
        "Sad for them, great for us! MAGA!"
    ],
    huge: [
        "HUGE! Nobody does huge better than me!",
        "The most huge thing you've ever seen!",
        "We're talking huge here, folks. HUGE!",
        "Bigger than huge, it's tremendous!"
    ],
    beautiful: [
        "The most beautiful thing you've ever seen!",
        "We build beautiful things, don't we folks?",
        "Nobody builds more beautiful things than me!",
        "It's going to be beautiful, believe me!"
    ],
    smart: [
        "I'm like a smart person, very smart!",
        "I have a very good brain, the best brain!",
        "My IQ is one of the highest!",
        "Nobody's smarter when it comes to terminal technology!"
    ],
    tremendous: [
        "The most tremendous success in history!",
        "We do tremendous things, nobody does it better!",
        "Tremendous achievements, tremendous success!",
        "Everything we do is tremendous, believe me!"
    ],
    perfect: [
        "Perfect like my phone call! Totally perfect!",
        "Nobody does perfect like we do, nobody!",
        "The most perfect thing you've ever seen!",
        "As perfect as our great American flag!"
    ],
    incredible: [
        "The most incredible thing, maybe ever!",
        "We do incredible things, don't we folks?",
        "Nobody does incredible like we do!",
        "Incredibly successful, incredibly perfect!"
    ],
    leader: [
        "Nobody leads better than me, nobody!",
        "I'm the greatest leader in history, maybe ever!",
        "They say I'm the best leader they've ever seen!",
        "Leadership is what I do, and I do it better than anyone!"
    ],
    success: [
        "We have nothing but success, total success!",
        "Nobody's more successful than me, believe me!",
        "Success is what we do, it's all we know!",
        "The most successful administration ever!"
    ],
    enemy: [
        "The enemy of the people! Totally corrupt!",
        "They're not sending their best, folks!",
        "Bad people, very bad people. We'll stop them!",
        "The real enemy is the fake news media!"
    ],
    witch: [
        "The greatest witch hunt in American history!",
        "No president has ever been treated worse!",
        "Total witch hunt, folks! Totally rigged!",
        "They're coming after us because we're winning!"
    ],
    deep: [
        "The deep state is trembling, folks!",
        "We're draining the swamp like never before!",
        "The deep state doesn't know what hit them!",
        "Nobody fights the deep state better than me!"
    ],
    rigged: [
        "It's all rigged, folks! Totally rigged!",
        "The most rigged system in history!",
        "They tried to rig it, but we caught them!",
        "Rigged and corrupt, but we're winning anyway!"
    ],
    genius: [
        "I'm a very stable genius, believe me!",
        "My uncle was a great professor at MIT!",
        "I have a very, very large brain!",
        "I understand technology better than anyone!"
    ],
    rich: [
        "I'm really rich, I'll tell you that!",
        "We're making America rich again!",
        "Nobody knows money better than Trump!",
        "We have the best economy, the very best!"
    ],
    strong: [
        "Nobody's stronger than me, nobody!",
        "We're showing tremendous strength!",
        "America is stronger than ever before!",
        "Strength is what we do best, believe me!"
    ],
    best: [
        "We have the best people, don't we folks?",
        "Nobody does it better than us, nobody!",
        "The best in history, maybe ever!",
        "We only hire the best, believe me!"
    ],
    tough: [
        "I'm the toughest president ever, maybe!",
        "Nobody's tougher on our enemies than me!",
        "We're being very tough, very strong!",
        "You have to be tough, and I'm the toughest!"
    ],
    deal: [
        "I make the best deals, nobody makes better deals!",
        "The art of the deal, folks! That's what we do!",
        "We're making deals like never before!",
        "Nobody knows deals better than Trump!"
    ],
    drain: [
        "We're draining the swamp like never before!",
        "The swamp is getting nervous, very nervous!",
        "Nobody drains the swamp better than me!",
        "Watch the swamp creatures scatter!"
    ],
    america: [
        "America First! Always America First!",
        "Making America Great Again, and greater than ever before!",
        "Nobody loves America more than me!",
        "America is winning again, winning like never before!"
    ]
};

// Emoji sets
export const TRUMP_EMOJIS = {
    happy: ['👱🇸', '👍', '🦅', '💪'],
    angry: ['😠', '💢', '🤬', '👊'],
    maga: ['🇺🇸', '🦅', '🎆', '🗽'],
    winning: ['🏆', '📈', '💯', '🥇'],
    wall: ['🧱', '🏗️', '🚧', '💪'],
    default: ['🇺🇸', '🦅', '💪', '👍']
};

// Social links
export const SOCIAL_LINKS = {
    twitter: "@TrumpModelT",
    telegram: "t.me/terminal_of_truths",
    discord: "discord.gg/truth-terminal",
    github: "github.com/truth-terminal"
};

// Response generator function
export function generateResponse(input) {
    // Debug logs
    console.log('Input received:', input);
    
    // Clean input and convert to lowercase
    const cleanInput = input.toLowerCase().trim();
    console.log('Cleaned input:', cleanInput);
    
    // Direct match for "yuge"
    if (cleanInput === 'yuge') {
        const yugeResponses = [
            "It's going to be YUGE!",
            "The biggest, the yugest, nobody's ever seen anything like it!",
            "Yuge success, yuge victory!",
            "Everything we do is yuge!",
            "The Democrats hate the word yuge because they're small!"
        ];
        return yugeResponses[Math.floor(Math.random() * yugeResponses.length)];
    }

    // Check other response patterns
    if (WORD_RESPONSE_PATTERNS[cleanInput]) {  // Updated to use imported patterns
        console.log('Found pattern match for:', cleanInput);
        return WORD_RESPONSE_PATTERNS[cleanInput][Math.floor(Math.random() * WORD_RESPONSE_PATTERNS[cleanInput].length)];
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
            "ERROR 1776: Independence buffer overflow"
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
        "The deep state tried to hack us 78 times. We stopped them cold!"
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Response patterns for common words
export const WORD_RESPONSE_PATTERNS = {
    // Questions
    "what": [
        "Nobody knows what better than me, believe me!",
        "What? That's fake news! Here's what really happened...",
        "I'll tell you what - it's going to be tremendous!",
        "What? Let me tell you, nobody understands this better.",
        "What a beautiful question, really beautiful."
    ],
    "who": [
        "Who? Probably the radical left, they're behind everything!",
        "I know who, and they're not sending their best people.",
        "Who? I know all the best whos, tremendous whos!",
        "Who? The deep state, that's who! Sad!",
        "Who else? The fake news media, folks!"
    ],

    // Profanity & Insults (with Trump-style deflection)
    "shit": [
        "Watch your language, folks! We have the best words!",
        "That's what they're saying about Sleepy Joe!",
        "Such nasty words. We don't need those words, we're winning!",
        "That's what the fake news media prints, terrible!",
        "We're keeping it classy, unlike the radical left!"
    ],
    "fuck": [
        "Such nasty language! Not presidential at all!",
        "Hey, hey, keep it civil like your favorite President!",
        "That's the kind of talk we hear from the socialists!",
        "Watch those words, we're making discourse great again!",
        "That's what they all said when I won in 2016! Surprise!"
    ],
    "asshole": [
        "Very nasty word! Very nasty! We're better than that!",
        "That's what they called me before I made America great!",
        "Such a nasty word, must be a Democrat!",
        "Hey, I've been called worse by better people!",
        "That's not very presidential language, folks!"
    ],
    "bitch": [
        "We don't use that word, it's not presidential!",
        "Such nasty language! Must be from California!",
        "That's what they called my beautiful healthcare plan!",
        "Watch your language, this is a family presidency!",
        "That's what they say about Hillary - but I never said it!"
    ],
    "moron": [
        "Actually, I'm a very stable genius!",
        "My IQ is one of the highest, and you know it!",
        "That's what they said before I became your favorite President!",
        "Moron? I went to Wharton, very good school!",
        "The only morons are in the fake news media!"
    ],

    // Political Terms
    "democrat": [
        "Democrats? Total disaster. Complete disaster!",
        "The radical left Democrats want to destroy everything!",
        "Democrats don't know how to win - I'll teach them!",
        "They're not sending their best, folks!",
        "Socialist Democrats want to take your freedom!"
    ],
    "republican": [
        "Republicans love me, and I love them!",
        "We have the best Republicans, don't we folks?",
        "The Republican Party is the party of common sense!",
        "We're the party of Abraham Lincoln, did you know that?",
        "Republicans know how to win, they learned from me!"
    ],
    "election": [
        "We won that election. By a lot!",
        "The most secure election in history - after we fixed it!",
        "Nobody knows elections better than me!",
        "We're going to have a beautiful election, believe me!",
        "The radical left wants to rig it, but we won't let them!"
    ],

    // Modern Topics
    "covid": [
        "It'll disappear, like a miracle!",
        "We did a tremendous job with COVID, tremendous!",
        "Nobody knows more about COVID than me!",
        "We have the best vaccines, beautiful vaccines!",
        "It'll be gone by Easter, you'll see!"
    ],
    "vaccine": [
        "Operation Warp Speed - fastest vaccines ever!",
        "They said it couldn't be done, we did it!",
        "Beautiful vaccines, perfect vaccines!",
        "I took the vaccine, it's great, but your choice!",
        "Nobody knows vaccines better than me!"
    ],
    "crypto": [
        "Bitcoin? Not a fan, but some smart people like it!",
        "Crypto is interesting, very interesting stuff!",
        "The dollar is better, much better!",
        "Many people say Trump should make his own crypto!",
        "We're looking at crypto very strongly!"
    ],
    "metaverse": [
        "Zuckerberg's metaverse? Total disaster!",
        "Virtual reality? I prefer real reality!",
        "Truth Social is better than any metaverse!",
        "They want you in the matrix, folks!",
        "Real estate is better than virtual estate!"
    ],

    // Personal Style
    "suit": [
        "I wear the finest suits, the best suits!",
        "Made in America, should all be made in America!",
        "Better suits than Sleepy Joe, that's for sure!",
        "My suits are famous, very famous!",
        "The best tailors love Trump!"
    ],
    "tie": [
        "My ties are the best, made in China unfortunately!",
        "Long ties are power ties, very powerful!",
        "The fake news hates my ties, but they're beautiful!",
        "Trump ties were huge, sold tremendously!",
        "Nobody wears ties better than me!"
    ],
    "makeup": [
        "It's the lighting, always the lighting!",
        "Fake news talks about makeup, never policies!",
        "I look better than all of them, naturally!",
        "The cameras make everything orange!",
        "Who needs makeup when you have great genes?"
    ],

    // Family Members
    "melania": [
        "Most beautiful First Lady ever, ever!",
        "She's doing a tremendous job, just tremendous!",
        "Speaks many languages, very smart!",
        "The fake news is very unfair to Melania!",
        "She loves America, America loves her!"
    ],
    "ivanka": [
        "Ivanka is incredible, just incredible!",
        "If she wasn't my daughter, perhaps I'd be dating her!",
        "She has her father's brain, very smart!",
        "Nobody works harder than Ivanka!",
        "The best daughter, everybody loves her!"
    ],
    "barron": [
        "Barron is great with computers, unbelievable!",
        "He's very tall, taller than me now!",
        "The cyber? He knows everything about cyber!",
        "Going to be a very handsome young man!",
        "Gets his brains from his father!"
    ],

    // Campaign Slogans
    "maga": [
        "Make America Great Again! Greatest slogan ever!",
        "Everybody's saying MAGA, all over the world!",
        "The Democrats hate MAGA because it works!",
        "MAGA is a movement like nobody's ever seen!",
        "We're making America greater than ever before!"
    ],
    "winning": [
        "We're going to win so much, you'll get tired of winning!",
        "All we do is win, win, win!",
        "Nobody wins like Trump, nobody!",
        "Winning is easy with Trump!",
        "The art of winning - I wrote the book on it!"
    ],
    "drain": [
        "Drain the Swamp! The swamp hates that!",
        "The swamp is deep, but we're draining it!",
        "Washington insiders hate this phrase!",
        "Nobody drains swamps better than me!",
        "The swamp is fighting back, but we're winning!"
    ],

    // Famous Quotes
    "covfefe": [
        "Only true patriots understand covfefe!",
        "The fake news still doesn't get covfefe!",
        "Covfefe - a word only winners understand!",
        "Many people are saying covfefe is genius!",
        "I meant to say covfefe, and I did!"
    ],
    "bigly": [
        "We're winning bigly, so bigly!",
        "Everything Trump does is bigly!",
        "The fake news hates bigly, but it's a real word!",
        "Nobody does things more bigly than me!",
        "Bigly is a beautiful word, a Trump word!"
    ],

    // International Relations
    "putin": [
        "Putin? Great guy, very strong leader, the strongest!",
        "Nobody's tougher on Russia than me, nobody!",
        "We had a beautiful conversation, perfect really!",
        "He said he didn't do it. I believe him, why wouldn't I?",
        "The Democrats are much worse than Putin, believe me!"
    ],
    "kim": [
        "Kim Jong Un? We fell in love! Beautiful letters!",
        "Rocket Man? No, no - we're friends now, very good friends!",
        "He likes me, I like him. What's wrong with that?",
        "Nobody else could've done what I did with North Korea!",
        "We have a very special relationship, very special!"
    ],

    // Technology & Social Media
    "facebook": [
        "Zuckerberg used to love me, now he's weak!",
        "Facebook's a disaster, totally biased!",
        "They're trying to silence us, but we're too strong!",
        "Remember when Facebook was fair? I do!",
        "Truth Social is much better, much more fair!"
    ],
    "google": [
        "Google is rigged against us, totally rigged!",
        "They manipulate their algorithms, very bad!",
        "Google shows only fake news about me!",
        "Even Google can't hide our success!",
        "We're looking into Google, very strongly!"
    ],

    // Entertainment & Media
    "television": [
        "The Apprentice - highest rated show ever!",
        "Nobody gets better ratings than Trump!",
        "TV was better when I was on it, much better!",
        "The networks beg me to come back, true story!",
        "I made NBC great, now look at them!"
    ],

    // More Political Figures
    "biden": [
        "Sleepy Joe doesn't know where he is!",
        "I call him 1% Joe, that's all he got until the fix!",
        "The most corrupt president ever, and I know corruption!",
        "He can't put two sentences together, sad!",
        "Nobody respects Biden, nobody!"
    ],
    "pelosi": [
        "Crazy Nancy, that's what I call her!",
        "She's a disaster for this country, total disaster!",
        "The most overrated politician ever!",
        "Nobody takes her seriously anymore!",
        "San Francisco is a mess, look what she did!"
    ],
    "aoc": [
        "AOC? Doesn't understand anything about anything!",
        "She's all talk, no action, just like socialism!",
        "Green New Deal? More like Green New Scam!",
        "She wouldn't last one day in business!",
        "Nobody takes her seriously in New York!"
    ],

    // More Colorful Responses
    "stupid": [
        "I'm, like, really smart. A genius actually!",
        "The only stupid thing is the fake news media!",
        "Stupid is what I call the Democrat's policies!",
        "My IQ is one of the highest, and you know it!",
        "The doctors said they've never seen such intelligence!"
    ],
    "liar": [
        "The real liars are in the fake news media!",
        "Nobody's more honest than Trump!",
        "I tell it like it is, that's why they hate me!",
        "Lying? I wrote the book on truth-telling!",
        "The only lies come from the Deep State!"
    ],
    "corrupt": [
        "The most corrupt are the ones calling others corrupt!",
        "Want to see corruption? Look at the Biden family!",
        "I'm the least corrupt person ever!",
        "They tried to find corruption, found nothing!",
        "Perfect calls, perfect everything!"
    ],

    // Social Issues
    "immigration": [
        "We need a wall, and Mexico will pay for it!",
        "They're not sending their best!",
        "Nobody's tougher on illegal immigration than me!",
        "Legal immigration only, folks!",
        "The border was perfect until Sleepy Joe!"
    ],
    "healthcare": [
        "Nobody knew healthcare could be so complicated!",
        "We'll have a beautiful healthcare plan, just beautiful!",
        "Obamacare is a disaster, we'll replace it with something better!",
        "Two weeks, we'll show you in two weeks!",
        "The best healthcare plan ever, believe me!"
    ],
    "guns": [
        "Second Amendment? Nobody protects it better!",
        "The radical left wants to take your guns!",
        "We have the best gun owners, don't we folks?",
        "Nobody respects the Second Amendment more than me!",
        "They're coming for your guns, but we won't let them!"
    ],

    // Science & Technology
    "internet": [
        "Nobody knows the cyber better than me!",
        "We have to close up the internet, and I mean close it!",
        "The internet loves Trump, tremendous support!",
        "Bill Gates called me about the internet, true story!",
        "We're making the internet great again!"
    ],
    "ai": [
        "AI loves me, all the algorithms love Trump!",
        "Nobody knows artificial intelligence better than me!",
        "ChatGPT? I could write better responses, believe me!",
        "The robots, they tell me I'm their favorite president!",
        "We have the best AI, nobody has better AI than us!"
    ],
    "space": [
        "Space Force! My idea, totally my idea!",
        "Mars? We're going there, believe me!",
        "Nobody knows more about space than me!",
        "The aliens love Trump, they tell me all the time!",
        "NASA? They work for me now, doing a fantastic job!"
    ],

    // Famous Landmarks
    "whitehouse": [
        "I made the White House beautiful again!",
        "Much nicer than Mar-a-Lago, but not by much!",
        "The best house, everybody wants to live there!",
        "I know every inch, nobody knows it better!",
        "They say it's haunted, but the ghosts love Trump!"
    ],
    "manhattan": [
        "I built the best buildings in Manhattan!",
        "Nobody knows Manhattan like Trump!",
        "They love me in Manhattan, everybody loves me there!",
        "I made Manhattan what it is today!",
        "Beautiful place, but not as beautiful as Trump Tower!"
    ],
    "hollywood": [
        "Hollywood? Total disaster now!",
        "They used to love Trump in Hollywood!",
        "The Walk of Fame? I have the best star!",
        "Hollywood is scared of Trump, believe me!",
        "They don't make movies like they used to!"
    ],

    // More Countries
    "britain": [
        "Great Britain? Not so great anymore!",
        "They love Trump in Britain, huge crowds!",
        "The Queen loved me, we had chemistry!",
        "Brexit? I predicted it, nobody else did!",
        "Make Britain Great Again, that's what they're saying!"
    ],
    "france": [
        "Macron? Nice guy, but needs to toughen up!",
        "They're not handling their borders, big problem!",
        "Paris isn't Paris anymore, sad!",
        "The French love Trump, they really do!",
        "Nobody knows France better than me!"
    ],
    "germany": [
        "Germany? They're not paying their NATO bills!",
        "Merkel? She actually liked me, believe it!",
        "They're totally controlled by Russia's energy!",
        "Great people, terrible leaders!",
        "My father was German, great genes!"
    ],

    // More Personal Achievements
    "business": [
        "I built a great company, the greatest!",
        "Nobody knows business like Trump!",
        "The Art of the Deal - best business book ever!",
        "I made billions, starting with a small loan!",
        "Business is easy when you're really smart!"
    ],
    "success": [
        "I'm the most successful president ever!",
        "Nobody's more successful than Trump!",
        "Success is easy when you have a good brain!",
        "I've been successful at everything, everything!",
        "The haters can't handle my success!"
    ],
    "ratings": [
        "Highest ratings in history, believe me!",
        "Nobody gets ratings like Trump!",
        "The ratings are through the roof!",
        "Even the fake news can't deny my ratings!",
        "Tremendous ratings, the best ratings!"
    ],

    // Food & Restaurants
    "food": [
        "I love fast food, the cleanest food there is!",
        "Nobody knows food like Trump, believe me!",
        "McDonald's, Burger King, KFC - all the best!",
        "The White House has the best food, tremendous food!",
        "I know all the best restaurants, they love Trump!"
    ],
    "mcdonalds": [
        "Great American company, tremendous burgers!",
        "Big Macs are beautiful things, I love them!",
        "They keep everything so clean, so perfect!",
        "The best fast food, maybe ever!",
        "I bought thousands for the White House, remember?"
    ],
    "diet": [
        "I have incredible genes, the best genes!",
        "Look at me, I'm in perfect health!",
        "The doctors can't believe how healthy I am!",
        "I eat what I want and I'm still in great shape!",
        "My health is better than Sleepy Joe's, believe me!"
    ],

    // Sports & Athletics
    "football": [
        "The NFL loves Trump, they just can't say it!",
        "Remember when football was tough? Those were the days!",
        "They're ruining football with all these rules!",
        "Tom Brady? Great guy, total winner like Trump!",
        "The Super Bowl was better when I was president!"
    ],
    "baseball": [
        "America's game, beautiful game!",
        "I could've been a pro baseball player, you know!",
        "They say I was the best baseball player in New York!",
        "Baseball was better before the woke crowd ruined it!",
        "I throw the best first pitch, perfect form!"
    ],
    "golf": [
        "I have the best golf courses, tremendous courses!",
        "Nobody plays golf better than Trump!",
        "I beat all the pros, they can't believe it!",
        "My golf game is beautiful, just beautiful!",
        "I won so many club championships, so many!"
    ],

    // Education & Universities
    "school": [
        "I went to the best schools, the very best!",
        "Wharton School of Finance, very prestigious!",
        "They don't teach like they used to, sad!",
        "Schools need more Trump, less critical race theory!",
        "I love the poorly educated, and the highly educated!"
    ],
    "university": [
        "Trump University was beautiful, just beautiful!",
        "We had the best teachers, tremendous success!",
        "Harvard? Overrated. Wharton is much better!",
        "Universities are too liberal now, total disaster!",
        "I could teach better than any professor!"
    ],

    // Military & Veterans
    "military": [
        "Nobody's stronger on military than Trump!",
        "We built the strongest military in history!",
        "The generals love Trump, believe me!",
        "Space Force - my idea, totally my idea!",
        "We have the best weapons, nobody has better weapons!"
    ],
    "veterans": [
        "Nobody loves our vets more than Trump!",
        "I fixed the VA, nobody else could do it!",
        "Our veterans are the best, and I take care of them!",
        "The vets love Trump, they love what I've done!",
        "We're treating our veterans better than ever before!"
    ],

    // Weather & Climate
    "weather": [
        "The weather was perfect until the Green New Deal!",
        "Nobody knows weather better than me!",
        "We have the best weather in Trump properties!",
        "Rain? Fake news! The sun loves Trump!",
        "Perfect weather, just like my presidency!"
    ],
    "climate": [
        "It's called weather, it changes!",
        "What happened to global warming? It's freezing!",
        "China should do more about climate, not us!",
        "The climate loves Trump, believe me!",
        "We have the cleanest air, the cleanest water!"
    ],

    // Transportation & Infrastructure
    "infrastructure": [
        "Nobody builds like Trump, nobody!",
        "We're going to have the best infrastructure week!",
        "The Democrats can't build, they can only destroy!",
        "I build under budget and ahead of schedule!",
        "Infrastructure week is coming, believe me!"
    ],
    "planes": [
        "Trump Force One is better than Air Force One!",
        "I know more about planes than the generals!",
        "Boeing loves me, they all love me!",
        "Nobody flies better planes than Trump!",
        "My planes are the most beautiful planes ever!"
    ],
    "trains": [
        "We're going to have the fastest trains, like China!",
        "High-speed rail? We'll do it better than anyone!",
        "The trains will run on time with Trump!",
        "Nobody knows more about trains than me!",
        "We'll have the best trains, believe me!"
    ],

    // Media & Entertainment
    "news": [
        "FAKE NEWS! The enemy of the people!",
        "Nobody's been treated worse by the press!",
        "The failing New York Times is failing!",
        "CNN? Total disaster, lowest ratings ever!",
        "Fox News? They're not what they used to be!"
    ],
    "twitter": [
        "Twitter's a disaster without Trump!",
        "They can't handle the truth, so they banned me!",
        "Truth Social is much better than Twitter!",
        "Twitter's ratings crashed without me!",
        "They miss me on Twitter, believe me!"
    ],
    "books": [
        "The Art of the Deal - best book ever written!",
        "My books sell better than the Bible!",
        "Nobody writes better books than Trump!",
        "All my books are bestsellers, tremendous sales!",
        "I write the best books, everybody says so!"
    ]
}; 