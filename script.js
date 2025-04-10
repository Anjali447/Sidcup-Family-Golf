var crsr = document.querySelector("#cursor")
var Blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){ //dets means x and y value
    crsr.style.left = dets.x + 30 + "px"
    crsr.style.top = dets.y + "px"
    // for moving cursor blur with the cursor
    Blur.style.left = dets.x - 250 + "px" //we minus half of the total width of cursor blur
    Blur.style.top = dets.y - 250 + "px"
})

var h4all = document.querySelectorAll("#nav h4")
// console.log(h4all)
h4all.forEach(function(elem){
    // console.log(elem)

    //jb mouse enter karega h4 m 
    elem.addEventListener("mouseenter", function () { 
        crsr.style.scale = 3 //jb bhi h4 k pass jayege to cursor ka size bada ho jayega
        crsr.style.border = "0.5px solid #fff" //border color of cursor becomes white
        crsr.style.backgroundColor = "transparent"
    })

    // jb mouse leave karega h4 se
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1 //jb bhi h4 se dur jayege to cursor ka chota means normal size m ho jayega
        crsr.style.border = "#95C11E" //border color of cursor becomes green or as it is
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
   scrollTrigger:{
    trigger: "#nav",
    scroller: "body",
    // markers:true,  
    start: "top -10%",
    end: "top -11%",
    scrub:1 //we can assign value of scrub = true or false / 1 to 5
   }
    })

    gsap.to("#main",{
        backgroundColor:"#000",
        scrollTrigger:{
            trigger: "#main",
            scroller:"body",
            // markers:true,
            start:"top -25%",
            end:"top -70%",
            scrub:2
        }
    })

    gsap.from("#about-us img, #about-us-in", {
        y: 50, //from y axis 
        opacity: 0,
        duration:1,
        stagger:0.4, //used for when we want that elements come one by one
        scrollTrigger:{
           trigger:"#about-us",
           scroller:"body",
        //    markers:true,
           start:"top 70%",
           end:"top 65%",
           scrub:1,
        }
    })

    gsap.from(".card", {
        scale:0.8, 
        opacity: 0,
        duration:1,
        // stagger:0.4, //used for when we want that elements come one by one
        scrollTrigger:{
           trigger:".card",
           scroller:"body",
        //    markers:true,
           start:"top 70%",
           end:"top 65%",
           scrub:1,
        }
    })

    gsap.from("#colon1",{
       y: -70,
       x:-70,
       scrollTrigger: {
        trigger:"#colon1",
        scroller: "body",
        // markers: true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
       }
    })

    gsap.from("#colon2",{
       y: 70,
       x:70,
       scrollTrigger: {
        trigger:"#colon1",
        scroller: "body",
        // markers: true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
       }
    })

    gsap.from("#page4 h1",{
       y:50,
       scrollTrigger: {
        trigger:"#page4 h1",
        scroller: "body",
        // markers: true,
        start:"top 80%",
        end:"top 70%",
        scrub:3
       }
    })