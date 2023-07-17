let tl = gsap.timeline();

tl.from("#main img",{
    opacity:0,
    duration:0.8,
    scale:0.3,
    y:-100
})

tl.from("#text-header",{
    y:-100,
    opacity:0,
    duration:0.8
})

tl.from("#scroll-div, #scroll-div2,#scroll-div3",{
    opacity:0,
    stagger:0.2,
    delay:0.8,
})