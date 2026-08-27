/**
 * THE LONELY BROADCAST STATION - AUTHOR & STORYTELLER PLATFORM
 * Core Application Logic, Web Audio API Synthesizer, Store & Monetization Engine
 */

// ==========================================
// 1. DATA REPOSITORIES (Stories, Products, Supporters)
// ==========================================

const TALES_DATA = [
    {
        id: 'tale-1',
        title: 'The Forest Ranger’s Last Transmission',
        type: 'free',
        typeName: 'Free Log',
        runtime: '8 Min Read',
        category: 'free',
        synopsis: 'Deep in the Blackwood Ridge forestry reserve, tower 4 started repeating an emergency broadcast that officially ceased 30 years ago.',
        content: `I’ve been the sole fire lookout in Tower 4 for six consecutive autumns. You get used to the quiet. You get used to the way the pines groan in forty-mile-an-hour gusts, and the way the mountain mist swallows the tree line until you feel like you’re floating above a sea of static.\n\nWhat you don't get used to is a voice cutting into channel 3 at 3:14 in the morning.\n\n"Lookout Four, confirm perimeter. The gate is unlatched."\n\nThe voice was flat, dry, and mechanical. But Channel 3 was decommissioned back in 1994 when the automated sensors were installed. I gripped the plastic mic, my knuckles white against the desk lamp's yellow bulb.\n\n"This is Tower Four. Channel 3 is closed. Identify yourself."\n\nThere was a three-second delay. Just the hiss of high-altitude electrical hum. Then:\n\n"Do not look at the tree line, Thomas. We are already at the base of the ladder."\n\nMy name wasn't listed on any public registry.`
    },
    {
        id: 'tale-2',
        title: 'The Midnight Frequency at Mile 42',
        type: 'audio',
        typeName: 'Audio Drama',
        runtime: '18 Min Audio',
        category: 'audio',
        synopsis: 'A late-night long haul trucker tunes his CB radio into an anomalous frequency broadcasting a live commentary of his own vehicle from the trees.',
        content: `Highway 9 between Nevada and Oregon has a stretch known as the Dead Valley. For eighty miles, your phone loses all signal, GPS turns into a pulsing blue dot in gray emptiness, and the FM radio searches endless static.\n\nAt 2:40 AM, my dashboard receiver clicked twice on its own. A gravelly voice broke through:\n\n"Peter's semi-truck just passed marker 42. Brake lights blinking twice. The passenger seat is no longer empty."\n\nI slammed the brakes so hard the trailer shuddered across the asphalt. I was completely alone in the cab. Or at least... I thought I was.`
    },
    {
        id: 'tale-3',
        title: 'The Lighthouse Keeper Who Heard the Fog',
        type: 'free',
        typeName: 'Free Log',
        runtime: '12 Min Read',
        category: 'free',
        synopsis: 'When a thick yellow sea fog rolled over Deadman’s Reef, the foghorn started answering back with names of the recently deceased.',
        content: `Foghorns do not modulate pitch. They are heavy brass diaphragms tuned to 120 Hertz—a single, monotonous bellow meant to pierce ten nautical miles of Atlantic gloom.\n\nTonight, however, the horn blew twice, paused, and then produced a cadence of human vowels.\n\n"J-A-C-O-B... W-E-L-L-S..."\n\nJacob Wells was the deckhand who drowned off the trawler 'Marigold' three mornings ago. I stood on the iron catwalk, rain stinging my eyes, watching silhouettes move beneath the churning tide.`
    },
    {
        id: 'tale-4',
        title: 'Tales from the Lonely Broadcast Station: Vol. 1',
        type: 'premium',
        typeName: 'Complete Book',
        runtime: '320 Pages / Ebook',
        category: 'premium',
        synopsis: 'The definitive 12-chapter horror anthology chronicling the origins of the midnight radio station and the entities trapped in the airwaves.',
        content: `[FULL NOVELLA SAMPLE]\n\n"You are listening to 94.2 MHz. If you are hearing this broadcast, you are outside past curfew, and the shadows around your car are not caused by the moon."\n\nUnlock the full 320-page novel in the Station Store below with high-res illustrations and author commentary.`
    },
    {
        id: 'tale-5',
        title: 'The Subterranean Voice in the Old Mineshaft',
        type: 'audio',
        typeName: 'Audio Drama',
        runtime: '24 Min Audio',
        category: 'audio',
        synopsis: 'Urban explorers lower an audio field recorder 1,200 feet down an abandoned zinc mine in Appalachia. What it recorded was not human.',
        content: `The acoustic properties of zinc mines are unique. Sound echoes forever. When we dropped our Sennheiser omnidirectional capsule down shaft #7, we expected water droplets and bat flutter.\n\nAt timestamp 14:22, we heard footsteps in synchronized tempo, followed by rhythmic tapping: ... --- ... (SOS), then an inhuman whisper reciting our home street addresses.`
    },
    {
        id: 'tale-6',
        title: 'The Broadcast Station Keeper’s Field Manual',
        type: 'premium',
        typeName: 'Complete Book',
        runtime: '190 Pages / PDF',
        category: 'premium',
        synopsis: 'An analog survival guide filled with procedural lore, frequency codes, maps of anomalous zones, and transcripts of intercepted signals.',
        content: `[FIELD MANUAL EXTRACT]\n\nProtocol 4: If frequency 104.1 emits the sound of running water while the weather is dry, immediately power down the auxiliary generator and lock the iron shutters. Do not answer knocks with three rhythmic taps.`
    }
];

