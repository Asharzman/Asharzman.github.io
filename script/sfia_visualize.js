import apiService from './sfia_api.js';

/**
 * Initializes hover functionality to display skill details.
 * 
 * @param {string} skillSelector - CSS selector for the hoverable skill elements (e.g., '.hoverable-skill').
 * @param {string} descriptionSelector - CSS selector for the element to display the description.
 */
export function initializeHover(skillSelector, descriptionSelector) {
  const hoverableSkills = document.querySelectorAll(skillSelector);
  const descriptionDiv = document.querySelector(descriptionSelector);

  if (!hoverableSkills.length || !descriptionDiv) {
    console.warn('HoverSkillDetails: No elements found for the provided selectors.');
    return;
  }

  hoverableSkills.forEach(skillElement => {
    skillElement.addEventListener('mouseover', () => {
      const skillCode = skillElement.id.replace('skill-', '');

      apiService.getSkillByCode(skillCode)
        .then(skill => {
          descriptionDiv.textContent = `Description: ${skill.description}`;
        })
        .catch(error => {
          descriptionDiv.textContent = `Error: ${error.message}`;
        });
    });

    skillElement.addEventListener('mouseout', () => {
      descriptionDiv.textContent = 'Hover over to see its details here.';
    });
  });
}