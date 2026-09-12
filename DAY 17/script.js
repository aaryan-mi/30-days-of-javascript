/**
 * Day 17: Random Paragraph Generator
 * 30 Days 30 JavaScript Projects
 */

// --- Thematic Paragraph Repository ---
const PARAGRAPH_DATABASE = {
    space: [
        "In the tranquil expanse of the interstellar medium, stellar nurseries collapse under the steady pull of gravity, giving birth to protostellar cores that will illuminate the galaxy for billions of years. Cosmic dust lanes weave intricate filaments through glowing emission nebulae, acting as astronomical crucibles where heavy elements forged in ancient supernovae seed future planetary systems.",
        "Gravitational lensing acts as nature's most powerful cosmic telescope, bending the trajectory of primordial light around supermassive black holes and galaxy clusters. As photons traverse spacetime curves deformed by immense mass, astronomers glimpse the earliest epochs of the cosmos, observing infant galaxies formed mere hundreds of millions of years after the Big Bang.",
        "Beyond the frost line of distant planetary systems, gas giants orchestrate complex orbital dances, shepherding rings of icy debris and capturing swarms of resonant moons. Subsurface oceans on celestial bodies like Europa and Enceladus harbor hydrothermal vents fueled by tidal friction, providing potential habitats insulated beneath miles of ancient ice.",
        "The cosmic microwave background radiation serves as an indelible thermal relic of the universe's infancy, capturing the precise moment when plasma cooled into neutral hydrogen and photons first traveled freely through space. Microscopic temperature fluctuations embedded within this faint glow map the initial density ripples that blossomed into the cosmic web.",
        "Neutron stars spin with millisecond precision, generating colossal magnetic fields that channel beams of energetic synchrotron radiation across the cosmos. These extreme remnants compress more mass than our sun into a sphere no larger than a city, testing the absolute frontiers of nuclear physics and general relativity.",
        "Exoplanetary atmospheres offer tantalizing clues in the search for extraterrestrial biosignatures. By measuring atmospheric transmission spectra as alien worlds transit their host stars, high-resolution spectrometers detect molecular fingerprints of water vapor, methane, and ozone across light-years of void."
    ],
    tech: [
        "Modern distributed systems rely on consensus protocols to maintain state consistency across heterogeneous nodes facing unpredictable network partitions. Through Byzantine fault tolerance and asynchronous message passing, decentralized networks achieve resilient synchronization without depending on a single vulnerable point of failure.",
        "Neural representation learning transforms raw unstructured data into high-dimensional geometric embeddings where semantic relationships emerge organically. Deep transformer architectures leverage multi-head self-attention mechanisms to dynamically capture long-range contextual dependencies across complex multimodal datasets.",
        "Quantum computing leverages the principles of superposition and entanglement to explore vast combinatorial state spaces simultaneously. By utilizing coherent qubits maintained at millikelvin temperatures, quantum algorithms demonstrate theoretical speedups for integer factorization, molecular simulation, and complex optimization problems.",
        "Edge computing architectures decentralize computational workloads, processing data in close proximity to physical sensors and embedded devices. This paradigm dramatically reduces end-to-end latency, optimizes network bandwidth utilization, and enhances data sovereignty in intelligent real-time applications.",
        "Zero-knowledge cryptographic proofs allow one party to mathematically prove the veracity of an assertion without disclosing any underlying secret information. This cryptographic primitive underpins modern verifiable computation, secure electronic voting systems, and privacy-preserving blockchain architectures.",
        "Modern continuous integration and deployment pipelines automate the path from code commit to containerized production workloads. Integrated automated testing, static code analysis, and canary rollouts ensure rapid iteration cycles while safeguarding platform stability and fault containment."
    ],
    nature: [
        "Beneath the forest floor lies the mycorrhizal network, a sprawling underground fungal web connecting trees and plants in a subterranean cooperative ecosystem. Through these microscopic hyphae, old-growth mother trees allocate carbon, nitrogen, and biochemical defense signals to nourish struggling saplings and warn neighbors of impending pest threats.",
        "In the twilight zone of oceanic trenches, organisms utilize specialized bioluminescent photophores to camouflage against downwelling sunlight, communicate with conspecifics, and lure unsuspecting prey. Enzymes like luciferase catalyze chemical reactions that produce vibrant blue-green luminescence, turning the abyss into a living constellation of light.",
        "Montane cloud forests sustain an astonishing concentration of biodiversity within narrow altitudinal bands. Moisture-laden trade winds condense upon lush canopies of epiphytes, mosses, and ferns, creating a microclimate that captures atmospheric mist and feeds pristine mountain watersheds.",
        "Mangrove ecosystems act as dynamic coastal buffers, their tangled prop roots stabilizing shifting intertidal sediments while dissipating destructive storm surge energy. These salt-tolerant marine forests serve as critical nurseries for juvenile reef fish and function as exceptionally dense blue carbon sinks.",
        "Geothermal hot springs host thermophilic extremophiles whose specialized heat-tolerant enzymes thrive at boiling temperatures and extreme pH levels. These ancient microbial mats showcase metabolic pathways that mirror early Earth environments, demonstrating life's tenacity in extreme terrestrial habitats.",
        "Arctic tundra landscapes undergo rapid seasonal transformations during brief polar summers. As the permafrost active layer thaws, specialized perennial flora rush through rapid flowering cycles, supporting vast migratory avian populations before the return of polar night."
    ],
    philosophy: [
        "The phenomenology of consciousness remains one of humanity's most profound enigmas: why should physical electrochemical transactions across synaptic gaps produce the rich, qualitative textures of subjective experience? Bridging this explanatory gap requires examining the intimate relationship between physical brain states and inner mental life.",
        "Stoic philosophy teaches that true equanimity arises from discerning between what is within our volitional control and what is governed by external circumstance. By cultivating internal virtue, cognitive clarity, and acceptance of cosmic flux, the practicing mind maintains tranquil resilience amid inevitable external vicissitudes.",
        "Epistemological skepticism challenges the foundations of human certainty, questioning whether sensory perceptions provide an unmediated conduit to external reality. From Descartes' radical doubt to contemporary simulation hypotheses, philosophical inquiry continually probes the boundaries between empirical perception and fundamental truth.",
        "The thermodynamic arrow of time dictates that entropy increases steadily across closed systems, creating an irreversible forward trajectory from order to disorder. Yet within this macroscopic progression, human memory, history, and foresight construct meaningful cognitive bridges across the temporal continuum.",
        "Ethics in an interconnected society necessitates balancing individual autonomy with collective well-being. Utilitarian calculations of aggregate happiness constantly interface with deontological moral imperatives, challenging philosophers to formulate frameworks capable of resolving multifaceted dilemmas.",
        "Existentialist thought posits that existence precedes essence; human beings arrive into an indifferent cosmos without predetermined purpose, bearing the profound freedom and responsibility to construct personal meaning through deliberate authentic action."
    ],
    lorem: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.",
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."
    ]
};