const STORE_PRODUCTS = [
    {
        id: 'prod-ebook-1',
        title: 'Tales from the Lonely Broadcast Station (Vol. 1)',
        category: 'ebook',
        categoryName: 'Digital Ebook',
        price: 9.99,
        originalPrice: 14.99,
        icon: '📖',
        ribbon: 'BESTSELLER',
        desc: 'Complete 320-page horror novel. Includes EPUB, MOBI, and DRM-free PDF formats with dark-mode typography.',
        fileType: 'EPUB / PDF'
    },
    {
        id: 'prod-audio-1',
        title: 'The Forest Ranger Tapes: Uncut Audio Drama',
        category: 'audio',
        categoryName: 'Audio Drama Pack',
        price: 7.99,
        originalPrice: 12.00,
        icon: '🎙️',
        ribbon: 'LOSSLESS WAV',
        desc: '60 minutes of immersive binaural horror audio with full atmospheric rain, vintage radio static, and cinematic sound design.',
        fileType: '48kHz 24-bit WAV & MP3'
    },
    {
        id: 'prod-bundle-1',
        title: 'Ultimate Station Broadcast Archive (Mega Bundle)',
        category: 'bundle',
        categoryName: 'Digital Mega Bundle',
        price: 19.99,
        originalPrice: 45.00,
        icon: '📦',
        ribbon: 'SAVE 55%',
        desc: 'All 3 published novellas + 5 full-length audio drama episodes + The Field Manual PDF + exclusive soundtrack stems.',
        fileType: 'Mega ZIP Download (1.8 GB)'
    },
    {
        id: 'prod-merch-1',
        title: 'Official "Station 94.2 ON AIR" Vintage T-Shirt',
        category: 'merch',
        categoryName: 'Apparel',
        price: 26.00,
        originalPrice: 32.00,
        icon: '👕',
        ribbon: 'PHYSICAL MERCH',
        desc: 'Heavyweight 100% vintage washed cotton featuring distressed retro transceiver schematic graphics. S to 3XL.',
        fileType: 'Physical Delivery'
    },
    {
        id: 'prod-merch-2',
        title: 'Collector’s Limited Edition Analog Cassette Tape',
        category: 'merch',
        categoryName: 'Physical Audio Relic',
        price: 16.50,
        originalPrice: 20.00,
        icon: '📼',
        ribbon: 'LIMITED 200 PCS',
        desc: 'Real magnetic tape cassette containing the lost radio broadcasts, packaged with a blood-stamped field report note.',
        fileType: 'Physical Audio Cassette'
    },
    {
        id: 'prod-ebook-2',
        title: 'The Station Keeper’s Survival Manual',
        category: 'ebook',
        categoryName: 'Digital Guide & Lore',
        price: 6.99,
        originalPrice: 10.00,
        icon: '📜',
        ribbon: 'FAN FAVORITE',
        desc: 'Official 190-page guide with classified government radio intercepts, anomalous creature diagrams, and frequency maps.',
        fileType: 'Printable PDF / Tablet EPUB'
    }
];

const RADIO_FREQUENCIES = [
    { freq: 94.2, title: 'STATION 94.2: "The Midnight Watchman"', tone: 220, noise: 0.15 },
    { freq: 89.4, title: 'FREQ 89.4: "Static in the Pine Trees"', tone: 160, noise: 0.35 },
    { freq: 98.6, title: 'FREQ 98.6: "Appalachian Mining Log #12"', tone: 310, noise: 0.2 },
    { freq: 104.1, title: 'FREQ 104.1: "Emergency Broadcast Test (1988)"', tone: 440, noise: 0.28 },
    { freq: 107.5, title: 'FREQ 107.5: "Ghost Ship Morse Beacon"', tone: 520, noise: 0.45 }
];

