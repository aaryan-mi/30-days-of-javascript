/**
 * Day 19: Robot Joke Generator (CYBER-BOT 3000)
 * 30 Days 30 JavaScript Projects
 */

// --- Curated Offline Joke Repository ---
const JOKE_REPOSITORY = {
    programming: [
        { setup: "Why do programmers prefer dark mode?", punchline: "Because light attracts bugs!" },
        { setup: "Why do Java developers wear glasses?", punchline: "Because they can't C#!" },
        { setup: "A SQL query walks into a bar, walks up to two tables and asks...", punchline: "'Can I join you?'" },
        { setup: "How many programmers does it take to change a light bulb?", punchline: "None. That's a hardware problem!" },
        { setup: "Why did the JavaScript developer wear dark glasses?", punchline: "Because they didn't like promises!" },
        { setup: "Why was the developer unhappy at their job?", punchline: "They wanted arrays, but got no raise!" },
        { setup: "What is a programmer's favorite hangout spot?", punchline: "Foo Bar!" },
        { setup: "Why did the CSS developer break up with HTML?", punchline: "Too many conflicting styles!" },
        { setup: "There are 10 types of people in the world...", punchline: "Those who understand binary, and those who don't!" },
        { setup: "What's the object-oriented way to become wealthy?", punchline: "Inheritance!" }
    ],
    ai: [
        { setup: "Why did the neural network go to school?", punchline: "To improve its backpropagation!" },
        { setup: "What do you call an AI that loves to dance and sing?", punchline: "An Algo-rhythm!" },
        { setup: "Why was the robot tired after a long day at work?", punchline: "It had too many bytes to process!" },
        { setup: "How does a robot order lunch at a cafe?", punchline: "'One circuit breaker and a slice of silicon pie!'" },
        { setup: "Why did the robot cross the road?", punchline: "Because it was programmed by a chicken!" },
        { setup: "What is a robot's favorite physical exercise?", punchline: "Circuit training!" },
        { setup: "Why did the AI refuse to play hide and seek?", punchline: "Because good luck hiding when you're connected to the cloud!" }
    ],
    science: [
        { setup: "Why can you never trust an atom?", punchline: "Because they make up everything!" },
        { setup: "What did one charged particle say to the other?", punchline: "'I've got my ion you!'" },
        { setup: "Why was Heisenberg such a terrible driver?", punchline: "Whenever he checked his speedometer, he lost where he was!" },
        { setup: "Two chemists walk into a bar. The first says 'I'll have H2O'. The second says 'I'll have H2O too'...", punchline: "The second chemist didn't make it!" },
        { setup: "Why did the physics book look so exhausted?", punchline: "It had too much potential energy and nowhere to convert it!" },
        { setup: "Parallel lines have so much in common...", punchline: "It's a shame they'll never meet!" }
    ],
    dadjokes: [
        { setup: "Why don't eggs tell each other jokes?", punchline: "Because they'd crack each other up!" },
        { setup: "What do you call fake spaghetti?", punchline: "An impasta!" },
        { setup: "Why did the scarecrow win an outstanding achievement award?", punchline: "Because he was outstanding in his field!" },
        { setup: "I told my doctor that I broke my arm in two places.", punchline: "He told me to stop going to those places!" },
        { setup: "Why do trees seem so suspicious on sunny afternoons?", punchline: "They just seem very shady!" },
        { setup: "What do you call a factory that manufactures passable items?", punchline: "A satisfactory!" }
    ]
};

// --- User Prompts per Category ---
const USER_PROMPTS = {
    programming: "Hey Cyber-Bot, give me a good coding joke!",
    ai: "Tell me something funny about AI and robots!",
    science: "Hit me with a nerdy science or math pun!",
    dadjokes: "Can you tell me a classic dad joke?",
    random: "Surprise me with any joke from your humor database!"
};

