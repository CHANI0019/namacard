// ==================== STATE & DEFAULTS ====================
const defaultCardData = {
  name: "정찬희",
  position: "대표이사",
  intro: "인공지능 기반 자산관리 및 투자 솔루션 기업 다나리(DANARI)",
  profileUrl: "",
  profileBase64: "",
  phone: "010-3335-8245",
  email: "ceodanari@naver.com",
  web: "danari.co.kr",
  homepage: "ceo.danari.co.kr",
  wallet: "0x6E0cc95003240fD75270F9645B2cB6a32545Ea99",
  videoUrl: "",
  videoBase64: "",
  pdfUrl: "",
  proposalBase64: "",
  projects: [ 
    { name: "DANARI AI", desc: "9인의 Agent가 실시간으로 주식 시장을 분석합니다." },
    { name: "DANARI AI Stock Auto Trading Bot", desc: "주식자동매매로봇" },
    { name: "DANARI 자율주행", desc: "자율주행 로봇" },
    { name: "자율생성 AI 기반 회계시스템", desc: "생성형 AI로 세금신고부터 재무제표를 자동생성합니다."},
    { name: "DANARI NFT", desc: "" },
    { name: "DANARI Stablecoin", desc: "" }
  ]
};

let currentData = { ...defaultCardData };

function readFormValuesToCurrentData() {
  const getVal = (id) => {
    const el = document.getElementById(id);
    return el ? el.value.trim() : "";
  };

  currentData.name = getVal('input-name');
  currentData.position = getVal('input-position');
  currentData.intro = getVal('input-intro');
  currentData.profileUrl = getVal('input-profile-url');
  
  currentData.phone = getVal('input-phone');
  currentData.email = getVal('input-email');
  currentData.web = getVal('input-web');
  currentData.homepage = getVal('input-homepage');
  currentData.wallet = getVal('input-wallet');
  currentData.videoUrl = getVal('input-video-url');
  currentData.pdfUrl = getVal('input-pdf-url');

  if (!currentData.projects) currentData.projects = [];
  for (let i = 0; i < 4; i++) {
    currentData.projects[i] = {
      name: getVal(`input-p${i}-name`),
      desc: getVal(`input-p${i}-desc`)
    };
  }
}

function saveToLocalStorageSilently() {
  readFormValuesToCurrentData();
  try {
    localStorage.setItem('danari_my_card', JSON.stringify(currentData));
  } catch (e) {
    console.warn("Auto-save failed:", e.message);
  }
}

// Load saved card from localStorage if available
const savedCard = localStorage.getItem('danari_my_card');
if (savedCard) {
  try {
    currentData = JSON.parse(savedCard);
  } catch (e) {
    console.error("Error parsing saved card:", e);
  }
}

// ==================== DOM INITIALIZATION ====================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEditor);
} else {
  initEditor();
}

function initEditor() {
  initFormValues();
  setupInputListeners();
  setupTabListeners();
  setupActionListeners();
  updatePreview();
}

// ==================== FUNCTIONS ====================

// Pre-fill form fields
function initFormValues() {
  document.getElementById('input-name').value = currentData.name || '';
  document.getElementById('input-position').value = currentData.position || '';
  document.getElementById('input-intro').value = currentData.intro || '';
  document.getElementById('input-profile-url').value = currentData.profileUrl || '';
  
  document.getElementById('input-phone').value = currentData.phone || '';
  document.getElementById('input-email').value = currentData.email || '';
  document.getElementById('input-web').value = currentData.web || '';
  document.getElementById('input-homepage').value = currentData.homepage || '';
  document.getElementById('input-wallet').value = currentData.wallet || '';
  document.getElementById('input-video-url').value = currentData.videoUrl || '';
  document.getElementById('input-pdf-url').value = currentData.pdfUrl || '';

  // Projects
  const projs = currentData.projects || [];
  for (let i = 0; i < 4; i++) {
    const proj = projs[i] || { name: '', desc: '' };
    document.getElementById(`input-p${i}-name`).value = proj.name || '';
    document.getElementById(`input-p${i}-desc`).value = proj.desc || '';
  }
}

