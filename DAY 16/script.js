document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    const resultContainer = document.getElementById("result-container");
    const loadingState = document.getElementById("loading-state");
    const errorState = document.getElementById("error-state");
    const errorMsg = document.getElementById("error-msg");

    const wordTitle = document.getElementById("word-title");
    const phoneticText = document.getElementById("phonetic-text");
    const audioBtn = document.getElementById("audio-btn");
    const meaningsFeed = document.getElementById("meanings-feed");
    const wordPills = document.querySelectorAll(".word-pill");

    let currentAudioUrl = null;
    let currentWord = "";

    // Curated offline dictionary dataset for instant loading & network fallback
    const offlineDictionary = {
        serendipity: {
            word: "serendipity",
            phonetic: "/ˌsɛr.ənˈdɪp.ɪ.ti/",
            meanings: [
                {
                    partOfSpeech: "noun",
                    definitions: [
                        {
                            definition: "The occurrence and development of events by chance in a happy or beneficial way.",
                            example: "A fortunate stroke of serendipity brought the two collaborators together on the project."
                        }
                    ],
                    synonyms: ["fluke", "fortune", "providence", "happy coincidence"]
                }
            ]
        },
        ephemeral: {
            word: "ephemeral",
            phonetic: "/ɪˈfɛm.ər.əl/",
            meanings: [
                {
                    partOfSpeech: "adjective",
                    definitions: [
                        {
                            definition: "Lasting for a very short period of time; fleeting or transitory.",
                            example: "The beauty of a cherry blossom bloom is breathtaking yet ephemeral."
                        }
                    ],
                    synonyms: ["transient", "fleeting", "momentary", "short-lived"]
                }
            ]
        },
        resilience: {
            word: "resilience",
            phonetic: "/rɪˈzɪl.jəns/",
            meanings: [
                {
                    partOfSpeech: "noun",
                    definitions: [
                        {
                            definition: "The capacity to recover quickly from difficulties, adversity, or change; mental toughness.",
                            example: "Her remarkable resilience helped the team overcome countless obstacles."
                        }
                    ],
                    synonyms: ["tenacity", "fortitude", "perseverance", "strength"]
                }
            ]
        },
        eloquent: {
            word: "eloquent",
            phonetic: "/ˈɛl.ə.kwənt/",
            meanings: [
                {
                    partOfSpeech: "adjective",
                    definitions: [
                        {
                            definition: "Fluent, persuasive, and beautifully expressive in speaking or writing.",
                            example: "He delivered an eloquent keynote that moved the entire audience."
                        }
                    ],
                    synonyms: ["articulate", "persuasive", "expressive", "fluent"]
                }
            ]
        },
        solitude: {
            word: "solitude",
            phonetic: "/ˈsɒl.ɪ.tjuːd/",
            meanings: [
                {
                    partOfSpeech: "noun",
                    definitions: [
                        {
                            definition: "The state of being alone, especially in a peaceful, restful, or pleasant environment.",
                            example: "She retreated to the mountains in search of quiet creative solitude."
                        }
                    ],
                    synonyms: ["seclusion", "peace", "privacy", "tranquility"]
                }
            ]
        }
    };

    async function searchWord(word) {
        const query = (word || searchInput.value).trim().toLowerCase();
        if (!query) return;

        searchInput.value = query;
        currentWord = query;

        // UI States
        resultContainer.style.display = "none";
        errorState.style.display = "none";
        loadingState.style.display = "flex";

        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(query)}`);

            if (!response.ok) {
                // If API fails, check offline dictionary
                if (offlineDictionary[query]) {
                    displayResult(offlineDictionary[query]);
                    return;
                }
                throw new Error(`Word "${query}" not found in dictionary.`);
            }

            const data = await response.json();
            displayResult(data[0]);
        } catch (err) {
            loadingState.style.display = "none";
            errorState.style.display = "flex";
            errorMsg.textContent = `No definitions found for "${query}". Try searching another word or pick one from the explore list.`;
        }
    }

    function displayResult(wordData) {
        loadingState.style.display = "none";
        errorState.style.display = "none";
        resultContainer.style.display = "flex";

        // Word Title & Phonetics
        wordTitle.textContent = wordData.word;

        // Find Phonetic Text
        const phonetic = wordData.phonetic || (wordData.phonetics && wordData.phonetics.find(p => p.text)?.text) || "";
        phoneticText.textContent = phonetic ? phonetic : "";
        phoneticText.style.display = phonetic ? "inline-block" : "none";

        // Find Audio Recording
        const audioObj = wordData.phonetics?.find(p => p.audio && p.audio.trim().length > 0);
        currentAudioUrl = audioObj ? audioObj.audio : null;

        // Render Meanings Feed
        meaningsFeed.innerHTML = "";

        if (wordData.meanings && wordData.meanings.length > 0) {
            wordData.meanings.forEach((meaning) => {
                const block = document.createElement("div");
                block.className = "meaning-block";

                let defsHTML = "";
                meaning.definitions.slice(0, 3).forEach((def) => {
                    defsHTML += `
                        <li class="def-item">
                            <span class="def-text">${def.definition}</span>
                            ${def.example ? `<span class="def-example">"${def.example}"</span>` : ""}
                        </li>
                    `;
                });

                let synsHTML = "";
                if (meaning.synonyms && meaning.synonyms.length > 0) {
                    const synChips = meaning.synonyms.slice(0, 5).map(syn => `<button class="syn-chip" type="button">${syn}</button>`).join("");
                    synsHTML = `
                        <div class="synonyms-container">
                            <span class="syn-label">Synonyms:</span>
                            ${synChips}
                        </div>
                    `;
                }

                block.innerHTML = `
                    <div class="pos-header">
                        <span class="pos-badge">${meaning.partOfSpeech}</span>
                        <div class="pos-line"></div>
                    </div>
                    <ul class="definitions-list">
                        ${defsHTML}
                    </ul>
                    ${synsHTML}
                `;

                meaningsFeed.appendChild(block);
            });
        }
    }

    // Audio Pronunciation Player (Native recording or SpeechSynthesis fallback)
    audioBtn.addEventListener("click", () => {
        if (!currentWord) return;

        audioBtn.classList.add("playing");
        setTimeout(() => audioBtn.classList.remove("playing"), 1200);

        if (currentAudioUrl) {
            const audio = new Audio(currentAudioUrl);
            audio.play().catch(() => playSpeechSynthesis(currentWord));
        } else {
            playSpeechSynthesis(currentWord);
        }
    });

    function playSpeechSynthesis(text) {
        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = "en-US";
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
        }
    }

    // Event Listeners
    searchBtn.addEventListener("click", () => searchWord());

    searchInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            searchWord();
        }
    });

    // Quick Pick Word Pills
    wordPills.forEach((pill) => {
        pill.addEventListener("click", () => {
            const word = pill.dataset.word;
            searchWord(word);
        });
    });

    // Delegate Click for Synonyms Chips
    meaningsFeed.addEventListener("click", (e) => {
        if (e.target.classList.contains("syn-chip")) {
            const word = e.target.textContent;
            searchWord(word);
        }
    });

    // Initialize with default word
    searchWord("serendipity");
});
