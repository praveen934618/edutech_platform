/**
 * Reusable Site Footer Component
 *
 * Designed according to the reference layout (Image 5):
 * - Left: Social icons (Facebook, LinkedIn, X), contact email, Tallinn physical address
 * - Center: Interactive flowchart / connector diagram with "Get a Demo [FREE]" pill
 * - Right: Platform, Use Cases, Resources, Services, About links
 * - Bottom sub-row: Terms and conditions, copyright, Privacy Policy
 * - Giant stylized watermark: "edutech"
 * - Styled with warm radiant orange color palette
 */

function renderFooter() {
    const footerContainer = document.getElementById("site-footer");
    if (!footerContainer) return;

    const currentYear = new Date().getFullYear();

    footerContainer.innerHTML = `
        <footer class="edutech-footer" role="contentinfo">
            <div class="edutech-footer__container">
                
                <!-- Main Grid: Left, Center Flowchart, Right -->
                <div class="edutech-footer__grid">
                    
                    <!-- Left Column: Socials, Email, Address -->
                    <div class="edutech-footer__left">
                        <!-- Social Icons Row -->
                        <div class="edutech-footer__socials" aria-label="Social media links">
                            <a href="#" class="edutech-footer__social-btn" aria-label="Facebook" title="Facebook">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                                </svg>
                            </a>
                            <a href="#" class="edutech-footer__social-btn" aria-label="LinkedIn" title="LinkedIn">
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                                </svg>
                            </a>
                            <a href="#" class="edutech-footer__social-btn" aria-label="X (formerly Twitter)" title="X">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                        </div>

                        <!-- Email -->
                        <a href="mailto:hello@edutech.io" class="edutech-footer__email">
                            hello@edutech.io
                        </a>

                        <!-- Address -->
                        <address class="edutech-footer__address">
                            Harju maakond, Tallinn,<br>
                            Kesklinna linnaosa,<br>
                            Vesivärava tn 50-201, 10152
                        </address>
                    </div>

                    <!-- Center Column: Flowchart & "Get a Demo [FREE]" Pill -->
                    <div class="edutech-footer__center" aria-hidden="true">
                        <div class="edutech-footer__flowchart">
                            <!-- Left Dot Matrix -->
                            <div class="edutech-flowchart__dots edutech-flowchart__dots--left">
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                            </div>

                            <!-- Left Branch Line -->
                            <svg class="edutech-flowchart__bracket edutech-flowchart__bracket--left" width="54" height="60" viewBox="0 0 54 60" fill="none">
                                <path d="M0 6 C24 6, 28 30, 54 30" stroke="rgba(234, 88, 12, 0.45)" stroke-width="1.8" stroke-dasharray="2 3"/>
                                <path d="M0 54 C24 54, 28 30, 54 30" stroke="rgba(234, 88, 12, 0.45)" stroke-width="1.8" stroke-dasharray="2 3"/>
                            </svg>

                            <!-- Center "Get a Demo [FREE]" Pill -->
                            <a href="contact.html" class="edutech-flowchart__pill" aria-label="Book a free demo">
                                <span class="edutech-flowchart__pill-text">Get a Demo</span>
                                <span class="edutech-flowchart__pill-badge">FREE</span>
                            </a>

                            <!-- Right Branch Line -->
                            <svg class="edutech-flowchart__bracket edutech-flowchart__bracket--right" width="54" height="60" viewBox="0 0 54 60" fill="none">
                                <path d="M0 30 C26 30, 30 6, 54 6" stroke="rgba(234, 88, 12, 0.45)" stroke-width="1.8" stroke-dasharray="2 3"/>
                                <path d="M0 30 C26 30, 30 54, 54 54" stroke="rgba(234, 88, 12, 0.45)" stroke-width="1.8" stroke-dasharray="2 3"/>
                            </svg>

                            <!-- Right Dot Matrix -->
                            <div class="edutech-flowchart__dots edutech-flowchart__dots--right">
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Navigation Links -->
                    <div class="edutech-footer__right">
                        <nav class="edutech-footer__nav" aria-label="Footer navigation">
                            <ul class="edutech-footer__links">
                                <li><a href="courses.html">Platform</a></li>
                                <li><a href="courses.html">Use Cases</a></li>
                                <li><a href="courses.html">Resources</a></li>
                                <li><a href="about.html">Services</a></li>
                                <li><a href="about.html">About</a></li>
                            </ul>
                        </nav>
                    </div>

                </div>

                <!-- Bottom Sub-Row: Terms, Copyright, Privacy -->
                <div class="edutech-footer__subrow">
                    <a href="about.html" class="edutech-footer__sublink">Terms and conditions</a>
                    <span class="edutech-footer__copyright">&copy; ${currentYear} Edutech. All Rights Reserved</span>
                    <a href="about.html" class="edutech-footer__sublink">Privacy Policy</a>
                </div>

            </div>

            <!-- Giant Watermark Typography: "edutech" -->
            <div class="edutech-footer__watermark" aria-hidden="true">
                edutech
            </div>
        </footer>
    `;
}

document.addEventListener("DOMContentLoaded", renderFooter);