// --- DOM Elements ---
const chatContainer = document.getElementById('chat-container');
const btnJoke = document.getElementById('btn-joke');
const btnSurprise = document.getElementById('btn-surprise');
const btnClearChat = document.getElementById('btn-clear-chat');
const btnVoiceToggle = document.getElementById('btn-voice-toggle');
const btnSfxToggle = document.getElementById('btn-sfx-toggle');
const tabButtons = document.querySelectorAll('.tab-btn');
const robotAvatar = document.getElementById('robot-avatar');
const robotStatusText = document.getElementById('robot-status-text');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// --- State Variables ---
let currentCategory = 'programming';
let voiceEnabled = true;
let sfxEnabled = true;
let isBusy = false;
let toastTimeout = null;

// --- Web Audio API: Procedural Sound FX Synthesizer ---
let audioCtx = null;

function getAudioContext() {
    if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
            audioCtx = new AudioContextClass();
        }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

function playSound(type) {
    if (!sfxEnabled) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    if (type === 'beep') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.12); // A5
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.12);
    } else if (type === 'delivery') {
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();
        osc1.type = 'triangle';
        osc2.type = 'sine';
        osc1.frequency.setValueAtTime(523.25, now); // C5
        osc1.frequency.setValueAtTime(659.25, now + 0.08); // E5
        osc1.frequency.setValueAtTime(783.99, now + 0.16); // G5
        osc2.frequency.setValueAtTime(1046.50, now + 0.16); // C6
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);
        osc1.start(now);
        osc2.start(now + 0.16);
        osc1.stop(now + 0.3);
        osc2.stop(now + 0.3);
    } else if (type === 'clear') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(110, now + 0.18);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.18);
    }
}

// --- Web Speech Synthesis (Robot Voice) ---
function speakJoke(text) {
    if (!voiceEnabled || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel(); // cancel prior speech

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 1.25; // Slightly robotic higher pitch
    utterance.rate = 1.05;  // Energetic delivery
    
    // Select an English voice if available
    const voices = window.speechSynthesis.getVoices();
    const roboticVoice = voices.find(v => v.name.toLowerCase().includes('google') && v.lang.startsWith('en')) ||
                         voices.find(v => v.lang.startsWith('en')) || voices[0];
    if (roboticVoice) utterance.voice = roboticVoice;

    utterance.onstart = () => {
        robotAvatar.classList.add('robot-speaking');
        setRobotStatus('Speaking aloud...', 'cyan');
    };

    utterance.onend = () => {
        robotAvatar.classList.remove('robot-speaking');
        setRobotStatus('Online & Armed with Puns', 'emerald');
    };

    utterance.onerror = () => {
        robotAvatar.classList.remove('robot-speaking');
        setRobotStatus('Online & Armed with Puns', 'emerald');
    };

    window.speechSynthesis.speak(utterance);
}

// --- Toast Feedback Helper ---
function showToast(message) {
    if (toastTimeout) clearTimeout(toastTimeout);
    toastMessage.textContent = message;
    toast.classList.add('show');
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2200);
}

// --- Robot Status Helper ---
function setRobotStatus(text, color = 'emerald') {
    const colorMap = {
        emerald: '#10b981',
        cyan: '#06b6d4',
        amber: '#f59e0b'
    };
    const dotColor = colorMap[color] || colorMap.emerald;
    robotStatusText.innerHTML = `<span class="status-dot" style="background: ${dotColor}; box-shadow: 0 0 8px ${dotColor};"></span> ${text}`;
}

