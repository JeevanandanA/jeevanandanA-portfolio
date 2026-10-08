const CONTACT = {
  name: "Jeevanandan A",
  role: "Founder & CEO — CyberGoat Technology",
  phone: "+91 89408 14683",
  whatsapp: "918940814683",
  email: "jeevanandan14@gmail.com",
  linkedin: "https://www.linkedin.com/in/jeevanandan-a-75498b263",
  github: "https://github.com/JeevanandanA",
  company: "CyberGoat Technology",
  companyWebsite: "https://cybergoat.in",
};

const DEFAULT_PROJECT_MESSAGE =
  "Hi Jeevanandan, I came across your portfolio and would like to discuss a potential technology project. I’d be glad to share the requirements and explore how CyberGoat Technology can help bring the idea to life.";

const skillCategories = [
  {
    id: "web-development",
    title: "WEB DEVELOPMENT",
    description: "Modern, responsive and scalable web applications.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Python", "FastAPI"],
  },
  {
    id: "ai-automation",
    title: "AI & AUTOMATION",
    description: "Practical AI systems, intelligent workflows and automated processes.",
    skills: ["AI", "Machine Learning", "Computer Vision", "AI Agents", "API Automation"],
  },
  {
    id: "cybersecurity",
    title: "CYBERSECURITY",
    description: "Security-focused protection, assessment, detection and monitoring.",
    skills: ["Web Security", "API Security", "Vulnerability Assessment", "Threat Detection", "Security Monitoring"],
  },
  {
    id: "security-tools",
    title: "SECURITY TOOLS",
    description: "Authorized security research and defensive technical analysis.",
    skills: ["Burp Suite", "Nmap", "Wireshark", "OWASP ZAP", "Ghidra"],
  },
  {
    id: "programming",
    title: "PROGRAMMING",
    description: "Core languages and scripting capabilities for software development, automation, web applications and systems programming.",
    skills: ["Python", "JavaScript", "TypeScript", "C", "C++", "Java", "PHP", "Go", "SQL", "Bash", "PowerShell", "Assembly"],
  },
  {
    id: "cloud-devops",
    title: "CLOUD & DEVOPS",
    description: "Secure delivery, infrastructure and system operations.",
    skills: ["Linux", "Docker", "Git", "GitHub", "Deployment"],
  },
  {
    id: "database",
    title: "DATABASE",
    description: "Reliable data structures, storage and application integration.",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Database Design"],
  },
  {
    id: "design-tools",
    title: "DESIGN & DEVELOPMENT TOOLS",
    description: "Modern tools for product design, development and API workflows.",
    skills: ["Figma", "UI/UX", "Postman", "VS Code", "WordPress"],
  },
];

