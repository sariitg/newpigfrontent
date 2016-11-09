ACC.footer = {

		spinner : $("<img src='" + NP.spinner.url + "' />"),

    bindSubmitButton : function() {

        $('.submitButton').click(function(e) {
            e.preventDefault();
            $.colorbox({
                href : getSubmitButtonUrl,
                onComplete : function() {
                    ACC.common.refreshScreenReaderBuffer();
                    $('#divId').css('display', 'block');
                    $('#divId').dialog();
                },
                onClosed : function() {
                    ACC.common.refreshScreenReaderBuffer();
                }
            });
        });
    },

    updateFooterSlot : function() {
        $('#captureEmailSlot').addClass("hidden");
        $('#squealDealsSlot').removeClass("hidden");
    },

    // expecting cms:pageSlot div
    updateSlot : function(pageSlot, success) {
        if(typeof success === 'undefined') {
            success = false;
        }
        if(success === true) {
            pageSlot.find('.cms-email-address-capture-form').addClass('hidden');
            pageSlot.find('.marketing-block-success').removeClass('hidden');
        } else {
            pageSlot.addClass('hidden');
            $(pageSlot.data('replacement')).removeClass('hidden');
        }
    },

    updateSlots : function(skip) {
        $('.cms-email-address-capture-component').each(function() {
            var parent = $(this).parents('.email-address-block');
            if (!parent.is(skip)) {
                ACC.footer.updateSlot(parent);
            }
        });
    },

    bindCaptureMailFromHome : function() {
        $('.email-address-capture-button').click(function(e) {
            e.preventDefault();
            var parent = $(this).parents('.email-address-block');
            var email = parent.find(".email-address-capture-field").val();
            if (ACC.common.validateEmail(email)) {
                //true if is required a gift
                ACC.footer.updateSlot(parent, true);
                ACC.footer.updateSlots(parent);
                //ACC.footer.showConfirmationCaptureMessage();
            } else {
                parent.find(".email-address-capture-field").parent().addClass('error');
                parent.find(".email-address-capture-message").removeClass('hidden');
            }
        });
        
        $(".email-address-capture-field").focusin(function(e) {
            var parent = $(this).parents('.email-address-block');
            parent.find(".email-address-capture-message").addClass('hidden');
        });
    },

    bindConfirmationDialog: function() {
        $("#confirmationEmailMessage .okbtn").on("click", function(e) {
            $("#confirmationEmailMessage").modal('hide');
        });

        $("#confirmationEmailMessage").on("hide", function() {
            $("#confirmationEmailMessage a.btn").off("click");
        });

        $("#confirmationEmailMessage").on("hidden", function() {
            $("#confirmationEmailMessage").remove();
        });
    },

    showConfirmationCaptureMessage: function(){
        $("#confirmationEmailMessage").modal({
            "backdrop"  : "static",
            "keyboard"  : true,
            "show"      : true
        });
    },

    bindCollapseFooterNav: function() {
        // small screens
        enquire.register("screen and (max-width:" + (breakpointSmallMax) + "px)", {
            match : function() {
                // add plus icon
                $('.footer-nav-group h4').append('<span class="icon-np-plus"></span>');

                // toggle plus/minus icon on click
                $('.footer-nav-group ul, .footer-nav-group .site-links').on('shown.bs.collapse', function () {
                    $(this).parent().find('.icon-np-plus').removeClass('icon-np-plus').addClass('icon-np-minus');
                });
                $('.footer-nav-group ul, .footer-nav-group .site-links').on('hidden.bs.collapse', function () {
                   $(this).parent().find('.icon-np-minus').removeClass('icon-np-minus').addClass('icon-np-plus');
                });

                $('.footer-nav-group h4').attr({
                    "data-toggle": "collapse",
                    "data-parent": "#footer-nav-accordion",
                    "aria-expanded": "false"
                });
                $('.footer-nav-group h4').addClass('collapsed');
                $('.footer-nav-group ul, .footer-nav-group .site-links').addClass('panel-collapse collapse');
                $('#footer-nav-group1 h4').attr('data-target', '#footer-nav-group1 ul');
                $('#footer-nav-group2 h4').attr('data-target', '#footer-nav-group2 ul');
                $('#footer-nav-group3 h4').attr('data-target', '#footer-nav-group3 ul');
                $('#footer-nav-group4 h4').attr('data-target', '#footer-nav-group4 .site-links');
                
            }
        });
        // medium/large screens
        enquire.register("screen and (min-width:" + breakpointSmallMax + "px)", {
            match : function() {
                // remove any plus/minus icons
                $('.footer-nav-group h4 .icon-np-plus, .footer-nav-group h4 .icon-np-minus').remove();
                $('.footer-nav-group h4').removeClass('collapsed');

                // unbinding on event from above
                $('.footer-nav-group ul, .footer-nav-group .site-links').off('shown.bs.collapse');
                $('.footer-nav-group ul, .footer-nav-group .site-links').off('hidden.bs.collapse');

                // this checks to see if the height of the ul is equal to 
                // 0 when the viewport changes to medium/large. If it is
                // remove it.
                if($('.footer-nav-group ul, .footer-nav-group .site-links').height() === 0) {
                    $('.footer-nav-group ul').removeAttr('style');
                }
                $('.footer-nav-group h4').removeAttr('data-parent aria-expanded');
                $('.footer-nav-group ul, .footer-nav-group .site-links').removeClass('collapse panel-collapse in');
                $('#footer-nav-group1 h4, #footer-nav-group2 h4, #footer-nav-group3 h4, #footer-nav-group4 h4').removeAttr('data-target');
                
            }
        });
        $('.footerTwo').append($('.yCmsComponent').find("a[title='Contact Us']").clone());
        $('.footerTwo').append($('.yCmsComponent').find("a[title='Our History']").clone());
        $('.footerTwo').append($('.yCmsComponent').find("a[title='Careers']").clone());
        $('.footerTwo').append($('.yCmsComponent').find("a[title='Returns']").clone());
        $('.footerTwo').append($('.yCmsComponent').find(".noRiskGuaranteeLink").clone());
        var contactInfo = $('.content .address').next().text();
        contactInfo = removeFax(contactInfo);
        $('.footerFour').prepend("<p>"+contactInfo+"</p>");
        $('.footerFour').prepend($('.content .address').clone());        
    }
}

function removeFax(text){
	var fax = text.substr(text.indexOf('Fax'));
	var faxEnd = fax.indexOf(')')+3;
	fax = fax.substring(0, faxEnd);
	console.log(fax);
	return text.replace(fax, '');
}

$(document).ready(function() {

    ACC.footer.bindSubmitButton();
    ACC.footer.bindCaptureMailFromHome();
    ACC.footer.bindConfirmationDialog();
    ACC.footer.bindCollapseFooterNav();

});
