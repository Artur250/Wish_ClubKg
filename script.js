
const box = document.querySelector('.main_title');
const title = document.querySelector('.title');

let t = 0;

function neonAnimate() {
    t += 0.05;

   
    const glow = (Math.sin(t) + 1) / 2;

    
    const outer = 12 + glow * 20;
    const inner = 18 + glow * 15;
    const opacity = 0.3 + glow * 0.4;

    box.style.boxShadow = `
        0 0 ${outer}px rgba(0, 200, 255, ${opacity}),
        0 0 ${outer * 2}px rgba(0, 200, 255, ${opacity * 0.7}),
        inset 0 0 ${inner}px rgba(0, 200, 255, ${opacity})
    `;

 
    title.style.textShadow = `
        0 0 ${6 + glow * 6}px #00d9ff,
        0 0 ${12 + glow * 12}px #00bfff,
        0 0 ${25 + glow * 25}px #0094ff
    `;

    requestAnimationFrame(neonAnimate);
}

neonAnimate();


const buttons = document.querySelectorAll('.link_admin a');

let btnTime = 0; 

function animateButtonsNeon() {
    btnTime += 0.05;
    const glowBase = (Math.sin(btnTime) + 1) / 2;

    buttons.forEach((btn, index) => {
        const offset = index * 0.7;
        const glow = (Math.sin(btnTime + offset) + 1) / 2;

        const outer = 6 + glow * 12;
        const inner = 6 + glow * 10;
        const opacity = 0.25 + glow * 0.35;

        btn.style.boxShadow = `
            0 0 ${outer}px rgba(0, 200, 255, ${opacity}),
            inset 0 0 ${inner}px rgba(0, 200, 255, ${opacity})
        `;
    });

    requestAnimationFrame(animateButtonsNeon);
}

animateButtonsNeon();


buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-3px)';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0)';
    });
});