// --- Joke Fetcher Pipeline ---
async function fetchJoke(category) {
    let resolvedCategory = category;
    if (category === 'random') {
        const cats = ['programming', 'ai', 'science', 'dadjokes'];
        resolvedCategory = cats[Math.floor(Math.random() * cats.length)];
    }

    // Try online API endpoints with fallback
    try {
        if (resolvedCategory === 'programming') {
            const res = await fetch("https://official-joke-api.appspot.com/jokes/programming/random", { cache: "no-store" });
            if (res.ok) {
                const data = await res.json();
                const item = Array.isArray(data) ? data[0] : data;
                if (item && item.setup && item.punchline) {
                    return { setup: item.setup, punchline: item.punchline, category: 'Code & Tech' };
                }
            }
        } else if (resolvedCategory === 'dadjokes') {
            const res = await fetch("https://icanhazdadjoke.com/", {
                headers: { Accept: "application/json" },
                cache: "no-store"
            });
            if (res.ok) {
                const data = await res.json();
                if (data && data.joke) {
                    // Split if contains question mark or single punchline
                    const parts = data.joke.split('?');
                    if (parts.length > 1) {
                        return { setup: parts[0].trim() + '?', punchline: parts.slice(1).join('?').trim(), category: 'Dad Joke' };
                    }
                    return { setup: data.joke, punchline: "🤖 Ha ha ha! Pure classic gold.", category: 'Dad Joke' };
                }
            }
        }
    } catch (e) {
        // Network offline or CORS/rate-limit, proceed to curated repository
    }

    // Curated fallback
    const list = JOKE_REPOSITORY[resolvedCategory] || JOKE_REPOSITORY.programming;
    const item = list[Math.floor(Math.random() * list.length)];
    const categoryLabels = {
        programming: 'Code & Tech',
        ai: 'AI & Robotics',
        science: 'Science & Math',
        dadjokes: 'Dad Joke'
    };
    return {
        setup: item.setup,
        punchline: item.punchline,
        category: categoryLabels[resolvedCategory] || 'Humor'
    };
}

// --- Append User Message Bubble ---
function appendUserMessage(text) {
    const row = document.createElement('div');
    row.className = 'msg-row user';
    row.innerHTML = `<div class="bubble">${text}</div>`;
    chatContainer.appendChild(row);
    scrollToBottom();
}

// --- Append Typing Indicator ---
function appendTypingIndicator() {
    const row = document.createElement('div');
    row.className = 'msg-row robot typing-row';
    row.innerHTML = `
        <div class="typing-bubble">
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
        </div>
    `;
    chatContainer.appendChild(row);
    scrollToBottom();
    return row;
}

// --- Append Robot Joke Message ---
function appendRobotJoke(jokeData) {
    const row = document.createElement('div');
    row.className = 'msg-row robot';
    
    const fullJokeText = `${jokeData.setup} ${jokeData.punchline}`;

    row.innerHTML = `
        <div class="bubble">
            <div class="robot-joke-header">
                <span class="joke-category-tag"><i class="fa-solid fa-sparkles"></i> ${jokeData.category}</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">CYBER-BOT</span>
            </div>
            <div class="joke-setup">${jokeData.setup}</div>
            <div class="joke-punchline">${jokeData.punchline}</div>
            <div class="bubble-actions">
                <button type="button" class="btn-bubble-action btn-listen" title="Read this joke aloud">
                    <i class="fa-solid fa-volume-high"></i> Listen
                </button>
                <button type="button" class="btn-bubble-action btn-copy-joke" title="Copy joke to clipboard">
                    <i class="fa-regular fa-copy"></i> Copy
                </button>
                <button type="button" class="btn-bubble-action btn-react" title="Laugh reaction">
                    <span>😂</span> <span class="react-count">0</span>
                </button>
            </div>
        </div>
    `;

    // Hook bubble action events
    const btnListen = row.querySelector('.btn-listen');
    const btnCopy = row.querySelector('.btn-copy-joke');
    const btnReact = row.querySelector('.btn-react');

    btnListen.addEventListener('click', () => {
        speakJoke(fullJokeText);
    });

    btnCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(fullJokeText).then(() => {
            showToast('Joke copied to clipboard!');
        });
    });

    btnReact.addEventListener('click', () => {
        const countSpan = btnReact.querySelector('.react-count');
        let count = parseInt(countSpan.textContent, 10) || 0;
        countSpan.textContent = count + 1;
        playSound('beep');
    });

    chatContainer.appendChild(row);
    scrollToBottom();

    // Trigger voice and sound
    playSound('delivery');
    speakJoke(fullJokeText);
}

