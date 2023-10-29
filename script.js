var tl = gsap.timeline();

const loader = () => {
    var a = 0;
    setInterval(function(){
        a += Math.floor(Math.random() * 15);
        if (a < 100)
            document.querySelector(".loader h1").innerHTML = a+"%";
        else
            document.querySelector(".loader h1").innerHTML = "100%";
    }, 150)
}

tl.to(".loader", {
    y: "-100vh",
    delay: 2.5,
    onStart: loader()
})

tl.to(".nav-part1", {
    fontStretch: "1000%",
    fontWeight: "100",
    repeat: 1,
    yoyo: true,
})

tl.to(".page1 h1", {
    transform: "translateX(-150%)",
    fontWeight: 100,
    scrollTrigger: {
        trigger: ".page1",
        scroller: "body",
        start: "top 0",
        end: "top -200%",
        scrub: 2,
        pin: true
        //pin is always used for parent. 
        //i.e. .page1 as it is h1's parent
    }
})