// Bind live preview
function setupInputListeners() {
  const bindings = [
    { id: 'input-name', targetId: 'prev-name', field: 'name' },
    { id: 'input-position', targetId: 'prev-position', field: 'position' },
    { id: 'input-intro', targetId: 'prev-intro', field: 'intro' },
    { id: 'input-phone', targetId: 'prev-phone', field: 'phone' },
    { id: 'input-email', targetId: 'prev-email', field: 'email' },
    { id: 'input-web', targetId: 'prev-web', field: 'web' },
    { id: 'input-homepage', targetId: 'prev-homepage', field: 'homepage', custom: (val) => {
        const container = document.getElementById('prev-homepage-container');
        if (container) {
          if (val) {
            container.style.display = 'flex';
            const prevVal = document.getElementById('prev-homepage');
            if (prevVal) prevVal.innerText = val;
          } else {
            container.style.display = 'none';
          }
        }
    }},
    { id: 'input-profile-url', field: 'profileUrl', custom: (val) => {
        currentData.profileBase64 = ""; // Clear base64 when URL is entered
        const fileInput = document.getElementById('input-profile-file');
        if (fileInput) fileInput.value = ''; // Reset file input

        const img = document.getElementById('prev-profile-img');
        if (img) img.src = val ? val : 'DNR.png';
    }},
    { id: 'input-wallet', targetId: 'prev-wallet', field: 'wallet', custom: (val) => {
        const txt = document.getElementById('prev-wallet');
        if (txt) {
          if (!val) {
            txt.innerText = '0x0000...0000';
          } else if (val.length > 12) {
            txt.innerText = `${val.slice(0, 6)}...${val.slice(-4)}`;
          } else {
            txt.innerText = val;
          }
        }
    }},
    { id: 'input-video-url', field: 'videoUrl', custom: (val) => {
        currentData.videoBase64 = ""; // Clear base64 when URL is entered
        const videoFileInput = document.getElementById('input-video-file');
        if (videoFileInput) videoFileInput.value = ''; // Reset file input
    }},
    { id: 'input-pdf-url', field: 'pdfUrl' }
  ];

  bindings.forEach(binding => {
    const el = document.getElementById(binding.id);
    if (!el) return;

    el.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      currentData[binding.field] = val;

      if (binding.custom) {
        binding.custom(val);
      } else if (binding.targetId) {
        const target = document.getElementById(binding.targetId);
        if (target) target.innerText = val;
      }
      saveToLocalStorageSilently();
    });
  });

  // Profile Image File Upload Reader with Automatic Canvas Compression
  const profileFileInput = document.getElementById('input-profile-file');
  if (profileFileInput) {
    profileFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      if (!file.type.startsWith('image/')) {
        alert("이미지 파일만 업로드할 수 있습니다.");
        profileFileInput.value = '';
        return;
      }

      if (file.size > 15 * 1024 * 1024) {
        alert("프로필 이미지 파일은 최대 15MB 이하로 업로드 가능합니다.");
        profileFileInput.value = '';
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          const MAX_WIDTH = 300;
          const MAX_HEIGHT = 300;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          // Compress to JPEG with 80% quality (greatly reduces local storage footprint)
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.8);

          currentData.profileBase64 = compressedDataUrl;
          currentData.profileUrl = ""; // Clear URL when file is uploaded
          const urlInput = document.getElementById('input-profile-url');
          if (urlInput) urlInput.value = ''; // Reset URL input

          const prevImg = document.getElementById('prev-profile-img');
          if (prevImg) prevImg.src = compressedDataUrl;

          saveToLocalStorageSilently();
          showToast("프로필 사진이 최적화되어 실시간 반영되었습니다.");
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  // Local Video File Upload Reader
  const videoFileInput = document.getElementById('input-video-file');
  if (videoFileInput) {
    videoFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      if (!file.type.startsWith('video/')) {
        alert("동영상 파일만 업로드할 수 있습니다.");
        videoFileInput.value = '';
        return;
      }

      if (file.size > 3.0 * 1024 * 1024) {
        alert("로컬 보관용 동영상 파일의 용량은 최대 3MB 이하로 제한됩니다.");
        videoFileInput.value = '';
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        currentData.videoBase64 = event.target.result;
        currentData.videoUrl = ""; // Clear URL when file is uploaded
        const urlInput = document.getElementById('input-video-url');
        if (urlInput) urlInput.value = ''; // Reset URL input
        saveToLocalStorageSilently();
        showToast("소개 동영상 파일이 성공적으로 로드되었습니다.");
      };
      reader.readAsDataURL(file);
    });
  }

  // Local PDF File Upload Reader
  const fileInput = document.getElementById('input-pdf-file');
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      if (file.type !== 'application/pdf') {
        alert("PDF 파일만 업로드할 수 있습니다.");
        fileInput.value = '';
        return;
      }

      if (file.size > 2.5 * 1024 * 1024) {
        alert("로컬 보관용 PDF 파일의 용량은 최대 2.5MB 이하로 제한됩니다.");
        fileInput.value = '';
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        currentData.proposalBase64 = event.target.result;
        saveToLocalStorageSilently();
        showToast("제안서 PDF 파일이 성공적으로 로드되었습니다.");
      };
      reader.readAsDataURL(file);
    });
  }

  // Project inputs binding
  for (let i = 0; i < 4; i++) {
    const nameEl = document.getElementById(`input-p${i}-name`);
    const descEl = document.getElementById(`input-p${i}-desc`);

    if (nameEl) {
      nameEl.addEventListener('input', (e) => {
        if (!currentData.projects[i]) currentData.projects[i] = { name: '', desc: '' };
        currentData.projects[i].name = e.target.value.trim();
        const prevEl = document.getElementById(`prev-p${i}-name`);
        if (prevEl) prevEl.innerText = e.target.value.trim() || `프로젝트 ${i+1}`;
        saveToLocalStorageSilently();
      });
    }

    if (descEl) {
      descEl.addEventListener('input', (e) => {
        if (!currentData.projects[i]) currentData.projects[i] = { name: '', desc: '' };
        currentData.projects[i].desc = e.target.value.trim();
        const prevEl = document.getElementById(`prev-p${i}-desc`);
        if (prevEl) prevEl.innerText = e.target.value.trim() || `상세 설명이 나타납니다.`;
        saveToLocalStorageSilently();
      });
    }
  }
}

