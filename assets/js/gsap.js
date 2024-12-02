window.addEventListener('load', () => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    tl.to('.f-slide', { duration: 1, opacity: 1 }) // Fade in slide
    .to('.f-name', { duration: 1, scale: 1, ease: "back.out(1.7)" }) // Scale name
    .to('.f-slide', { duration: 1, opacity: 0, display: 'none' }) // Hide slide
    .set('.all-in', { display: 'block' })
    .to('.all-in', { duration: 1, opacity: 1 })
    .to('.inf-hero', {
        delay: 0.5,
        duration: 2,
        opacity: 1,
        y: -200,
        ease: 'power4.out'
    }, "<")
    .to('.hero-img', {
        delay: 0.5,
        duration: 2,
        opacity: 1,
        y: -100,
        ease: 'power4.out'
    }, "<")
    .to('.sub-hero', {
        duration: 1,
        opacity: 1,
        ease: 'power4.out'
    })
    .to('.her-btns', {
        duration: 1.5,
        opacity: 1,
        y: -200,
        ease: 'power4.out'
    });

});