const projects = [
  {
    id: "01",
    title: "AI Threat Monitoring System",
    category: "CYBERSECURITY • AI",
    categories: ["cybersecurity", "ai", "monitoring"],
    description: "Intelligent real-time threat detection and security monitoring platform.",
    features: ["Threat Detection", "Security Alerts", "Anomaly Detection", "Risk Scoring"],
    technologies: ["Python", "FastAPI", "React", "ML"],
    image: "assets/projects/project-01.webp",
    liveUrl: "#",
  },
  {
    id: "02",
    title: "AI Virtual Lab",
    category: "AI • EDUCATION",
    categories: ["ai", "education"],
    description:
      "Interactive AI-powered virtual laboratory for technical learning and experimentation.",
    features: ["Virtual Experiments", "AI Assistance", "Analytics"],
    technologies: ["AI", "Python", "React", "Automation"],
    image: "assets/projects/project-02.webp",
    liveUrl: "#",
  },
  {
    id: "03",
    title: "AI Network Monitoring System",
    category: "CYBERSECURITY • AI",
    categories: ["cybersecurity", "ai", "monitoring"],
    description:
      "Intelligent network monitoring that identifies unusual patterns and security anomalies.",
    features: ["Network Analysis", "Traffic Monitoring", "Health Dashboard"],
    technologies: ["Python", "AI", "FastAPI", "React"],
    image: "assets/projects/project-03.webp",
    liveUrl: "#",
  },
  {
    id: "04",
    title: "AI Phishing Guard",
    category: "CYBERSECURITY • AI",
    categories: ["cybersecurity", "ai"],
    description:
      "AI-powered phishing detection system analyzing URLs and website security threats.",
    features: ["URL Analysis", "Risk Scoring", "Security Reports"],
    technologies: ["Python", "ML", "Flask", "AI"],
    image: "assets/projects/project-04.webp",
    liveUrl: "#",
  },
  {
    id: "05",
    title: "J3M AI Learning Platform",
    category: "AI • EDUCATION",
    categories: ["ai", "education"],
    description:
      "AI-powered learning platform transforming technical content into interactive experiences.",
    features: ["Content Processing", "Learning Assistance", "Automation"],
    technologies: ["Python", "AI", "NLP", "Django"],
    image: "assets/projects/project-05.webp",
    liveUrl: "#",
  },
  {
    id: "06",
    title: "SmartCampus Placement Monitoring",
    category: "AI • EDUCATION",
    categories: ["ai", "education", "monitoring"],
    description: "Intelligent campus placement management for student skills and job matching.",
    features: ["Student Management", "Job Matching", "Analytics"],
    technologies: ["AI", "Python", "React", "MySQL"],
    image: "assets/projects/project-06.webp",
    liveUrl: "#",
  },
  {
    id: "07",
    title: "AI Startup Collaboration Platform",
    category: "AI • AUTOMATION",
    categories: ["ai", "automation"],
    description:
      "AI-powered platform connecting founders, developers and collaborators based on skills.",
    features: ["Collaborator Matching", "Team Organization", "Recommendations"],
    technologies: ["AI", "React", "Node.js", "MongoDB"],
    image: "assets/projects/project-07.webp",
    liveUrl: "#",
  },
  {
    id: "08",
    title: "AI Blood Donation Platform",
    category: "AI • HEALTHCARE",
    categories: ["ai", "healthcare"],
    description:
      "Intelligent blood donation management connecting donors and recipients efficiently.",
    features: ["Donor Matching", "Location Search", "Emergency Requests"],
    technologies: ["AI", "Python", "React", "Database"],
    image: "assets/projects/project-08.webp",
    liveUrl: "#",
  },
  {
    id: "09",
    title: "Family Healthcare AI",
    category: "AI • HEALTHCARE",
    categories: ["ai", "healthcare"],
    description:
      "AI-powered family healthcare management for health organization and intelligent insights.",
    features: ["Health Profiles", "Record Management", "Insights"],
    technologies: ["AI", "Python", "React", "Analytics"],
    image: "assets/projects/project-09.webp",
    liveUrl: "#",
  },
  {
    id: "10",
    title: "Fixtures Tracker",
    category: "AI • MONITORING",
    categories: ["ai", "monitoring"],
    description: "Real-time fixtures monitoring platform for live match tracking and updates.",
    features: ["Live Monitoring", "Status Tracking", "Dashboard"],
    technologies: ["React", "API", "Real-Time", "Node.js"],
    image: "assets/projects/project-10.webp",
    liveUrl: "#",
  },
  {
    id: "11",
    title: "AI Agents for Company Automation",
    category: "AI • AUTOMATION",
    categories: ["ai", "automation"],
    description:
      "Intelligent AI-agent platform automating repetitive business workflows and operations.",
    features: ["Workflow Automation", "Task Orchestration", "Agent Monitoring"],
    technologies: ["AI Agents", "Python", "LLM", "APIs"],
    image: "assets/projects/project-11.webp",
    liveUrl: "#",
  },
  {
    id: "12",
    title: "AI Retina Report Generator",
    category: "AI • HEALTHCARE",
    categories: ["ai", "healthcare"],
    description: "AI-based retinal image analysis for structured analysis reports and research.",
    features: ["Image Processing", "AI Classification", "Report Generation"],
    technologies: ["Python", "Computer Vision", "ConvNeXt", "AI"],
    image: "assets/projects/project-12.webp",
    liveUrl: "#",
  },
  {
    id: "13",
    title: "Cloud Monitoring AI Detection",
    category: "CLOUD • AI",
    categories: ["cloud", "ai", "monitoring"],
    description: "Intelligent cloud monitoring for infrastructure activity and anomaly detection.",
    features: ["Cloud Monitoring", "Anomaly Detection", "Alert System"],
    technologies: ["Cloud", "AI", "Python", "DevOps"],
    image: "assets/projects/project-13.webp",
    liveUrl: "#",
  },
  {
    id: "14",
    title: "AI PDF-to-Audiobook System",
    category: "AI • AUTOMATION",
    categories: ["ai", "automation"],
    description: "AI system transforming PDF documents into audio-based learning material.",
    features: ["Text Extraction", "Audio Generation", "Processing"],
    technologies: ["Python", "Django", "NLP", "TTS"],
    image: "assets/projects/project-14.webp",
    liveUrl: "#",
  },
];

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initPreloader() {
  const loader = document.querySelector(".preloader");
  const bar = document.querySelector(".preloader-bar");
  const percent = document.querySelector(".preloader-percent");

  if (!loader || !bar || !percent) return;

  const hideLoader = () => {
    loader.classList.add("is-hidden");
  };

  if (reducedMotion || document.hidden) {
    bar.style.transform = "scaleX(1)";
    percent.textContent = "100%";
    loader.style.transition = "none";
    hideLoader();
    return;
  }

  if (!window.gsap) {
    bar.style.transform = "scaleX(1)";
    percent.textContent = "100%";
    setTimeout(hideLoader, 700);
    return;
  }

  const words = document.querySelectorAll(".preloader-word");
  const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

  timeline
    .to(words, { opacity: 1, y: 0, duration: 0.8, stagger: 0.18 })
    .to(bar, { scaleX: 1, duration: 0.9, ease: "power2.inOut" }, "-=0.5")
    .to(
      percent,
      { textContent: "100%", duration: 0.85, snap: { textContent: 1 }, ease: "none" },
      "-=0.4",
    )
    .to(loader, { opacity: 0, duration: 0.7, ease: "power2.inOut" }, "-=0.15");

  setTimeout(hideLoader, 1800);
}

