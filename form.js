window.onload = function() {
  var $grecaptcha = document.querySelector('[id^="g-recaptcha-response"]');
  var $hcaptcha = document.querySelector('[id^="h-captcha-response"]');
  
  if($grecaptcha) {
    $grecaptcha.setAttribute("required", "required");
  }
  
  if($hcaptcha) {
    $hcaptcha.setAttribute("required", "required");
  }
  
  const $form = document.querySelector('form');
  $form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Prevented Submit');
  });
};
