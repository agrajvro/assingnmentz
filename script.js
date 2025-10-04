const skills = ["HTML", "CSS", "JavaScript","C", "Python"];
const skillList = document.getElementById("skills-list");

skills.forEach(skill => {
  const span = document.createElement("span");
  span.className = "skill-badge";
  span.textContent = skill;
  skillList.appendChild(span);
});

