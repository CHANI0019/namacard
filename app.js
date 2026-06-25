// ==================== MULTILINGUAL DICTIONARY ====================
const dictionary = {
  ko: {
    name: "홍길동",
    position: "Founder & CEO",
    wallet_title: "MetaMask 지갑 주소",
    wallet_connect: "지갑 연결",
    wallet_connected: "지갑 연결됨",
    wallet_connect_demo: "지갑 연결 (데모)",
    intro: "부동산 기반 디지털 자산과 스테이블코인 생태계를 구축하고 있습니다.",
    info_phone_label: "연락처",
    info_email_label: "이메일",
    info_web_label: "웹사이트",
    info_homepage_label: "개인 홈페이지",
    btn_call: "전화하기",
    btn_sms: "문자하기",
    btn_kakao: "카카오톡",
    btn_video: "소개영상",
    projects_title: "DANARI 주요 프로젝트",
    proj_desc_stable: "부동산 자산 담보 기반의 고도로 안정적인 스테이블코인 금융 프로토콜.",
    proj_desc_hotel: "블록체인 결제를 도입한 글로벌 프리미엄 리조트 및 호텔 전용 간편 결제 시스템.",
    proj_desc_nft: "예약 권한을 NFT화하여 거래 및 양도가 가능한 차세대 대체불가토큰 멤버십 플랫폼.",
    proj_desc_ai: "인공지능 딥러닝 기반의 디지털 자산 시황 예측 및 자동 퀀트 분석 엔진.",
    action_save: "연락처 내 휴대폰에 저장",
    action_qr: "QR 코드 명함",
    action_proposal: "투자제안서 다운로드",
    action_exchange: "명함 상호 교환하기",
    exchange_received_title: "수신된 명함 목록",
    modal_qr_title: "디지털 명함 QR 코드",
    modal_qr_desc: "아래 QR 코드를 모바일 기기로 스캔하면 디지털 명함으로 바로 연결됩니다.",
    modal_qr_copy: "명함 링크 복사",
    modal_video_title: "DANARI 사업 및 비전 소개",
    modal_video_caption: "블록체인 기반 부동산 디지털 자산과 스테이블코인 미래 비전",
    modal_exchange_title: "명함 상호 교환",
    modal_exchange_desc: "정보를 입력하여 홍길동 대표와 명함을 교환하세요. 로컬 기기에 서로 저장됩니다.",
    label_exch_name: "이름 *",
    label_exch_company: "회사 / 직책",
    label_exch_phone: "연락처 *",
    label_exch_email: "이메일 *",
    btn_exch_submit: "명함 전송 및 보관",
    modal_stats_title: "방문자 및 클릭 통계",
    modal_stats_desc: "본 수치는 로컬 브라우저 기기에서의 상호작용 통계입니다.",
    stat_name_views: "명함 조회수",
    stat_name_calls: "전화/연락처 저장",
    stat_name_exchanges: "명함 교환수",
    stat_name_website: "웹 방문/프로젝트 클릭",
    chart_title: "상호작용 분석",
    chart_lbl_view: "조회",
    chart_lbl_call: "연락",
    chart_lbl_exch: "교환",
    chart_lbl_web: "프로젝트",
    btn_stats_reset: "통계 데이터 초기화",
    toast_copied_wallet: "지갑 주소가 복사되었습니다.",
    toast_copied_url: "명함 링크가 복사되었습니다.",
    toast_metamask_demo: "MetaMask가 없어 데모 주소로 연결합니다.",
    toast_metamask_connected: "MetaMask 지갑이 성공적으로 연결되었습니다.",
    toast_exch_success: "명함이 전송되고 보관함에 저장되었습니다.",
    toast_stats_reset: "통계 데이터가 초기화되었습니다.",
    toast_vcard_download: "연락처(vCard) 다운로드를 시작합니다."
  },
  en: {
    name: "Gildong Hong",
    position: "Founder & CEO",
    wallet_title: "MetaMask Wallet Address",
    wallet_connect: "Connect",
    wallet_connected: "Connected",
    wallet_connect_demo: "Connect (Demo)",
    intro: "Building a real estate-backed digital asset and stablecoin ecosystem.",
    info_phone_label: "Phone",
    info_email_label: "Email",
    info_web_label: "Website",
    info_homepage_label: "Personal Page",
    btn_call: "Call",
    btn_sms: "SMS",
    btn_kakao: "KakaoTalk",
    btn_video: "Video",
    projects_title: "DANARI Core Projects",
    proj_desc_stable: "A highly stable cryptocurrency protocol backed by real estate collateral.",
    proj_desc_hotel: "An easy payment system designed for global premium resorts and hotels, utilizing blockchain.",
    proj_desc_nft: "A next-generation NFT membership platform enabling booking rights to be traded and transferred.",
    proj_desc_ai: "A digital asset market forecasting and automatic quantitative analysis engine powered by deep learning AI.",
    action_save: "Save Contact to Phone",
    action_qr: "QR Namecard",
    action_proposal: "Download Proposal",
    action_exchange: "Exchange Cards",
    exchange_received_title: "Received Namecards",
    modal_qr_title: "Digital Card QR Code",
    modal_qr_desc: "Scan the QR code below with a mobile device to navigate directly to the digital card.",
    modal_qr_copy: "Copy Link",
    modal_video_title: "DANARI Business & Vision",
    modal_video_caption: "Blockchain-based real estate digital assets and stablecoin future vision",
    modal_exchange_title: "Exchange Business Cards",
    modal_exchange_desc: "Enter your details to exchange business cards with Gildong Hong. Cards will be stored locally.",
    label_exch_name: "Name *",
    label_exch_company: "Company / Title",
    label_exch_phone: "Phone *",
    label_exch_email: "Email *",
    btn_exch_submit: "Send & Save Card",
    modal_stats_title: "Visitor & Click Stats",
    modal_stats_desc: "These metrics represent interactions on this local browser device.",
    stat_name_views: "Card Views",
    stat_name_calls: "Contacts/Calls",
    stat_name_exchanges: "Exchanged Cards",
    stat_name_website: "Web & Project Clicks",
    chart_title: "Interaction Analysis",
    chart_lbl_view: "Views",
    chart_lbl_call: "Calls",
    chart_lbl_exch: "Exchange",
    chart_lbl_web: "Projects",
    btn_stats_reset: "Reset Stats Data",
    toast_copied_wallet: "Wallet address copied.",
    toast_copied_url: "Card link copied.",
    toast_metamask_demo: "MetaMask not detected. Connecting with a demo address.",
    toast_metamask_connected: "MetaMask wallet successfully connected.",
    toast_exch_success: "Namecard sent and saved to vault.",
    toast_stats_reset: "Stats data reset successfully.",
    toast_vcard_download: "Starting contact (vCard) download."
  },
  zh: {
    name: "洪吉童",
    position: "创始人兼首席执行官",
    wallet_title: "MetaMask 钱包地址",
    wallet_connect: "连接钱包",
    wallet_connected: "已连接",
    wallet_connect_demo: "连接 (演示)",
    intro: "正在构建基于房地产的数字资产和稳定币生态系统。",
    info_phone_label: "联系电话",
    info_email_label: "电子邮箱",
    info_web_label: "官方网站",
    info_homepage_label: "个人主页",
    btn_call: "拨打电话",
    btn_sms: "发送短信",
    btn_kakao: "KakaoTalk",
    btn_video: "宣传视频",
    projects_title: "DANARI 核心项目",
    proj_desc_stable: "基于房地产资产抵押的高稳定性稳定币金融协议。",
    proj_desc_hotel: "专为全球高端度假村和酒店设计的区块链便捷支付系统。",
    proj_desc_nft: "将预订权NFT化，实现可交易与转让的次世代代币会员平台。",
    proj_desc_ai: "基于人工智能深度学习的数字资产行情预测与自动量化分析引擎。",
    action_save: "保存联系人到手机",
    action_qr: "二维码名片",
    action_proposal: "下载投资提案",
    action_exchange: "互换电子名片",
    exchange_received_title: "已收到的名片列表",
    modal_qr_title: "数字名片二维码",
    modal_qr_desc: "用手机扫描下方二维码即可直接访问数字名片。",
    modal_qr_copy: "复制名片链接",
    modal_video_title: "DANARI 业务与愿景介绍",
    modal_video_caption: "基于区块链的房地产数字资产与稳定币未来愿景",
    modal_exchange_title: "名片互换",
    modal_exchange_desc: "输入您的信息与 洪吉童 代表互换名片。名片信息将保存在本地设备中。",
    label_exch_name: "姓名 *",
    label_exch_company: "公司 / 职位",
    label_exch_phone: "联系电话 *",
    label_exch_email: "电子邮箱 *",
    btn_exch_submit: "发送并保存名片",
    modal_stats_title: "访客与点击统计",
    modal_stats_desc: "此数据代表该本地浏览器设备上的交互统计。",
    stat_name_views: "名片浏览量",
    stat_name_calls: "联系/保存电话",
    stat_name_exchanges: "名片互换次数",
    stat_name_website: "网页与项目点击",
    chart_title: "交互分析",
    chart_lbl_view: "浏览",
    chart_lbl_call: "联系",
    chart_lbl_exch: "互换",
    chart_lbl_web: "项目",
    btn_stats_reset: "重置统计数据",
    toast_copied_wallet: "钱包地址已复制。",
    toast_copied_url: "名片链接已复制。",
    toast_metamask_demo: "未检测到 MetaMask，正在使用演示地址连接。",
    toast_metamask_connected: "MetaMask 钱包连接成功。",
    toast_exch_success: "名片已发送并存入保管库。",
    toast_stats_reset: "统计数据已成功重置。",
    toast_vcard_download: "开始下载联系人 (vCard) 文件。"
  }
};

