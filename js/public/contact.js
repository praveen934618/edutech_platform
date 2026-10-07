/**
 * Contact page functionality.
 *
 * Handles client-side validation only.
 * Submission to Supabase will be added later.
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

    const name = document.getElementById("contact-name").value.trim();

    const email = document.getElementById("contact-email").value.trim();

    const subject = document.getElementById("contact-subject").value.trim();

    const message = document.getElementById("contact-message").value.trim();

    if (!name || !email || !subject || !message) {
      showFormState("Please complete all required fields.", "error");

      return;
    }

    if (!isValidEmail(email)) {
      showFormState("Please enter a valid email address.", "error");

      return;
    }

    showFormState(
      "Your message has passed validation. Submission will be connected later.",
      "success",
    );

    console.log("Contact form validated successfully.");
  });

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function showFormState(message, type) {
    formState.hidden = false;
    formState.textContent = message;
    formState.className = `state state--${type}`;
  }
});
