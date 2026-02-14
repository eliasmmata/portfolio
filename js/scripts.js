import {
  fullStackProjects,
  wordpressProjects,
  juniorProjects,
  stack,
  aboutMeCards,
  currentStack,
} from "../data/data.js";

const JOYSTICK_ICON_PATH = "../assets/svgs/joystick.svg";
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
        <div class="image" id="${project.id}">
            <div class="image__overlay image__overlay--blur">
                <img class="image__img" src="../images/personal/space.jpg" alt="icon">
                <div class="image__title">${project.title}</div>
                <p class="image__description">${project.description}</p>
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
function renderStack(stack, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = stack
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

// ============================================
// FORM VALIDATION
// ============================================
function formInputNotEmpty() {
  var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var $$mail = document.getElementById("email");

  if (
    document.getElementById("name").value === "" ||
    document.getElementById("email").value === "" ||
    !$$mail.value.match(emailReg) ||
    document.getElementById("message").value === "" ||
    !document.getElementById("privacy").checked
  ) {
    document.getElementById("submit-button-form").disabled = true;
    document.getElementById("tooltiptext").style.display = "inline-block";
  } else {
    document.getElementById("submit-button-form").disabled = false;
    document.getElementById("tooltiptext").style.display = "none";
  }
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener("DOMContentLoaded", async function () {
  const burgerButton = document.querySelector(".retro-burger");
  const mobileMenu = document.getElementById("main-menu");

  if (burgerButton && mobileMenu) {
    burgerButton.addEventListener("click", function () {
      const isOpen = mobileMenu.classList.toggle("is-open");
      burgerButton.setAttribute("aria-expanded", String(isOpen));
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("is-open");
        burgerButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Set current year
  document.getElementById("year").innerHTML = new Date().getFullYear();
  await loadJoystickIcon();
  injectStaticJoystickIcons();

  // Render all sections
  renderProjects(fullStackProjects, "fullstack-projects-container");
  renderProjects(wordpressProjects, "wordpress-projects-container");
  // renderProjects(juniorProjects, 'junior-projects-container');
  renderStack(stack, "stack-container");
  renderAboutCards(aboutMeCards, "about-cards-container");
  renderCurrentStack(currentStack, "current-stack-container");
});
