/**
 * Contact page functionality.
 *
 * Handles client-side validation and feedback for Edutech.
 */

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const formState = document.getElementById("contact-form-state");

  if (!form || !formState) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    formState.hidden = true;
    formState.textContent = "";
    formState.className = "state";

    const firstName = document.getElementById("contact-first-name")?.value.trim() || "";
    const lastName = document.getElementById("contact-last-name")?.value.trim() || "";
    const legacyName = document.getElementById("contact-name")?.value.trim() || "";
    const name = firstName ? `${firstName} ${lastName}`.trim() : legacyName;

    const email = document.getElementById("contact-email")?.value.trim() || "";
    const message = document.getElementById("contact-message")?.value.trim() || "";
    const agree = document.getElementById("contact-agree") ? document.getElementById("contact-agree").checked : true;

    if (!name || !email || !message) {
      showFormState("Please fill in your name, email address, and message.", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showFormState("Please enter a valid email address.", "error");
      return;
    }

    if (!agree) {
      showFormState("Please agree to our privacy policy before sending your message.", "error");
      return;
    }

    showFormState(
      `Thank you, ${firstName || name}! Your message has been received. Our Edutech team will get back to you within 24 hours.`,
      "success"
    );

    form.reset();
    console.log("Contact form validated and submitted successfully for Edutech.");
  });

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function showFormState(message, type) {
    formState.hidden = false;
    formState.textContent = message;
    formState.className = `state state--${type}`;
    formState.style.padding = "12px 16px";
    formState.style.borderRadius = "10px";
    formState.style.marginTop = "14px";
    formState.style.fontSize = "0.9rem";
    formState.style.fontWeight = "600";
    
    if (type === "success") {
      formState.style.background = "#ecfdf5";
      formState.style.color = "#047857";
      formState.style.border = "1px solid #a7f3d0";
    } else {
      formState.style.background = "#fef2f2";
      formState.style.color = "#b91c1c";
      formState.style.border = "1px solid #fecaca";
    }
  }
});