let INITIAL_SUPPORTERS = [
    { name: 'NightWatcher_88', amount: 15, note: 'Love the late-night broadcasts from Germany. Keep the station alive!', time: '12 mins ago' },
    { name: 'ForestRangerDave', amount: 5, note: 'Bought a midnight coffee for the narrator. Chills every time.', time: '1 hour ago' },
    { name: 'Sarah M.', amount: 50, note: 'Upgraded your vacuum tubes! Can’t wait for Vol. 2 on audiobook.', time: '3 hours ago' },
    { name: 'AnalogHorrorFan', amount: 3, note: 'Tuned in from the highway at 3am. Brilliant storytelling.', time: '5 hours ago' }
];

// ==========================================
// 2. WEB AUDIO API PROCEDURAL SYNTHESIZER
// ==========================================

class StationAudioEngine {
    constructor() {
        this.ctx = null;
        this.isPlaying = false;
        this.isRainPlaying = false;
        
        // Synth Nodes
        this.osc1 = null;
        this.osc2 = null;
        this.noiseNode = null;
        this.gainNode = null;
        this.filterNode = null;
        this.analyser = null;

        // Rain Synth Nodes
        this.rainGain = null;
        this.rainNoise = null;
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
            this.analyser = this.ctx.createAnalyser();
            this.analyser.fftSize = 64;
        }
    }

    createNoiseBuffer() {
        const bufferSize = this.ctx.sampleRate * 2;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }
        return buffer;
    }

    playRadio(freqHz = 220, noiseLevel = 0.2) {
        this.init();
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        if (this.isPlaying) {
            this.stopRadio();
        }

        // Master Gain
        this.gainNode = this.ctx.createGain();
        this.gainNode.gain.setValueAtTime(0.2, this.ctx.currentTime);

        // Lowpass Radio Filter
        this.filterNode = this.ctx.createBiquadFilter();
        this.filterNode.type = 'bandpass';
        this.filterNode.frequency.setValueAtTime(freqHz * 1.8, this.ctx.currentTime);
        this.filterNode.Q.setValueAtTime(2.5, this.ctx.currentTime);

        // Eerie Drone Oscillator 1 (Sine)
        this.osc1 = this.ctx.createOscillator();
        this.osc1.type = 'sawtooth';
        this.osc1.frequency.setValueAtTime(freqHz / 2, this.ctx.currentTime);

        // Eerie Drone Oscillator 2 (Detuned)
        this.osc2 = this.ctx.createOscillator();
        this.osc2.type = 'sine';
        this.osc2.frequency.setValueAtTime(freqHz * 0.75 + 1.5, this.ctx.currentTime);

        // White Noise Radio Static
        this.noiseNode = this.ctx.createBufferSource();
        this.noiseNode.buffer = this.createNoiseBuffer();
        this.noiseNode.loop = true;

        const noiseGain = this.ctx.createGain();
        noiseGain.gain.setValueAtTime(noiseLevel * 0.35, this.ctx.currentTime);

        // Connections
        this.noiseNode.connect(noiseGain);
        noiseGain.connect(this.filterNode);

        this.osc1.connect(this.filterNode);
        this.osc2.connect(this.filterNode);

        this.filterNode.connect(this.gainNode);
        this.gainNode.connect(this.analyser);
        this.analyser.connect(this.ctx.destination);

        this.osc1.start();
        this.osc2.start();
        this.noiseNode.start();
        this.isPlaying = true;
    }

    stopRadio() {
        if (this.osc1) {
            try { this.osc1.stop(); } catch(e){}
            this.osc1.disconnect();
        }
        if (this.osc2) {
            try { this.osc2.stop(); } catch(e){}
            this.osc2.disconnect();
        }
        if (this.noiseNode) {
            try { this.noiseNode.stop(); } catch(e){}
            this.noiseNode.disconnect();
        }
        this.isPlaying = false;
    }

    toggleRain() {
        this.init();
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        if (this.isRainPlaying) {
            if (this.rainNoise) {
                try { this.rainNoise.stop(); } catch(e){}
                this.rainNoise.disconnect();
            }
            this.isRainPlaying = false;
            return false;
        } else {
            this.rainNoise = this.ctx.createBufferSource();
            this.rainNoise.buffer = this.createNoiseBuffer();
            this.rainNoise.loop = true;

            const rainFilter = this.ctx.createBiquadFilter();
            rainFilter.type = 'lowpass';
            rainFilter.frequency.setValueAtTime(800, this.ctx.currentTime);

            this.rainGain = this.ctx.createGain();
            this.rainGain.gain.setValueAtTime(0.12, this.ctx.currentTime);

            this.rainNoise.connect(rainFilter);
            rainFilter.connect(this.rainGain);
            this.rainGain.connect(this.ctx.destination);

            this.rainNoise.start();
            this.isRainPlaying = true;
            return true;
        }
    }

    playTipChime() {
        this.init();
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
        const chimeOsc = this.ctx.createOscillator();
        const chimeGain = this.ctx.createGain();

        chimeOsc.type = 'sine';
        chimeOsc.frequency.setValueAtTime(880, this.ctx.currentTime);
        chimeOsc.frequency.exponentialRampToValueAtTime(1760, this.ctx.currentTime + 0.3);

        chimeGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
        chimeGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.8);

        chimeOsc.connect(chimeGain);
        chimeGain.connect(this.ctx.destination);

        chimeOsc.start();
        chimeOsc.stop(this.ctx.currentTime + 0.8);
    }
}

