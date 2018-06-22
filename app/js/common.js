$(function() {
  if($('#portfolio').length > 0){
    var mixer = mixitup('#portfolio', {
      controls: {
          toggleDefault: 'all'
      }
    });

  mixer.filter('.mix');
  }

  var controller = new ScrollMagic.Controller();

  $('.fade__in1').each(function(){
    var fadeInUp = new ScrollMagic.Scene({
  		triggerElement: this,
  		triggerHook: 1
  	})
  	.setClassToggle(this, 'fade__in__up')
  	.addTo(controller);
  });
  $('.fade__in2').each(function(){
    var fadeInUp = new ScrollMagic.Scene({
  		triggerElement: this,
  		triggerHook: 1
  	})
  	.setClassToggle(this, 'fade__in__up')
  	.addTo(controller);
  });
  $('.fade__in3').each(function(){
    var fadeInUp = new ScrollMagic.Scene({
  		triggerElement: this,
  		triggerHook: 1
  	})
  	.setClassToggle(this, 'fade__in__up')
  	.addTo(controller);
  });
  $('.fade__in4').each(function(){
    var fadeInUp = new ScrollMagic.Scene({
  		triggerElement: this,
  		triggerHook: 1
  	})
  	.setClassToggle(this, 'fade__in__up')
  	.addTo(controller);
  });

  $('.smlogo__fup1').each(function(){
    var tween = TweenMax.staggerFromTo($('.smlogo__fup1').find('.smlogo__wrp'), 1, {y: 10, autoAlpha: 0}, {y: 0, autoAlpha: 1}, 0.15);
    var scene = new ScrollMagic.Scene({triggerElement: this, triggerHook: 0.8})
            .setTween(tween)
            .addTo(controller);
  })
  $('.smlogo__fup2').each(function(){
    var tween = TweenMax.staggerFromTo($('.smlogo__fup2').find('.smlogo__wrp'), 1, {y: 10, autoAlpha: 0}, {y: 0, autoAlpha: 1}, 0.15);
    var scene = new ScrollMagic.Scene({triggerElement: this, triggerHook: 1})
            .setTween(tween)
            .addTo(controller);
  })
  $('.smlogo__fup3').each(function(){
    var tween = TweenMax.staggerFromTo($('.smlogo__fup3').find('.smlogo__wrp'), 1, {y: 10, autoAlpha: 0}, {y: 0, autoAlpha: 1}, 0.15);
    var scene = new ScrollMagic.Scene({triggerElement: this, triggerHook: 0.8})
            .setTween(tween)
            .addTo(controller);
  })


});
