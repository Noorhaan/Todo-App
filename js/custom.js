$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })



  $('body').on('click','.info',function(){
    var obj = $(this).parent().parent().find('.card-body');
    if(obj.attr('style')){
      obj.removeAttr('style');    
    }else{
      obj.css('max-height','none');
    }
  })

