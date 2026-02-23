import {
  uiContent as uiContentEn,
  fullStackProjects as fullStackProjectsEn,
  wordpressProjects as wordpressProjectsEn,
  juniorProjects as juniorProjectsEn,
  stack as stackEn,
  aboutMeCards as aboutMeCardsEn,
  currentStack as currentStackEn,
} from "../data/data.js";
import {
  uiContent as uiContentEs,
  fullStackProjects as fullStackProjectsEs,
  wordpressProjects as wordpressProjectsEs,
  juniorProjects as juniorProjectsEs,
  stack as stackEs,
  aboutMeCards as aboutMeCardsEs,
  currentStack as currentStackEs,
} from "../data/data.es.js";

const JOYSTICK_ICON_PATH = "../assets/svgs/joystick.svg";
const LANGUAGE_STORAGE_KEY = "portfolio-language";
const DEFAULT_LANGUAGE = "en";

const localizedContent = {
  en: {
    ui: uiContentEn,
    fullStackProjects: fullStackProjectsEn,
    wordpressProjects: wordpressProjectsEn,
    juniorProjects: juniorProjectsEn,
    stack: stackEn,
    aboutMeCards: aboutMeCardsEn,
    currentStack: currentStackEn,
  },
  es: {
    ui: uiContentEs,
    fullStackProjects: fullStackProjectsEs,
    wordpressProjects: wordpressProjectsEs,
    juniorProjects: juniorProjectsEs,
    stack: stackEs,
    aboutMeCards: aboutMeCardsEs,
    currentStack: currentStackEs,
  },
};

const JOYSTICK_ICON_FALLBACK = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 30" width="20" height="30" fill="none" style="image-rendering: pixelated;">
    <rect x="0" y="24" width="20" height="6" fill="#66004c"/>
    <rect x="0" y="24" width="20" height="1" fill="#8a3f73"/>
    <rect x="0" y="28" width="20" height="2" fill="#3f002f"/>
    <rect x="0" y="12" width="20" height="12" fill="#e2cfe2"/>
    <rect x="0" y="23" width="20" height="1" fill="#f0e2f0"/>
    <rect x="4" y="19" width="12" height="2" fill="#5a003f"/>
    <rect x="6" y="17" width="8" height="2" fill="#5a003f"/>
    <rect x="8" y="16" width="4" height="1" fill="#5a003f"/>
    <g class="joystick-handle">
      <rect x="9" y="9" width="2" height="7" fill="#7f2b68"/>
      <rect x="9" y="10" width="1" height="6" fill="#bf97bf"/>
      <rect x="7" y="6" width="6" height="3" fill="#5a003f"/>
      <rect x="8" y="9" width="4" height="1" fill="#5a003f"/>
      <rect x="7" y="3" width="6" height="3" fill="#7a2f63"/>
      <rect x="8" y="2" width="4" height="1" fill="#7a2f63"/>
      <rect x="10" y="3" width="2" height="2" fill="#d8bfd8"/>
    </g>
  </svg>