function initNavigation() {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navPanel = document.querySelector(".nav-panel");
  const links = document.querySelectorAll(".nav-links a");

  if (!header) return;

  const applyHeaderState = () => {
    if (window.scrollY > 40) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }

    if (window.scrollY > lastScrollY && window.scrollY > 120) {
      header.classList.add("header-hidden");
    } else {
      header.classList.remove("header-hidden");
    }

    lastScrollY = window.scrollY;
  };

  let lastScrollY = 0;
  applyHeaderState();
  window.addEventListener("scroll", applyHeaderState, { passive: true });

  if (navToggle && navPanel) {
    navToggle.addEventListener("click", () => {
      const open = navPanel.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        navPanel.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

function initThemeToggle() {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const icon = document.querySelector(".theme-icon");

  if (!toggle || !icon) return;

  let storedTheme = null;
  try {
    storedTheme = localStorage.getItem("jeevan-theme");
  } catch (error) {
    storedTheme = null;
  }

  const preferred = window.matchMedia("(prefers-color-scheme: light)").matches;
  const initialTheme = storedTheme || (preferred ? "light" : "dark");

  const setTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    icon.textContent = theme === "dark" ? "☀" : "☾";
    try {
      localStorage.setItem("jeevan-theme", theme);
    } catch (error) {
      // Storage may be unavailable in private browsing or embedded contexts.
    }
  };

  setTheme(initialTheme);

  toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTheme(current);
  });
}

