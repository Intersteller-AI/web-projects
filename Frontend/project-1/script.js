// --- to create multiple colered boxex ---
function createColorBoxes(tell_divs = 6, parent_name = "upbar") {
    iniColor = 255 / tell_divs;
    for (var i = 0; i < tell_divs; i++) {
        tempColor = 225;
        tempColor = tempColor - iniColor * i;
        var div = document.createElement("div");
        div.style.width = "20%";
        div.style.height = "100%";
        div.style.backgroundColor = `rgb(${tempColor}, ${tempColor}, ${tempColor})`;
        document.getElementById(parent_name).appendChild(div);
    }
}

createColorBoxes();

// createColorBoxes(parent_name='nupbar')



function createtimeline(slider_pos = '40vw', nheadcolor = 'white', pb_ratio = 0, blob_delay=1.2) {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".circle_scroller",
            end: "+=" + window.innerHeight * 15,
            start: "top top",
            pin: ".circle_scroller",
            scrub: true,
        },
    });

    tl.from(".imgslider", {
        x: slider_pos,
        // right: "0%",
        ease: Power0,
    }).to(".info_div", {
        opacity: 0,
        ease: Back,
    }, "info_invi")
        .to(".slider>h1", {
            y: 400,
            delay: -0.01,
            ease: Power0,
        }, "info_invi")
        .to(".img_div", {
            scale: 0,
            ease: Power4,
            delay: -0.1,
        }, "same")
        .to(".circle", {
            scale: 0,
            duration: 2,
            ease: Power0,
        }, "same")
        .to(".top img", {
            scale: 0,
            ease: Power0,
            duration: 2,
            delay: 0.01,
        }, "same")
        .to(".btm img", {
            rotate: "-180deg",
            ease: Power0,
            duration: 2,
            delay: 0.01,
            stagger: 0.08,
            scale: 0,
        }, "same")
        .to(".turn_w", {
            delay: -2.3,
            color: "white",
        })
        .to(".img_black", {
            delay: -2.3,
            opacity: 0
        })
        .to(".img_wht", {
            delay: -2.3,
            opacity: 1
        })
        .to(".innercircle", {
            scale: 0,
            ease: Power0,
            duration: 2.4,
            delay: -0.0095,
        }, "same")
        .from('.eclipse', {
            scale: 0.5,
            y: 800,
            delay: -0.6,
            ease: Power0,
        }, 'same')
        .to('.eclipse', {
            delay: -1.8,
            opacity: 0,
            ease: Power4
        })
        .from(".circle_scroller>h1", {
            rotate: "40deg",
            x: -200,
            y: 900,
            ease: Power0,
            delay: 0.3,
        }, "same")
        .to("#pink_box", {
            delay: 0.5,
            duration: 4,
            top: 0,
            ease: Power0,
        })
        .to("#pink_box", {
            delay: 1,
            duration: 3,
            transform: `translate(${pb_ratio}%, -250%)`,
            ease: Power0,
        })
        .to("#main_image>img", {
            delay: -11,
            scale: 1,
            ease: Power0,
            duration: 6,
        })
        .to(
            ".circle_scroller",
            {
                delay: -0.5,
                y: "-100%",
                ease: Power0,
                display: "none",
                pointerEvents: "none",
                zIndex: -1,
                duration: 2,
            },
            "z-1"
        )
        .to(".circle_scroller>h1, .overlay", {
            pointerEvents: "none",
            delay: 1.5,
            ease: Power0,
            display: "none",
            zIndex: -1,
        }, "z-1")
        .to("#main_image", {
            ease: Power0,
            display: "none",
            pointerEvents: "none",
            opacity: 0,
            zIndex: -1,
        })
        .from(".couple_circles .cirs", {
            top: "150%",
            scale: 0.7,
            stagger: 0.09,
            ease: Power0,
        })
        .to(".couple_circles .cirs:nth-child(1)", {
            left: "50%",
            ease: Power0,
        }, "cirs")
        .to(".couple_circles .cirs:nth-child(2)", {
            left: "50%",
            ease: Power0,
        }, "cirs")
        .to(".couple_circles .cirs", {
            scale: 0.7,
            ease: Power0,
        })
        .to(".couple_circles .cirs", {
            scale: 7,
            ease: Power0,
            duration: 2,
        })
        .to('.content_dwn', {
            delay: -1.6,
            borderColor: "#fff",
            ease: Expo.ease
        })
        .from(".dot-div:nth-child(2)", {
            x: "95.2%",
            ease: Power0,
            delay: -2.3,
            duration: 5,
        }, "gradient-same")
        .to(".count-text>div", {
            y: "-100%",
            delay: -2.6,
            ease: Power0,
        })
        .to(".nheady>h1, .ndwnbar", {
            color: nheadcolor,
            ease: Power0,
            delay: -4.1,
        }, "gradient-name")
        .from(".gradient_div", {
            delay: -0.7,
            left: "300vw",
            ease: Power0,
            duration: 12,
        }, "gradient-same")
        .to("#flare-text1", {
            delay: 1.3,
            duration: 1,
            opacity: 0,
            ease: Power0,
        }, "gradient-same")
        .to("#flare-text2", {
            delay: 3,
            duration: 2,
            opacity: 1,
            ease: Power0,
        }, "gradient-same")
        .from(".dot-div:nth-child(3)", {
            delay: 5,
            x: "97.6%",
            ease: Power0,
            duration: 4,
        }, "gradient-same")
        .to(".count-text>div", {
            y: "-200%",
            ease: Power0,
            delay: 6,
        }, "gradient-same")
        .from(".rising_shack>div", {
            delay: -1.3,
            y: "100%",
            ease: Power0,
            stagger: 0.14,
            duration: 1
        }, "rising")
        .from(".small_rising_shack", {
            delay: -.7,
            y: "100%",
            ease: Power0,
        }, "rising")
        .to(".small_rising_shack", {
            delay: 0.5,
            x: -160,
            ease: Power0,
        }, "rising")
        .to(".lower_shack", {
            delay: -0.2,
            x: -80,
            ease: Power0,
        }).to('.next', {
            y: "-100%",
            delay: 1.2,
            ease: Power0,
            pointerEvents: "none",
        },'next-clear').to('.next', {
            delay: 2,
            duration: 2,
            ease: Power0,
            display: "none",
            zIndex: -1,
        }, 'next-clear')
        .to('.combo-scroll', {
            y: "-100%",
            ease: Power0,
            duration: 5,
            delay: -2,
        }, 'with-scroll')
        .to('.combo-rotor', {
            delay: -2,
            rotate: 360,
            duration: 4,
            ease: Power0
        }, 'with-scroll')
        .to('.text-runner>h4', {
            transform: "translate(-5%, 0%)",
            ease: Power4,
            duration: 3,
            delay: -2.6,
        }, 'with-scroll')
        .to('.background-block', {
            left: "100%",
            ease: Power0,
            // duration: 1,
            delay: -.9
        }, 'with-scroll')
        .from('.come-from-left', {
            x: -300,
            ease: Power0, 
            delay: -.8,
            stagger: 0.1
        }, 'with-scroll')
        .from('.come-from-right', {
            x: 300,
            ease: Power0, 
            delay: -.8,
        }, 'with-scroll')
        .from(".divided-img>div", {
            y: "50%",
            ease: Power0,
            stagger: 1, 
            delay: -0.9,
            duration: 2
        }, 'with-scroll')
        .to('.overpink>h1', {
            transform: "translate(-35%, 0%)",
            ease: Power4,
            duration: 3,
            delay: -1,
        }, 'with-scroll')
        .from('.last-pop-blob', {
            y: "120%",
            ease: Power0,
            delay: blob_delay,
            scale: 0.2,
            duration: 3,
        }, 'with-scroll')


}