`;

let joystickIconMarkup = JOYSTICK_ICON_FALLBACK;
let currentData = localizedContent[DEFAULT_LANGUAGE];
let menuStateUpdater = null;

async function loadJoystickIcon() {
  try {
    const response = await fetch(JOYSTICK_ICON_PATH);
    if (!response.ok) {
      throw new Error(`Failed to load joystick SVG: ${response.status}`);
    }
    joystickIconMarkup = await response.text();
  } catch (error) {
    console.warn("Using fallback joystick SVG markup.", error);
    joystickIconMarkup = JOYSTICK_ICON_FALLBACK;
  }
}

function injectStaticJoystickIcons() {
  document.querySelectorAll("[data-joystick-icon]").forEach((slot) => {
    slot.innerHTML = joystickIconMarkup;
  });
}

function setElementText(id, value) {
  const element = document.getElementById(id);
  if (element && typeof value === "string") {
    element.textContent = value;
  }
}

function setElementHtml(id, value) {
  const element = document.getElementById(id);
  if (element && typeof value === "string") {
    element.innerHTML = value;
  }
}

function setElementAttribute(id, attribute, value) {
  const element = document.getElementById(id);
  if (element && typeof value === "string") {
    element.setAttribute(attribute, value);
  }
}

function updateLanguageButtons(language) {
  document.querySelectorAll(".lang-button").forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function applyStaticContent(content, isMenuOpen = false) {
  const { ui } = content;

  document.documentElement.lang = ui.htmlLang;
  document.title = ui.metaTitle;

  setElementAttribute(
    "menu-toggle",
    "aria-label",
    isMenuOpen ? ui.menu.toggleClose : ui.menu.toggleOpen,
  );
  setElementText("nav-cv-link", ui.menu.cv);
  setElementText("nav-portfolio-link", ui.menu.portfolio);
  setElementText("nav-about-link", ui.menu.about);
  setElementText("stack-menu", ui.menu.currentStack);
  setElementText("nav-googleplus-link", ui.menu.googlePlus);
  setElementAttribute("nav-googleplus-link", "aria-label", ui.menu.openGooglePlusJoke);
  setElementAttribute("nav-googleplus-link", "title", ui.menu.openGooglePlusJoke);
  setElementAttribute("language-switcher", "aria-label", ui.menu.languageSwitcherLabel);

  const englishButton = document.querySelector('.lang-button[data-language="en"]');
  const spanishButton = document.querySelector('.lang-button[data-language="es"]');
  if (englishButton) {
    englishButton.setAttribute("aria-label", ui.menu.switchToEnglish);
    englishButton.setAttribute("title", ui.menu.switchToEnglish);
  }
  if (spanishButton) {
    spanishButton.setAttribute("aria-label", ui.menu.switchToSpanish);
    spanishButton.setAttribute("title", ui.menu.switchToSpanish);
  }

  setElementAttribute("nav-image", "aria-label", ui.accessibility.navImage);
  setElementAttribute("laptop-image", "alt", ui.accessibility.laptopImage);
  setElementAttribute("imac-image", "alt", ui.accessibility.imacImage);
  setElementAttribute("iphone-image", "alt", ui.accessibility.iphoneImage);
  setElementAttribute("space-image", "alt", ui.accessibility.spaceImage);
  setElementAttribute("alterego-image", "alt", ui.accessibility.alteregoImage);

  setElementText("hero-name", ui.hero.name);
  setElementText("hero-old-text", ui.hero.oldText);
  setElementText("hero-new-text", ui.hero.newText);
  setElementHtml("hero-description", ui.hero.descriptionHtml);
  setElementHtml("watchme", ui.hero.watchMeHtml);

  setElementHtml("section-two-title", ui.sectionTwo.titleHtml);
  setElementText("section-two-button-cv", ui.sectionTwo.cvButton);
  setElementText("section-two-button-portfolio", ui.sectionTwo.portfolioButton);

  setElementText("last-projects-title", ui.sections.lastProjectsTitle);
  setElementText("last-projects-subtitle", ui.sections.lastProjectsSubtitle);
  setElementText("wordpress-title", ui.sections.wordpressTitle);
  setElementText("wordpress-subtitle", ui.sections.wordpressSubtitle);
  setElementText("about-section-title", ui.sections.aboutTitle);
  setElementText("about-section-subtitle", ui.sections.aboutSubtitle);
  setElementText("stack-section-title", ui.sections.stackTitle);
  setElementText("stack-section-subtitle", ui.sections.stackSubtitle);
  setElementText("contact-title", ui.sections.contactTitle);
  setElementText("contact-subtitle", ui.sections.contactSubtitle);

  setElementHtml("form-legend", ui.form.legendHtml);
  setElementText("form-name-label", ui.form.nameLabel);
  setElementAttribute("name", "placeholder", ui.form.namePlaceholder);
  setElementText("form-email-label", ui.form.emailLabel);
  setElementAttribute("email", "placeholder", ui.form.emailPlaceholder);
  setElementText("form-message-label", ui.form.messageLabel);
  setElementAttribute("message", "placeholder", ui.form.messagePlaceholder);
  setElementText("form-privacy-title", ui.form.privacyTitle);
  setElementHtml("form-privacy-copy", ui.form.privacyBodyHtml);
  setElementText("form-privacy-checkbox", ui.form.agree);
  setElementText("tooltiptext", ui.form.tooltip);

  const submitButton = document.getElementById("submit-button-form");
  if (submitButton) {
    submitButton.value = ui.form.submit;
  }

  setElementAttribute("back-to-top-link", "title", ui.footer.backToTop);
  setElementAttribute("back-to-top-link", "aria-label", ui.footer.backToTop);
  setElementText("copyright-label", ui.footer.copyrightLabel);
  setElementText("elias", ` ${ui.footer.authorName}`);
  setElementText("copyright-separator", ui.footer.separator);
  setElementText("copyright-role", ui.footer.copyrightRole);

  setElementText("modal-title", ui.modal.title);
  setElementHtml("modal-body-copy", ui.modal.bodyHtml);
  setElementText("modal-confirm-button", ui.modal.confirmButton);
  setElementText("learn-frontend", ui.modal.learnFrontend);

  setElementText("googleplus-joke-title", ui.googlePlusJoke.title);
  setElementText("googleplus-joke-text", ui.googlePlusJoke.text);
  setElementText("googleplus-joke-close", ui.googlePlusJoke.close);
  setElementAttribute("googleplus-joke-close", "aria-label", ui.googlePlusJoke.close);
  setElementAttribute("googleplus-joke-image", "alt", ui.googlePlusJoke.imageAlt);

  updateLanguageButtons(content.ui.locale);
}

// ============================================
// RENDERING FUNCTIONS
// ============================================

/**
 * Render current stack items
 */
function renderCurrentStack(stackData, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = stackData
    .map(
      (item) => `
        <div class="tech-item">
            <img class="${item.imgClass}" src="${item.src}" alt="${item.alt}">
        </div>
    `,
    )
    .join("");
}

/**
 * Render project cards (for Full Stack and WordPress sections)
 */
function renderProjects(projects, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = projects
    .map(
      (project) => `
        <div class="image project-card" id="${project.id}">
            <div class="image__overlay project-card__overlay image__overlay--blur">
                <img class="image__img project-card__icon" src="../images/personal/space.jpg" alt="icon">
                <div class="image__title project-card__title">${project.title}</div>
                <p class="image__description project-card__description">${project.description}</p>
                <button
                    type="button"
                    class="button-section-three"
                    onclick="window.open('${project.url}', '_blank', 'noopener')"
                >
                    <span>${project.buttonText}</span>
                    ${joystickIconMarkup}
                </button>
            </div>
        </div>
    `,
    )
    .join("");
}

/**
 * Render stack cards
 */
function renderStack(stackItems, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = stackItems
    .map(
      (service) => `
        <div class="card">
            <img class="card-image" src="../images/personal/space.jpg" alt="icon">
            <h4>${service.title}</h4>
            ${service.description.map((desc) => `<p>${desc}</p>`).join("")}
            <div class="button-container">
                <button type="button" class="card-button" onclick="window.location.href='${service.buttonUrl}'">
                    <span>${service.buttonText}</span>
                    ${joystickIconMarkup}
                </button>
            </div>
        </div>
    `,
    )
    .join("");
}

/**
 * Render about me cards
 */
function renderAboutCards(cards, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = cards
    .map((card) => {
      const descriptionHtml = Array.isArray(card.description)
        ? card.description.map((paragraph) => `<p>${paragraph}</p>`).join("")
        : `<p>${card.description}</p>`;

      return `
        <div class="portfolio-card">
            <h4>${card.title}</h4>
            ${descriptionHtml}
            <button
                type="button"
                class="button-section-four"
                onclick="window.open('${card.buttonUrl}', '_blank', 'noopener')"
            >
                <span>${card.buttonText}</span>
                ${joystickIconMarkup}
            </button>
        </div>
    `;
    })
    .join("");
}

function persistLanguage(language) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch (error) {
    console.warn("Unable to persist language preference.", error);
  }
}

function getInitialLanguage() {
  try {
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (storedLanguage && localizedContent[storedLanguage]) {
      return storedLanguage;
    }
  } catch (error) {
    console.warn("Unable to read language preference.", error);
  }

  return navigator.language?.toLowerCase().startsWith("es") ? "es" : DEFAULT_LANGUAGE;
}

function renderLocalizedContent(language, isMenuOpen = false) {
  const safeLanguage = localizedContent[language] ? language : DEFAULT_LANGUAGE;
  currentData = localizedContent[safeLanguage];

  applyStaticContent(currentData, isMenuOpen);

  renderProjects(currentData.fullStackProjects, "fullstack-projects-container");
  renderProjects(currentData.wordpressProjects, "wordpress-projects-container");
  // renderProjects(currentData.juniorProjects, "junior-projects-container");
  renderStack(currentData.stack, "stack-container");
  renderAboutCards(currentData.aboutMeCards, "about-cards-container");
  renderCurrentStack(currentData.currentStack, "current-stack-container");

  formInputNotEmpty();
  persistLanguage(safeLanguage);
}

// ============================================
// FORM VALIDATION
// ============================================
function formInputNotEmpty() {
  const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const mailInput = document.getElementById("email");
  const nameInput = document.getElementById("name");
  const messageInput = document.getElementById("message");
  const privacyInput = document.getElementById("privacy");
  const submitButton = document.getElementById("submit-button-form");
  const tooltip = document.getElementById("tooltiptext");

  if (
    !nameInput ||
    !mailInput ||
    !messageInput ||
    !privacyInput ||
    !submitButton ||
    !tooltip
  ) {
    return;
  }

  if (
    nameInput.value === "" ||
    mailInput.value === "" ||
    !mailInput.value.match(emailReg) ||
    messageInput.value === "" ||
    !privacyInput.checked
  ) {
    submitButton.disabled = true;
    tooltip.style.display = "inline-block";
  } else {
    submitButton.disabled = false;
    tooltip.style.display = "none";
  }
}

window.formInputNotEmpty = formInputNotEmpty;

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener("DOMContentLoaded", async function () {
  const burgerButton = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("main-menu");
  const googlePlusLink = document.getElementById("nav-googleplus-link");
  const googlePlusModal = document.getElementById("googleplus-joke-modal");

  let isMenuOpen = false;
  const setGooglePlusModalState = (isOpen) => {
    if (!googlePlusModal) return;
    googlePlusModal.hidden = !isOpen;
    googlePlusModal.setAttribute("aria-hidden", String(!isOpen));
    googlePlusModal.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("googleplus-open", isOpen);
  };

  if (burgerButton && mobileMenu) {
    menuStateUpdater = (isOpen) => {
      isMenuOpen = isOpen;
      mobileMenu.classList.toggle("is-open", isOpen);
      burgerButton.setAttribute("aria-expanded", String(isOpen));
      burgerButton.setAttribute(
        "aria-label",
        isOpen ? currentData.ui.menu.toggleClose : currentData.ui.menu.toggleOpen,
      );
      document.body.classList.toggle("menu-open", isOpen);
    };

    burgerButton.addEventListener("click", function () {
      menuStateUpdater(!mobileMenu.classList.contains("is-open"));
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", function () {
        menuStateUpdater(false);
      });
    });

    document.addEventListener("pointerdown", function (event) {
      if (!mobileMenu.classList.contains("is-open")) return;

      const target = event.target;
      if (mobileMenu.contains(target) || burgerButton.contains(target)) return;

      menuStateUpdater(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        if (googlePlusModal?.classList.contains("is-open")) {
          setGooglePlusModalState(false);
          return;
        }
        menuStateUpdater(false);
      }
    });
  }

  if (googlePlusLink && googlePlusModal) {
    googlePlusLink.addEventListener("click", function (event) {
      event.preventDefault();
      if (menuStateUpdater) {
        menuStateUpdater(false);
      }
      setGooglePlusModalState(true);
    });

    googlePlusModal.querySelectorAll("[data-googleplus-close]").forEach((control) => {
      control.addEventListener("click", function () {
        setGooglePlusModalState(false);
      });
    });
  }

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.addEventListener("click", function () {
      const targetLanguage = button.dataset.language;
      renderLocalizedContent(targetLanguage, false);
      if (menuStateUpdater) {
        menuStateUpdater(false);
      }
    });
  });

  // Set current year
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.innerHTML = new Date().getFullYear();
  }

  await loadJoystickIcon();
  injectStaticJoystickIcons();

  const initialLanguage = getInitialLanguage();
  renderLocalizedContent(initialLanguage, isMenuOpen);
});
