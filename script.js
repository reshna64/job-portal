function openModal(type) {
    document.getElementById("authModal").style.display = "block";
    document.getElementById("modalTitle").innerText = type === "login" ? "Login" : "Sign Up";
  }
  
  function closeModal() {
    document.getElementById("authModal").style.display = "none";
  }
  function openForm(formId) {
    // Close both forms first
    document.getElementById('loginForm').style.display = "none";
    document.getElementById('signupForm').style.display = "none";
  
    // Open the requested form and generate its CAPTCHA
    document.getElementById(formId).style.display = "flex";
    if (formId === 'loginForm') generateCaptcha('loginCaptchaCode');
    if (formId === 'signupForm') generateCaptcha('signupCaptchaCode');
  }
  
  window.onclick = function (event) {
    const modal = document.getElementById("authModal");
    if (event.target === modal) {
      closeModal();
    }
  };
  
  console.log("Homepage Loaded");
  