const audioStation = new StationAudioEngine();

// ==========================================
// 3. STATE & STORAGE MANAGEMENT
// ==========================================

let cart = JSON.parse(localStorage.getItem('lbs_cart') || '[]');
let appliedDiscount = 0; // percentage
let currentFreqIndex = 0;

function saveCart() {
    localStorage.setItem('lbs_cart', JSON.stringify(cart));
    updateCartUI();
}

// ==========================================
// 4. UI RENDERING FUNCTIONS
// ==========================================

function renderTales(filter = 'all') {
    const container = document.getElementById('tales-container');
    if (!container) return;

    const filtered = filter === 'all' ? TALES_DATA : TALES_DATA.filter(t => t.category === filter);
    
    container.innerHTML = filtered.map(tale => `
        <div class="tale-card">
            <div class="tale-header">
                <span class="tale-type-badge type-${tale.type}">${tale.typeName}</span>
                <span class="tale-runtime">⏱️ ${tale.runtime}</span>
            </div>
            <h3 class="tale-title">${tale.title}</h3>
            <p class="tale-synopsis">${tale.synopsis}</p>
            <div class="tale-actions">
                <button class="btn btn-secondary btn-sm" onclick="openStoryReader('${tale.id}')">📖 Read Excerpt</button>
                ${tale.type === 'premium' ? 
                    `<button class="btn btn-primary btn-sm" onclick="addToCart('prod-ebook-1')">🛒 Buy Book ($9.99)</button>` : 
                    tale.type === 'audio' ? 
                    `<button class="btn btn-accent btn-sm" onclick="tuneIntoAudio('${tale.title}')">📻 Play Audio Sample</button>` :
                    `<button class="btn btn-secondary btn-sm" onclick="openStoryReader('${tale.id}')">Full Free Log</button>`
                }
            </div>
        </div>
    `).join('');
}