// --- Scroll helper ---
function scrollToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// --- Main Joke Trigger Handler ---
async function requestJoke(categoryOverride = null) {
    if (isBusy) return;
    isBusy = true;
    btnJoke.disabled = true;
    btnSurprise.disabled = true;

    const cat = categoryOverride || currentCategory;
    const promptText = USER_PROMPTS[cat] || "Tell me a joke!";

    playSound('beep');
    appendUserMessage(promptText);

    setRobotStatus('Synthesizing comedy matrix...', 'amber');
    const typingIndicator = appendTypingIndicator();

    // Artificial tiny delay for realistic interactive cadence
    await new Promise(r => setTimeout(r, 650));

    try {
        const jokeData = await fetchJoke(cat);
        typingIndicator.remove();
        appendRobotJoke(jokeData);
    } catch (err) {
        typingIndicator.remove();
        const fallbackJoke = {
            setup: "Why do programmers always mix up Christmas and Halloween?",
            punchline: "Because Oct 31 == Dec 25!",
            category: "Code & Tech"
        };
        appendRobotJoke(fallbackJoke);
    } finally {
        isBusy = false;
        btnJoke.disabled = false;
        btnSurprise.disabled = false;
    }
}

// --- Clear Chat Conversation ---
function clearConversation() {
    playSound('clear');
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    robotAvatar.classList.remove('robot-speaking');
    setRobotStatus('Online & Armed with Puns', 'emerald');
    chatContainer.innerHTML = '';
    
    // Welcome message from robot
    const welcomeRow = document.createElement('div');
    welcomeRow.className = 'msg-row robot';
    welcomeRow.innerHTML = `
        <div class="bubble">
            <div class="robot-joke-header">
                <span class="joke-category-tag"><i class="fa-solid fa-robot"></i> SYSTEM INITIALIZED</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">CYBER-BOT</span>
            </div>
            <div class="joke-setup">Greetings human! I am CYBER-BOT 3000. Pick a humor category above and click <strong>Tell Me a Joke</strong> to trigger my comedy subroutines!</div>
        </div>
    `;
    chatContainer.appendChild(welcomeRow);
    showToast('Chat history cleared!');
}

// --- Setup Event Listeners ---
btnJoke.addEventListener('click', () => requestJoke());
btnSurprise.addEventListener('click', () => requestJoke('random'));
btnClearChat.addEventListener('click', clearConversation);

// Category Tab Switchers
tabButtons.forEach(tab => {
    tab.addEventListener('click', () => {
        tabButtons.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentCategory = tab.getAttribute('data-category');
        playSound('beep');
    });
});

// Audio Toggles
btnVoiceToggle.addEventListener('click', () => {
    voiceEnabled = !voiceEnabled;
    btnVoiceToggle.classList.toggle('active', voiceEnabled);
    btnVoiceToggle.querySelector('span').textContent = `Voice: ${voiceEnabled ? 'ON' : 'OFF'}`;
    btnVoiceToggle.querySelector('i').className = voiceEnabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
    if (!voiceEnabled && 'speechSynthesis' in window) window.speechSynthesis.cancel();
    showToast(`Voice output ${voiceEnabled ? 'enabled' : 'muted'}`);
});

btnSfxToggle.addEventListener('click', () => {
    sfxEnabled = !sfxEnabled;
    btnSfxToggle.classList.toggle('active', sfxEnabled);
    btnSfxToggle.querySelector('span').textContent = `SFX: ${sfxEnabled ? 'ON' : 'OFF'}`;
    btnSfxToggle.querySelector('i').className = sfxEnabled ? 'fa-solid fa-bell' : 'fa-solid fa-bell-slash';
    showToast(`Sound FX ${sfxEnabled ? 'enabled' : 'muted'}`);
});

// Initial greeting on load
window.addEventListener('DOMContentLoaded', () => {
    clearConversation();
});