// ==================== DYNAMIC CARD DATA (STATE) ====================
const defaultCardData = {
  name: "정찬희",
  position: "Founder & CEO",
  intro: "인공지능을 기반으로 주식 분석을 제공하는 다나리.",
  profileUrl: "",
  profileBase64: "",
  phone: "010-1234-5678",
  email: "ceo@danari.io",
  web: "www.danari.io",
  homepage: "",
  wallet: "0x71C7656EC7ab88b098defB751B7401B5f6d1476B",
  videoUrl: "",
  videoBase64: "",
  pdfUrl: "",
  proposalBase64: "",
  projects: [
    { name: "DANARI Stablecoin", desc: "부동산 유동화 기반 스테이블코인 및 STO 디지털 자산거래소" },
    { name: "Hotel Pay System", desc: "리조트 전용 블록체인 결제 솔루션" },
    { name: "NFT Reservation", desc: "예약 권한을 사고파는 NFT 멤버십 플랫폼" },
    { name: "AI Trading Analysis", desc: "AI 기반 시황 분석 및 예측 엔진" }
  ]
};

let activeCardData = { ...defaultCardData };

function loadCardData() {
  const urlParams = new URLSearchParams(window.location.search);
  const customParam = urlParams.get('c');

  if (customParam) {
    try {
      // Decode base64 URL parameter safely handling UTF-8 characters
      const jsonStr = decodeURIComponent(escape(atob(customParam)));
      activeCardData = JSON.parse(jsonStr);
      console.log("[Dynamic Card] Loaded from URL parameter.");

      // Merge local storage base64 assets if they belong to the same card owner (matched by name/email)
      const localSaved = localStorage.getItem('danari_my_card');
      if (localSaved) {
        try {
          const localData = JSON.parse(localSaved);
          if (localData.name === activeCardData.name && localData.email === activeCardData.email) {
            if (localData.profileBase64) activeCardData.profileBase64 = localData.profileBase64;
            if (localData.videoBase64) activeCardData.videoBase64 = localData.videoBase64;
            if (localData.proposalBase64) activeCardData.proposalBase64 = localData.proposalBase64;
            console.log("[Dynamic Card] Merged base64 media assets from local storage for the owner.");
          }
        } catch (err) {
          console.error("[Dynamic Card] Failed to parse local saved card for merging:", err);
        }
      }
    } catch (e) {
      console.error("[Dynamic Card] Failed to parse URL card data:", e);
    }
  } else {
    // If not in URL, check if there's a card saved on this device
    const localSaved = localStorage.getItem('danari_my_card');
    if (localSaved) {
      try {
        activeCardData = JSON.parse(localSaved);
        console.log("[Dynamic Card] Loaded from localStorage.");
      } catch (e) {
        console.error("[Dynamic Card] Failed to parse localStorage card data:", e);
      }
    }
  }

  // Update dictionary with current card name, position and intro to preserve translation structure
  updateDictionaryWithCardData();
  
  // Inject values that are not managed by translations directly in DOM
  injectCardDataToDOM();
}

