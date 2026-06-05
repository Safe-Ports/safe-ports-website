const header = document.querySelector("[data-header]");
const billingButtons = document.querySelectorAll("[data-billing]");
const planNotes = document.querySelectorAll(".plan-note");
const faqItems = document.querySelectorAll(".faq-item");
const contactForm = document.querySelector("[data-contact-form]");

function setHeaderState() {
  if (!header) return;
  header.classList.toggle("is-solid", window.scrollY > 24);
}

document.querySelectorAll("[data-scroll]").forEach((control) => {
  control.addEventListener("click", () => {
    const target = document.querySelector(control.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

billingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const billing = button.dataset.billing;

    billingButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    planNotes.forEach((note) => {
      note.textContent = note.dataset[billing];
    });
  });
});

faqItems.forEach((item, index) => {
  const button = item.querySelector("button");
  const isOpen = index === 0;

  item.classList.toggle("is-open", isOpen);
  button.setAttribute("aria-expanded", String(isOpen));

  button.addEventListener("click", () => {
    const nextState = button.getAttribute("aria-expanded") !== "true";
    item.classList.toggle("is-open", nextState);
    button.setAttribute("aria-expanded", String(nextState));
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = contactForm.querySelector(".form-status");
    status.textContent = "Solicitud preparada. Gracias por compartir el contexto de tu proyecto.";
    contactForm.reset();
  });
}

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });
