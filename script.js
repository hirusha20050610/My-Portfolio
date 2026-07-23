//Java Script

document.addEventListener('DOMContentLoaded', function() {

    // ---- HAMBURGER MENU ----
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('open');
    });

    // Close menu on link click (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });

    // ---- SMOOTH SCROLL (already handled by CSS scroll-behavior) ----

    // ---- CHATBOT ----
    const toggleBtn = document.getElementById('chatbotToggle');
    const chatWindow = document.getElementById('chatbotWindow');
    const closeBtn = document.getElementById('chatbotClose');
    const chatInput = document.getElementById('chatbotInput');
    const sendBtn = document.getElementById('chatbotSend');
    const messages = document.getElementById('chatbotMessages');

    function openChat() {
        chatWindow.classList.add('open');
        chatInput.focus();
    }

    function closeChat() {
        chatWindow.classList.remove('open');
    }

    toggleBtn.addEventListener('click', function() {
        if (chatWindow.classList.contains('open')) {
            closeChat();
        } else {
            openChat();
        }
    });

    closeBtn.addEventListener('click', closeChat);

    // Simple bot responses
    function getBotReply(userText) {
        const lower = userText.toLowerCase();
        if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
            return "Hello there! 👋 How can I help you today?";
        }
        if (lower.includes('skill') || lower.includes('tech') || lower.includes('stack')) {
            return "I work with HTML, CSS, JavaScript, React, Node.js, and MongoDB. I'm also familiar with cloud platforms like AWS and Vercel.";
        }
        if (lower.includes('project') || lower.includes('portfolio')) {
            return "This portfolio is one of my projects! I've also built an e-commerce demo and an AI chatbot. Check out my Projects section for more!";
        }
        if (lower.includes('education') || lower.includes('study') || lower.includes('degree')) {
            return "I'm currently pursuing a B.Sc. in Computer Science. I also hold certifications in Full-Stack Web Development and AWS Cloud.";
        }
        if (lower.includes('experience') || lower.includes('work') || lower.includes('job')) {
            return "I have experience as a freelance web developer and have contributed to open-source projects. I'm always looking for new opportunities!";
        }
        if (lower.includes('cv') || lower.includes('resume') || lower.includes('download')) {
            return "You can download my CV using the button in the Contact section! 📄";
        }
        if (lower.includes('thank')) {
            return "You're welcome! 😊 Let me know if you need anything else.";
        }
        if (lower.includes('bye') || lower.includes('goodbye')) {
            return "Goodbye! Feel free to come back anytime. 👋";
        }
        return "That's a great question! I'd suggest checking out my projects or dropping me a message — I'd love to chat more about it. 😄";
    }

    function addMessage(text, sender) {
        const div = document.createElement('div');
        div.className = `chat-msg ${sender}`;
        div.textContent = text;
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }

    function handleSend() {
        const text = chatInput.value.trim();
        if (!text) return;
        addMessage(text, 'user');
        chatInput.value = '';

        // Simulate bot delay
        setTimeout(() => {
            const reply = getBotReply(text);
            addMessage(reply, 'bot');
        }, 400 + Math.random() * 300);
    }

    sendBtn.addEventListener('click', handleSend);
    chatInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') handleSend();
    });

    // ---- CONTACT FORM (demo) ----
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = form.querySelector('.btn-primary');
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
            btn.style.background = '#4ade80';
            btn.style.color = '#0b0d15';
            setTimeout(() => {
                btn.innerHTML = original;
                btn.style.background = '';
                btn.style.color = '';
                btn.disabled = false;
                form.reset();
            }, 1500);
        }, 1200);
    });

    // ---- DOWNLOAD CV (BONUS) ----
// ---- DOWNLOAD CV ----
    const downloadBtn = document.getElementById('downloadCV');
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();

        const link = document.createElement('a');
        link.href = 'MY CV.pdf';       // must match your actual filename exactly
        link.download = 'MY CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Visual feedback
        const originalText = downloadBtn.innerHTML;
        downloadBtn.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
        setTimeout(() => {
            downloadBtn.innerHTML = originalText;
        }, 2000);
    });
// ========================================
//         CURRICULUM VITAE
// ========================================

// Name: Your Name
// Email: your.email@example.com
// Phone: +94 77 123 4567
// LinkedIn: linkedin.com/in/yourusername
// GitHub: github.com/yourusername

// --- EDUCATION ---
// B.Sc. in Computer Science (2021–2025)
// University of Example | GPA: 3.8/4.0

// --- SKILLS ---
// • HTML, CSS, JavaScript, React
// • Node.js, Express, MongoDB
// • Git, GitHub, Vercel, AWS
// • UI/UX Design, Responsive Dev

// --- PROJECTS ---
// 1. Portfolio Website – HTML, CSS, JS
// 2. AI Chatbot – JavaScript, API
// 3. E-Commerce Platform – React, Node, MongoDB

// --- ACHIEVEMENTS ---
// • Hackathon Winner (2024)
// • AWS Certified Cloud Practitioner
// • Dean's List (3 semesters)

// --- REFERENCES ---
// Available upon request.
`;

        const blob = new Blob([content], { type: 'application/pdf' });
        // Actually it's a text file, but we name it .pdf for demo
        // For a real PDF, you'd use a library like jsPDF or link to a file.
        // This is a creative workaround to show the functionality.
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'MY CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);

        // Visual feedback
        const originalText = downloadBtn.innerHTML;
        downloadBtn.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
        setTimeout(() => {
            downloadBtn.innerHTML = originalText;
        }, 2000);
    });

    // ---- NAVBAR SHADOW ON SCROLL ----
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 40) {
            nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });

// });