function updateDictionaryWithCardData() {
  // Override dictionary values for Name, Position, Intro
  ['ko', 'en', 'zh'].forEach(lang => {
    dictionary[lang].name = activeCardData.name;
    dictionary[lang].position = activeCardData.position;
    dictionary[lang].intro = activeCardData.intro;
  });
}

function injectCardDataToDOM() {
  // Profile picture
  const imgEl = document.querySelector('.profile-img');
  if (imgEl) {
    if (activeCardData.profileBase64) {
      imgEl.src = activeCardData.profileBase64;
    } else {
      imgEl.src = activeCardData.profileUrl ? activeCardData.profileUrl : 'profile.svg';
    }
  }

  // Direct contacts
  const phoneText = document.getElementById('info-phone');
  if (phoneText) phoneText.innerText = activeCardData.phone;
  const phoneLink = document.getElementById('link-call');
  if (phoneLink) phoneLink.href = `tel:${activeCardData.phone}`;
  const smsLink = document.getElementById('link-sms');
  if (smsLink) smsLink.href = `sms:${activeCardData.phone}`;

  const emailLink = document.getElementById('info-email');
  if (emailLink) {
    emailLink.innerText = activeCardData.email;
    emailLink.href = `mailto:${activeCardData.email}`;
  }

  const webLink = document.getElementById('info-web');
  if (webLink) {
    webLink.innerText = activeCardData.web;
    const fullUrl = activeCardData.web.startsWith('http') ? activeCardData.web : `https://${activeCardData.web}`;
    webLink.href = fullUrl;
  }

  const homepageText = document.getElementById('info-homepage');
  const homepageContainer = document.getElementById('info-homepage-container');
  if (homepageText && homepageContainer) {
    if (activeCardData.homepage) {
      homepageText.innerText = activeCardData.homepage;
      const fullUrl = activeCardData.homepage.startsWith('http') ? activeCardData.homepage : `https://${activeCardData.homepage}`;
      homepageText.href = fullUrl;
      homepageContainer.style.display = 'flex';
    } else {
      homepageContainer.style.display = 'none';
    }
  }

  // MetaMask wallet address
  const walletAddr = document.getElementById('wallet-address');
  if (walletAddr) {
    walletAddr.innerText = activeCardData.wallet || '0x0000...0000';
  }

  // Projects
  const projs = activeCardData.projects || [];
  for (let i = 0; i < 4; i++) {
    const proj = projs[i] || { name: '', desc: '' };
    
    // Project Name
    const nameEl = document.getElementById(`p${i}-name`);
    if (nameEl) nameEl.innerText = proj.name || `Project ${i+1}`;

    // Project Desc (update in DOM and dictionary)
    const descEl = document.getElementById(`p${i}-desc`);
    if (descEl) descEl.innerText = proj.desc || '';
    
    // Also save in dictionary so language switcher doesn't reset it
    const dictKey = `proj_desc_${getProjKey(i)}`;
    ['ko', 'en', 'zh'].forEach(lang => {
      dictionary[lang][dictKey] = proj.desc || '';
    });
  }

  // Dynamic Video Element initialization
  renderVideoElement(activeCardData.videoBase64 || activeCardData.videoUrl);

  // Dynamic Proposal Link configuration
  const proposalBtn = document.getElementById('proposal-btn');
  if (proposalBtn) {
    if (activeCardData.proposalBase64) {
      proposalBtn.href = activeCardData.proposalBase64;
      proposalBtn.setAttribute('download', `${activeCardData.name || 'DANARI'}_proposal.pdf`);
    } else if (activeCardData.pdfUrl) {
      const fullPdfUrl = activeCardData.pdfUrl.startsWith('http') ? activeCardData.pdfUrl : `https://${activeCardData.pdfUrl}`;
      proposalBtn.href = fullPdfUrl;
      proposalBtn.removeAttribute('download');
    } else {
      proposalBtn.href = 'proposal.pdf';
      proposalBtn.setAttribute('download', 'proposal.pdf');
    }
  }
}

