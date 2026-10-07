/**
 * Reusable site footer component.
 * Keeps footer structure consistent across public pages.
 */

function renderFooter() {
  const footerContainer = document.getElementById("site-footer");

  if (!footerContainer) {
    return;
  }

  const currentYear = new Date().getFullYear();

  footerContainer.innerHTML = `
        <footer class="site-footer">
            <div class="container">

                <p>
                    &copy;
                    <span id="current-year">${currentYear}</span>
                    Education Platform
                </p>

            </div>
        </footer>
    `;
}

document.addEventListener("DOMContentLoaded", renderFooter);
