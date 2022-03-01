(function(){
  // const cursor = document.querySelector('.cursor');

  // document.addEventListener('mousemove', (e) => {
  //   const mouse_section = window.innerHeight * 3;

  //   if(e.pageY > mouse_section){
  //     cursor.style.left = e.pageX + 'px';
  //     cursor.style.top = e.pageY - window.scrollY + 'px';
  //     cursor.style.opacity = '1';
  //   } else {
  //     cursor.style.left = '0px';
  //     cursor.style.top = '0px';
  //     cursor.style.opacity = '0';
  //   }
  // })


  /* Original Size */
  const width = window.innerWidth;
  const contact_circle1 = document.querySelector('.contact-circle1');
  const circle1 = document.querySelector('.circle1');
  const contact_circle2 = document.querySelector('.contact-circle2');
  const circle2 = document.querySelector('.circle2');
  const contact_frame1 = document.querySelector('.contact-frame1');
  const frame1 = document.querySelector('.frame1');
  const contact_frame2 = document.querySelector('.contact-frame2');
  const frame2 = document.querySelector('.frame2');
  const contact_circle3 = document.querySelector('.contact-circle3');
  const circle3 = document.querySelector('.circle3');
  const contact_circle4 = document.querySelector('.contact-circle4');
  const circle4 = document.querySelector('.circle4');
  const contact_frame3 = document.querySelector('.contact-frame3');
  const frame3 = document.querySelector('.frame3');
  const contact_frame4 = document.querySelector('.contact-frame4');
  const frame4 = document.querySelector('.frame4');
  if($(window).width() > 768) {
    contact_circle1.style.width = width * 0.3 + 'px';
    contact_circle1.style.height = width * 0.3 + 'px';
    circle1.style.cx = width * 0 + 'px';
    circle1.style.cy = width * 0.20 + 'px';
    circle1.style.r = width * 0.2 + 'px';
    
    contact_circle2.style.width = width * 0.1 + 'px';
    contact_circle2.style.height = width * 0.1 + 'px';
    circle2.style.cx = width * 0.05 + 'px';
    circle2.style.cy = width * 0.05 + 'px';
    circle2.style.r = width * 0.05 + 'px';
  
    contact_frame1.style.width = width * 0.15 + 'px';
    contact_frame1.style.height = width * 0.15 + 'px';
    frame1.style.width = width * 0.10 + 'px';
    frame1.style.height = width * 0.10 + 'px';
    frame1.style.left = width * 0.10 + 'px';
  

    contact_frame2.style.width = width * 0.2 + 'px';
    contact_frame2.style.height = width * 0.2 + 'px';
    frame2.style.width = width * 0.15 + 'px';
    frame2.style.height = width * 0.15 + 'px';
  

    contact_circle3.style.width = width * 0.3 + 'px';
    contact_circle3.style.height = width * 0.3 + 'px';
    circle3.style.cx = width * 0 + 'px';
    circle3.style.cy = width * 0.20 + 'px';
    circle3.style.r = width * 0.2 + 'px';
    

    contact_circle4.style.width = width * 0.1 + 'px';
    contact_circle4.style.height = width * 0.1 + 'px';
    circle4.style.cx = width * 0.05 + 'px';
    circle4.style.cy = width * 0.05 + 'px';
    circle4.style.r = width * 0.05 + 'px';
  

    contact_frame3.style.width = width * 0.15 + 'px';
    contact_frame3.style.height = width * 0.15 + 'px';
    frame3.style.width = width * 0.10 + 'px';
    frame3.style.height = width * 0.10 + 'px';
    frame3.style.left = width * 0.10 + 'px';
  

    contact_frame4.style.width = width * 0.2 + 'px';
    contact_frame4.style.height = width * 0.2 + 'px';
    frame4.style.width = width * 0.15 + 'px';
    frame4.style.height = width * 0.15 + 'px';

  } else if ($(window).width() < 768) {
    contact_circle1.style.width = width * 0.8 + 'px';
    contact_circle1.style.height = width * 0.8 + 'px';
    circle1.style.cx = width * 0 + 'px';
    circle1.style.cy = width * 0.4 + 'px';
    circle1.style.r = width * 0.4 + 'px';
    
    contact_circle2.style.width = width * 0.2 + 'px';
    contact_circle2.style.height = width * 0.2 + 'px';
    circle2.style.cx = width * 0.1 + 'px';
    circle2.style.cy = width * 0.1 + 'px';
    circle2.style.r = width * 0.1 + 'px';

    contact_frame1.style.width = width * 0.15 + 'px';
    contact_frame1.style.height = width * 0.15 + 'px';
    frame1.style.width = width * 0.10 + 'px';
    frame1.style.height = width * 0.10 + 'px';
    frame1.style.left = width * 0.10 + 'px';

    contact_frame2.style.width = width * 0.2 + 'px';
    contact_frame2.style.height = width * 0.2 + 'px';
    frame2.style.width = width * 0.15 + 'px';
    frame2.style.height = width * 0.15 + 'px';

    contact_circle3.style.width = width * 0.8 + 'px';
    contact_circle3.style.height = width * 0.8 + 'px';
    circle3.style.cx = width * 0 + 'px';
    circle3.style.cy = width * 0.4 + 'px';
    circle3.style.r = width * 0.4 + 'px';
    
    contact_circle4.style.width = width * 0.2 + 'px';
    contact_circle4.style.height = width * 0.2 + 'px';
    circle4.style.cx = width * 0.1 + 'px';
    circle4.style.cy = width * 0.1 + 'px';
    circle4.style.r = width * 0.1 + 'px';

    contact_frame3.style.width = width * 0.15 + 'px';
    contact_frame3.style.height = width * 0.15 + 'px';
    frame3.style.width = width * 0.10 + 'px';
    frame3.style.height = width * 0.10 + 'px';
    frame3.style.left = width * 0.10 + 'px';

    contact_frame4.style.width = width * 0.2 + 'px';
    contact_frame4.style.height = width * 0.2 + 'px';
    frame4.style.width = width * 0.15 + 'px';
    frame4.style.height = width * 0.15 + 'px';
  }
  

  /* Change Size */
  window.addEventListener('resize', (e)=> {
    const width = window.innerWidth;

    if($(window).width() > 768) {
      contact_circle1.style.width = width * 0.3 + 'px';
      contact_circle1.style.height = width * 0.3 + 'px';
      circle1.style.cx = width * 0 + 'px';
      circle1.style.cy = width * 0.20 + 'px';
      circle1.style.r = width * 0.2 + 'px';
      
      contact_circle2.style.width = width * 0.1 + 'px';
      contact_circle2.style.height = width * 0.1 + 'px';
      circle2.style.cx = width * 0.05 + 'px';
      circle2.style.cy = width * 0.05 + 'px';
      circle2.style.r = width * 0.05 + 'px';
  
      contact_frame1.style.width = width * 0.15 + 'px';
      contact_frame1.style.height = width * 0.15 + 'px';
      frame1.style.width = width * 0.10 + 'px';
      frame1.style.height = width * 0.10 + 'px';
      frame1.style.left = width * 0.10 + 'px';
  
      contact_frame2.style.width = width * 0.2 + 'px';
      contact_frame2.style.height = width * 0.2 + 'px';
      frame2.style.width = width * 0.15 + 'px';
      frame2.style.height = width * 0.15 + 'px';
  
      contact_circle3.style.width = width * 0.3 + 'px';
      contact_circle3.style.height = width * 0.3 + 'px';
      circle3.style.cx = width * 0 + 'px';
      circle3.style.cy = width * 0.20 + 'px';
      circle3.style.r = width * 0.2 + 'px';
      
      contact_circle4.style.width = width * 0.1 + 'px';
      contact_circle4.style.height = width * 0.1 + 'px';
      circle4.style.cx = width * 0.05 + 'px';
      circle4.style.cy = width * 0.05 + 'px';
      circle4.style.r = width * 0.05 + 'px';
  
      contact_frame3.style.width = width * 0.15 + 'px';
      contact_frame3.style.height = width * 0.15 + 'px';
      frame3.style.width = width * 0.10 + 'px';
      frame3.style.height = width * 0.10 + 'px';
      frame3.style.left = width * 0.10 + 'px';
  
      contact_frame4.style.width = width * 0.2 + 'px';
      contact_frame4.style.height = width * 0.2 + 'px';
      frame4.style.width = width * 0.15 + 'px';
      frame4.style.height = width * 0.15 + 'px';

    }else if ($(window).width() < 768) {
      contact_circle1.style.width = width * 0.8 + 'px';
      contact_circle1.style.height = width * 0.8 + 'px';
      circle1.style.cx = width * 0 + 'px';
      circle1.style.cy = width * 0.4 + 'px';
      circle1.style.r = width * 0.4 + 'px';
      
      contact_circle2.style.width = width * 0.2 + 'px';
      contact_circle2.style.height = width * 0.2 + 'px';
      circle2.style.cx = width * 0.1 + 'px';
      circle2.style.cy = width * 0.1 + 'px';
      circle2.style.r = width * 0.1 + 'px';
  
      contact_frame1.style.width = width * 0.15 + 'px';
      contact_frame1.style.height = width * 0.15 + 'px';
      frame1.style.width = width * 0.10 + 'px';
      frame1.style.height = width * 0.10 + 'px';
      frame1.style.left = width * 0.10 + 'px';
  
      contact_frame2.style.width = width * 0.2 + 'px';
      contact_frame2.style.height = width * 0.2 + 'px';
      frame2.style.width = width * 0.15 + 'px';
      frame2.style.height = width * 0.15 + 'px';
  
      contact_circle3.style.width = width * 0.8 + 'px';
      contact_circle3.style.height = width * 0.8 + 'px';
      circle3.style.cx = width * 0 + 'px';
      circle3.style.cy = width * 0.4 + 'px';
      circle3.style.r = width * 0.4 + 'px';
      
      contact_circle4.style.width = width * 0.2 + 'px';
      contact_circle4.style.height = width * 0.2 + 'px';
      circle4.style.cx = width * 0.1 + 'px';
      circle4.style.cy = width * 0.1 + 'px';
      circle4.style.r = width * 0.1 + 'px';
  
      contact_frame3.style.width = width * 0.15 + 'px';
      contact_frame3.style.height = width * 0.15 + 'px';
      frame3.style.width = width * 0.10 + 'px';
      frame3.style.height = width * 0.10 + 'px';
      frame3.style.left = width * 0.10 + 'px';
  
      contact_frame4.style.width = width * 0.2 + 'px';
      contact_frame4.style.height = width * 0.2 + 'px';
      frame4.style.width = width * 0.15 + 'px';
      frame4.style.height = width * 0.15 + 'px';
    }
  })

  var pos = document.documentElement;
  pos.addEventListener('mousemove', (e) => {
    if($(window).width() > 768) {
      pos.style.setProperty('--x', e.clientX - 20 + 'px');
      pos.style.setProperty('--y', e.clientY - 60 + 'px');
    } else if($(window).width() < 768) {
      pos.style.setProperty('--x', e.clientX + 'px');
      pos.style.setProperty('--y', e.clientY + 'px');
    }
  })

})();