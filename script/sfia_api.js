// import axios from 'axios'; Tämä on importattu jo index.html

const apiClient = axios.create({
  baseURL: 'https://www.monolithdirective.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default {
  getSkills() {
    return apiClient.get('/skills');
  },
  getSkillByCode(code) {
    return this.getSkills()
      .then(response => {
        const skill = response.data.find(item => item.code === code);
        if (!skill) {
          throw new Error(`Skill with code ${code} not found.`);
        }
        return skill;
      })
      .catch(error => {
        console.error(`Error fetching skill by code: ${code}`, error);
        throw error;
      });
  },
  getResponsibilities() {
    return apiClient.get('/responsibilities');
  },
  getResponsibilityByCode(code) {
    return this.getResponsibilities()
      .then(response => {
        const responsibility = response.data.find(item => item.code === code);
        if (!responsibility) {
          throw new Error(`Responsibility with code ${code} not found.`);
        }
        return responsibility;
      })
      .catch(error => {
        console.error(`Error fetching responsibility by code: ${code}`, error);
        throw error;
      });
  },
  // TODO: Implement this when supported
  // getSoftSkills() {
  //   return apiClient.get('/soft_skills');
  // }
  // getSoftSkillsByCode() {
  //   return apiClient.get('/soft_skills');
  // }
};