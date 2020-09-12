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

  $('body').on('click','.star',function(){
    if($(this).hasClass('test')){
      $(this).removeClass('test');
    }else{
    $(this).addClass('test');
  }
  });