function getProjKey(index) {
  switch (index) {
    case 0: return 'stable';
    case 1: return 'hotel';
    case 2: return 'nft';
    case 3: return 'ai';
    default: return '';
  }
}

// Render dynamic video element based on input source (YouTube/Vimeo/Direct MP4)
function renderVideoElement(url) {
  const container = document.querySelector('.video-player-container');
  if (!container) return;

  if (!url) {
    // Default fallback video
    container.innerHTML = `
      <video id="danari-video" width="100%" controls playsinline loop preload="metadata">
        <source src="https://assets.mixkit.co/videos/preview/mixkit-hud-interface-screens-and-charts-data-34287-large.mp4" type="video/mp4">
        우아한 디지털 자산 소개 영상 대안 텍스트
      </video>
    `;
    return;
  }

  // Check if YouTube
  let youtubeId = getYouTubeId(url);
  if (youtubeId) {
    container.innerHTML = `
      <iframe id="danari-video-iframe" width="100%" height="240" src="https://www.youtube.com/embed/${youtubeId}?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); width: 100%;"></iframe>
    `;
    return;
  }

  // Check if Vimeo
  let vimeoId = getVimeoId(url);
  if (vimeoId) {
    container.innerHTML = `
      <iframe id="danari-video-iframe" width="100%" height="240" src="https://player.vimeo.com/video/${vimeoId}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); width: 100%;"></iframe>
    `;
    return;
  }

  // Direct video URL / Base64 video
  container.innerHTML = `
    <video id="danari-video" width="100%" src="${url}" controls playsinline loop preload="metadata" style="border-radius: 12px; width: 100%;">
      소개 영상 대안 텍스트
    </video>
  `;
}

