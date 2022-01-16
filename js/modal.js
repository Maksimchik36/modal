// jkuery
// $('.js-modal-open').click(function () {

//     var modalName = $(this).attr('data-modal');
//     var modal = $('.js-modal[data-modal="' + modalName + '"]');
//     modal.addClass('is-show');
//     $('js-modal-overlay').addClass('is-show');
// });

// $('.js-modal-close').click(function () {
//     $(this).parent(.js - modal).removeClass('is-show');
//     $('.js-modal-overlay.is-show').removeClass('is-show');
// });
        
// $('.js-modal-overlay').click(function () {
//     $(this).removeClass('is-show');
//     $('.js-modal.is-show').removeClass('is-show');
    
// })
// !function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function() {
   var modalButtons = document.querySelectorAll('.js-open-modal'),
       overlay      = document.querySelector('#overlay-modal'),
       closeButtons = document.querySelector('.js-modal-close');
   
   
   modalButtons.forEach(function(item){
      
      item.addEventListener('click', function(e) {
         
         e.preventDefault();
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
         
         modalElem.classList.add('active');
         overlay.classList.add('active');
      }); // end click
   }); // end foreach
    
    closeButtons.forEach(function(cross){
   cross.addEventListener('click', function() {
      var parentModal = this.closest('.modal');
      parentModal.classList.remove('active');
      overlay.classList.remove('active');
   });
}); // end foreach
}); // end ready



// from task 7
// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();