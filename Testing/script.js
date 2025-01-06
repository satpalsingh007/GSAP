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
        delay:1,
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
            // markers:true,
            start:"top 80%",
            end:"top 50%",
            // scrub:true,
            scrub:2,//used to tell the animation should go along with the scrolling

        }     
    }
)

gsap.to(".scroll-text",{
    duration:5,
    transform: "translateX(-350%)",
    fontSize: "350px",
    color:"white",
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start:"top 0%",
        end:"top -100%",
        markers: true,
        ease: "sine.out",
        // scrub: true,
        scrub: 2,
        pin:true
    }
    
})



// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Editing SVG in Gsap
// guitar Strings
var initialPos = "M 0 150 Q 350 150 700 150";
var finalPos = "M 0 150 Q 350 150 700 150";

const guitarString = document.querySelector(".guitar-string");
guitarString.addEventListener("mousemove", (det) => {
    const rect = guitarString.getBoundingClientRect();
    // Calculate mouseX and mouseY relative to the element
    const mouseX = det.clientX - rect.left;
    const mouseY = det.clientY - rect.top;
    // Create a dynamic path using mouseY
    const path = `M 0 150 Q ${mouseX} ${mouseY} 700 150`;
    // Animate the SVG path
    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.2,
    });

    // console.log("MouseX:", mouseX, "MouseY:", mouseY);
});

guitarString.addEventListener("mouseleave", () => {
    // Reset the path to the initial position
    const path = `M 0 150 Q 350 150 700 150`;
    gsap.to("svg path", {
        attr: { d: path },
        duration: 2,
        ease: "elastic.out(2, 0.2)",
    });
});



// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Custom-Cursor
const body = document.querySelector(".body");
const customCursor = document.querySelector(".custom-cursor");
// Function to hide the cursor
const hideCursor = () => {
    customCursor.style.display = "none";
};

// Function to show the cursor
const showCursor = () => {
    customCursor.style.display = "block";
};
body.addEventListener("mousemove", (event) => {
    const rect = body.getBoundingClientRect();
    const cursorWidth = customCursor.offsetWidth;
    const cursorHeight = customCursor.offsetHeight;

    // Get mouse position relative to the container
    const mouseX = event.clientX - rect.left - cursorWidth / 2;
    const mouseY = event.clientY - rect.top - cursorHeight / 2;

    gsap.to(customCursor, {
        x: mouseX,
        y: mouseY,
        duration: 1, // Smooth follow effect
        ease: "back.out(2)",
    });
});
// Detect touch devices and disable the custom cursor
if ("ontouchstart" in window || navigator.maxTouchPoints) {
    hideCursor();
} else {
    showCursor();
}

// Optional: Listen for changes in input type (mouse vs touch)
window.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch") {
        hideCursor();
    } else if (event.pointerType === "mouse") {
        showCursor();
    }
});