function getYouTubeId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

function getVimeoId(url) {
  const regExp = /vimeo\.com\/(\d+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

let currentLang = 'ko';

// ==================== STATE MANAGEMENT (LOCAL STORAGE) ====================
const defaultStats = { views: 1, calls: 0, exchanges: 0, website: 0 };
let stats = JSON.parse(localStorage.getItem('danari_stats')) || defaultStats;

// Initialize Exchanged Cards
let exchangedCards = JSON.parse(localStorage.getItem('danari_exchanged_cards')) || [];

// ==================== APP INITIALIZATION ====================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

function initApp() {
  // Load Dynamic Card Data
  loadCardData();

  // Page load increment
  if (!sessionStorage.getItem('danari_viewed')) {
    stats.views++;
    localStorage.setItem('danari_stats', JSON.stringify(stats));
    sessionStorage.setItem('danari_viewed', 'true');
  }

  // Load language settings
  const savedLang = localStorage.getItem('danari_lang') || 'ko';
  if (dictionary[savedLang]) {
    setLanguage(savedLang);
  }

  // Check saved MetaMask session
  const walletConnected = localStorage.getItem('danari_wallet_connected');
  const savedAddress = localStorage.getItem('danari_wallet_address');
  if (walletConnected === 'true' && savedAddress) {
    updateWalletUI(savedAddress, true);
  }

  // Initialize Exchanged Cards section visibility
  renderExchangedCards();
  setupEventListeners();

  // Register Service Worker for PWA
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('[PWA] Service Worker registered:', reg.scope))
      .catch(err => console.error('[PWA] Service Worker registration failed:', err));
  }
}

// PWA Installation prompt handling
let deferredPrompt;
const installBtn = document.getElementById('pwa-install-btn');

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent default browser banner
  e.preventDefault();
  // Save event
  deferredPrompt = e;
  // Show app-provided install button
  if (installBtn) {
    installBtn.style.display = 'flex';
  }
});

if (installBtn) {
  installBtn.addEventListener('click', () => {
    if (!deferredPrompt) return;
    // Hide button
    installBtn.style.display = 'none';
    // Show prompt
    deferredPrompt.prompt();
    // Check outcome
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('[PWA] User accepted install prompt');
      } else {
        console.log('[PWA] User dismissed install prompt');
      }
      deferredPrompt = null;
    });
  });
}

window.addEventListener('appinstalled', () => {
  if (installBtn) {
    installBtn.style.display = 'none';
  }
  deferredPrompt = null;
  console.log('[PWA] App successfully installed');
});

// ==================== DICTIONARY TRANSLATOR ====================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('danari_lang', lang);

  // Update active buttons state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Apply translations
  const dict = dictionary[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = dict[key];
      } else {
        el.innerText = dict[key];
      }
    }
  });

  // Dynamic layout changes (e.g. meta descriptions / document title)
  document.title = `DANARI Digital Card - ${dict.name}`;
}