function renderProducts(filter = 'all') {
    const container = document.getElementById('products-container');
    if (!container) return;

    const filtered = filter === 'all' ? STORE_PRODUCTS : STORE_PRODUCTS.filter(p => p.category === filter);

    container.innerHTML = filtered.map(prod => `
        <div class="product-card">
            <div class="product-art">
                <span>${prod.icon}</span>
                ${prod.ribbon ? `<span class="product-ribbon">${prod.ribbon}</span>` : ''}
            </div>
            <div class="product-body">
                <span class="product-category-tag">${prod.categoryName}</span>
                <h4 class="product-title">${prod.title}</h4>
                <p class="product-desc">${prod.desc}</p>
                <div class="product-footer">
                    <div class="product-price">
                        <span class="current-price">$${prod.price.toFixed(2)}</span>
                        ${prod.originalPrice ? `<span class="original-price">$${prod.originalPrice.toFixed(2)}</span>` : ''}
                    </div>
                    <button class="btn btn-primary btn-sm" onclick="addToCart('${prod.id}')">
                        + Add to Vault
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderSupporters() {
    const container = document.getElementById('supporter-list');
    if (!container) return;

    container.innerHTML = INITIAL_SUPPORTERS.map(sup => `
        <div class="supporter-item">
            <div class="supporter-meta">
                <span class="supporter-name">📡 ${sup.name}</span>
                <span class="supporter-amount">+$${sup.amount}.00</span>
            </div>
            <div class="supporter-note">"${sup.note}"</div>
        </div>
    `).join('');
}

// ==========================================
// 5. CART & CHECKOUT ENGINE
// ==========================================

function addToCart(productId) {
    const product = STORE_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    saveCart();
    showToast(`Added "${product.title}" to cart! 🛒`);
    openCartDrawer();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

function updateCartUI() {
    const countBadge = document.getElementById('cart-count');
    const itemsTotal = document.getElementById('cart-items-total');
    const container = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('cart-subtotal');
    const totalEl = document.getElementById('cart-total');
    const discountRow = document.getElementById('cart-discount-row');
    const discountEl = document.getElementById('cart-discount');

    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    if (countBadge) countBadge.textContent = totalQty;
    if (itemsTotal) itemsTotal.textContent = totalQty;

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `<div class="cart-empty-msg">Your transmission vault is empty.<br>Select a book, audio drama, or merch item.</div>`;
        if (subtotalEl) subtotalEl.textContent = '$0.00';
        if (totalEl) totalEl.textContent = '$0.00';
        if (discountRow) discountRow.style.display = 'none';
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-icon">${item.icon}</div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)} × ${item.qty}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">✕ Remove</button>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const discountAmount = subtotal * (appliedDiscount / 100);
    const finalTotal = Math.max(0, subtotal - discountAmount);

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    
    if (appliedDiscount > 0) {
        if (discountRow) discountRow.style.display = 'flex';
        if (discountEl) discountEl.textContent = `-$${discountAmount.toFixed(2)} (${appliedDiscount}% OFF)`;
    } else {
        if (discountRow) discountRow.style.display = 'none';
    }

    if (totalEl) totalEl.textContent = `$${finalTotal.toFixed(2)}`;
}

function openCartDrawer() {
    const drawer = document.getElementById('cart-drawer-overlay');
    if (drawer) drawer.classList.add('open');
}

function closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer-overlay');
    if (drawer) drawer.classList.remove('open');
}

// Checkout simulation with instant digital key & download link generator
function handleCheckout() {
    if (cart.length === 0) {
        showToast("Your cart is empty!");
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const discountAmount = subtotal * (appliedDiscount / 100);
    const finalTotal = (subtotal - discountAmount).toFixed(2);

    const orderId = 'LBS-' + Math.floor(100000 + Math.random() * 900000);
    const licenseKey = 'LBS-AUTH-' + Math.random().toString(36).substring(2, 6).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase() + '-2026';

    const modal = document.getElementById('order-success-modal');
    const orderIdEl = document.getElementById('receipt-order-id');
    const totalEl = document.getElementById('receipt-total');
    const keyEl = document.getElementById('receipt-key');
    const downloadsContainer = document.getElementById('download-links-container');

    if (orderIdEl) orderIdEl.textContent = `#${orderId}`;
    if (totalEl) totalEl.textContent = `$${finalTotal}`;
    if (keyEl) keyEl.textContent = licenseKey;

    if (downloadsContainer) {
        downloadsContainer.innerHTML = cart.map(item => `
            <div class="download-item-btn" onclick="simulateDownload('${item.title}', '${item.fileType}')">
                <span>💾 Download <strong>${item.title}</strong> (${item.fileType})</span>
                <span>⬇️ [GET]</span>
            </div>
        `).join('');
    }

    // Clear Cart
    cart = [];
    saveCart();
    closeCartDrawer();

    if (modal) modal.classList.add('open');
    audioStation.playTipChime();
}

function simulateDownload(filename, type) {
    showToast(`Initiated download for "${filename}" (${type}). Transmission complete! 📥`);
}

// ==========================================
// 6. RADIO PLAYER & OSCILLOSCOPE VISUALIZER
// ==========================================

function initOscilloscope() {
    const canvas = document.getElementById('audio-visualizer');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function draw() {
        requestAnimationFrame(draw);
        const width = canvas.width = canvas.offsetWidth;
        const height = canvas.height = canvas.offsetHeight;

        ctx.fillStyle = '#05080c';
        ctx.fillRect(0, 0, width, height);

        // Grid lines for analog oscilloscope look
        ctx.strokeStyle = '#0e1b1b';
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let x = 0; x < width; x += 20) {
            ctx.moveTo(x, 0); ctx.lineTo(x, height);
        }
        for (let y = 0; y < height; y += 15) {
            ctx.moveTo(0, y); ctx.lineTo(width, y);
        }
        ctx.stroke();

        if (audioStation.isPlaying && audioStation.analyser) {
            const bufferLength = audioStation.analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);
            audioStation.analyser.getByteTimeDomainData(dataArray);

            ctx.lineWidth = 2.5;
            ctx.strokeStyle = '#10b981';
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#10b981';

            ctx.beginPath();
            const sliceWidth = width * 1.0 / bufferLength;
            let x = 0;

            for (let i = 0; i < bufferLength; i++) {
                const v = dataArray[i] / 128.0;
                const y = v * height / 2;

                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);

                x += sliceWidth;
            }
            ctx.lineTo(width, height / 2);
            ctx.stroke();
            ctx.shadowBlur = 0;
        } else {
            // Idle Flat Line with small jitter
            ctx.lineWidth = 1.5;
            ctx.strokeStyle = '#065f46';
            ctx.beginPath();
            ctx.moveTo(0, height / 2);
            for (let x = 0; x < width; x += 5) {
                const jitter = (Math.random() - 0.5) * 2;
                ctx.lineTo(x, height / 2 + jitter);
            }
            ctx.stroke();
        }
    }
    draw();
}