function initCursor() {
  if (reducedMotion || window.innerWidth <= 768) return;

  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  if (reducedMotion || window.innerWidth <= 768 || !dot || !ring) return;

  const setCursorPosition = (event) => {
    dot.style.left = `${event.clientX}px`;
    dot.style.top = `${event.clientY}px`;
    ring.style.left = `${event.clientX}px`;
    ring.style.top = `${event.clientY}px`;
  };

  document.addEventListener("pointermove", (event) => {
    setCursorPosition(event);
    dot.classList.add("is-visible");
    ring.classList.add("is-visible");
  });

  document.addEventListener("pointerleave", () => {
    dot.classList.remove("is-visible");
    ring.classList.remove("is-visible");
  });

  document.addEventListener("pointerover", (event) => {
    const target = event.target.closest("a, button, .project-card");
    if (!target) return;
    ring.classList.add("is-hovering");
    ring.classList.toggle("is-view", target.classList.contains("project-card"));
  });

  document.addEventListener("pointerout", (event) => {
    const target = event.target.closest("a, button, .project-card");
    if (!target || target.contains(event.relatedTarget)) return;
    ring.classList.remove("is-hovering", "is-view");
  });
}

function initMagneticButtons() {
  if (reducedMotion || window.innerWidth <= 768) return;

  const buttons = document.querySelectorAll(".magnetic");
  buttons.forEach((button) => {
    button.addEventListener("pointermove", (event) => {
      const rect = button.getBoundingClientRect();
      const offsetX = (event.clientX - rect.left - rect.width / 2) / 8;
      const offsetY = (event.clientY - rect.top - rect.height / 2) / 8;
      button.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });

    button.addEventListener("pointerleave", () => {
      button.style.transform = "";
    });
  });
}

function initHeroAnimations() {
  const heroElements = document.querySelectorAll(
    ".founder-name, .hero-copy .eyebrow, .hero-title .word, .hero-secondary span, .hero-text, .hero-actions, .hero-meta, .profile-shell, .floating-badge, .mini-tag",
  );
  const heroWords = document.querySelectorAll(".hero-title .word");
  if (reducedMotion || document.hidden || !window.gsap || !heroWords.length) {
    heroElements.forEach((element) => {
      element.style.opacity = "1";
      element.style.transform = "none";
    });
    return;
  }

  const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

  heroTimeline
    .from(".founder-name, .hero-copy .eyebrow", {
      opacity: 0,
      y: 18,
      duration: 0.55,
      stagger: 0.08,
    })
    .from(".hero-title .word", { opacity: 0, y: "1.05em", duration: 0.72, stagger: 0.08 }, "-=0.2")
    .from(".hero-secondary span", { opacity: 0, y: 16, duration: 0.45, stagger: 0.07 }, "-=0.25")
    .from(".hero-text", { opacity: 0, y: 18, duration: 0.55 }, "-=0.2")
    .from(".hero-actions", { opacity: 0, y: 18, duration: 0.45 }, "-=0.25")
    .from(".hero-meta", { opacity: 0, y: 14, duration: 0.4 }, "-=0.2")
    .from(
      ".profile-shell",
      { opacity: 0, x: window.innerWidth > 768 ? 36 : 0, scale: 0.98, duration: 0.8 },
      "-=0.75",
    )
    .from(
      ".floating-badge, .mini-tag",
      { opacity: 0, y: 14, duration: 0.45, stagger: 0.08 },
      "-=0.45",
    );

  return heroTimeline;
}