// ==================== TOAST MESSAGES ====================
function showToast(messageKey) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const msg = dictionary[currentLang][messageKey] || messageKey;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = msg;

  container.appendChild(toast);

  // Trigger Slide Up & Fade Out Sequence
  setTimeout(() => {
    toast.classList.add('removing');
    toast.addEventListener('transitionend', () => toast.remove());
  }, 2700);
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
  // Language button clicks
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // Stats Modal triggers
  const statsToggle = document.getElementById('stats-toggle');
  const statsModal = document.getElementById('stats-modal');
  if (statsToggle && statsModal) {
    statsToggle.addEventListener('click', () => {
      updateStatsUI();
      openModal(statsModal);
    });
  }

  // Close modals
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', (e) => {
      closeModal(e.target.closest('.modal-overlay'));
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal(overlay);
    });
  });

  // Reset Stats button
  const resetStatsBtn = document.getElementById('reset-stats-btn');
  if (resetStatsBtn) {
    resetStatsBtn.addEventListener('click', () => {
      stats = { ...defaultStats };
      localStorage.setItem('danari_stats', JSON.stringify(stats));
      updateStatsUI();
      showToast('toast_stats_reset');
    });
  }

  // MetaMask wallet connection trigger
  const walletConnectBtn = document.getElementById('wallet-connect-btn');
  if (walletConnectBtn) {
    walletConnectBtn.addEventListener('click', connectMetaMask);
  }

  // MetaMask wallet address clipboard copy
  const copyWalletBtn = document.getElementById('copy-wallet-btn');
  if (copyWalletBtn) {
    copyWalletBtn.addEventListener('click', () => {
      const addressText = document.getElementById('wallet-address').innerText;
      copyToClipboard(addressText);
      showToast('toast_copied_wallet');
    });
  }

  // QR Modal triggers
  const qrModalBtn = document.getElementById('qr-modal-btn');
  const qrModal = document.getElementById('qr-modal');
  if (qrModalBtn && qrModal) {
    qrModalBtn.addEventListener('click', () => {
      loadQRCode();
      openModal(qrModal);
    });
  }

  const copyCardUrlBtn = document.getElementById('copy-card-url-btn');
  if (copyCardUrlBtn) {
    copyCardUrlBtn.addEventListener('click', () => {
      const cardUrl = getCardUrl();
      copyToClipboard(cardUrl);
      showToast('toast_copied_url');
    });
  }

  // Video Modal triggers
  const videoBtn = document.getElementById('video-btn');
  const videoModal = document.getElementById('video-modal');
  const videoElement = document.getElementById('danari-video');
  if (videoBtn && videoModal) {
    videoBtn.addEventListener('click', () => {
      openModal(videoModal);
      if (videoElement) {
        videoElement.currentTime = 0;
        videoElement.play().catch(e => console.log("Auto video play blocked:", e));
      }
    });
  }

  // Close video event to stop playing sound
  if (videoModal) {
    const originalClose = videoModal.querySelector('.modal-close');
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal || e.target === originalClose || e.target.closest('.modal-close')) {
        const videoEl = document.getElementById('danari-video');
        if (videoEl) {
          videoEl.pause();
        }
        const iframeEl = document.getElementById('danari-video-iframe');
        if (iframeEl) {
          const currentSrc = iframeEl.src;
          iframeEl.src = '';
          iframeEl.src = currentSrc;
        }
      }
    });
  }

  // Contact vCard Saver
  const saveVcardBtn = document.getElementById('save-vcard-btn');
  if (saveVcardBtn) {
    saveVcardBtn.addEventListener('click', downloadvCard);
  }

  // Card Exchange Form & Modal triggers
  const exchangeModalBtn = document.getElementById('exchange-modal-btn');
  const exchangeModal = document.getElementById('exchange-modal');
  if (exchangeModalBtn && exchangeModal) {
    exchangeModalBtn.addEventListener('click', () => openModal(exchangeModal));
  }

  const exchangeForm = document.getElementById('exchange-form');
  if (exchangeForm) {
    exchangeForm.addEventListener('submit', handleCardExchangeSubmit);
  }

  // Kakao Share / Web Share trigger
  const kakaoShareBtn = document.getElementById('kakao-share-btn');
  if (kakaoShareBtn) {
    kakaoShareBtn.addEventListener('click', shareDigitalCard);
  }

  // Links Interaction tracking
  document.querySelectorAll('.link-tracking').forEach(el => {
    el.addEventListener('click', () => {
      const trackType = el.getAttribute('data-track');
      incrementStat(trackType);
    });
  });
}

// ==================== MODAL BEHAVIORS ====================
function openModal(modalEl) {
  modalEl.classList.add('active');
  document.body.style.overflow = 'hidden'; // block page scrolling
}

function closeModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.remove('active');
  document.body.style.overflow = ''; // restore scrolling
}

// ==================== VISITOR STATISTICS ====================
function incrementStat(type) {
  if (!type) return;

  if (type === 'call' || type === 'email' || type === 'sms' || type === 'vcard') {
    stats.calls++;
  } else if (type === 'website' || type.startsWith('proj_') || type === 'proposal') {
    stats.website++;
  } else if (type === 'exchange') {
    stats.exchanges++;
  }

  localStorage.setItem('danari_stats', JSON.stringify(stats));
}

