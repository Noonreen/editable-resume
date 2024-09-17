// Function to save resume data
function saveResumeData() {
    const name = document.getElementById('name')!.innerText;
    const email = document.getElementById('email')!.innerText;
    const education = document.getElementById('education')!.innerText;
    const work = document.getElementById('work')!.innerText;
    const skills = document.getElementById('skills')!.innerText;
  
    const resumeData = {
      name,
      email,
      education,
      work,
      skills,
    };
  
    // Save to localStorage (for demonstration purposes)
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    alert('Resume changes saved!');
  }
  
  // Function to load saved resume data from localStorage
  function loadResumeData() {
    const savedData = localStorage.getItem('resumeData');
    if (savedData) {
      const resumeData = JSON.parse(savedData);
      document.getElementById('name')!.innerText = resumeData.name;
      document.getElementById('email')!.innerText = resumeData.email;
      document.getElementById('education')!.innerText = resumeData.education;
      document.getElementById('work')!.innerText = resumeData.work;
      document.getElementById('skills')!.innerText = resumeData.skills;
    }
  }
  
  // Add event listener to the save button
  document.getElementById('saveBtn')?.addEventListener('click', saveResumeData);
  
  // Load resume data when the page loads
  window.onload = loadResumeData;
  