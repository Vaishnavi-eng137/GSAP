let tl = gsap.timeline();


tl.from("#text-div,#text-div h1",{
    opacity:0,
    x:-200,
    duration:0.6,
    delay:1,
    stagger:0.3
})

tl.from("#part2 img",{
    opacity:0,
    duration: 0.8,
    x:-400
})

tl.from("#part2a img",{
    opacity:0,
    delay:-0.6,
    duration: 0.8,
    x:400
})

tl.from("#nav img,#nav h1",{
    opacity:0,
    delay:-0.6,
    duration: 0.8,
    x:400
})


tl.from("#vertical-text",{
    delay:-1,
    duration: 8,
    y:1400,
    repeat:-1,
    yoyo:true
})