const windowwidth = window.innerWidth || document.documentElement.clientWidth ||
    document.body.clientWidth;
const windowheight = window.innerHeight || document.documentElement.clientHeight ||
    document.body.clientHeight;

if (windowwidth < 481) {
    createtimeline(slider_pos = '0vw', nheadcolor = 'black', pb_ratio = -50, blob_delay=0.2)
}else if(windowwidth < 921){
    createtimeline(slider_pos = '25vw', blob_delay=-1)
}else {
    createtimeline()
}


// --- initial properties of next page ---

gsap.set(".cirs:nth-child(1)", { zIndex: 4, left: "40%" });
gsap.set(".cirs:nth-child(2)", { zIndex: 3, left: "58%" });

gsap.set(".dot-div:nth-child(1)", { zIndex: 4, backgroundColor: "white" });
gsap.set(".dot-div:nth-child(2)", {
    zIndex: 5,
    backgroundColor: "white",
    x: "0%",
    opacity: 1,
});

gsap.set(".dot-div:nth-child(3)", {
    zIndex: 6,
    backgroundColor: "white",
    x: "0%",
    opacity: 1,
});

document.querySelector('#pale-red').addEventListener('mouseenter', (details)=>{
    document.querySelector('.combinations').style.backgroundColor = '#784857'
    document.querySelector('#pale-red .cliper>h4').style.color = '#784857'
    document.querySelector('#pale-hole').style.opacity = '1'
    document.querySelector('.background-block').style.backgroundColor = '#784857'
})

document.querySelector('#pale-red').addEventListener('mouseleave', (details)=>{
    document.querySelector('.combinations').style.backgroundColor = '#fff7ff'
    document.querySelector('#pale-red .cliper>h4').style.color = '#D5A7B4'
    document.querySelector('#pale-hole').style.opacity = '0'
    document.querySelector('.background-block').style.backgroundColor = '#fff7ff'
})

document.querySelector('#megenta-blue').addEventListener('mouseenter', (details)=>{
    document.querySelector('.combinations').style.backgroundColor = '#def3ff'
    document.querySelector('#megenta-blue .cliper>h4').style.color = '#def3ff'
    document.querySelector('#mag-blue').style.opacity = '1'
    document.querySelector('.background-block').style.backgroundColor = '#def3ff'
})

document.querySelector('#megenta-blue').addEventListener('mouseleave', (details)=>{
    document.querySelector('.combinations').style.backgroundColor = '#fff7ff'
    document.querySelector('#megenta-blue .cliper>h4').style.color = '#D5A7B4'
    document.querySelector('#mag-blue').style.opacity = '0'
    document.querySelector('.background-block').style.backgroundColor = '#fff7ff'
})

document.querySelector('#triangle-butt').addEventListener('mouseenter', (details)=>{
    document.querySelector('.combinations').style.backgroundColor = '#706993'
    document.querySelector('#triangle-butt .cliper>h4').style.color = '#706993'
    document.querySelector('#tri-butt').style.opacity = '1'
    document.querySelector('.background-block').style.backgroundColor = '#706993'
})

document.querySelector('#triangle-butt').addEventListener('mouseleave', (details)=>{
    document.querySelector('.combinations').style.backgroundColor = '#fff7ff'
    document.querySelector('#triangle-butt .cliper>h4').style.color = '#D5A7B4'
    document.querySelector('#tri-butt').style.opacity = '0'
    document.querySelector('.background-block').style.backgroundColor = '#fff7ff'
})
