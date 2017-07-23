$( document ).ready(function() {
      $.ajax({
            url: 'https://experienciasxcaret.github.io/Developers/api/front.json',           
            contentType: 'application/x-www-form-urlencoded',            
            dataType: 'json',
            beforeSend: function(){
                  //Realizar accion
            }, 
            complete: function(){
                  //Realizar accion
            },
            success: function( data, textStatus, jQxhr ){
                  //Igualar toda la información obtenida del archivo json a una variable
                  var resultado = data[0];                  
                  $("#titulo_seccion div.col-md-9 h3:first-child").html(resultado.tituloH1);
                  $("#titulo_seccion div.col-md-9 p").html(resultado.descripcion).css( "text-align", "justify" );
                  var atractivos = resultado.atractivos;
                  //Realizar un recorrido de todos los atractivos obtnedios de json e irlos mostrando uno a uno
                  for (var i = 0; i < atractivos.length; i++) {                     
                              var contenido_atractivos = "<div class='row cada_atractivo'><div class='col-md-4'><a href='"+atractivos[i].link+"'><img src='"+atractivos[i].img+"' class='img-responsive' alt='Responsive image'></a></div>"+
                              "<div class='col-md-8'><div class='row'><h3>"+atractivos[i].titulo+"</h3></div><div class='row-fluid'>"+atractivos[i].desc+"</div></div></div>";
                              $("#atractivos").append(contenido_atractivos);
                  }
                  $(".cada_atractivo").css( "margin-bottom", "5px" );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                //Reportar error
            }
        });
});