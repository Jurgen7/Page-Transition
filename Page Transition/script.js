const animation = gsap.timeline({defaults: {ease: 'power2.out'}});

animation.to('.slider', {y:"-100%", duration: 1.2});
animation.to('.hero', {y:"0%", duration: 1.2}, "-=0.8");
animation.fromTo('.nav', {opacity: 0}, {opacity: 1, duration: 1});