function updateFrequencyDisplay(freqObj) {
    const freqTag = document.getElementById('current-frequency');
    const trackTitle = document.getElementById('current-track-title');
    const needle = document.getElementById('meter-needle');
    const slider = document.getElementById('freq-slider');

    if (freqTag) freqTag.textContent = `${freqObj.freq} MHz`;
    if (trackTitle) trackTitle.textContent = freqObj.title;
    if (slider) slider.value = freqObj.freq;

    if (needle) {
        // Map 88MHz - 108MHz to 5% - 95%
        const percent = ((freqObj.freq - 88) / (108 - 88)) * 90 + 5;
        needle.style.left = `${percent}%`;
    }
}

function tuneRadioTo(index) {
    currentFreqIndex = (index + RADIO_FREQUENCIES.length) % RADIO_FREQUENCIES.length;
    const current = RADIO_FREQUENCIES[currentFreqIndex];
    updateFrequencyDisplay(current);

    if (audioStation.isPlaying) {
        audioStation.playRadio(current.tone, current.noise);
    }
}

function tuneIntoAudio(storyTitle) {
    const playBtn = document.getElementById('radio-play-btn');
    const playText = document.getElementById('play-text');
    const playIcon = document.getElementById('play-icon');
    const consoleWrap = document.querySelector('.radio-console');

    const current = RADIO_FREQUENCIES[currentFreqIndex];
    current.title = `NARRATION: "${storyTitle}"`;
    updateFrequencyDisplay(current);

    audioStation.playRadio(current.tone, 0.1);
    if (playText) playText.textContent = "STOP TRANSMISSION";
    if (playIcon) playIcon.textContent = "⏸";
    if (playBtn) playBtn.classList.add('active');
    if (consoleWrap) consoleWrap.classList.add('radio-active');

    // Smooth scroll to radio player
    const radioElem = document.getElementById('broadcast-player');
    if (radioElem) radioElem.scrollIntoView({ behavior: 'smooth' });

    showToast(`Tuned radio into "${storyTitle}"! 📻`);
}

// ==========================================
// 7. STORY READER & MODALS
// ==========================================

let readerFontSize = 1.05;

function openStoryReader(taleId) {
    const tale = TALES_DATA.find(t => t.id === taleId);
    if (!tale) return;

    const modal = document.getElementById('story-reader-modal');
    const catEl = document.getElementById('reader-category');
    const titleEl = document.getElementById('reader-title');
    const contentEl = document.getElementById('reader-content');
    const statsEl = document.getElementById('reader-stats');

    if (catEl) catEl.textContent = tale.typeName.toUpperCase();
    if (titleEl) titleEl.textContent = tale.title;
    if (statsEl) statsEl.textContent = `⏱️ ${tale.runtime} • Logged on Station Archive`;
    
    if (contentEl) {
        contentEl.innerHTML = tale.content.split('\n\n').map(p => `<p>${p}</p>`).join('');
        contentEl.style.fontSize = `${readerFontSize}rem`;
    }

    if (modal) modal.classList.add('open');
}

function openMembershipModal(tierName, price) {
    const modal = document.getElementById('membership-modal');
    const titleEl = document.getElementById('member-modal-title');
    const priceEl = document.getElementById('member-modal-price');

    if (titleEl) titleEl.textContent = `Join ${tierName}`;
    if (priceEl) priceEl.textContent = `$${price}.00 / month`;

    if (modal) modal.classList.add('open');
}

// ==========================================
// 8. TOAST NOTIFICATIONS
// ==========================================

function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// ==========================================
// 9. BACKGROUND STAR/STATIC AMBIENT CANVAS
// ==========================================

