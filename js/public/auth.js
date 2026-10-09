/**
 * Auth Controller (Login & Register with Left-to-Right Sliding Toggle)
 *
 * Implements:
 * 1. Smooth sliding split transition between Sign In and Register
 * 2. Mobile segmented tabs support
 * 3. Password visibility toggles
 * 4. Client-side validation with responsive feedback
 * 5. Synchronization with URL query / history state
 */

document.addEventListener("DOMContentLoaded", initializeAuthPage);

function initializeAuthPage() {
  const container = document.getElementById("auth-container");
  if (!container) return;

  const loginView = document.getElementById("login-view");
  const registerView = document.getElementById("register-view");
  const switchToRegisterBtn = document.getElementById("switch-to-register");
  const switchToLoginBtn = document.getElementById("switch-to-login");
  const mobileTabBtns = document.querySelectorAll(".auth-tab-btn");

  // Determine initial mode
  const urlParams = new URLSearchParams(window.location.search);
  const modeParam = urlParams.get("mode");
  const isRegisterPage = window.location.pathname.includes("register.html");

  const initialMode = (modeParam === "register" || isRegisterPage) ? "register" : "login";
  setAuthMode(initialMode, false);

  // Switch buttons
  if (switchToRegisterBtn) {
    switchToRegisterBtn.addEventListener("click", function (e) {
      e.preventDefault();
      setAuthMode("register", true);
    });
  }

  if (switchToLoginBtn) {
    switchToLoginBtn.addEventListener("click", function (e) {
      e.preventDefault();
      setAuthMode("login", true);
    });
  }

  // Mobile segmented tabs
  mobileTabBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const targetMode = btn.dataset.tab;
      if (targetMode) {
        setAuthMode(targetMode, true);
      }
    });
  });

  // Setup password toggles
  setupPasswordToggles();

  // Setup form submission handlers
  setupFormHandlers();

  /**
   * Set authentication mode ('login' or 'register')
   * with left-to-right sliding transition.
   */
  function setAuthMode(mode, animate = true) {
    const isRegister = mode === "register";

    // Update active mobile tab pills
    mobileTabBtns.forEach(function (tab) {
      if (tab.dataset.tab === mode) {
        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");
      } else {
        tab.classList.remove("is-active");
        tab.setAttribute("aria-selected", "false");
      }
    });

    if (isRegister) {
      container.classList.add("is-register-mode");
      document.title = "Create Account | Edutech";
      
      // Ultra-smooth Cross-fade form views with subtle vertical glide
      if (loginView && registerView) {
        loginView.style.transition = "opacity 0.25s ease, transform 0.25s ease";
        registerView.style.transition = "opacity 0.35s ease, transform 0.35s ease";

        loginView.style.opacity = "0";
        loginView.style.transform = "translateY(8px)";
        setTimeout(() => {
          loginView.style.display = "none";
          registerView.style.display = "block";
          registerView.style.opacity = "0";
          registerView.style.transform = "translateY(-8px)";
          requestAnimationFrame(() => {
            registerView.style.opacity = "1";
            registerView.style.transform = "translateY(0)";
          });
        }, 200);
      }
    } else {
      container.classList.remove("is-register-mode");
      document.title = "Sign In | Edutech";
      
      if (loginView && registerView) {
        registerView.style.transition = "opacity 0.25s ease, transform 0.25s ease";
        loginView.style.transition = "opacity 0.35s ease, transform 0.35s ease";

        registerView.style.opacity = "0";
        registerView.style.transform = "translateY(8px)";
        setTimeout(() => {
          registerView.style.display = "none";
          loginView.style.display = "block";
          loginView.style.opacity = "0";
          loginView.style.transform = "translateY(-8px)";
          requestAnimationFrame(() => {
            loginView.style.opacity = "1";
            loginView.style.transform = "translateY(0)";
          });
        }, 200);
      }
    }

    // Update URL query state without full page reload
    if (animate && window.history && window.history.replaceState) {
      const pageBase = window.location.pathname.includes("register.html") ? "register.html" : "login.html";
      const newUrl = `${pageBase}?mode=${mode}`;
      window.history.replaceState({ mode }, "", newUrl);
    }
  }
}

