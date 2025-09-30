// Chatbot Configuration
const chatbotConfig = {
  botName: "FastFix Assistant",
  welcomeMessage:
    "Halo! 👋 Saya asisten FastFix HP. Ada yang bisa saya bantu hari ini?",
  responses: {
    greeting: [
      "Halo! Selamat datang di FastFix HP! 😊",
      "Hai! Ada yang bisa saya bantu?",
      "Halo! Senang bisa membantu Anda hari ini!",
    ],
    flash_rom: {
      message:
        "📱 <strong>FLASH/INSTALL ULANG ROM</strong><br><br>Layanan untuk:<br>• HP macet di logo<br>• HP lemot/lag<br>• Kena virus<br>• Rusak setelah update<br><br>Harga: <strong>Rp 80.000</strong><br>Waktu: 30 menit - 1 jam<br><br>Mau langsung konsultasi via WhatsApp?",
      hasWhatsApp: true,
    },
    frp: {
      message:
        "🔓 <strong>BYPASS FRP (Google Account)</strong><br><br>Untuk HP yang terkunci akun Google setelah factory reset.<br><br>Harga: <strong>Rp 50.000</strong><br>Semua merk Android<br>Proses cepat!<br><br>Butuh bantuan segera?",
      hasWhatsApp: true,
    },
    remove_lock: {
      message:
        "🔒 <strong>REMOVE PATTERN/PIN/PASSWORD</strong><br><br>Lupa pola/PIN/password HP Anda?<br><br>Harga: <strong>Rp 50.000</strong><br>Data aman (jika HP mendukung)<br>Proses cepat!<br><br>Mau konsultasi lebih lanjut?",
      hasWhatsApp: true,
    },
    mi_cloud: {
      message:
        "☁️ <strong>MI CLOUD REMOVE</strong><br><br>2 pilihan layanan:<br><br>1. <strong>Tanpa Server</strong> - Rp 50.000<br>   (untuk kasus standar)<br><br>2. <strong>Dengan Server</strong> - Rp 180.000<br>   (untuk kasus kompleks)<br><br>Khusus Xiaomi/Redmi/Poco<br><br>Mau tanya lebih detail?",
      hasWhatsApp: true,
    },
    lcd: {
      message:
        "📱 <strong>GANTI LCD TOUCHSCREEN</strong><br><br>Layar HP Anda bermasalah?<br>• Layar pecah<br>• LCD bergaris/berubah warna<br>• Touchscreen tidak responsif<br><br>Jasa Pemasangan: <strong>Rp 65.000</strong><br>(Belum termasuk spare part LCD)<br><br>Butuh info harga LCD untuk HP Anda?",
      hasWhatsApp: true,
    },
    harga: {
      message:
        "💰 <strong>DAFTAR HARGA LAYANAN</strong><br><br>SOFTWARE:<br>• Flash ROM: Rp 80.000<br>• FRP Bypass: Rp 50.000<br>• Remove Lock: Rp 50.000<br>• Mi Cloud (tanpa server): Rp 50.000<br>• Mi Cloud (dengan server): Rp 180.000<br><br>HARDWARE:<br>• Ganti LCD: Rp 65.000 (jasa)<br><br>Semua bergaransi! 🛡️<br><br>Mau tanya detail?",
      hasWhatsApp: true,
    },
    lokasi: {
      message:
        "📍 <strong>LOKASI & KONTAK</strong><br><br>📍 Bandung, Jawa Barat<br>📱 WhatsApp: 0895-0359-6485<br>⏰ Senin-Minggu: 08.00-21.00 WIB<br><br>Bisa COD atau datang ke tempat!<br><br>Mau langsung chat via WhatsApp?",
      hasWhatsApp: true,
    },
    garansi: {
      message:
        "🛡️ <strong>GARANSI LAYANAN</strong><br><br>Semua layanan kami bergaransi!<br><br>✅ Jika ada masalah setelah service<br>✅ Kami perbaiki GRATIS<br>✅ Garansi berlaku sesuai ketentuan<br>✅ Teknisi berpengalaman<br><br>Anda dilindungi 100%!<br><br>Ada pertanyaan lain?",
      hasWhatsApp: false,
    },
    waktu: {
      message:
        "⚡ <strong>WAKTU PENGERJAAN</strong><br><br>Kami prioritaskan kecepatan:<br><br>✅ Software Service: 30 menit - 1 jam<br>✅ Ganti LCD: 30 menit - 2 jam<br>✅ Tidak perlu menunggu berhari-hari!<br><br>*Tergantung tingkat kerusakan<br><br>Mau konsultasi kapan bisa service?",
      hasWhatsApp: true,
    },
    thanks: [
      "Sama-sama! Senang bisa membantu 😊",
      "Dengan senang hati! Ada yang lain?",
      "Terima kasih kembali! 🙏",
    ],
    default:
      "Maaf, saya kurang paham pertanyaan Anda 😅<br><br>Silakan pilih menu di bawah atau langsung chat via WhatsApp untuk konsultasi lebih detail!",
  },
  quickReplies: [
    { text: "💰 Harga", keyword: "harga" },
    { text: "📱 Flash ROM", keyword: "flash_rom" },
    { text: "🔓 FRP Bypass", keyword: "frp" },
    { text: "🔒 Remove Lock", keyword: "remove_lock" },
    { text: "☁️ Mi Cloud", keyword: "mi_cloud" },
    { text: "📱 Ganti LCD", keyword: "lcd" },
    { text: "📍 Lokasi", keyword: "lokasi" },
    { text: "🛡️ Garansi", keyword: "garansi" },
  ],
};

