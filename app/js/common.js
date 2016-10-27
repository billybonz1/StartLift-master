$(function() {

	// Custom JS
    $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
    // $("[name=send]").click(function () {
    //     $(":input.error").removeClass('error');
    //     $(".allert").remove();
    //
    //     var error;
    //     var btn = $(this);
    //     var ref = btn.closest('form').find('[required]');
    //     var msg = btn.closest('form').find('input, textarea');
    //     var send_btn = btn.closest('form').find('[name=send]');
    //     var send_options = btn.closest('form').find('[name=campaign_token]');
    //
    //     $(ref).each(function() {
    //         if ($(this).val() == '') {
    //             var errorfield = $(this);
    //             $(this).addClass('error').parent('.field').append('<div class="allert"><span>Заполните это поле</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
    //             error = 1;
    //             $(":input.error:first").focus();
    //             return;
    //         } else {
    //             var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    //             if ($(this).attr("type") == 'email') {
    //                 if(!pattern.test($(this).val())) {
    //                     $("[name=email]").val('');
    //                     $(this).addClass('error').parent('.field').append('<div class="allert"><span>Укажите коректный e-mail</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
    //                     error = 1;
    //                     $(":input.error:first").focus();
    //                 }
    //             }
    //             var patterntel = /^()[0-9]{9,18}/i;
    //             if ( $(this).attr("type") == 'tel') {
    //                 if(!patterntel.test($(this).val())) {
    //                     $("[name=phone]").val('');
    //                     $(this).addClass('error').parent('.field').append('<div class="allert"><span>Укажите коректный номер телефона</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
    //                     error = 1;
    //                     $(":input.error:first").focus();
    //                 }
    //             }
    //         }
    //     });
    //     if(!(error==1)) {
    //         $(send_btn).each(function() {
    //             $(this).attr('disabled', true);
    //         });
    //         $(send_options).each(function() {
    //             var form = $(this).closest('form'), name = form.find('.name').val();
    //             if ($(this).val() == '') {
    //                 $.ajax({
    //                     type: 'POST',
    //                     url: 'mail.php',
    //                     data: msg,
    //                     success: function() {
    //
    //                     },
    //                     error: function(xhr, str) {
    //                         alert('Возникла ошибка: ' + xhr.responseCode);
    //                     }
    //                 });
    //             }
    //         });
    //     }
    //     return false;
    // })
});
