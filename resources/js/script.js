$(document).ready(function() {
   
   /* For the sticky navigation */ 
    
    $('.js--about-us').waypoint(function(direction) {
            if (direction=="down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
            offset: '25%'
        
    });
    
    
  /* Scroll on buttons */
    
    /* Join The Battle */
        
   $('.js--scroll-to-sign-up').click(function (){
       $('html, body').animate({scrollTop: $('.js--sign-up').offset().top}, 1000);
       
   });
    
    /* About Us */
    
    $('.js--scroll-to-about-us').click(function() {
        $('html, body').animate({scrollTop: $('.js--about-us').offset().top}, 1000);
        
    });
    
    /* Contact Us */
    
    $('.js--scroll-to-contact-us').click(function() {
        $('html, body').animate({scrollTop: $('.js--contact-us').offset().top}, 1000);
        
    });
    
    
    /* Fantasy Teams */
    
       $('.js--scroll-to-fantasy-teams').click(function (){
       $('html, body').animate({scrollTop: $('.js--fantasy-teams').offset().top}, 1000);
       
   });
    
    /* League Table */
    
       $('.js--scroll-to-league-table').click(function (){
       $('html, body').animate({scrollTop: $('.js--under-construction').offset().top}, 1000);
       
   });
    
    /* How To Play */
    
       $('.js--scroll-to-how-to-play').click(function (){
       $('html, body').animate({scrollTop: $('.js--how-to-play').offset().top}, 1000);
       
   });
    
    /* Animation on scroll */
    
    /* About Us */
    
    $('.js--waypoint-1').waypoint(function(direction){
        $('.js--waypoint-1').addClass('animated fadeIn');
        
    }, {
        offset: '50%'
    });
    
    /* How To Play */
    
    $('.js--waypoint-2').waypoint(function(direction){
        $('.js--waypoint-2').addClass('animated fadeInUp');
        
    }, {
        offset: '50%'
    });
    
    /* Fantasy Teams */
    
    $('.js--waypoint-3').waypoint(function(direction){
        $('.js--waypoint-3').addClass('animated pulse');
        
    }, {
        offset: '40%'
    });
    
    /* Sign Up Form */
    
    $('.js--waypoint-4').waypoint(function(direction){
        $('.js--waypoint-4').addClass('animated fadeInDown');
        
    }, {
        offset: '25%'
    });
    
    /* Contact Us */
    
    $('.js--waypoint-5').waypoint(function(direction){
        $('.js--waypoint-5').addClass('animated slideInLeft');
        
    }, {
        offset: '25%'
    });
    
    
    /* Mobile Navigation */
    $('.js--nav-icon').click(function() {
        var nav= $('.js--main-nav');
        var icon= $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if(icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');      
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
    });
    
    
});