function updateStatsUI() {
  document.getElementById('stat-views').innerText = stats.views;
  document.getElementById('stat-calls').innerText = stats.calls;
  document.getElementById('stat-exchanges').innerText = stats.exchanges;
  document.getElementById('stat-website').innerText = stats.website;

  // Render Bar Charts percentages
  const maxVal = Math.max(stats.views, stats.calls, stats.exchanges, stats.website, 1);

  const getWidth = (val) => `${Math.round((val / maxVal) * 100)}%`;

  document.getElementById('bar-view-fill').style.width = getWidth(stats.views);
  document.getElementById('bar-view-val').innerText = stats.views;

  document.getElementById('bar-call-fill').style.width = getWidth(stats.calls);
  document.getElementById('bar-call-val').innerText = stats.calls;

  document.getElementById('bar-exch-fill').style.width = getWidth(stats.exchanges);
  document.getElementById('bar-exch-val').innerText = stats.exchanges;

  document.getElementById('bar-web-fill').style.width = getWidth(stats.website);
  document.getElementById('bar-web-val').innerText = stats.website;
}

// ==================== GET DIGITAL CARD URL ====================
function getCardUrl() {
  return window.location.href;
}

// ==================== QR CODE LOADER ====================
function loadQRCode() {
  const imgEl = document.getElementById('qr-code-img');
  const spinnerEl = document.querySelector('.qr-loading-spinner');
  const displayUrl = document.getElementById('qr-url-display');
  const cardUrl = getCardUrl();

  displayUrl.innerText = cardUrl;

  if (imgEl && spinnerEl) {
    imgEl.style.opacity = '0';
    spinnerEl.style.display = 'block';

    const qrServerUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(cardUrl)}`;
    
    imgEl.src = qrServerUrl;
    imgEl.onload = () => {
      imgEl.style.opacity = '1';
      spinnerEl.style.display = 'none';
    };
  }
}

// ==================== METAMASK INTEGRATION ====================
async function connectMetaMask() {
  const btn = document.getElementById('wallet-connect-btn');
  if (!btn) return;

  // Real connection test
  if (window.ethereum) {
    try {
      btn.innerText = 'Connecting...';
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (accounts.length > 0) {
        const address = accounts[0];
        updateWalletUI(address, true);
        localStorage.setItem('danari_wallet_connected', 'true');
        localStorage.setItem('danari_wallet_address', address);
        showToast('toast_metamask_connected');
      }
    } catch (error) {
      console.error("MetaMask connection failed:", error);
      btn.innerText = dictionary[currentLang].wallet_connect;
    }
  } else {
    // Check if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      const confirmMove = confirm(
        currentLang === 'ko' ? "스마트폰에 설치된 메타마스크 앱을 실행하여 실제 지갑을 연결할까요?\n(확인을 누르면 메타마스크 내 안전 브라우저로 명함이 열립니다.)" :
        currentLang === 'en' ? "Would you like to open MetaMask app to connect your real wallet?" :
        "是否打开 MetaMask 应用以连接您的真实钱包？"
      );
      if (confirmMove) {
        const cleanUrl = window.location.href.replace(/^https?:\/\//, '');
        window.location.href = `https://metamask.app.link/dapp/${cleanUrl}`;
        return;
      }
    }

    // Demonstration fallback flow
    btn.innerText = 'Connecting...';
    btn.disabled = true;
    showToast('toast_metamask_demo');

    setTimeout(() => {
      const demoAddress = '0x71C7656EC7ab88b098defB751B7401B5f6d1476B';
      updateWalletUI(demoAddress, false);
      localStorage.setItem('danari_wallet_connected', 'true');
      localStorage.setItem('danari_wallet_address', demoAddress);
      btn.disabled = false;
    }, 1000);
  }
}

function updateWalletUI(address, isReal) {
  const connectBtn = document.getElementById('wallet-connect-btn');

  if (connectBtn) {
    const formatted = `${address.slice(0, 6)}...${address.slice(-4)}`;
    connectBtn.innerText = isReal ? `${formatted} 연결됨` : dictionary[currentLang].wallet_connect_demo;
    connectBtn.classList.add('connected');
  }
}

