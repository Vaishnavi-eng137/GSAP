let tl = gsap.timeline();

tl.from("#left,#left #textcenter,#left #lnav",{
    x:-200,
    opacity:0,
    duration:0.8,
    delay:0.6,
    stagger:0.4
})

tl.from("#textcenter h1,#textcenter p,#textcenter a",{
    x:-400,
    opacity:0,
    duration:0.8,
    stagger:0.4
})

tl.from("#right #topright, #right #bottomright",{
    y:-200,
    opacity:0,
    stagger:0.4,
    scale:0.5

})