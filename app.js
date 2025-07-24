// Global variables
let currentLanguage = 'en';
let isScrolling = false;

// Translation object
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact Me',
        
        // Language toggle
        'language.toggle': '日本語',
        
        // Hero section
        'hero.title': 'Hevendra Khatri',
        'hero.subtitle': 'Bridge SE & Japanese Language Professional',
        'hero.description': 'Connecting cultures and technologies through seamless communication between Japanese clients and international development teams',
        'hero.downloadResume': 'Download Resume',
        'hero.viewProjects': 'View Projects',
        
        // Stats
        'stats.experience': 'Years Experience',
        'stats.projects': 'Projects Completed',
        'stats.languages': 'Languages',
        'stats.satisfaction': 'Client Satisfaction',
        
        // About section
        'about.title': 'About Me',
        'about.description1': 'For the past seven years, I have worked as a Bridge SE and Project Manager, facilitating seamless collaboration between Japanese clients and development teams in Nepal. Leveraging the Japanese language proficiency and cultural understanding I developed during my seven years living in Japan, I ensure smooth communication and the delivery of high-quality outcomes.',
        'about.description2': 'In addition to hands-on experience with web front-end development, I am skilled in CMS (WordPress) setup, design reviews, developer feedback, deadline management, and content updates. Moving forward, I aim to contribute to meaningful projects by enabling trustworthy and efficient collaboration in multilingual and multicultural environments.',
        'about.availability': 'Available for remote work globally',
        'about.businessHours': 'Japanese business hours preferred',
        
        // Services
        'service.communication.title': 'Japanese Business Communication',
        'service.communication.description': 'Native-level Japanese communication for business meetings and client relations',
        'service.bridge.title': 'Bridge SE Services',
        'service.bridge.description': 'Technical coordination between Japanese and international development teams',
        'service.pm.title': 'Project Management',
        'service.pm.description': 'End-to-end project coordination with focus on cross-cultural teams',
        'service.web.title': 'Web Direction',
        'service.web.description': 'Strategic web development guidance and technical leadership',
        
        // Experience
        'experience.title': 'Professional Experience',
        'job.bridge.title': 'Bridge Systems Engineer',
        'job.bridge.company': 'Japanese Technology Company • Remote',
        'job.bridge.type': 'Permanent, Full-time',
        'job.bridge.description': 'Leading cross-cultural communication between Japanese clients and international development teams. Specializing in requirement gathering, technical coordination, and project management to ensure seamless project delivery.',
        
        // Projects
        'projects.title': 'Featured Projects',
        'projects.subtitle': 'Real-world applications I\'ve delivered as Project Manager and Bridge SE',
        'project.job.title': 'Short-term Job Matching Platform',
        'project.job.role': 'Project Manager & Bridge SE',
        'project.job.description': 'A comprehensive job matching web application for Japanese clients, similar to Timee and Harome Mercari platforms.',
        
        // Skills
        'skills.title': 'Professional Skills',
        'skills.languages.title': 'Languages & Communication',
        'skills.management.title': 'Project Management',
        'skills.frontend.title': 'Frontend Development',
        'skills.design.title': 'Design & Tools',
        
        // Education
        'education.title': 'Education & Certifications',
        'education.japanese': 'Japanese Language Proficiency',
        'education.pm': 'Project Management Certification',
        
        // Contact
        'contact.title': 'Let\'s Work Together',
        'contact.description': 'Ready to bridge the gap between your vision and reality? Let\'s discuss how I can help your international projects succeed.',
        'contact.start': 'Start a Conversation',
        'contact.resume': 'Download Resume',
        
        // Footer
         'footer.copyright': '© 2024 Hevendra Khatri. Bridging cultures, delivering excellence.'

    },
    ja: {
        // Navigation
        'nav.home': 'ホーム',
        'nav.about': 'プロフィール',
        'nav.experience': '経歴',
        'nav.projects': 'プロジェクト',
        'nav.skills': 'スキル',
        'nav.contact': 'お問い合わせ',
        
        // Language toggle
        'language.toggle': 'English',
        
        // Hero section
        'hero.title': 'ビベック・マナンダー',
        'hero.subtitle': 'ブリッジSE・日本語専門プロフェッショナル',
        'hero.description': '日本のクライアントと国際開発チーム間のシームレスなコミュニケーションを通じて、文化と技術を結びます',
        'hero.downloadResume': '履歴書ダウンロード',
        'hero.viewProjects': 'プロジェクト表示',
        
        // Stats
        'stats.experience': '年の経験',
        'stats.projects': '完了プロジェクト',
        'stats.languages': '言語',
        'stats.satisfaction': '顧客満足度',
        
        // About section
        'about.title': 'プロフィールについて',
        'about.description1': '私は約7年間、日本のクライアントとネパールの開発チームの橋渡し役として、ブリッジSE・PMの業務に従事してきました。日本滞在中に培った高度な日本語力と深い文化理解を活かし、円滑なコミュニケーションと高品質な成果物の提供を実現しています。',
        'about.description2': 'Webフロントエンドの実装経験に加え、CMS（WordPress）の構築、デザイン確認、開発者へのフィードバック、納期管理、コンテンツ更新代行など、幅広い業務に対応可能です。今後も多言語・多文化環境において、信頼性の高い連携を通じて価値あるプロジェクトの推進に貢献していきたいと考えています。',
        'about.availability': 'グローバルでリモートワーク対応可能',
        'about.businessHours': '日本との時差を考慮',
        
        // Services
        'service.communication.title': '日本語ビジネスコミュニケーション',
        'service.communication.description': 'ビジネス会議やクライアント関係におけるネイティブレベルの日本語コミュニケーション',
        'service.bridge.title': 'ブリッジSEサービス',
        'service.bridge.description': '日本と国際開発チーム間の技術的調整',
        'service.pm.title': 'プロジェクト管理',
        'service.pm.description': '多文化チームに焦点を当てたエンドツーエンドのプロジェクト調整',
        'service.web.title': 'Webディレクション',
        'service.web.description': '戦略的Web開発ガイダンスと技術的リーダーシップ',
        
        // Experience
        'experience.title': '職歴',
        'job.bridge.title': 'ブリッジシステムエンジニア',
        'job.bridge.company': '日本のテクノロジー企業 • Remote',
        'job.bridge.type': '正社員・フルタイム',
        'job.bridge.description': '日本のクライアントと国際開発チーム間の多文化コミュニケーションをリード。要件収集、技術調整、プロジェクト管理を専門とし、シームレスなプロジェクト実現を保証。',
        
        // Projects
        'projects.title': '主要プロジェクト',
        'projects.subtitle': 'プロジェクトマネージャー・ブリッジSEとして実現した実際のアプリケーション',
        'project.job.title': '単発バイトマッチングプラットフォーム',
        'project.job.role': 'プロジェクトマネージャー兼ブリッジ業務',
        'project.job.description': 'タイミーやハロメルカリ等と同様の日本のお客様向け単発バイトマッチングウェブアプリケーション。',
        
        // Skills
        'skills.title': '専門スキル',
        'skills.languages.title': '言語・コミュニケーション',
        'skills.management.title': 'プロジェクト管理',
        'skills.frontend.title': 'フロントエンド開発',
        'skills.design.title': 'デザイン・ツール',
        
        // Education
        'education.title': '学歴・資格',
        'education.japanese': '日本語能力認定',
        'education.pm': 'プロジェクト管理認定',
        
        // Contact
        'contact.title': '一緒に働きましょう',
        'contact.description': 'あなたのビジョンと現実の間のギャップを埋める準備はできていますか？国際プロジェクトの成功をどのようにサポートできるかお話しましょう。',
        'contact.start': '会話を始める',
        'contact.resume': '履歴書ダウンロード',
        
        // Footer
         'footer.copyright': '© 2024 ヘベンドラ・カトリ. 文化の架け橋、卓越性の実現。'
    }
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    setupScrollAnimations();
    setupSmoothScrolling();
    updateLanguage();
    
    // Add loading class to body for initial fade-in
    document.body.classList.add('loading');
});