function initScrollAnimations() {
  const revealTargets = document.querySelectorAll(
    ".reveal-card, .service-card, .skill-group, .why-card, .timeline-step, .stat-card, .company-card, .project-card, .final-cta",
  );

  if (reducedMotion || !window.gsap || !window.ScrollTrigger) {
    revealTargets.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(revealTargets).forEach((el) => {
    gsap.fromTo(
      el,
      {
        y: 32,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      },
    );
  });
}

function initCounters() {
  const counters = document.querySelectorAll(".stat-card[data-target], .stat-card[data-stat-value]");

  const animateCounter = (number, target, suffix) => {
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * target);
      number.textContent = `${value}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  };

  counters.forEach((card) => {
    const number = card.querySelector(".stat-number");
    const target = Number(card.dataset.target || card.dataset.statValue || 0);
    const suffix = card.dataset.suffix || "";

    if (!number) return;

    // Keep the statistic visible immediately, even when it is below the fold.
    // The animation still runs once the card enters the viewport.
    number.textContent = `${target}${suffix}`;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animateCounter(number, target, suffix);
          observer.unobserve(card);
        });
      },
      { threshold: 0.35 },
    );

    observer.observe(card);
  });
}

function createProjectMarkup(project) {
  const fallbackClass = project.image ? "" : "fallback";
  return `
    <article class="project-card ${project.categories.includes("ai") ? "is-featured" : ""} ${fallbackClass}" data-category="${project.categories.join(" ")}" data-project-id="${project.id}">
      <div class="project-media">
        <img class="project-image" src="${project.image}" alt="${project.title} project preview" loading="lazy" data-project-image="true" />
        <div class="project-fallback">${project.title}</div>
      </div>
      <div class="project-card-header">
        <span class="project-id">${project.id}</span>
        <span class="project-category">${project.category}</span>
      </div>
      <h3>${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="feature-list">
        ${project.features.map((feature) => `<span>${feature}</span>`).join("")}
      </div>
      <div class="tech-list">
        ${project.technologies.map((tech) => `<span>${tech}</span>`).join("")}
      </div>
      <button class="project-link" type="button" data-project-id="${project.id}">Explore Project <span>→</span></button>
    </article>
  `;
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  const featuredIds = (grid.dataset.featuredProjects || "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);
  const visibleProjects = featuredIds.length
    ? projects.filter((project) => featuredIds.includes(project.id))
    : projects;

  grid.innerHTML = visibleProjects.map(createProjectMarkup).join("");

  const cards = grid.querySelectorAll(".project-card");
  cards.forEach((card) => {
    const projectId = card.dataset.projectId;
    const project = projects.find((item) => item.id === projectId);
    if (!project) return;

    const image = card.querySelector("[data-project-image]");
    if (image) {
      image.addEventListener("error", () => {
        image.remove();
        card.classList.add("fallback");
      });
    }

    card.addEventListener("click", (event) => {
      if (event.target.closest(".project-link") || event.target.closest(".project-card")) {
        openProjectModal(project);
      }
    });
  });
}

function initProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-button");
  const cards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const activeFilter = button.dataset.filter;

      filterButtons.forEach((item) => item.classList.toggle("active", item === button));

      cards.forEach((card) => {
        const categories = card.dataset.category || "";
        const matches =
          activeFilter === "all" || categories.toLowerCase().includes(activeFilter.toLowerCase());
        card.classList.toggle("hidden", !matches);
      });
    });
  });
}

function initProjectTilt() {
  if (reducedMotion || window.innerWidth <= 768) return;

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = (x / rect.width - 0.5) * 10;
      const rotateX = (0.5 - y / rect.height) * 10;

      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function openProjectModal(project) {
  const modal = document.getElementById("projectModal");
  if (!modal) return;

  document.getElementById("modalId").textContent = `Project ${project.id}`;
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalCategory").textContent = project.category;
  document.getElementById("modalDescription").textContent = project.description;

  const featureList = document.getElementById("modalFeatures");
  const techList = document.getElementById("modalTechnologies");
  const media = document.getElementById("modalMedia");
  const liveLink = document.getElementById("modalLive");

  featureList.innerHTML = project.features.map((feature) => `<li>${feature}</li>`).join("");
  techList.innerHTML = project.technologies.map((tech) => `<li>${tech}</li>`).join("");

  const fallback = `
    <div style="display:flex;align-items:center;justify-content:center;height:100%;padding:2rem;background:linear-gradient(135deg, rgba(138,92,246,0.26), rgba(59,169,255,0.2), rgba(103,240,255,0.14));font-family:'Space Grotesk',sans-serif;letter-spacing:0.08rem;color:#fff;font-size:1.2rem;text-align:center;">${project.title}</div>
  `;

  if (project.image) {
    media.innerHTML = `<img src="${project.image}" alt="${project.title} project preview" onerror="this.style.display='none'; this.parentElement.innerHTML='${fallback.replace(/'/g, "\\'")}'" />`;
  } else {
    media.innerHTML = fallback;
  }

  if (project.liveUrl && project.liveUrl !== "#") {
    liveLink.href = project.liveUrl;
    liveLink.textContent = "Live Site";
  } else {
    liveLink.href = "#";
    liveLink.textContent = "Project Preview";
  }

  modal.classList.add("is-visible");
  modal.setAttribute("aria-hidden", "false");
}

function initProjectModal() {
  const modal = document.getElementById("projectModal");
  if (!modal) return;

  const closeModal = () => {
    modal.classList.remove("is-visible");
    modal.setAttribute("aria-hidden", "true");
  };

  modal.addEventListener("click", (event) => {
    if (event.target.matches('[data-close-modal="true"]') || event.target.closest(".modal-close")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-visible")) {
      closeModal();
    }
  });
}

function initTestimonials() {
  const cards = Array.from(document.querySelectorAll(".testimonial-card"));
  const dotsWrap = document.querySelector(".testimonial-dots");
  const prev = document.querySelector(".testimonial-nav.prev");
  const next = document.querySelector(".testimonial-nav.next");

  if (!cards.length) return;

  let index = 0;
  let intervalId;

  const renderDots = () => {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = cards
      .map(
        (_, i) =>
          `<button class="testimonial-dot ${i === index ? "is-active" : ""}" type="button" aria-label="Show testimonial ${i + 1}" data-index="${i}"></button>`,
      )
      .join("");

    dotsWrap.querySelectorAll(".testimonial-dot").forEach((dot) => {
      dot.addEventListener("click", () => {
        index = Number(dot.dataset.index);
        update();
      });
    });
  };

  const update = () => {
    cards.forEach((card, i) => card.classList.toggle("is-active", i === index));
    renderDots();
  };

  const nextSlide = () => {
    index = (index + 1) % cards.length;
    update();
  };

  const track = document.querySelector(".testimonial-track");
  let touchStartX = null;

  track?.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "touch") return;
    touchStartX = event.clientX;
  });

  track?.addEventListener("pointerup", (event) => {
    if (touchStartX === null) return;
    const deltaX = event.clientX - touchStartX;
    touchStartX = null;

    if (Math.abs(deltaX) < 40) return;
    index = deltaX < 0 ? (index + 1) % cards.length : (index - 1 + cards.length) % cards.length;
    update();
  });

  track?.addEventListener("pointercancel", () => {
    touchStartX = null;
  });

  prev?.addEventListener("click", () => {
    index = (index - 1 + cards.length) % cards.length;
    update();
  });

  next?.addEventListener("click", nextSlide);

  if (!reducedMotion) {
    intervalId = setInterval(nextSlide, 5000);
    document
      .querySelector(".testimonial-wrap")
      ?.addEventListener("mouseenter", () => clearInterval(intervalId));
    document.querySelector(".testimonial-wrap")?.addEventListener("mouseleave", () => {
      intervalId = setInterval(nextSlide, 5000);
    });
  }

  renderDots();
  update();
}