// Setup Project Form Tab selection
function setupTabListeners() {
  document.querySelectorAll('.proj-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all tabs
      document.querySelectorAll('.proj-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.project-tab-pane').forEach(p => p.classList.remove('active'));

      // Set active
      btn.classList.add('active');
      const tabIdx = btn.getAttribute('data-tab');
      const pane = document.querySelector(`.project-tab-pane[data-pane="${tabIdx}"]`);
      if (pane) pane.classList.add('active');
    });
  });
}

// Action Button Actions
function setupActionListeners() {
  const saveLocalBtn = document.getElementById('btn-save-local');
  const copyLinkBtn = document.getElementById('btn-copy-link');

  if (saveLocalBtn) {
    saveLocalBtn.addEventListener('click', saveToLocalStorage);
  }

  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', copyShareableLink);
  }
}

// Update the full preview card once on load
function updatePreview() {
  document.getElementById('prev-name').innerText = currentData.name;
  document.getElementById('prev-position').innerText = currentData.position;
  document.getElementById('prev-intro').innerText = currentData.intro;
  
  if (currentData.profileBase64) {
    document.getElementById('prev-profile-img').src = currentData.profileBase64;
  } else {
    document.getElementById('prev-profile-img').src = currentData.profileUrl ? currentData.profileUrl : 'DNR.png';
  }
  
  document.getElementById('prev-phone').innerText = currentData.phone;
  document.getElementById('prev-email').innerText = currentData.email;
  document.getElementById('prev-web').innerText = currentData.web;

  const homepageContainer = document.getElementById('prev-homepage-container');
  if (homepageContainer) {
    if (currentData.homepage) {
      homepageContainer.style.display = 'flex';
      const prevHomepage = document.getElementById('prev-homepage');
      if (prevHomepage) prevHomepage.innerText = currentData.homepage;
    } else {
      homepageContainer.style.display = 'none';
    }
  }

  const wall = currentData.wallet;
  document.getElementById('prev-wallet').innerText = (wall && wall.length > 12) ? `${wall.slice(0, 6)}...${wall.slice(-4)}` : (wall || '0x0000...0000');

  // Projects
  for (let i = 0; i < 4; i++) {
    const proj = currentData.projects[i] || { name: '', desc: '' };
    document.getElementById(`prev-p${i}-name`).innerText = proj.name || `프로젝트 ${i+1}`;
    document.getElementById(`prev-p${i}-desc`).innerText = proj.desc || `상세 설명이 나타납니다.`;
  }
}

// Save Card details locally
function saveToLocalStorage() {
  readFormValuesToCurrentData();
  try {
    localStorage.setItem('danari_my_card', JSON.stringify(currentData));
    showToast("내 컴퓨터 브라우저에 기본 명함으로 안전하게 저장되었습니다.");
  } catch (e) {
    if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
      alert("브라우저 저장 공간 한도(5MB)를 초과했습니다. 직접 업로드한 이미지, 동영상, PDF 파일의 크기를 줄이거나 주소(URL) 형태로 입력해 주세요.");
    } else {
      alert("저장 중 오류가 발생했습니다: " + e.message);
    }
  }
}

// Generate URL query with Unicode base64 and copy to clipboard
function copyShareableLink() {
  readFormValuesToCurrentData();
  // Compress and serialize data safely for UTF-8 Korean/Chinese
  const sharedData = { ...currentData };
  delete sharedData.proposalBase64; // Remove large binary PDF data from URL parameters
  delete sharedData.profileBase64; // Remove large binary profile image from URL parameters
  delete sharedData.videoBase64; // Remove large binary video from URL parameters
  const jsonStr = JSON.stringify(sharedData);
  const base64Str = btoa(unescape(encodeURIComponent(jsonStr)));

  // Generate URL
  const basePath = window.location.origin + window.location.pathname.replace('edit.html', 'index.html');
  const shareableUrl = `${basePath}?c=${base64Str}`;

  copyTextToClipboard(shareableUrl);
}

// Safe copy script
function copyTextToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
      .then(() => showToast("공유용 고유 명함 링크가 복사되었습니다! 카톡이나 문자 등으로 공유하세요."))
      .catch(err => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast("공유용 고유 명함 링크가 복사되었습니다! 카톡이나 문자 등으로 공유하세요.");
  } catch (err) {
    alert("복사에 실패했습니다. 수동으로 복사해주세요: " + text);
  }
  document.body.removeChild(textArea);
}

// Toast Notification
function showToast(message) {
  const container = document.getElementById('editor-toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('removing');
    toast.addEventListener('transitionend', () => toast.remove());
  }, 2700);
}
