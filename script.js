const CONTACT_EMAIL = "justin@sidecar-automations.com";

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navToggle.querySelector(".sr-only").textContent = isOpen ? "Open navigation" : "Close navigation";
  siteNav.classList.toggle("is-open", !isOpen);
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.querySelector(".sr-only").textContent = "Open navigation";
    siteNav.classList.remove("is-open");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && siteNav.classList.contains("is-open")) {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.querySelector(".sr-only").textContent = "Open navigation";
    siteNav.classList.remove("is-open");
    navToggle.focus();
  }
});

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const organization = formData.get("organization") || "Not provided";
  const process = formData.get("process-description");
  const output = formData.get("output-needed");
  const frequency = formData.get("frequency");
  const manualTime = formData.get("manual-time");
  const sensitiveData = formData.get("sensitive-data");
  const subject = encodeURIComponent("Custom Automation Inquiry");
  const body = encodeURIComponent(
    `Hi Justin,\n\nI’m interested in a custom automation.\n\nName: ${name}\nEmail: ${email}\nOrganization: ${organization}\nFile I start with: ${process}\nOutput I need: ${output}\nHow often I run this: ${frequency}\nHow long it takes manually: ${manualTime}\nDoes the file contain sensitive data: ${sensitiveData}\n\nThanks,`
  );

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