// Chatbot State
let chatbotState = {
  isOpen: false,
  messages: [],
};

// Initialize Chatbot
function initChatbot() {
  // Create chatbot HTML
  const chatbotHTML = `
    <div class="chatbot-container">
      <div class="chatbot-toggle" id="chatbotToggle">
        <span class="chatbot-icon">🤖</span>
      </div>
      
      <div class="chatbot-window" id="chatbotWindow">
        <div class="chatbot-header">
          <div class="chatbot-header-info">
            <div class="chatbot-avatar">🤖</div>
            <div class="chatbot-title">
              <h3>${chatbotConfig.botName}</h3>
              <div class="chatbot-status">
                <span class="status-dot"></span>
                <span>Online</span>
              </div>
            </div>
          </div>
          <button class="chatbot-close" id="chatbotClose">✕</button>
        </div>
        
        <div class="chatbot-messages" id="chatbotMessages"></div>
        
        <div class="quick-replies" id="quickReplies"></div>
        
        <div class="chatbot-input-area">
          <input 
            type="text" 
            class="chatbot-input" 
            id="chatbotInput" 
            placeholder="Ketik pesan..."
            autocomplete="off"
          />
          <button class="chatbot-send-btn" id="chatbotSend">
            ➤
          </button>
        </div>
      </div>
    </div>
  `;

  // Insert chatbot into body
  document.body.insertAdjacentHTML("beforeend", chatbotHTML);

  // Initialize event listeners
  setupEventListeners();

  // Show welcome message
  setTimeout(() => {
    addBotMessage(chatbotConfig.welcomeMessage);
    showQuickReplies();
  }, 500);
}

// Setup Event Listeners
function setupEventListeners() {
  const toggle = document.getElementById("chatbotToggle");
  const close = document.getElementById("chatbotClose");
  const sendBtn = document.getElementById("chatbotSend");
  const input = document.getElementById("chatbotInput");

  toggle.addEventListener("click", toggleChatbot);
  close.addEventListener("click", toggleChatbot);
  sendBtn.addEventListener("click", sendMessage);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });
}

// Toggle Chatbot
function toggleChatbot() {
  const window = document.getElementById("chatbotWindow");
  const toggle = document.getElementById("chatbotToggle");

  chatbotState.isOpen = !chatbotState.isOpen;

  if (chatbotState.isOpen) {
    window.classList.add("active");
    toggle.classList.add("active");
  } else {
    window.classList.remove("active");
    toggle.classList.remove("active");
  }
}

// Add Bot Message
function addBotMessage(message, hasWhatsApp = false) {
  const messagesContainer = document.getElementById("chatbotMessages");

  const messageHTML = `
    <div class="message bot">
      <div class="message-avatar">🤖</div>
      <div class="message-content">
        ${message}
        ${
          hasWhatsApp
            ? `<br><a href="https://wa.me/6289503596485?text=Halo%20FastFix,%20saya%20mau%20konsultasi%20tentang%20layanan" class="whatsapp-btn" target="_blank">💬 Chat via WhatsApp</a>`
            : ""
        }
      </div>
    </div>
  `;

  messagesContainer.insertAdjacentHTML("beforeend", messageHTML);
  scrollToBottom();
}

// Add User Message
function addUserMessage(message) {
  const messagesContainer = document.getElementById("chatbotMessages");

  const messageHTML = `
    <div class="message user">
      <div class="message-avatar">👤</div>
      <div class="message-content">${message}</div>
    </div>
  `;

  messagesContainer.insertAdjacentHTML("beforeend", messageHTML);
  scrollToBottom();
}

// Show Typing Indicator
function showTypingIndicator() {
  const messagesContainer = document.getElementById("chatbotMessages");

  const typingHTML = `
    <div class="message bot typing-message">
      <div class="message-avatar">🤖</div>
      <div class="typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    </div>
  `;

  messagesContainer.insertAdjacentHTML("beforeend", typingHTML);
  scrollToBottom();
}

