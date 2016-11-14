ACC.resource = {

    bindAll: function()
    {
        this.bindPrintResource();
    },
    
    bindPrintResource: function()
    {

        window.onbeforeprint = function() {
            console.log('This will be called before the user prints.');
        };
     
        
        $('#toolbar-print-resource, #toolbar-print-account').on('click', function(e){
            e.preventDefault();
            
            var resource = $('.for-print').clone();

            var modalID = "print-modal";
            // Create a new instance of modal (object)
            var newModal = new NP.modal(modalID);
            
            // Sets the header and body.
            newModal.headerText = '<span class="title">Print</span><br><span>If your print dialogue box doesn\'t open in a few seconds, please click <a class="secondary-print">PRINT</a>.</span>';
            newModal.bodyHtml = '<div id="resource-for-modal" />';

            // Fills the modal.
            newModal.fill();
            $(resource).appendTo('#resource-for-modal');
            //Bind print button in modal window
            $('.secondary-print').on('click', function(e){
                e.preventDefault();
                window.print();
                
            });
            // ACC.resource.bindSecondaryPrint();
            
            $('#print-modal').on('shown.bs.modal',function() {
            	console.log("HERE");
//            	$('#print-modal .modal-body').addClass('visible-print');
//            	$('.right-side-column').addClass('visible-print');
                // $('body #page, #print-modal .modal-header, .modal-backdrop').addClass('hidden-print');
                $('#print-modal').addClass('hidden-print');
                addPrintClass('.middle2');
//                addPrintClass('.right-side-column');
                $('.footer-container').addClass('hidden-print');
//                $('.main-nav').addClass('hidden-print');
                $('.breadcrumb-container').addClass('hidden-print');
                $('.navigation-panel').addClass('hidden-print');
                $('.account-navigation').addClass('hidden-print');
                $('.careers-side-content').addClass('hidden-print');
                $('.facetNavigation').addClass('hidden-print');
                $('.newsroom-side-content').addClass('hidden-print');
                $('#header').addClass('hidden-print');
                $('.top-bar').addClass('hidden-print');
                $('#print-modal .modal-body a').attr('href','javascript:void();');
                $('#print-modal .modal-body input').attr('disabled','disabled');
                $('#print-modal .modal-body .dropdown-toggle').addClass('disabled');
            });

            // Shows Modal
            newModal.show();
            
            // Remove classes
            $('#print-modal').on('hidden.bs.modal',function() {
                $('.visible-print-block').removeClass('visible-print-block');
                $('.hidden-print').removeClass('hidden-print');
                $('.customerServicePrint').css('display', '').removeClass('customerServicePrint');
            });
            

            setTimeout(function(){ 
                window.print();
            }, 1000);

        });            
    },
    
    bindSecondaryPrint: function(){
        $('.secondary-print').on('click', function(e){
            e.preventDefault();
            window.frames["printcartframe"].focus();
            window.frames["printcartframe"].print();
        });
    }
};

function addPrintClass(id){
	$(id).children().each(function (){
		$(this).addClass('customerServicePrint');
		$(this).addClass('for-print');
	});
    $('.customerServicePrint').css('display', 'block');
}

$(document).ready(function() {
    ACC.resource.bindAll();
});