function initAmbientBackground() {
    const canvas = document.getElementById('ambient-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let particles = [];
    const numParticles = 60;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particles = [];
        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5 + 0.5,
                alpha: Math.random() * 0.6 + 0.2,
                vy: (Math.random() - 0.5) * 0.3,
                vx: (Math.random() - 0.5) * 0.3
            });
        }
    }
    resize();
    window.addEventListener('resize', resize);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#f59e0b';

        particles.forEach(p => {
            p.y += p.vy;
            p.x += p.vx;

            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(245, 158, 11, ${p.alpha})`;
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

// ==========================================
// 10. INITIALIZATION & EVENT LISTENERS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initial Renders
    renderTales();
    renderProducts();
    renderSupporters();
    updateCartUI();
    initOscilloscope();
    initAmbientBackground();
    updateFrequencyDisplay(RADIO_FREQUENCIES[0]);

    // Station Clock updater
    function updateClock() {
        const clockEl = document.getElementById('station-clock');
        if (clockEl) {
            const now = new Date();
            clockEl.textContent = now.toTimeString().split(' ')[0] + ' ' + (now.getHours() >= 12 ? 'PM' : 'AM');
        }
    }
    updateClock();
    setInterval(updateClock, 1000);

    // CRT Toggle
    const crtBtn = document.getElementById('crt-toggle');
    if (crtBtn) {
        crtBtn.addEventListener('click', () => {
            document.body.classList.toggle('crt-filter');
            showToast(document.body.classList.contains('crt-filter') ? "📺 CRT Scanlines Enabled" : "🖥️ CRT Scanlines Disabled");
        });
    }

    // Radio Controls
    const playRadioBtn = document.getElementById('radio-play-btn');
    const playText = document.getElementById('play-text');
    const playIcon = document.getElementById('play-icon');
    const consoleWrap = document.querySelector('.radio-console');

    if (playRadioBtn) {
        playRadioBtn.addEventListener('click', () => {
            const current = RADIO_FREQUENCIES[currentFreqIndex];
            if (audioStation.isPlaying) {
                audioStation.stopRadio();
                playText.textContent = "TUNE IN";
                playIcon.textContent = "▶";
                playRadioBtn.classList.remove('active');
                if (consoleWrap) consoleWrap.classList.remove('radio-active');
            } else {
                audioStation.playRadio(current.tone, current.noise);
                playText.textContent = "STOP TRANSMISSION";
                playIcon.textContent = "⏸";
                playRadioBtn.classList.add('active');
                if (consoleWrap) consoleWrap.classList.add('radio-active');
            }
        });
    }

    const nextFreqBtn = document.getElementById('radio-next-btn');
    if (nextFreqBtn) {
        nextFreqBtn.addEventListener('click', () => {
            tuneRadioTo(currentFreqIndex + 1);
        });
    }

    const freqSlider = document.getElementById('freq-slider');
    if (freqSlider) {
        freqSlider.addEventListener('input', (e) => {
            const val = parseFloat(e.target.value);
            const freqObj = {
                freq: val,
                title: `MANUAL FREQ ${val.toFixed(1)} MHz`,
                tone: 180 + (val - 88) * 15,
                noise: 0.25
            };
            updateFrequencyDisplay(freqObj);
            if (audioStation.isPlaying) {
                audioStation.playRadio(freqObj.tone, freqObj.noise);
            }
        });
    }

    // Rain FX Button
    const rainBtn = document.getElementById('ambient-rain-btn');
    if (rainBtn) {
        rainBtn.addEventListener('click', () => {
            const isPlaying = audioStation.toggleRain();
            rainBtn.classList.toggle('active', isPlaying);
            showToast(isPlaying ? "🌧️ Eerie Midnight Storm FX Enabled" : "🌧️ Rain FX Muted");
        });
    }

    const rainReaderBtn = document.getElementById('ambient-toggle-reader');
    if (rainReaderBtn) {
        rainReaderBtn.addEventListener('click', () => {
            const isPlaying = audioStation.toggleRain();
            rainReaderBtn.classList.toggle('active', isPlaying);
        });
    }

    // Story Reader Font Adjusters
    const fontUp = document.getElementById('font-size-up');
    const fontDown = document.getElementById('font-size-down');
    const readerContent = document.getElementById('reader-content');

    if (fontUp) {
        fontUp.addEventListener('click', () => {
            readerFontSize = Math.min(1.4, readerFontSize + 0.1);
            if (readerContent) readerContent.style.fontSize = `${readerFontSize}rem`;
        });
    }
    if (fontDown) {
        fontDown.addEventListener('click', () => {
            readerFontSize = Math.max(0.85, readerFontSize - 0.1);
            if (readerContent) readerContent.style.fontSize = `${readerFontSize}rem`;
        });
    }

    // Cart Drawer Toggles
    const cartToggleBtn = document.getElementById('cart-toggle-btn');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartOverlay = document.getElementById('cart-drawer-overlay');

    if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCartDrawer);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
    if (cartOverlay) {
        cartOverlay.addEventListener('click', (e) => {
            if (e.target === cartOverlay) closeCartDrawer();
        });
    }

    // Checkout Button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) checkoutBtn.addEventListener('click', handleCheckout);

    // Coupon Apply
    const couponBtn = document.getElementById('apply-coupon-btn');
    const couponInput = document.getElementById('coupon-input');
    const discountMsg = document.getElementById('discount-applied-msg');

    if (couponBtn) {
        couponBtn.addEventListener('click', () => {
            const code = (couponInput.value || '').trim().toUpperCase();
            if (code === 'BROADCAST10') {
                appliedDiscount = 10;
                discountMsg.style.color = '#4ade80';
                discountMsg.textContent = '✓ 10% Secret Broadcast Coupon Applied!';
                updateCartUI();
            } else if (code === 'MIDNIGHT20') {
                appliedDiscount = 20;
                discountMsg.style.color = '#4ade80';
                discountMsg.textContent = '✓ 20% Midnight Supporter Coupon Applied!';
                updateCartUI();
            } else {
                discountMsg.style.color = '#f87171';
                discountMsg.textContent = '✕ Invalid frequency code. Try BROADCAST10';
            }
        });
    }

    // Tip Form Handler
    const tipBtns = document.querySelectorAll('.tip-amt-btn');
    const customTipInput = document.getElementById('custom-tip-input');
    const tipSubmitAmount = document.getElementById('tip-submit-amount');
    const submitTipBtn = document.getElementById('submit-tip-btn');
    const openTipBtn = document.getElementById('open-tip-btn');

    if (openTipBtn) {
        openTipBtn.addEventListener('click', () => {
            const tipSection = document.getElementById('tip-jar');
            if (tipSection) tipSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    tipBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tipBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const amt = btn.dataset.amt;
            if (customTipInput) customTipInput.value = amt;
            if (tipSubmitAmount) tipSubmitAmount.textContent = `$${amt}.00`;
        });
    });

    if (customTipInput) {
        customTipInput.addEventListener('input', (e) => {
            const val = parseFloat(e.target.value) || 0;
            tipBtns.forEach(b => b.classList.remove('active'));
            if (tipSubmitAmount) tipSubmitAmount.textContent = `$${val.toFixed(2)}`;
        });
    }

    if (submitTipBtn) {
        submitTipBtn.addEventListener('click', () => {
            const amt = parseFloat(customTipInput.value) || 5;
            const name = (document.getElementById('tip-name-input').value || 'Anonymous Listener').trim();
            const message = (document.getElementById('tip-message-input').value || 'Supporting the midnight broadcast!').trim();

            INITIAL_SUPPORTERS.unshift({
                name: name,
                amount: amt,
                note: message,
                time: 'Just now'
            });
            renderSupporters();
            audioStation.playTipChime();
            showToast(`⚡ Thank you ${name}! Transmitted $${amt.toFixed(2)} to Station Coffers! 🎉`);

            document.getElementById('tip-message-input').value = '';
        });
    }

    // Newsletter Lead Magnet Form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('subscriber-email').value;
            showToast(`📼 "The Midnight Signal: Lost Chapter Zero" sent to ${email}! Check your inbox. 💌`);
            newsletterForm.reset();
        });
    }

    // Booking Services Form
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('book-name').value;
            showToast(`🎙️ Booking inquiry received from ${name}! The narrator will reply within 24h.`);
            bookingForm.reset();
        });
    }

    // Membership Signup Form
    const memberForm = document.getElementById('membership-signup-form');
    if (memberForm) {
        memberForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('member-name').value;
            const modal = document.getElementById('membership-modal');
            if (modal) modal.classList.remove('open');
            audioStation.playTipChime();
            showToast(`🏆 Welcome to the Broadcast Society, ${name}! Your Patron Vault is unlocked.`);
            memberForm.reset();
        });
    }

    // Modal Close Buttons
    document.querySelectorAll('.modal-overlay .close-btn, #close-success-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
        });
    });

    // Filter Buttons (Tales & Store)
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderTales(tab.dataset.filter);
        });
    });

    document.querySelectorAll('.store-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.store-cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.dataset.category);
        });
    });
});