// --- DOM Elements ---
const countInput = document.getElementById('count-input');
const btnDecrement = document.getElementById('btn-decrement');
const btnIncrement = document.getElementById('btn-increment');
const topicSelect = document.getElementById('topic-select');
const formatSelect = document.getElementById('format-select');
const pillButtons = document.querySelectorAll('.pill-btn');
const btnGenerate = document.getElementById('btn-generate');
const btnCopyAll = document.getElementById('btn-copy-all');
const btnClear = document.getElementById('btn-clear');
const metricsBar = document.getElementById('metrics-bar');
const emptyState = document.getElementById('empty-state');
const paragraphsList = document.getElementById('paragraphs-list');
const statParagraphs = document.getElementById('stat-paragraphs');
const statWords = document.getElementById('stat-words');
const statChars = document.getElementById('stat-chars');
const statReadTime = document.getElementById('stat-read-time');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// Current generated text storage for easy global copying
let currentGeneratedParagraphs = [];
let toastTimeout = null;

// --- Helper: Shuffle Array (Fisher-Yates) ---
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// --- Category Display Names & Icons ---
const CATEGORY_META = {
    space: { name: 'Deep Space & Cosmos', icon: 'fa-planet-ringed' },
    tech: { name: 'Technology & AI', icon: 'fa-microchip' },
    nature: { name: 'Nature & Ecology', icon: 'fa-leaf' },
    philosophy: { name: 'Philosophy & Mind', icon: 'fa-brain' },
    lorem: { name: 'Latin Lorem Ipsum', icon: 'fa-scroll' }
};

