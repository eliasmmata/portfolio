import { fullStackProjects, wordpressProjects, juniorProjects, stack, aboutMeCards, currentStack } from '../data/data.js';

// ============================================
// RENDERING FUNCTIONS
// ============================================

/**
 * Render current stack items
 */
function renderCurrentStack(stackData, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = stackData.map(item => `
        <div class="tech-item">
            <img class="${item.imgClass}" src="${item.src}" alt="${item.alt}">
        </div>
    `).join('');
}


/**
 * Render project cards (for Full Stack and WordPress sections)
 */
function renderProjects(projects, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = projects.map(project => `
        <div class="image" id="${project.id}">
            <div class="image__overlay image__overlay--blur">
                <img class="image__img" src="../images/personal/space.jpg" alt="icon">
                <div class="image__title">${project.title}</div>
                <p class="image__description">${project.description}</p>
                <div class="button-section-three">
                    <a role="button" href="${project.url}" target="_blank">
                        ${project.buttonText}
                        <i class="fa"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Render stack cards
 */
function renderStack(stack, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = stack.map(service => `
        <div class="card">
            <img class="card-image" src="../images/personal/space.jpg" alt="icon">
            <h4>${service.title}</h4>
            ${service.description.map(desc => `<p>${desc}</p>`).join('')}
            <div class="button-container">
                <a role="button" href="${service.buttonUrl}">
                    ${service.buttonText}
                    <i class="fa"></i>
                </a>
            </div>
        </div>
    `).join('');
}

/**
 * Render about me cards
 */
function renderAboutCards(cards, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = cards.map(card => `
        <div class="portfolio-card">
            <h4>${card.title}</h4>
            <p>${card.description}</p>
            <div class="button-section-four">
                <a role="button" href="${card.buttonUrl}" target="_blank">
                    ${card.buttonText}
                    <i class="fa"></i>
                </a>
            </div>
        </div>
    `).join('');
}

// ============================================
// FORM VALIDATION
// ============================================
function formInputNotEmpty() {
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var $$mail = document.getElementById("email");

    if (
        document.getElementById("name").value === ""
        || document.getElementById("email").value === ""
        || !$$mail.value.match(emailReg)
        || document.getElementById("message").value === ""
        || !document.getElementById("privacy").checked
    ) {
        document.getElementById('submit-button-form').disabled = true;
        document.getElementById('tooltiptext').style.display = "inline-block";
    } else {
        document.getElementById('submit-button-form').disabled = false;
        document.getElementById('tooltiptext').style.display = "none";
    }
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    // Set current year
    document.getElementById("year").innerHTML = new Date().getFullYear();

    // Render all sections
    renderProjects(fullStackProjects, 'fullstack-projects-container');
    renderProjects(wordpressProjects, 'wordpress-projects-container');
    // renderProjects(juniorProjects, 'junior-projects-container');
    renderStack(stack, 'stack-container');
    renderAboutCards(aboutMeCards, 'about-cards-container');
    renderCurrentStack(currentStack, 'current-stack-container');
});