/**
 * Password Visibility Toggles (Eye button)
 */
function setupPasswordToggles() {
  const toggleButtons = document.querySelectorAll(".auth-toggle-pwd");

  toggleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const wrapper = button.closest(".auth-input-wrapper");
      if (!wrapper) return;

      const input = wrapper.querySelector("input");
      const eyeOpen = button.querySelector(".eye-open");
      const eyeClosed = button.querySelector(".eye-closed");

      if (!input) return;

      if (input.type === "password") {
        input.type = "text";
        if (eyeOpen) eyeOpen.style.display = "none";
        if (eyeClosed) eyeClosed.style.display = "block";
        button.setAttribute("aria-label", "Hide password");
      } else {
        input.type = "password";
        if (eyeOpen) eyeOpen.style.display = "block";
        if (eyeClosed) eyeClosed.style.display = "none";
        button.setAttribute("aria-label", "Show password");
      }
    });
  });
}

/**
 * Handle form submission validation & feedback
 */
function setupFormHandlers() {
  // Login Form
  const loginForm = document.getElementById("login-form");
  const loginFeedback = document.getElementById("login-feedback");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("login-email");
      const password = document.getElementById("login-password");

      if (!email || !password || !email.value || !password.value) {
        showFeedback(loginFeedback, "Please enter both your email and password.", "error");
        return;
      }

      showFeedback(loginFeedback, "Signing in to Edutech...", "info");
      setTimeout(() => {
        showFeedback(loginFeedback, "Welcome back! Redirecting to your courses...", "success");
        setTimeout(() => {
          window.location.href = "courses.html";
        }, 1000);
      }, 700);
    });
  }

  // Register Form
  const registerForm = document.getElementById("register-form");
  const registerFeedback = document.getElementById("register-feedback");

  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("register-name");
      const email = document.getElementById("register-email");
      const password = document.getElementById("register-password");
      const terms = document.getElementById("register-terms");

      if (!name || !name.value.trim()) {
        showFeedback(registerFeedback, "Please enter your full name.", "error");
        return;
      }

      if (!email || !email.value.trim()) {
        showFeedback(registerFeedback, "Please enter a valid email address.", "error");
        return;
      }

      if (!password || password.value.length < 8) {
        showFeedback(registerFeedback, "Password must be at least 8 characters.", "error");
        return;
      }

      if (terms && !terms.checked) {
        showFeedback(registerFeedback, "Please accept the terms of service to continue.", "error");
        return;
      }

      showFeedback(registerFeedback, "Creating your Edutech account...", "info");
      setTimeout(() => {
        showFeedback(registerFeedback, "Account created successfully! Welcome aboard.", "success");
        setTimeout(() => {
          window.location.href = "courses.html";
        }, 1000);
      }, 800);
    });
  }

  // Social Sign-in Handlers (Google and Apple)
  const socialBtns = document.querySelectorAll(".auth-btn-social");
  socialBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const isApple = btn.textContent.includes("Apple");
      const provider = isApple ? "Apple ID" : "Google";
      const activeFeedback = (container.classList.contains("is-register-mode"))
        ? registerFeedback
        : loginFeedback;

      showFeedback(activeFeedback, `Connecting with ${provider}... Please wait.`, "info");
      btn.style.opacity = "0.7";
      btn.style.pointerEvents = "none";

      setTimeout(() => {
        showFeedback(activeFeedback, `Authenticated successfully via ${provider}! Redirecting to dashboard...`, "success");
        setTimeout(() => {
          window.location.href = "courses.html";
        }, 900);
      }, 1000);
    });
  });
}

/**
 * Display accessible feedback messages
 */
function showFeedback(element, message, type) {
  if (!element) return;
  element.hidden = false;
  element.className = `auth-feedback auth-feedback--${type}`;
  element.textContent = message;
}