// --- Helper: Get Pool for Selected Topic ---
function getParagraphPool(selectedCategory) {
    if (selectedCategory === 'all') {
        const pooled = [];
        Object.keys(PARAGRAPH_DATABASE).forEach(cat => {
            PARAGRAPH_DATABASE[cat].forEach(p => pooled.push({ text: p, category: cat }));
        });
        return pooled;
    }
    
    const list = PARAGRAPH_DATABASE[selectedCategory] || PARAGRAPH_DATABASE.lorem;
    return list.map(p => ({ text: p, category: selectedCategory }));
}

// --- Toast Notification ---
function showToast(message, isSuccess = true) {
    if (toastTimeout) clearTimeout(toastTimeout);
    
    toastMessage.textContent = message;
    const icon = toast.querySelector('i');
    if (isSuccess) {
        icon.className = 'fa-solid fa-circle-check';
        icon.style.color = 'var(--accent-emerald)';
        toast.style.borderColor = 'var(--accent-emerald)';
    } else {
        icon.className = 'fa-solid fa-circle-exclamation';
        icon.style.color = 'var(--accent-rose)';
        toast.style.borderColor = 'var(--accent-rose)';
    }

    toast.classList.add('show');
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// --- Format Paragraph Text ---
function formatParagraph(text, format) {
    switch (format) {
        case 'html':
            return `<p>${text}</p>`;
        case 'markdown':
            return `${text}\n\n`;
        case 'plain':
        default:
            return text;
    }
}

// --- Metrics Calculator ---
function updateMetrics(paragraphs) {
    if (!paragraphs || paragraphs.length === 0) {
        statParagraphs.textContent = '0';
        statWords.textContent = '0';
        statChars.textContent = '0';
        statReadTime.textContent = '0 min';
        return;
    }

    const totalParagraphs = paragraphs.length;
    const combinedText = paragraphs.map(p => p.rawText).join(' ');
    const totalChars = combinedText.length;
    
    // Count words accurately
    const wordsArray = combinedText.trim().split(/\s+/).filter(w => w.length > 0);
    const totalWords = wordsArray.length;

    // Estimated reading time (average 200 words per minute)
    const readMinutes = Math.max(1, Math.round(totalWords / 200));

    statParagraphs.textContent = totalParagraphs;
    statWords.textContent = totalWords.toLocaleString();
    statChars.textContent = totalChars.toLocaleString();
    statReadTime.textContent = `${readMinutes} min`;
}

// --- Core Generation Handler ---
function generateParagraphs() {
    let count = parseInt(countInput.value, 10);
    if (isNaN(count) || count < 1) count = 1;
    if (count > 10) count = 10;
    countInput.value = count;
    syncPillState(count);

    const topic = topicSelect.value;
    const format = formatSelect.value;
    const pool = getParagraphPool(topic);
    
    // Shuffle pool
    const shuffledPool = shuffleArray(pool);
    const selected = [];

    for (let i = 0; i < count; i++) {
        const item = shuffledPool[i % shuffledPool.length];
        selected.push({
            id: i + 1,
            category: item.category,
            rawText: item.text,
            formattedText: formatParagraph(item.text, format)
        });
    }

    currentGeneratedParagraphs = selected;
    renderParagraphs(selected, format);
    updateMetrics(selected);
}

// --- Render Output ---
function renderParagraphs(paragraphs, format) {
    if (paragraphs.length === 0) {
        emptyState.style.display = 'flex';
        paragraphsList.innerHTML = '';
        return;
    }

    emptyState.style.display = 'none';
    paragraphsList.innerHTML = '';

    paragraphs.forEach((p, idx) => {
        const card = document.createElement('article');
        card.className = 'paragraph-card';
        card.style.animationDelay = `${idx * 0.05}s`;

        const wordsCount = p.rawText.trim().split(/\s+/).filter(w => w.length > 0).length;
        const charsCount = p.rawText.length;
        const meta = CATEGORY_META[p.category] || { name: 'Custom', icon: 'fa-font' };

        const isCodeFormat = format === 'html' || format === 'markdown';

        card.innerHTML = `
            <div class="card-top">
                <span class="card-badge">
                    <i class="fa-solid ${meta.icon}"></i> Paragraph ${p.id} &bull; ${meta.name}
                </span>
                <div class="card-actions">
                    <span class="card-stats">${wordsCount} words &bull; ${charsCount} chars</span>
                    <button type="button" class="btn-card-copy" data-index="${idx}" title="Copy this paragraph">
                        <i class="fa-regular fa-copy"></i> Copy
                    </button>
                </div>
            </div>
            <div class="paragraph-content ${isCodeFormat ? 'format-code' : ''}">${escapeHtmlIfNeeded(p.formattedText, isCodeFormat)}</div>
        `;

        paragraphsList.appendChild(card);
    });

    // Add individual copy listeners
    document.querySelectorAll('.btn-card-copy').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.getAttribute('data-index'), 10);
            const targetPara = currentGeneratedParagraphs[index];
            if (targetPara) {
                navigator.clipboard.writeText(targetPara.formattedText).then(() => {
                    const originalBtnContent = btn.innerHTML;
                    btn.classList.add('copied');
                    btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied';
                    showToast(`Paragraph ${targetPara.id} copied to clipboard!`);
                    setTimeout(() => {
                        btn.classList.remove('copied');
                        btn.innerHTML = originalBtnContent;
                    }, 2000);
                }).catch(() => {
                    showToast('Failed to copy to clipboard', false);
                });
            }
        });
    });
}

