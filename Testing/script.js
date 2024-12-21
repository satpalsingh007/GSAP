var tl = gsap.timeline();
gsap.from(".header-content",
    {
        duration:1,
        delay:1,
        y:-15,
        opacity:0,
        stagger:0.5,
        // scale: 1.5
    }
)
tl.to(".box",
    {
        x:"80vw",
        // scale:1,
        duration: 2,
        delay:1,
        rotate:360,
        repeat:-1,
        backgroundColor:"blue",
        borderRadius:10,
        yoyo:true
        
    }
)
// gsap.from(".box2",
//     {
//         x:200,
       
//         duration: 2,
//         delay:1,
//         rotate:360,
//         repeat:-1,
//         backgroundColor:"blue",
//         borderRadius:10,
//         yoyo:true
        
//     }
// )

tl.from(".box2",
    {
        x:"80vw",
        // scale:1,
        duration: 2,
        delay:0.5,
        rotate:360,
        repeat:-1,
        backgroundColor:"yellow",
        borderRadius:10,
        yoyo:true
        
    }
)

gsap.to(".box3",
    {
        x:"80vw",
        scale:2,
        // duration: 2,
        // delay:3,
        rotate:360,
        // repeat:-1,
        backgroundColor:"yellow",
        border:2,
        borderRadius:10,
        yoyo:true,
        scrollTrigger: {
            trigger: ".box3",
            scroller: "body",
            markers:true,
            start:"top 100%",
            // scrub:true,
            scrub:10,//used to tell the animation should go along with the scrolling

        }     
    }
)

gsap.to(".scroll-text",{
    duration:5,
    transform: "translateX(-450%)",
    fontSize: "350px",
    color:"white",
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start:"top 0%",
        end:"top -100%",
        markers: true,
        // scrub: true,
        scrub: 5,
        pin:true
    }
    
})

// guitar Strings
var initialPos="M 0 150 Q 350 150 700 150";
var finalPos="M 0 150 Q 350 150 700 150";

const guitarString = document.querySelector(".guitar-string");
guitarString.addEventListener("mousemove",(det)=>{
    // console.log("mouseEnter");
    console.log(det.x,det.y);
    const rect = guitarString.getBoundingClientRect();
    const mouseY = det.clientY - rect.top;
    path = `M 0 150 Q 350 ${mouseY} 700 150`;
    gsap.to("svg path", {
        attr:{d:path},
        duration: 0.2,
    })
})

guitarString.addEventListener("mouseleave",(det)=>{
    // console.log("mouseLeft")
    path = `M 0 150 Q 350 150 700 150`;
    gsap.to("svg path", {
        attr:{d:path},
        duration: 2,
        ease: "elastic.out(2,0.2)"
    })
})