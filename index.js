const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Initial animations
gsap.from("nav", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.to(".hero-text", {
  opacity: 1,
  y: 50,
  duration: 1.5,
  ease: "power3.out",
  delay: 0.5,
});

// Animate image containers
gsap.to(".imagecontainer", {
  width: "100%",
  ease: "expo.inOut",
  stagger: 2,
  repeat: -1,
  yoyo: true,
  duration: 2,
});

// Get image containers and headings
const containers = ["#one", "#two", "#three"];
const headings = document.querySelectorAll(".text h1");

const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

// Loop through image containers and animate each with its text
containers.forEach((id, index) => {
  tl.to(id, {
    width: "100%",
    duration: 2,
    ease: "expo.inOut",
    onStart: () => {
      // Hide all other headings
      headings.forEach((h, i) => {
        gsap.set(h, { opacity: 0 });
      });
      // Show current heading
      gsap.to(headings[index], {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    },
  }).to(id, {
    width: "0%",
    duration: 2,
    ease: "expo.inOut",
    onComplete: () => {
      // Hide current heading again
      gsap.to(headings[index], {
        opacity: 0,
        duration: 0.5,
      });
    },
  });
});

// Scroll animations
gsap.registerPlugin(ScrollTrigger);

// Feature cards animation
gsap.utils.toArray(".feature-card").forEach((card) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1)",
  });
});

// About section animation
gsap.from(".about-content", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 70%",
    toggleActions: "play none none none",
  },
  x: -50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".about-image", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 70%",
    toggleActions: "play none none none",
  },
  x: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

// Testimonials animation
gsap.utils.toArray(".testimonial").forEach((testimonial, i) => {
  gsap.from(testimonial, {
    scrollTrigger: {
      trigger: ".testimonials",
      start: "top 70%",
      toggleActions: "play none none none",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.2,
    ease: "back.out(1)",
  });
});

// Contact section animation
gsap.from(".contact-form", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 70%",
    toggleActions: "play none none none",
  },
  x: -50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".contact-info", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 70%",
    toggleActions: "play none none none",
  },
  x: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});
