

(function ($) {
    "use strict";


    // Get Device width
    let device_width = window.innerWidth;

    //Register GSAP
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);

    //Config GSAP
    gsap.config({
        nullTargetWarn: false,
    });


  

    // Title Animation
    let splitTitleLines = gsap.utils.toArray(".title-anim");
    splitTitleLines.forEach(splitTextLine => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: false,
          markers: false,
          toggleActions: 'play none none none'
        }
      });

      const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
      gsap.set(splitTextLine, { perspective: 400 });
      itemSplitted.split({ type: "lines" })
      tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -20, force3D: true, transformOrigin: "bottom center -50", stagger: 0.1 });
    });


      
    // Text Animation
    let splitTextLines = gsap.utils.toArray(".text-anim p");
    splitTextLines.forEach(splitTextLine => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: 'top 90%',
          duration: 2,
          end: 'bottom 60%',
          scrub: false,
          markers: false,
          toggleActions: 'play none none none'
        }
      });

      const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
      gsap.set(splitTextLine, { perspective: 400 });
      itemSplitted.split({ type: "lines" })
      tl.from(itemSplitted.lines, { duration: 1, delay: 0.5, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
    });
   



  // Pricing Table Animation 
  let pricing_timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".fact-counter-style1__content",
      start: "top center",
    }
  })

  gsap.set(".animation_from_bottom", { yPercent: 50 })

  pricing_timeline.to(".animation_from_bottom", {
    yPercent: 0,
    duration: 2,
    ease: "power4.out",
  })

  gsap.set(".animation_from_top", { yPercent: -50, opacity: 0 })
  pricing_timeline.to(".animation_from_top", {
    yPercent: 0,
    duration: 2,
    opacity: 1,
    ease: "power4.out",
  }, "-=2")

   


  
  // Blog animation 
  gsap.set(".blog__animation .single-blog-style1", { x: 50, opacity: 0 });

  if (device_width < 1023) {
    const blogList = gsap.utils.toArray(".blog__animation .single-blog-style1")
    blogList.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      blogTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".blog__animation .single-blog-style1", {
      scrollTrigger: {
        trigger: ".blog__animation .single-blog-style1",
        start: "top center+=300",
        markers: false
      },
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 3,
      stagger: {
        each: 0.3
      }
    })
  }



  
  // Team Animation
  gsap.set(".team_animation .team__anim", { y: -100, opacity: 0, })
  if (device_width < 1023) {
    const counterArray = gsap.utils.toArray(".team_animation .team__anim")
    counterArray.forEach((item, i) => {
      let counterTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      counterTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "bounce",
        duration: 1.5,
      })
    })
  }
  else {

    gsap.to(".team_animation .team__anim", {
      scrollTrigger: {
        trigger: ".team_animation",
        start: "top center+=300",
      },
      y: 0,
      opacity: 1,
      ease: "bounce",
      duration: 1.5,
      stagger: {
        each: 0.3,
      }
    })
  }




  // Fade bottom
  gsap.set(".fade_bottom", { y: 30, opacity: 0 });

  if (device_width < 1023) {
    const fadeArray = gsap.utils.toArray(".fade_bottom")
    fadeArray.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".fade_bottom", {
      scrollTrigger: {
        trigger: ".fade_bottom",
        start: "top center+=300",
        markers: false
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2,
      stagger: {
        each: 0.4
      }
    })
  }






})(jQuery);