// Remove Typing Indicator
function removeTypingIndicator() {
  const typing = document.querySelector(".typing-message");
  if (typing) typing.remove();
}

// Send Message
function sendMessage() {
  const input = document.getElementById("chatbotInput");
  const message = input.value.trim();

  if (!message) return;

  addUserMessage(message);
  input.value = "";

  // Show typing indicator
  showTypingIndicator();

  // Process message
  setTimeout(() => {
    removeTypingIndicator();
    processMessage(message);
  }, 1000);
}

// Process Message
function processMessage(message) {
  const lowerMessage = message.toLowerCase();

  // Check for greetings
  if (
    lowerMessage.includes("halo") ||
    lowerMessage.includes("hai") ||
    lowerMessage.includes("hello") ||
    lowerMessage.includes("hi")
  ) {
    const response =
      chatbotConfig.responses.greeting[
        Math.floor(Math.random() * chatbotConfig.responses.greeting.length)
      ];
    addBotMessage(response);
    showQuickReplies();
    return;
  }

  // Check for thanks
  if (
    lowerMessage.includes("terima kasih") ||
    lowerMessage.includes("makasih") ||
    lowerMessage.includes("thank")
  ) {
    const response =
      chatbotConfig.responses.thanks[
        Math.floor(Math.random() * chatbotConfig.responses.thanks.length)
      ];
    addBotMessage(response);
    return;
  }

  // Check for keywords
  if (
    lowerMessage.includes("flash") ||
    lowerMessage.includes("install") ||
    lowerMessage.includes("rom") ||
    lowerMessage.includes("macet") ||
    lowerMessage.includes("lemot")
  ) {
    handleQuickReply("flash_rom");
    return;
  }

  if (
    lowerMessage.includes("frp") ||
    lowerMessage.includes("google account") ||
    lowerMessage.includes("akun google")
  ) {
    handleQuickReply("frp");
    return;
  }

  if (
    lowerMessage.includes("lupa") ||
    lowerMessage.includes("pattern") ||
    lowerMessage.includes("pin") ||
    lowerMessage.includes("password") ||
    lowerMessage.includes("pola")
  ) {
    handleQuickReply("remove_lock");
    return;
  }

  if (lowerMessage.includes("mi cloud") || lowerMessage.includes("xiaomi")) {
    handleQuickReply("mi_cloud");
    return;
  }

  if (
    lowerMessage.includes("lcd") ||
    lowerMessage.includes("layar") ||
    lowerMessage.includes("touchscreen") ||
    lowerMessage.includes("pecah")
  ) {
    handleQuickReply("lcd");
    return;
  }

  if (lowerMessage.includes("harga") || lowerMessage.includes("biaya")) {
    handleQuickReply("harga");
    return;
  }

  if (
    lowerMessage.includes("lokasi") ||
    lowerMessage.includes("alamat") ||
    lowerMessage.includes("dimana")
  ) {
    handleQuickReply("lokasi");
    return;
  }

  if (lowerMessage.includes("garansi") || lowerMessage.includes("jaminan")) {
    handleQuickReply("garansi");
    return;
  }

  if (
    lowerMessage.includes("waktu") ||
    lowerMessage.includes("lama") ||
    lowerMessage.includes("berapa lama")
  ) {
    handleQuickReply("waktu");
    return;
  }

  // Default response
  addBotMessage(chatbotConfig.responses.default, true);
  showQuickReplies();
}

// Handle Quick Reply
function handleQuickReply(keyword) {
  const response = chatbotConfig.responses[keyword];

  if (typeof response === "object") {
    addBotMessage(response.message, response.hasWhatsApp);
  } else if (Array.isArray(response)) {
    const randomResponse =
      response[Math.floor(Math.random() * response.length)];
    addBotMessage(randomResponse);
  } else {
    addBotMessage(response);
  }
}

// Show Quick Replies
function showQuickReplies() {
  const container = document.getElementById("quickReplies");
  container.innerHTML = "";

  chatbotConfig.quickReplies.forEach((reply) => {
    const button = document.createElement("button");
    button.className = "quick-reply-btn";
    button.textContent = reply.text;
    button.addEventListener("click", () => {
      addUserMessage(reply.text);
      showTypingIndicator();
      setTimeout(() => {
        removeTypingIndicator();
        handleQuickReply(reply.keyword);
      }, 1000);
    });
    container.appendChild(button);
  });
}

// Scroll to Bottom
function scrollToBottom() {
  const messagesContainer = document.getElementById("chatbotMessages");
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initChatbot);
} else {
  initChatbot();
}