// ==================== CARD EXCHANGE OPERATION ====================
function handleCardExchangeSubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById('exch-name');
  const companyInput = document.getElementById('exch-company');
  const phoneInput = document.getElementById('exch-phone');
  const emailInput = document.getElementById('exch-email');

  if (!nameInput || !phoneInput || !emailInput) return;

  const cardData = {
    id: Date.now(),
    name: nameInput.value.trim(),
    company: companyInput.value.trim() || '-',
    phone: phoneInput.value.trim(),
    email: emailInput.value.trim(),
    timestamp: new Date().toLocaleDateString()
  };

  exchangedCards.unshift(cardData);
  localStorage.setItem('danari_exchanged_cards', JSON.stringify(exchangedCards));

  // Reset form
  e.target.reset();

  // Close modal
  const exchangeModal = document.getElementById('exchange-modal');
  closeModal(exchangeModal);

  // Update lists
  renderExchangedCards();

  // Stats increment
  incrementStat('exchange');
  showToast('toast_exch_success');
}

function renderExchangedCards() {
  const section = document.getElementById('exchanged-cards-section');
  const listEl = document.getElementById('exchanged-list');

  if (!section || !listEl) return;

  if (exchangedCards.length === 0) {
    section.style.display = 'none';
    return;
  }

  section.style.display = 'block';
  listEl.innerHTML = '';

  exchangedCards.forEach(card => {
    const cardItem = document.createElement('div');
    cardItem.className = 'exchanged-card-item';

    cardItem.innerHTML = `
      <button class="exch-delete-btn" onclick="deleteExchangedCard(${card.id})">&times;</button>
      <div class="exch-item-header">
        <span class="exch-name-title">${escapeHTML(card.name)}</span>
        <span class="exch-company-title">${escapeHTML(card.company)}</span>
      </div>
      <div class="exch-details">
        <a href="tel:${escapeHTML(card.phone)}">📱 ${escapeHTML(card.phone)}</a>
        <a href="mailto:${escapeHTML(card.email)}">📧 ${escapeHTML(card.email)}</a>
        <span>📅 ${card.timestamp}</span>
      </div>
    `;

    listEl.appendChild(cardItem);
  });
}

// Bind delete function globally
window.deleteExchangedCard = function(id) {
  exchangedCards = exchangedCards.filter(card => card.id !== id);
  localStorage.setItem('danari_exchanged_cards', JSON.stringify(exchangedCards));
  renderExchangedCards();
};

// ==================== VCARD GENERATOR ====================
function downloadvCard() {
  showToast('toast_vcard_download');

  let vcardData = `BEGIN:VCARD
VERSION:3.0
N:;${activeCardData.name};;;
FN:${activeCardData.name}
ORG:DANARI
TITLE:${activeCardData.position}
TEL;TYPE=CELL,VOICE:${activeCardData.phone}
EMAIL;TYPE=PREF,INTERNET:${activeCardData.email}
URL;TYPE=WORK:${activeCardData.web.startsWith('http') ? activeCardData.web : 'https://' + activeCardData.web}`;

  if (activeCardData.homepage) {
    const homepageUrl = activeCardData.homepage.startsWith('http') ? activeCardData.homepage : 'https://' + activeCardData.homepage;
    vcardData += `\nURL;TYPE=HOME:${homepageUrl}`;
  }

  vcardData += `\nNOTE:${activeCardData.intro}
END:VCARD`;

  const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  
  link.href = url;
  link.setAttribute('download', `${activeCardData.name}_DANARI.vcf`);
  document.body.appendChild(link);
  
  // Trigger download click
  link.click();
  
  // Clean up
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// ==================== COOPERATION / SHARING API ====================
async function shareDigitalCard() {
  const cardUrl = getCardUrl();
  const shareTitle = `DANARI CEO ${activeCardData.name} 디지털 명함`;
  const shareText = activeCardData.intro;

  if (navigator.share) {
    try {
      await navigator.share({
        title: shareTitle,
        text: shareText,
        url: cardUrl
      });
    } catch (error) {
      console.log('Web Share API aborted or failed:', error);
      copyAndToast(cardUrl);
    }
  } else {
    // Normal browser clipboard share
    copyAndToast(cardUrl);
  }
}

function copyAndToast(url) {
  copyToClipboard(url);
  showToast('toast_copied_url');
}

// ==================== CORE HELPER UTILITIES ====================
function copyToClipboard(text) {
  // Use modern clipboard API if available
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).catch(err => {
      console.error("Clipboard copy failed:", err);
      fallbackCopyText(text);
    });
  } else {
    fallbackCopyText(text);
  }
}

function fallbackCopyText(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed'; // prevent scroll to bottom
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Fallback clipboard write failed:', err);
  }
  document.body.removeChild(textArea);
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