// --- Escape HTML for Code rendering preview ---
function escapeHtmlIfNeeded(text, isCodeFormat) {
    if (!isCodeFormat) return text;
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

// --- Copy All Handler ---
function copyAllParagraphs() {
    if (!currentGeneratedParagraphs || currentGeneratedParagraphs.length === 0) {
        showToast('Generate some paragraphs first!', false);
        return;
    }

    const format = formatSelect.value;
    let textToCopy = '';

    if (format === 'html') {
        textToCopy = currentGeneratedParagraphs.map(p => p.formattedText).join('\n');
    } else if (format === 'markdown') {
        textToCopy = currentGeneratedParagraphs.map(p => p.formattedText).join('\n');
    } else {
        textToCopy = currentGeneratedParagraphs.map(p => p.formattedText).join('\n\n');
    }

    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalBtnHtml = btnCopyAll.innerHTML;
        btnCopyAll.innerHTML = '<i class="fa-solid fa-check"></i> Copied All!';
        btnCopyAll.style.background = '#10b981';
        btnCopyAll.style.borderColor = '#10b981';
        showToast(`All ${currentGeneratedParagraphs.length} paragraphs copied to clipboard!`);

        setTimeout(() => {
            btnCopyAll.innerHTML = originalBtnHtml;
            btnCopyAll.style.background = '';
            btnCopyAll.style.borderColor = '';
        }, 2200);
    }).catch(() => {
        showToast('Failed to copy to clipboard', false);
    });
}

// --- Clear Handler ---
function clearAll() {
    currentGeneratedParagraphs = [];
    emptyState.style.display = 'flex';
    paragraphsList.innerHTML = '';
    updateMetrics([]);
    showToast('Cleared all paragraphs');
}

// --- Sync Pill Buttons ---
function syncPillState(count) {
    pillButtons.forEach(btn => {
        const pillVal = parseInt(btn.getAttribute('data-count'), 10);
        if (pillVal === count) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// --- Event Listeners ---
btnDecrement.addEventListener('click', () => {
    let current = parseInt(countInput.value, 10) || 1;
    if (current > 1) {
        countInput.value = current - 1;
        syncPillState(current - 1);
    }
});

btnIncrement.addEventListener('click', () => {
    let current = parseInt(countInput.value, 10) || 1;
    if (current < 10) {
        countInput.value = current + 1;
        syncPillState(current + 1);
    }
});

countInput.addEventListener('change', () => {
    let val = parseInt(countInput.value, 10);
    if (isNaN(val) || val < 1) val = 1;
    if (val > 10) val = 10;
    countInput.value = val;
    syncPillState(val);
});

pillButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const count = parseInt(btn.getAttribute('data-count'), 10);
        countInput.value = count;
        syncPillState(count);
        generateParagraphs();
    });
});

topicSelect.addEventListener('change', generateParagraphs);
formatSelect.addEventListener('change', generateParagraphs);
btnGenerate.addEventListener('click', generateParagraphs);
btnCopyAll.addEventListener('click', copyAllParagraphs);
btnClear.addEventListener('click', clearAll);

// --- Initialize on Page Load ---
window.addEventListener('DOMContentLoaded', () => {
    generateParagraphs();
});
