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

  if (!hoverableItems.length || !descriptionDiv) {
    console.warn('HoverSkillDetails: No elements found for the provided selectors.');
    return;
  }

  hoverableItems.forEach(itemElement => {
    itemElement.addEventListener('mouseover', () => {
      const itemId = itemElement.id;
      const itemCode = itemId.split('-')[1];

      if (itemId.startsWith('skill-')) {
        apiService.getSkillByCode(itemCode)
          .then(skill => {
            descriptionDiv.textContent = `Skill: ${skill.name} - ${skill.description}`;
          })
          .catch(error => {
            descriptionDiv.textContent = `Error: ${error.message}`;
          });
      } else if (itemId.startsWith('responsibility-')) {
        apiService.getResponsibilityByCode(itemCode)
          .then(responsibility => {
            descriptionDiv.textContent = `Responsibility: ${responsibility.name} - ${responsibility.description}`;
          })
          .catch(error => {
            descriptionDiv.textContent = `Error: ${error.message}`;
          });
      } else {
        descriptionDiv.textContent = 'Unknown item type.';
      }
    });

    itemElement.addEventListener('mouseout', () => {
      descriptionDiv.textContent = 'Hover over an item to see its details here.';
    });
  });
}