// Language toggle functionality
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ja' : 'en';
    updateLanguage();
    
    // Add or remove Japanese class for typography adjustments
    if (currentLanguage === 'ja') {
        document.body.classList.add('ja');
    } else {
        document.body.classList.remove('ja');
    }
}

// Update all text content based on current language
function updateLanguage() {
    const elements = document.querySelectorAll('[data-en][data-ja]');
    
    elements.forEach(element => {
        const text = currentLanguage === 'en' ? element.getAttribute('data-en') : element.getAttribute('data-ja');
        element.textContent = text;
    });
    
    // Update language toggle button
    const languageToggle = document.querySelector('.language-text');
    if (languageToggle) {
        languageToggle.textContent = currentLanguage === 'en' ? '日本語' : 'English';
    }
    
    // Update logo text
    const logoText = document.querySelector('.logo-text');
    if (logoText) {
        logoText.textContent = currentLanguage === 'en' ? 'Hevendra Khatri' : 'ヘベンドラ・カトリ';
    }
}

// Scroll to contact section
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Scroll to projects section
function scrollToProjects() {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize animations
function initializeAnimations() {
    // Add staggered animation delays to stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        card.style.animationDelay = `${1.1 + (index * 0.1)}s`;
    });
    
    // Add staggered animation delays to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${0.2 + (index * 0.1)}s`;
    });
    
    // Add staggered animation delays to experience cards
    const experienceCards = document.querySelectorAll('.experience-card');
    experienceCards.forEach((card, index) => {
        card.style.animationDelay = `${0.2 + (index * 0.15)}s`;
    });
    
    // Add staggered animation delays to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${0.2 + (index * 0.2)}s`;
    });
    
    // Add staggered animation delays to skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.animationDelay = `${0.1 + (index * 0.1)}s`;
    });
}

