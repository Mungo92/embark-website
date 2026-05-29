const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');

const closeMenu = () => {
  if (!menuToggle || !nav) {
    return;
  }

  menuToggle.classList.remove('is-open');
  nav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open menu');
};

if (menuToggle && nav) {
  menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = menuToggle.classList.toggle('is-open');
    nav.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      closeMenu();
    }
  });

  document.addEventListener('click', (event) => {
    if (!nav.classList.contains('is-open')) {
      return;
    }

    if (!event.target.closest('[data-nav]') && !event.target.closest('[data-menu-toggle]')) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 761px)').matches) {
      closeMenu();
    }
  });
}

const personalisationStorageKey = 'embarkPersonalisation';
const personalisationFields = ['name', 'organisation', 'industry'];
const personalisationAliases = {
  name: ['name', 'firstName', 'firstname', 'visitor', 'contact'],
  organisation: ['organisation', 'organization', 'org', 'company', 'account'],
  industry: ['industry', 'sector', 'vertical'],
};

const cleanPersonalisationValue = (value) => {
  if (typeof value !== 'string') {
    return '';
  }

  return value.replace(/[<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, 80);
};

const getStoredIdentity = () => {
  try {
    const stored = JSON.parse(window.localStorage.getItem(personalisationStorageKey) || '{}');
    return personalisationFields.reduce((identity, field) => {
      identity[field] = cleanPersonalisationValue(stored[field]);
      return identity;
    }, {});
  } catch (error) {
    return {};
  }
};

const getQueryIdentity = () => {
  const params = new URLSearchParams(window.location.search);

  return personalisationFields.reduce((identity, field) => {
    const aliases = personalisationAliases[field];
    const match = aliases.find((alias) => params.has(alias));

    if (match) {
      identity[field] = cleanPersonalisationValue(params.get(match));
    }

    return identity;
  }, {});
};

const getTrackingIdentity = () => {
  const trackedIdentity = window.embarkVisitor || window.embarkIdentity || {};

  return personalisationFields.reduce((identity, field) => {
    identity[field] = cleanPersonalisationValue(trackedIdentity[field]);
    return identity;
  }, {});
};

const saveIdentity = (identity) => {
  const currentIdentity = getStoredIdentity();
  const nextIdentity = personalisationFields.reduce((saved, field) => {
    const value = cleanPersonalisationValue(identity[field] || currentIdentity[field]);

    if (value) {
      saved[field] = value;
    }

    return saved;
  }, {});

  try {
    window.localStorage.setItem(personalisationStorageKey, JSON.stringify(nextIdentity));
  } catch (error) {
    // Personalisation should never block the visitor experience.
  }

  return nextIdentity;
};

const getBestIdentity = (override = {}) => {
  const identity = {
    ...getStoredIdentity(),
    ...getTrackingIdentity(),
    ...getQueryIdentity(),
    ...override,
  };

  return personalisationFields.reduce((bestIdentity, field) => {
    const value = cleanPersonalisationValue(identity[field]);

    if (value) {
      bestIdentity[field] = value;
    }

    return bestIdentity;
  }, {});
};

const getFirstName = (name = '') => cleanPersonalisationValue(name).split(' ')[0] || '';

const makePersonalisedCopy = ({ name, organisation, industry }) => {
  const firstName = getFirstName(name);
  const organisationLabel = organisation || (industry ? `${industry} organisation` : 'your organisation');
  const industryLabel = industry ? `${industry} sector` : 'your sector';
  const hasIdentity = Boolean(firstName || organisation || industry);

  return {
    heroEyebrow: firstName ? `Welcome, ${firstName}` : 'Velocity for Business',
    heroHeadline: organisation
      ? `Strategic commercial advice for ${organisation}'s complex decisions.`
      : industry
        ? `Strategic commercial advice for ${industry} leaders and complex delivery.`
        : 'Strategic commercial advice for complex decisions and public sector delivery.',
    heroText: hasIdentity
      ? `Embark Partners helps ${organisationLabel} move from uncertainty to action with practical advisory, procurement assurance and clear commercial judgement tailored to ${industryLabel}.`
      : 'Embark Partners helps leaders move from uncertainty to action with practical advisory, procurement assurance and clear commercial judgement.',
    dashboardKicker: organisation ? `${organisation} pathway` : 'Advisory pathway',
    dashboardTitle: industry ? `${industry} uplift plan` : 'AI Implementation',
    servicesHeadline: organisation
      ? `Commercial and procurement advisory built for ${organisation}.`
      : industry
        ? `Commercial and procurement advisory for ${industry} environments.`
        : 'Commercial and procurement advisory built for complex environments.',
    servicesText: hasIdentity
      ? `We support ${organisationLabel} with clear advice, proportionate assurance and practical delivery support for decisions that matter.`
      : 'We support public and private sector leaders with clear advice, proportionate assurance and practical delivery support.',
    contactHeadline: organisation ? `Ready to build velocity for ${organisation}?` : 'Ready to build velocity for your business?',
    contactText: hasIdentity
      ? `Share the decision, procurement process or commercial challenge in front of ${organisationLabel}. We will help clarify the options, next steps and support required.`
      : 'Share the decision, procurement process or commercial challenge you are working through. We will help clarify the options, next steps and support required.',
  };
};

const applyPersonalisation = (override = {}) => {
  const identity = saveIdentity(getBestIdentity(override));
  const copy = makePersonalisedCopy(identity);

  document.querySelectorAll('[data-personal]').forEach((element) => {
    const key = element.dataset.personal;
    const value = copy[key] || element.dataset.default || '';
    element.textContent = value;
  });

  document.querySelectorAll('[data-identity-field]').forEach((field) => {
    const key = field.dataset.identityField;

    if (identity[key] && !field.value) {
      field.value = identity[key];
    }
  });

  return identity;
};

const contactForms = document.querySelectorAll('.contact-form');

contactForms.forEach((contactForm) => {
  const updateIdentityFromForm = () => {
    const formIdentity = Array.from(contactForm.querySelectorAll('[data-identity-field]')).reduce((identity, field) => {
      identity[field.dataset.identityField] = cleanPersonalisationValue(field.value);
      return identity;
    }, {});

    applyPersonalisation(formIdentity);
  };

  contactForm.addEventListener('input', (event) => {
    if (event.target.matches('[data-identity-field]')) {
      updateIdentityFromForm();
    }
  });

  contactForm.addEventListener('submit', updateIdentityFromForm);
});

const contactModal = document.querySelector('[data-contact-modal]');
const contactModalDialog = contactModal?.querySelector('.contact-modal__dialog');
const contactModalTriggers = document.querySelectorAll('[data-contact-modal-trigger]');
const contactModalCloseControls = contactModal?.querySelectorAll('[data-contact-modal-close]') || [];
let lastFocusedElement;

const openContactModal = () => {
  if (!contactModal || !contactModalDialog) {
    return;
  }

  lastFocusedElement = document.activeElement;
  contactModal.hidden = false;
  document.body.classList.add('modal-open');
  contactModalDialog.focus();
};

const closeContactModal = () => {
  if (!contactModal) {
    return;
  }

  contactModal.hidden = true;
  document.body.classList.remove('modal-open');

  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
};

contactModalTriggers.forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    closeMenu();
    openContactModal();
  });
});

contactModalCloseControls.forEach((control) => {
  control.addEventListener('click', closeContactModal);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && contactModal && !contactModal.hidden) {
    closeContactModal();
  }
});

window.embarkPersonalise = (identity) => applyPersonalisation(identity || {});
window.addEventListener('embark:personalise', (event) => {
  applyPersonalisation(event.detail || {});
});

applyPersonalisation();

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