function initContactForm() {
  const form = document.querySelector(".contact-form");
  const status = document.querySelector(".form-status");
  if (!form || !status) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      status.textContent = "Please enter a valid name, email and message.";
      return;
    }

    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();
    const submitButton = form.querySelector("button[type='submit']");

    if (!name || !email || !message) {
      status.textContent = "Please complete all fields before sending.";
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Sending…";
    status.textContent = "Sending your inquiry…";

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "New project inquiry from portfolio",
          _replyto: email,
          _template: "table",
          _captcha: "false",
          name,
          email,
          message: `${DEFAULT_PROJECT_MESSAGE}\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`,
        }),
      });

      const result = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error(result.message || "Unable to send the inquiry.");
      }

      form.reset();
      status.textContent = "Message sent successfully. I will contact you soon.";
    } catch (error) {
      console.error("Contact form submission failed:", error);
      status.textContent = "The message could not be sent. Please email me directly at jeevanandan14@gmail.com.";
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = "Start a Conversation <span>→</span>";
    }
  });
}

function initMarquee() {
  const track = document.querySelector(".marquee-track");
  if (!track) return;

  if (reducedMotion || !window.gsap) return;

  const total = track.scrollWidth / 2;
  const animation = gsap.to(track, {
    x: -total,
    duration: 24,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: (value) => `${value % total}px`,
    },
  });

  track.addEventListener("mouseenter", () => animation.pause());
  track.addEventListener("mouseleave", () => animation.resume());
}