// Setup scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add specific animations based on element type
                if (entry.target.classList.contains('service-card')) {
                    entry.target.classList.add('slide-in-left');
                } else if (entry.target.classList.contains('experience-card')) {
                    entry.target.classList.add('slide-in-right');
                } else if (entry.target.classList.contains('project-card')) {
                    entry.target.classList.add('scale-in');
                } else if (entry.target.classList.contains('skill-category')) {
                    entry.target.classList.add('fade-in');
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.service-card, .experience-card, .project-card, .skill-category, .education-card');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Header scroll effect
window.addEventListener('scroll', function() {
    if (isScrolling) return;
    
    isScrolling = true;
    requestAnimationFrame(() => {
        const header = document.querySelector('.header');
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.8)';
            header.style.boxShadow = 'none';
        }
        
        isScrolling = false;
    });
});

// Parallax effect for background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.background-pattern::before');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.service-card, .experience-card, .project-card, .skill-category, .education-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 500);
    }
});

// Add bounce animation to buttons on click
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Remove existing animation
            this.classList.remove('btn-clicked');
            
            // Trigger reflow
            void this.offsetWidth;
            
            // Add animation class
            this.classList.add('btn-clicked');
            
            // Remove class after animation
            setTimeout(() => {
                this.classList.remove('btn-clicked');
            }, 200);
        });
    });
});

// Add CSS for button click animation
const style = document.createElement('style');
style.textContent = `
    .btn-clicked {
        animation: bounceClick 0.2s ease;
    }
    
    @keyframes bounceClick {
        0% { transform: scale(1); }
        50% { transform: scale(0.95); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('mobile-open');
}

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const suffix = counter.textContent.replace(/\d/g, '');
        let current = 0;
        const increment = target / 50;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + suffix;
                setTimeout(updateCounter, 40);
            } else {
                counter.textContent = target + suffix;
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Add floating animation to profile image
document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.querySelector('.profile-img');
    if (profileImage) {
        profileImage.style.animation = 'float 6s ease-in-out infinite';
    }
});

// Progressive image loading
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Add particle effect to hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(37, 99, 235, 0.3);
            border-radius: 50%;
            animation: float ${3 + Math.random() * 4}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 4}s;
        `;
        hero.appendChild(particle);
    }
}

// Initialize particles on load
window.addEventListener('load', createParticles);

// Error handling for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });
});

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: #ffaa00;
        z-index: 9999;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
document.addEventListener('DOMContentLoaded', createScrollProgress);

console.log('Portfolio script loaded successfully! 🚀');

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger-btn');
  const nav = document.querySelector('.nav');
  hamburger.addEventListener('click', function () {
    nav.classList.toggle('open');
  });
});