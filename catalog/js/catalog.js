$(document).ready(function(){
  
    $('.anchor').on('click', function(){
  
      // Сюда попадают текущие потомки дропдауна на который мы кликнули
      let items = $(this).next('.items')
  
      if(items.hasClass('active-items-filter')){
        items.removeClass('active-items-filter').addClass('disabled-items-filter');
      }else {
        items.removeClass('disabled-items-filter').addClass('active-items-filter');
      }
    })
  
  });