function initProjectModalLinks() {
  const liveLink = document.getElementById("modalLive");
  if (liveLink) {
    liveLink.addEventListener("click", (event) => {
      const modal = document.getElementById("projectModal");
      if (!modal.classList.contains("is-visible")) return;
      if (liveLink.getAttribute("href") === "#") {
        event.preventDefault();
      }
    });
  }
}

function initSkillsCapabilities() {
  const grid = document.getElementById("capabilityGrid");
  if (!grid) return;

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  grid.innerHTML = skillCategories
    .map(
      (category, index) => `
        <article class="capability-card reveal-card" style="--card-index:${index}">
          <div class="capability-card-top">
            <span class="capability-number">${String(index + 1).padStart(2, "0")}</span>
            <span class="capability-group">CAPABILITY</span>
          </div>
          <h3>${escapeHtml(category.title)}</h3>
          <p>${escapeHtml(category.description)}</p>
          <div class="technology-tags">
            ${category.skills.map((skill) => `<span class="technology-tag">${escapeHtml(skill)}</span>`).join("")}
          </div>
        </article>`,
    )
    .join("");

  if (reducedMotion || !window.gsap) return;

  gsap.fromTo(
    ".capability-card",
    { opacity: 0, y: 18 },
    { opacity: 1, y: 0, duration: 0.45, stagger: 0.05, ease: "power2.out" },
  );
}

document.addEventListener("DOMContentLoaded", () => {
  try {
    initPreloader();
    initNavigation();
    initThemeToggle();
    initCursor();
    initMagneticButtons();
    initHeroAnimations();
    renderProjects();
    initScrollAnimations();
    initCounters();
    initProjectFilters();
    initProjectTilt();
    initProjectModal();
    initProjectModalLinks();
    initTestimonials();
    initContactForm();
    initMarquee();
    initSkillsCapabilities();
  } catch (error) {
    console.error("Portfolio initialization error:", error);
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    document.querySelector(".cursor-dot")?.classList.remove("is-visible");
    document.querySelector(".cursor-ring")?.classList.remove("is-visible");
  }
});

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.body.classList.add("reduced-motion");
}

const whatsappLink = document.querySelector(".whatsapp-float");
if (whatsappLink) {
  whatsappLink.setAttribute(
    "href",
    `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(DEFAULT_PROJECT_MESSAGE)}`,
  );
}

const contactLinks = document.querySelectorAll(".contact-item, .footer-socials a");
contactLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (href && href.includes("YOUR_")) {
    link.setAttribute("aria-disabled", "true");
    link.setAttribute("tabindex", "-1");
    link.addEventListener("click", (event) => event.preventDefault());
  }
});

const whatsappButtons = document.querySelectorAll('a[href*="918940814683"]');
whatsappButtons.forEach((link) => {
  link.setAttribute(
    "href",
    `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(DEFAULT_PROJECT_MESSAGE)}`,
  );
});

const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach((link) => {
  const emailHref = `mailto:${CONTACT.email}`;
  const emailParams = new URLSearchParams({
    subject: "Potential technology project inquiry",
    body: DEFAULT_PROJECT_MESSAGE,
  });
  link.setAttribute("href", `${emailHref}?${emailParams.toString()}`);
});

const linkedinLinks = document.querySelectorAll(
  'a[href="https://www.linkedin.com/in/jeevanandan-a-75498b263"]',
);
linkedinLinks.forEach((link) => link.setAttribute("href", CONTACT.linkedin));

const githubLinks = document.querySelectorAll('a[href="https://github.com/JeevanandanA"]');
githubLinks.forEach((link) => link.setAttribute("href", CONTACT.github));
