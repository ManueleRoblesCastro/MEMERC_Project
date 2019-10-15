
$(document).ready(function() { 
	//INICIALIZAR OBJETOS SEMANTIC-UI **********************************************************
		$('.ui.dropdown').dropdown();	
		$('.ui.accordion').accordion();	
		$('.menu .item').tab();
		$('.ui.longer.modal').modal('show'); 
	//******************************************************************************************
	$("#selectfolabtn").click(function(){
			//alert("click");
			 //$('.ui.longer.modal').modal('show'); 
			 $('#modalfolaschoose').modal({
        		closable : false
			  });
			  $('#modalfolaschoose').modal('show');
			     
		});

    //*****************************************************************************************
    $('#modalfolaschoose').modal({
      closable : false
    });
    $('#modalfolaschoose').modal('show');
		






   






	//TRABAJANDO CON JSON A TRAVES DE VARIABLES*************************************************
			//var obj = JSON.parse('{ "name":"kriss", "age":30, "city":"New York"}');
			//document.getElementById("target").innerHTML = obj.name + ", " + obj.age;
			
			//var json2= JSON.parse('[{"id": "a","Estado": "Soltero(a)"},{"id": 2,"Estado": "Casado"},{"id": 3,"Estado": "Divorciado"},{"id": 4,"Estado": "Acompañado"}]');
				
 
 
		  var jsonPais= JSON.parse(`[
				{"id": "ax","Nombre": "Aland Islands"},
				{"id": "al","Nombre": "Albania"},
				{"id": "dz","Nombre": "Algeria"},
                {"id": "as","Nombre": "American Samoa"},
                {"id": "ad","Nombre": "Andorra"},
                {"id": "ao","Nombre": "Angola"}, 
                {"id": "ai","Nombre": "Anguilla"},
                {"id": "ag","Nombre": "Antigua"},
                {"id": "ar","Nombre": "Argentina"},
                {"id": "am","Nombre": "Armenia"},
                {"id": "aw","Nombre": "Aruba"},
                {"id": "au","Nombre": "Australia"},
                {"id": "at","Nombre": "Austria"},
                {"id": "az","Nombre": "Azerbaijan"},
                {"id": "bs","Nombre": "Bahamas"},
                {"id": "bh","Nombre": "Bahrain"},
                {"id": "bd","Nombre": "Bangladesh"},
                {"id": "bb","Nombre": "Barbados"},
                {"id": "by","Nombre": "Belarus"},
                {"id": "be","Nombre": "Belize"},
                {"id": "bj","Nombre": "Benin"},
                {"id": "bm","Nombre": "Bermuda"},
                {"id": "bt","Nombre": "Bhutan"},
                {"id": "bo","Nombre": "Bolivia"},
                {"id": "ba","Nombre": "Bosnia"},
                {"id": "bw","Nombre": "Bitswana"},
                {"id": "bv","Nombre": "Bouvet Island"},
                {"id": "br","Nombre": "Brasil"},
                {"id": "vg","Nombre": "British Virgin Islands"},
                {"id": "bn","Nombre": "Brunei"},
                {"id": "bg","Nombre": "Bulgaria"},
                {"id": "bf","Nombre": "Burkina Faso"},
                {"id": "mm","Nombre": "Burma"},
                {"id": "bi","Nombre": "Burundi"},
                {"id": "tc","Nombre": "Caicos Islands"},
                {"id": "kh","Nombre": "Cambodia"},
                {"id": "cm","Nombre": "Cameroon"},
                {"id": "ca","Nombre": "Canada"},
                {"id": "cv","Nombre": "cape verde"},
                {"id": "ky","Nombre": "cayman Islands"},
                {"id": "cf","Nombre": "Central Africa Republic"},
                {"id": "td","Nombre": "Chad"},
                {"id": "cl","Nombre": "chile"},
                {"id": "cn","Nombre": "china"},
                {"id": "cx","Nombre": "christmas Islands"},
                {"id": "cc","Nombre": "Coco Islands"},
                {"id": "co","Nombre": "Colombia"},
                {"id": "km","Nombre": "Comoros"},
                {"id": "cg","Nombre": "Congo Brazzaville"},
                {"id": "cd","Nombre": "Congo"},
                {"id": "ck","Nombre": "Cook Islands"},
                {"id": "cr","Nombre": "Costa Rica"},
                {"id": "ci","Nombre": "Cote Divoire"},
                {"id": "hr","Nombre": "Croatina"},
                {"id": "cu","Nombre": "Cuba"},
                {"id": "cy","Nombre": "Cyprus"},
                {"id": "cz","Nombre": "Czech Republic"},
                {"id": "dk","Nombre": "Denmark"},
                {"id": "dj","Nombre": "Djibouti"},
                {"id": "dm","Nombre": "Dominicana"},
                {"id": "do","Nombre": "Dominican Republic"},
                {"id": "ec","Nombre": "Ecuador"},
                {"id": "eg","Nombre": "Egypt"},
                {"id": "sv","Nombre": "El Salvador"},
                {"id": "gb","Nombre": "England"},
                {"id": "gp","Nombre": "Equatorial Guinea"},
                {"id": "er","Nombre": "Eritrea"},
                {"id": "ee","Nombre": "Estonia"},
                {"id": "et","Nombre": "Ethiopia"},
                {"id": "eu","Nombre": "European Union"},
                {"id": "fk","Nombre": "Falkland Islands"},
                {"id": "fo","Nombre": "Faroe Islands"},
                {"id": "fj","Nombre": "Fiji"},
                {"id": "fi","Nombre": "Finlands"},
                {"id": "fr","Nombre": "France"},
                {"id": "gf","Nombre": "French Guiana"},
                {"id": "pf","Nombre": "french Polynesia"},
                {"id": "tf","Nombre": "French Territories"},
                {"id": "ga","Nombre": "Gabon"},
                {"id": "gm","Nombre": "Gambia"},
                {"id": "ge","Nombre": "Georgia"},
                {"id": "de","Nombre": "Germany"},
                {"id": "gh","Nombre": "Ghana"},
                {"id": "gi","Nombre": "Gibraltar"},
                {"id": "gr","Nombre": "Greece"},
                {"id": "gl","Nombre": "Greceland"},
                {"id": "gd","Nombre": "Grenada"},
                {"id": "gp","Nombre": "Guadeloupe"},
                {"id": "gu","Nombre": "Guam"},
                {"id": "gt","Nombre": "Guatemala"},
                {"id": "gw","Nombre": "Guinea-Bissau"},
                {"id": "gn","Nombre": "Guinea"},
                {"id": "gy","Nombre": "Guyana"},
                {"id": "ht","Nombre": "Haiti"},
                {"id": "hm","Nombre": "Heard Island"},
                {"id": "hn","Nombre": "Homduras"},
                {"id": "hk","Nombre": "Hong Kong"},
                {"id": "hu","Nombre": "Hungary"},
                {"id": "is","Nombre": "Iceland"},
                {"id": "in","Nombre": "India"},
                {"id": "io","Nombre": "Indian Ocean Territorry"},
                {"id": "id","Nombre": "Indonesia"},
                {"id": "ir","Nombre": "Iran"},
                {"id": "iq","Nombre": "Iraq"},
                {"id": "ie","Nombre": "Ireland"},
                {"id": "il","Nombre": "Israel"},
                {"id": "it","Nombre": "Italy"},
                {"id": "jm","Nombre": "Jamaica"},
                {"id": "jp","Nombre": "Japan"},
                {"id": "jo","Nombre": "Jordan"},
                {"id": "kz","Nombre": "Kazakhstan"},
                {"id": "ke","Nombre": "Kenya"},
                {"id": "ki","Nombre": "Kiribati"},
                {"id": "kw","Nombre": "Kuwait"},
                {"id": "kg","Nombre": "Kyrgystan"},
                {"id": "la","Nombre": "Laos"},
                {"id": "lv","Nombre": "Latvia"},
                {"id": "lb","Nombre": "Lebanon"},
                {"id": "ls","Nombre": "lesotho"},
                {"id": "lr","Nombre": "Liberia"},
                {"id": "ly","Nombre": "libya"},
                {"id": "li","Nombre": "Liechtenstein"},
                {"id": "lt","Nombre": "Lithuania"},
                {"id": "lu","Nombre": "Luxembourg"},
                {"id": "mo","Nombre": "Macao"},
                {"id": "mk","Nombre": "Macedonia"},
                {"id": "mg","Nombre": "Madascar"},
                {"id": "mw","Nombre": "Malawi"},
                {"id": "mg","Nombre": "Madagascar"},
                {"id": "mw","Nombre": "Malawi"},
                {"id": "my","Nombre": "Malaysia"},
                {"id": "mv","Nombre": "Maldives"},
                {"id": "ml","Nombre": "Mali"},
                {"id": "mt","Nombre": "Malta"},
                {"id": "mh","Nombre": "Marshall Islands"},
                {"id": "mq","Nombre": "Martinique"},
                {"id": "mr","Nombre": "Mauritania"},
                {"id": "mu","Nombre": "Mauritius"},
                {"id": "yt","Nombre": "Mayotte"},
                {"id": "mx","Nombre": "Mexico"},
                {"id": "fm","Nombre": "Micronesia"},
                {"id": "md","Nombre": "Moldova"},
                {"id": "mc","Nombre": "Manaco"},
                {"id": "mn","Nombre": "Manaco"},
                {"id": "me","Nombre": "Montenegro"},
                {"id": "ms","Nombre": "Montserrat"},
                {"id": "ma","Nombre": "Morocco"},
                {"id": "mz","Nombre": "Monzabique"},
                {"id": "na","Nombre": "Namibia"},
                {"id": "nr","Nombre": "Nauru"},
                {"id": "np","Nombre": "Nepal"},
                {"id": "an","Nombre": "Netherlands Antilles"},
                {"id": "nl","Nombre": "Netherlands"},
                {"id": "nc","Nombre": "New Caledonia"},
                {"id": "pg","Nombre": "New Guinea"},
                {"id": "nz","Nombre": "New Zealand"},
                {"id": "ni","Nombre": "Nicaragua"},
                {"id": "ne","Nombre": "Niger"},
                {"id": "ng","Nombre": "Nigeria"},
                {"id": "nu","Nombre": "Niue"},
                {"id": "nf","Nombre": "Norfolk Island"},
                {"id": "kp","Nombre": "North Korea"},
                {"id": "mp","Nombre": "Northern Mariana Islands"},
                {"id": "no","Nombre": "Norway"},
                {"id": "om","Nombre": "Oman"},
                {"id": "pk","Nombre": "Pakistan"},
                {"id": "pw","Nombre": "Palau"},
                {"id": "ps","Nombre": "Palestine"},
                {"id": "pa","Nombre": "Panama"},
                {"id": "py","Nombre": "Paraguay"},
                {"id": "pe","Nombre": "Peru"},
                {"id": "ph","Nombre": "Philippines"},
                {"id": "pn","Nombre": "Pitcairn Islands"},
                {"id": "pl","Nombre": "Ppland"},
                {"id": "pt","Nombre": "Portugal"},
                {"id": "pr","Nombre": "Puerto Rico"},
                {"id": "qa","Nombre": "Gatar"},
                {"id": "re","Nombre": "Reunion"},
                {"id": "ro","Nombre": "Romania"},
                {"id": "ru","Nombre": "Russia"},
                {"id": "rw","Nombre": "Rwanda"},
                {"id": "sh","Nombre": "Saint Helena"},
                {"id": "kn","Nombre": "Saint Kitts and Nevis"},
                {"id": "lc","Nombre": "Saint Lucia"},
                {"id": "pm","Nombre": "Saint pierre"},
                {"id": "vc","Nombre": "Saint Vincent"},
                {"id": "ws","Nombre": "Samoa"},
                {"id": "sm","Nombre": "San Mario"},
                {"id": "gs","Nombre": "Sandwich Islands"},
                {"id": "st","Nombre": "Sao Tome"},
                {"id": "sa","Nombre": "Saudi Arabia"},
                {"id": "sn","Nombre": "Senegal"},
                {"id": "cs","Nombre": "Serbia"},
                {"id": "rs","Nombre": "Serbia"},
                {"id": "sc","Nombre": "Seychelles"},
                {"id": "sl","Nombre": "Sierre Leone"},
                {"id": "sg","Nombre": "Singapure"},
                {"id": "sk","Nombre": "slovakia"},
                {"id": "si","Nombre": "Slovenia"},
                {"id": "sb","Nombre": "Salomon Islands"},
                {"id": "so","Nombre": "Somolia"},
                {"id": "za","Nombre": "South Africa"},
                {"id": "kr","Nombre": "South Korea"},
                {"id": "es","Nombre": "Spain"},
                {"id": "lk","Nombre": "Sri Lanka"},
                {"id": "sd","Nombre": "sudan"},
                {"id": "sr","Nombre": "Suriname"},
                {"id": "sj","Nombre": "Svalbard"},
                {"id": "sz","Nombre": "Swaziland"},
                {"id": "se","Nombre": "Sweden"},
                {"id": "ch","Nombre": "Switzerland"},
                {"id": "sy","Nombre": "Syria"},
                {"id": "tw","Nombre": "Taiwan"},
                {"id": "tj","Nombre": "Tajikistan"},
                {"id": "tz","Nombre": "Tanzania"},
                {"id": "th","Nombre": "Thainland"},
                {"id": "tl","Nombre": "Timorleste"},
                {"id": "tg","Nombre": "Togo"},
                {"id": "tk","Nombre": "Tokelau"},
                {"id": "to","Nombre": "Tonga"},
                {"id": "tt","Nombre": "Trinidad"},
                {"id": "tn","Nombre": "Tunisia"},
                {"id": "tr","Nombre": "Turkey"},
                {"id": "tm","Nombre": "Turkemenistan"},
                {"id": "tv","Nombre": "Tuvalu"},
                {"id": "ug","Nombre": "Uganda"},
                {"id": "ua","Nombre": "Ukraine"},
                {"id": "ae","Nombre": "Unided Arab Emirates"},
                {"id": "us","Nombre": "Unided States"},
                {"id": "uy","Nombre": "Uruguay"},
                {"id": "um","Nombre": "Us Minor Islands"},
                {"id": "vi","Nombre": "Us Virgin Islands"},
                {"id": "uz","Nombre": "Uzbekistan"},
                {"id": "vu","Nombre": "Vanuatu"},
                {"id": "va","Nombre": "Vatican City"},
                {"id": "ve","Nombre": "Venezuela"},
                {"id": "vn","Nombre": "Vietnam"},
                {"id": "vf","Nombre": "Vietnam"},
                {"id": "wf","Nombre": "Wllis and Futuna"},
                {"id": "eh","Nombre": "Western Sahara"},
                {"id": "ye","Nombre": "Yemen"},
                {"id": "zm","Nombre": "Zambia"},
                {"id": "zw","Nombre": "Zambabwe"}
               



                ]`);
              

                           
           var div_dataP='<div class="menu" >';
			  $('#paisdesp').html("");
		     for (var i = 0; i < jsonPais.length; i++) {                                                              
			// div_dataP='<option value='+jsonPais[i].id+'>'+jsonPais[i].Nombre+'</option>';
div_dataP='<div class="item" data-value="'+jsonPais[i].id+'"><i class="'+jsonPais[i].id+' flag"></i>'+jsonPais[i].Nombre+'</div>';                    
			 $(div_dataP).appendTo('#paisdesp');
		  } 

		  var paises_m='<div class="menu">';
		  $('#paisdesp1').html("");
		  for (var i = 0; i < jsonPais.length; i++) {
		  	paises_m='<div class="item" data-value"'+jsonPais[i].id+'"><i class="'+jsonPais[i].id+' flag"></i>'+jsonPais[i].Nombre+'</div>';
             $(paises_m).appendTo('#paisdesp1');
		  }


		  var paisesd = '<div class="menu"> ';
		  $('#paisdesp2').html('');
		  for (var i = 0; i < jsonPais.length; i++) {
		  	paisesd='<div class="item" data-value"'+jsonPais[i].id+'"><i class="'+jsonPais[i].id+' flag"></i>'+jsonPais[i].Nombre+'</div>';

		  $(paisesd).appendTo('#paisdesp2');
		  }



		  var paisesd = '<div class="menu"> ';
		  $('#paisesdesp1').html('');
		  for (var i = 0; i < jsonPais.length; i++) {
		  	paisesd='<div class="item" data-value"'+jsonPais[i].id+'"><i class="'+jsonPais[i].id+' flag"></i>'+jsonPais[i].Nombre+'</div>';

		  $(paisesd).appendTo('#paisesdesp1');
		  }


		    var paisesd = '<div class="menu"> ';
		  $('#paisesdesp2').html('');
		  for (var i = 0; i < jsonPais.length; i++) {
		  	paisesd='<div class="item" data-value"'+jsonPais[i].id+'"><i class="'+jsonPais[i].id+' flag"></i>'+jsonPais[i].Nombre+'</div>';

		  $(paisesd).appendTo('#paisesdesp2');
		  }



    var paisesd = '<div class="menu"> ';
                  $('#paises_del_mundo').html('');
                  for (var i = 0; i < jsonPais.length; i++) {
                    paisesd='<div class="item" data-value"'+jsonPais[i].id+'"><i class="'+jsonPais[i].id+' flag"></i>'+jsonPais[i].Nombre+'</div>';

                  $(paisesd).appendTo('#paises_del_mundo');  }



                  var paisesd = '<div class="menu"> ';
                  $('#mundial').html('');
                  for (var i = 0; i < jsonPais.length; i++) {
                    paisesd='<div class="item" data-value"'+jsonPais[i].id+'"><i class="'+jsonPais[i].id+' flag"></i>'+jsonPais[i].Nombre+'</div>';

                  $(paisesd).appendTo('#mundial');  }



        var paisesd = '<div class="menu"> ';
                          $('#nacional').html('');
                          for (var i = 0; i < jsonPais.length; i++) {
                            paisesd='<div class="item" data-value"'+jsonPais[i].id+'"><i class="'+jsonPais[i].id+' flag"></i>'+jsonPais[i].Nombre+'</div>';

                          $(paisesd).appendTo('#nacional');  }


    var paisesd = '<div class="menu"> ';
                          $('#Nacional_pais').html('');
                          for (var i = 0; i < jsonPais.length; i++) {
                            paisesd='<div class="item" data-value"'+jsonPais[i].id+'"><i class="'+jsonPais[i].id+' flag"></i>'+jsonPais[i].Nombre+'</div>';

                          $(paisesd).appendTo('#Nacional_pais');  }

              var paisesd = '<div class="menu"> ';
                         $('#nacional_pises').html('');
                      for (var i = 0; i < jsonPais.length; i++) {
                            paisesd='<div class="item" data-value"'+jsonPais[i].id+'"><i class="'+jsonPais[i].id+' flag"></i>'+jsonPais[i].Nombre+'</div>';

                          $(paisesd).appendTo('#nacional_pises');  }


    var paisesd = '<div class="menu"> ';
                         $('#Nacionalida').html('');
                      for (var i = 0; i < jsonPais.length; i++) {
                            paisesd='<div class="item" data-value"'+jsonPais[i].id+'"><i class="'+jsonPais[i].id+' flag"></i>'+jsonPais[i].Nombre+'</div>';

                          $(paisesd).appendTo('#Nacionalida');  }



  var paisesd = '<div class="menu"> ';
                         $('#paises_del_mundo').html('');
                      for (var i = 0; i < jsonPais.length; i++) {
                            paisesd='<div class="item" data-value"'+jsonPais[i].id+'"><i class="'+jsonPais[i].id+' flag"></i>'+jsonPais[i].Nombre+'</div>';

                          $(paisesd).appendTo('#paises_del_mundo');  }



        var paisesd = '<div class="menu"> ';
                             $('#Nacionalidad10').html('');
                          for (var i = 0; i < jsonPais.length; i++) {
                                paisesd='<div class="item" data-value"'+jsonPais[i].id+'"><i class="'+  jsonPais[i].id+' flag"></i>'+jsonPais[i].Nombre+'</div>';
                            $(paisesd).appendTo('#Nacionalidad10');  }

    var paisesd = '<div class="menu"> ';
                                 $('#nacional11').html('');
                              for (var i = 0; i < jsonPais.length; i++) {
                                    paisesd='<div class="item" data-value"'+jsonPais[i].id+'"><i class="'+  jsonPais[i].id+' flag"></i>'+jsonPais[i].Nombre+'</div>';
                                $(paisesd).appendTo('#nacional11');  }






//*********************Para las edades*****************//     
    //PARA EL FOLA03.HTML  
    $('#nacimiento').change(function(){
        //alert(calculateAge($('#nacimiento').val()));
       
        $('#edadcalculo').html('<h1>'+calculateAge($('#nacimiento').val())+' años</h1>');

    }); 

    //PARA EL FOLA04.HTML 
    $('#nacimiento1').change(function(){
        //alert(calculateAge($('#nacimiento').val()));
     
        $('#edadcalculo1').html('<h1>'+calculateAge($('#nacimiento1').val())+' años</h1>');

    });

    //PARA EL FOLA04_2.HTML 

    $('#f_nacimiento2').change(function(){
    //alert(calculateAge($('#f_nacimiento6').val()));
     
        $('#edadcalculo2').html('<h1>'+calculateAge($('#f_nacimiento2').val())+' años</h1>');

    });

     //PARA EL FOLA04_3.HTML
    
    $('#f_nacimiento3').change(function(){
            //alert(calculateAge($('#f_nacimiento3').val()));

        $('#edadcalculo3').html('<h1>'+calculateAge($('#f_nacimiento5').val())+' años</h1>');

    });
     

    //PARA EL FOLA05_3.HTML
    $('#F_nacimiento').change(function(){
        //alert(calculateAge($('#F_nacimiento').val()));

        $('#edad_calculo').html('<h1>'+calculateAge($('#F_nacimiento').val())+' años</h1>');

    });     

    //PARA EL FOLA05.HTML
    $('#fech_fola05').change(function(){
        //alert(calculateAge($('#fech_nacimient6').val()));
    
    $('#calculoedad').html('<h1>'+calculateAge($('#fech_fola05').val())+' años</h1>');

    });

    //PARA EL FOLA06.HTML  
    $('#nacimiento6').change(function(){
        //alert(calculateAge($('#f_nacimiento7').val()));
      
        $('#Calculoedad2').html('<h1>'+calculateAge($('#nacimiento6').val())+' años</h1>');

    });

    //PARA EL FOLA06_2.HTML      
    $('#nacimiento6_2').change(function(){
   // alert(calculateAge($('#f_nacim7').val()));
       
        $('#calculo_ed6').html('<h1>'+calculateAge($('#nacimiento6_2').val())+' años</h1>');
    });



    //PARA EL FOLA07.HTML
    $('#FECHA07').change(function(){
    //alert(calculateAge($('#f_nacimiento8').val()));
     
        $('#edadCalculo07').html('<h1>'+calculateAge($('#FECHA07').val())+' años</h1>');

    });


    //PARA EL FOLA07_2.HTML
    $('#fechNacimi').change(function(){
        //alert(calculateAge($('#f_nacim8').val()));

        $('#CalcularEdad').html('<h1>'+calculateAge($('#fechNacimi').val())+' años</h1>');

    });

     
    //PARA EL FOLA08.HTML
$('#fechaNacimiento8').change(function(){
       // alert(calculateAge($('#f_nacimiento9').val()));

        $('#Calcular_Edades').html('<h1>'+calculateAge($('#fechaNacimiento8').val())+' años</h1>');

    });

     
//PARA EL FOLA08_2.HTML
$('#Fecha_edad').change(function(){
       //alert(calculateAge($('#f_nac9').val()));

    $('#EdadesCalculos').html('<h1>'+calculateAge($('#Fecha_edad').val())+' años</h1>');

    });

     
    //PARA EL FOLA09.HTML
$('#Fecha_naci').change(function(){
       // alert(calculateAge($('#f_nacimiento10').val()));

        $('#Edad_Calculos9').html('<h1>'+calculateAge($('#Fecha_naci').val())+' años</h1>');

    });


//PARA EL FOLA09_2.HTML
$('#F_nacimiento9').change(function(){
        //alert(calculateAge($('#f_nacimiento_11').val()));

        $('#calculateAge').html('<h1>'+calculateAge($('#F_nacimiento9').val())+' años</h1>');

    });


//PARA EL FOLA10.HTML
$('#Fechasnaci').change(function(){
        //alert(calculateAge($('#f_nacimiento_11').val()));

        $('#Calculoedad10').html('<h1>'+calculateAge($('#Fechasnaci').val())+' años</h1>');

    });

//PARA EL FOLA11.HTML
$('#nacimientos_fechas').change(function(){
        //alert(calculateAge($('#f_nacimiento_11').val()));

        $('#Calculate_Age11').html('<h1>'+calculateAge($('#nacimientos_fechas').val())+' años</h1>');

    });



    function calculateAge(birthday) {
        var birthday_arr = birthday.split("/");
        var birthday_date = new Date(birthday_arr[2], birthday_arr[1] - 1, birthday_arr[0]);
        var ageDifMs = Date.now() - birthday_date.getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }



                           /* ****************** Departamentos******* */
                        var jsonDepart= JSON.parse(`[ 
                        	{"id": "Es01","Nombre": "Ahuachapán" },
                        	{"id": "Es02","Nombre": "Santa Ana" },
                        	{"id": "Es03","Nombre": "Sonsonate" },
                        	{"id": "Es04","Nombre": "Chalatenango" },
                        	{"id": "Es05","Nombre": "La Libertad" },
                        	{"id": "Es06","Nombre": "San Salvador" },
                        	{"id": "Es07","Nombre": "Cuscatlán" },
                        	{"id": "Es08","Nombre": "La Paz" },
                        	{"id": "Es09","Nombre": "Cabañas" },
                        	{"id": "Es010","Nombre": "San Vicente" },
                        	{"id": "Es011","Nombre": "Usulután" },
                        	{"id": "Es012","Nombre": "San Miguel" },
                        	{"id": "Es013","Nombre": "Morazán" },
                        	{"id": "Es014","Nombre": "La Unión" }

                         ]`);

         var div_dataDa1='';$('#depart2').html("");
		  for (var i = 0; i < jsonDepart.length; i++) {                                                              
			 div_dataDa1='<option value='+jsonDepart[i].id+'>'+jsonDepart[i].Nombre+'</option>';                   
			 $(div_dataDa1).appendTo('#depart2'); }



                var div_dataD2='';$('#depart1').html("");
		  for (var i = 0; i < jsonDepart.length; i++) {                                                              
			 div_dataD2='<option value='+jsonDepart[i].id+'>'+jsonDepart[i].Nombre+'</option>';                   
			 $(div_dataD2).appendTo('#depart1');   }



                             var div_dataD3='';$('#depart3').html("");
		  for (var i = 0; i < jsonDepart.length; i++) {                                                              
			 div_dataD3='<option value='+jsonDepart[i].id+'>'+jsonDepart[i].Nombre+'</option>';                   
			 $(div_dataD3).appendTo('#depart3');  }



                                          var div_dataD4='';$('#depart').html("");
		  for (var i = 0; i < jsonDepart.length; i++) {                                                              
			 div_dataD4='<option value='+jsonDepart[i].id+'>'+jsonDepart[i].Nombre+'</option>';                   
			 $(div_dataD4).appendTo('#depart');  }




                                               var div_dataD5='';$('#departm1').html("");
		  for (var i = 0; i < jsonDepart.length; i++) {                                                              
			 div_dataD5='<option value='+jsonDepart[i].id+'>'+jsonDepart[i].Nombre+'</option>';                   
			 $(div_dataD5).appendTo('#departm1');    }




  var div_dataD6='';$('#department').html("");
          for (var i = 0; i < jsonDepart.length; i++) {                                                              
             div_dataD6='<option value='+jsonDepart[i].id+'>'+jsonDepart[i].Nombre+'</option>';                   
             $(div_dataD6).appendTo('#department');  }


    var div_dataDa7='';$('#deptmto').html("");
          for (var i = 0; i < jsonDepart.length; i++) {                                                              
             div_dataDa7='<option value='+jsonDepart[i].id+'>'+jsonDepart[i].Nombre+'</option>';                   
             $(div_dataDa7).appendTo('#deptmto'); }

      var div_dataDa8='';$('#departam6_2').html("");
              for (var i = 0; i < jsonDepart.length; i++) {                                                              
                 div_dataDa8='<option value='+jsonDepart[i].id+'>'+jsonDepart[i].Nombre+'</option>';                   
                  $(div_dataDa8).appendTo('#departam6_2'); }


    var div_dataDa9='';$('#departam6_2').html("");
              for (var i = 0; i < jsonDepart.length; i++) {                                                              
                 div_dataDa9='<option value='+jsonDepart[i].id+'>'+jsonDepart[i].Nombre+'</option>';                   
                  $(div_dataDa9).appendTo('#departam6_2'); }



    var div_dataDa01='';$('#Depart_salvdrño').html("");
                     for (var i = 0; i < jsonDepart.length; i++) {div_dataDa01='<option value='+jsonDepart[i].id+'>'+jsonDepart[i].Nombre+'</option>';                   
                   $(div_dataDa01).appendTo('#Depart_salvdrño'); }

        var div_dataDa02='';$('#Derptm').html("");
                 for (var i = 0; i < jsonDepart.length; i++) {div_dataDa02='<option value='+jsonDepart[i].id+'>'+jsonDepart[i].Nombre+'</option>';                   
                   $(div_dataDa02).appendTo('#Derptm'); }

                
            var div_dataDa03='';$('#departamen3').html("");
                 for (var i = 0; i < jsonDepart.length; i++) {div_dataDa03='<option value='+jsonDepart[i].id+'>'+jsonDepart[i].Nombre+'</option>';                   
                   $(div_dataDa03).appendTo('#departamen3'); }

                var div_dataDa04='';$('#paises').html("");
                 for (var i = 0; i < jsonDepart.length; i++) {div_dataDa04='<option value='+jsonDepart[i].id+'>'+jsonDepart[i].Nombre+'</option>';                   
                   $(div_dataDa04).appendTo('#paises'); }

                var div_dataDa05='';$('#departmeto').html("");
                 for (var i = 0; i < jsonDepart.length; i++) {div_dataDa05='<option value='+jsonDepart[i].id+'>'+jsonDepart[i].Nombre+'</option>';                   
                   $(div_dataDa05).appendTo('#departmeto'); }
 
 
   var div_dataDa05='';$('#departmeto_sv').html("");
                 for (var i = 0; i < jsonDepart.length; i++) {div_dataDa05='<option value='+jsonDepart[i].id+'>'+jsonDepart[i].Nombre+'</option>';                   
                   $(div_dataDa05).appendTo('#departmeto_sv'); }

                 var div_dataDa06='';$('#departmento_Esa').html("");
                 for (var i = 0; i < jsonDepart.length; i++) {div_dataDa06='<option value='+jsonDepart[i].id+'>'+jsonDepart[i].Nombre+'</option>';                   
                   $(div_dataDa06).appendTo('#departmento_Esa'); }
 

 var div_dataDa07='';$('#Salvador_depmto').html("");
                 for (var i = 0; i < jsonDepart.length; i++) {div_dataDa07='<option value='+jsonDepart[i].id+'>'+jsonDepart[i].Nombre+'</option>';                   
                   $(div_dataDa07).appendTo('#Salvador_depmto'); }



        var div_dataDa08='';$('#departa').html("");
                          for (var i = 0; i < jsonDepart.length; i++) {div_dataDa08='<option value='+   jsonDepart[i].id+'>'+jsonDepart[i].Nombre+'</option>';                   
                              $(div_dataDa08).appendTo('#departa'); }


var div_dataDa09='';$('#elsavad_departa').html("");
                          for (var i = 0; i < jsonDepart.length; i++) {div_dataDa09='<option value='+   jsonDepart[i].id+'>'+jsonDepart[i].Nombre+'</option>';                   
                              $(div_dataDa09).appendTo('#elsavad_departa'); }


                           /* ******************fin Departamentos******* */

                           /******************* posee nit **********************/
                      var jsonNit = JSON.parse(`[
                      	{"id": "s","Nombre":"Si"},
                      	{"id": "n","Nombre":"No"}
                      	]`)
                       
                       var div_dataN='';$('nit').html("");
                       for (var i = 0; i < jsonNit.length; i++) {
                       	div_dataN='<option value='+jsonNit[i].id+'>'+jsonNit[i].Nombre+'</option>';
                       			 $(div_dataN).appendTo('#nit');

                       }
                       	   /*******************fin  posee nit **********************/
                       	   /*******************periodo de pago **********************/

                       var jsonPago = JSON.parse(`[
                       {"id": "c", "Nombre": "Catorcenal"},
                      {"id": "d", "Nombre": "Diario"},
                       {"id": "m", "Nombre": "Mensual"},
                       {"id": "q", "Nombre": "Quincenal"},
                       {"id": "s", "Nombre": "Semanal"}


                       ]`);
                       var datapago ='';$('p_pago').html("");
                       for (var i = 0; i < jsonPago.length; i++) {
           datapago='<option value='+jsonPago[i].id+'>'+jsonPago[i].Nombre+'</option>';
                       			 $(datapago).appendTo('#p_pago');

                       }

			         /*******************forma de pago**********************/

                       var jsonFo = JSON.parse(`[
                       {"id": "c1", "Nombre": "Catorcenal"},
                      {"id": "d1", "Nombre": "Diario"},
                       {"id": "m1", "Nombre": "Mensual"},
                       {"id": "q1", "Nombre": "Quincenal"},
                       {"id": "s1", "Nombre": "Semanal"}


                       ]`);
                       var dataforma ='';$('f_pago').html("");
                       for (var i = 0; i < jsonFo.length; i++) {
           dataforma='<option value='+jsonFo[i].id+'>'+jsonFo[i].Nombre+'</option>';
                       			 $(dataforma).appendTo('#f_pago');

                       }
			         /*******************fin**********************/

			         /*******************sector comercio**********************/

                       var jsonCo = JSON.parse(`[
                       {"id": "a", "Nombre": "Maquila"},
                      {"id": "b", "Nombre": "Servicio"},
                       {"id": "c", "Nombre": "Construción"},
                       {"id": "d", "Nombre": "Comercio"},
                       {"id": "e", "Nombre": "Industria Textil"},
                       {"id": "f", "Nombre": "Agricola"},
                       {"id": "g", "Nombre": "Doméstico"},
                       {"id": "h", "Nombre": "Educación Privada"},
                       {"id": "i", "Nombre": "Sector Publico"},
                       {"id": "j", "Nombre": "Estado"},
                       {"id": "k", "Nombre": "Municipio"},
                       {"id": "l", "Nombre": "Institución Autónoma"}
                ]`);
              
                        var comercio ='';
                        $('s_eco').html("");
                        for (var i = 0; i <jsonCo.length; i++) {
                        	comercio='<option value ='+jsonCo[i].id+ '>'+jsonCo[i].Nombre+'</option>';
                   $(comercio).appendTo('#s_eco'); }


                        var comercio2 ='';
                            $('Sec_economi').html("");
                        for (var i = 0; i <jsonCo.length; i++) {
                            comercio2='<option value ='+jsonCo[i].id+ '>'+jsonCo[i].Nombre+'</option>';
                   $(comercio2).appendTo('#Sec_economi'); }


         var comercio3 ='';
                                $('sect_econm').html("");
                            for (var i = 0; i <jsonCo.length; i++) {
                                comercio3='<option value ='+jsonCo[i].id+ '>'+jsonCo[i].Nombre+'</option>';
                       $(comercio3).appendTo('#sect_econm'); }


      var comercio4 ='';
                                   $('sect_econm5').html("");
                            for (var i = 0; i <jsonCo.length; i++) {
                                comercio4='<option value ='+jsonCo[i].id+ '>'+jsonCo[i].Nombre+'</option>';
                       $(comercio4).appendTo('#sect_econm5'); }



                     var comercio5 ='';
                                   $('econo').html("");
                            for (var i = 0; i <jsonCo.length; i++) {
                                comercio5='<option value ='+jsonCo[i].id+ '>'+jsonCo[i].Nombre+'</option>';
                       $(comercio5).appendTo('#econo'); }



			         /*******************fin**********************/

			         /*******************Juicio de trabajo **********************/
                      var jsonJt = JSON.parse(`[
                      	{"id": "ind","Nombre":"Indiavial Ordinario"},
                      	{"id": "ind2","Nombre":"Individual Ordinario: Contra el Estado"},
                       {"id": "ind3","Nombre":"Unica Instancia"}

                      	]`)

                         var div_dataJt='';$('jt').html("");
                       for (var i = 0; i < jsonJt.length; i++) {
                       	div_dataJt='<option value='+jsonJt[i].id+'>'+jsonJt[i].Nombre+'</option>';
                       			 $(div_dataJt).appendTo('#jt');

                       }
			         /*******************fin Juicio de trabajo **********************/

				  var json2= JSON.parse(`[
				{"id": 2,"Estado": "Casado"},{"id": 3,
				"Estado": "Divorciado"},
				{"id": 456,"Estado": "Acompañado"}]`);
				  console.log(json2);
				 console.log(json2[0].id);
			
			var div_data1='';
			$('#efamiliar').html("");
		  for (var i = 0; i < json2.length; i++) {                                                              
			 div_data1='<option value='+json2[i].id+'>'+json2[i].Estado+'</option>';                   
			 $(div_data1).appendTo('#efamiliar');
		  }

		  var json3= JSON.parse('[{"id": 1,"Estado": "Femenino"},{"id": 2,"Estado": "Masculino"}]');
				console.log(json3);
				console.log(json3[0].id);
			
			var div_data1='';
			$('#sgenero').html("");
		  for (var i = 0; i < json3.length; i++) {                                                              
			 div_data1='<option value='+json3[i].id+'>'+json3[i].Estado+'</option>';                   
			 $(div_data1).appendTo('#sgenero');
		  }
					  
	//PARA CALENDARIOS**************************************************************************
        $('#fech_cmintrab6,#fech_mintrab6,#fextencion6,#fech_nacimient6,#fecha_soli6,#fecha_6,#fech_conc6,#fech_min6,#fextenc6,#fech_nacimiento6,#fecha_sol,#fecha_s6,#fech_cmintrab7,#fech_mintrab7,#fextencion7,#f_nacimiento7,#fecha_soli7,#fecha_s7,#fech_cmint7,#fech_mint7,#fextenc7,#f_nacim7,#fech7,#fecha_7,#fech_cmintrab8,#fech_mintrab8,#fextencion8,#f_nacimiento8,#fech_8,#fecha_soli8,#fech_cmint8,#fech_min8,#lExtenc8,#f_ext8,#fech_cmintrab9,#fech8,#fech_8,#f_nacim8,#fech_mintr9,#fextencion9,#fecha_s9,#f_nacimiento9,#fecha_soli9,#fech_cmint9,#fech_mint9,#fextenc9,#fecha_a10,#fech_mintrab_10,#fech_cmintrab_10,#fecha_s9,#fech9,#f_nac9,#fecha_soli10,#f_nacimiento10,#fext_10,#f_nacimiento_11,#fech_minb6,#fech_extencion,#fech_conc_6,#fech_mintrab_11,#fech_mint_11,#fech_conc6,#fech_soli_11,#f_asesor,#Fech_dili6#f_ingreso6,#f_ingreso,#Fech_dili,#Fech_ingre,#sal_imputable,#sal_deuda,#vaca_comp,#agui_comp,#prest_mater,#sal_nodeven,#f_hech,#nacimiento,#fextencion,#f_mintrab,#fech_fall,#Fechasoli,#fech_ext,#f_cmintrab,#f_ingre,#f_ul,#f_ideobra,#f_des,#det_hecho,#fech_fall,#f_part,#f_final,#FechaAs1,#nacimiento5,#f_extencion,#fech_cmintrab,#Fech_ocurr_causa,#F_de_noti,#f_ingreso6,#f_ing,#nacimi_04').flatpickr(
			{
			dateFormat: "d/m/Y  H:i",
			enableTime: true,
			locale:'es'
			}
		);

		$('#nacimientos_fechas,#Fechasnaci,#F_nacimiento9,#Fecha_naci,#Fecha_edad,#fechaNacimiento8,#fechNacimi,#FECHA07,#nacimiento6_2,#nacimiento6,#fech_fola05,#F_nacimiento,#f_nacimiento3,#nacimiento1,#f_nacimiento6,#fech_cmintrab6,#fech_mintrab6,#fextencion6,#fech_nacimient6,#fecha_soli6,#fecha_6,#fech_conc6,#fech_min6,#fextenc6,#fech_nacimiento6,#fecha_sol,#fecha_s6,#fech_cmintrab7,#fech_mintrab7,#fextencion7,#f_nacimiento7,#fecha_soli7,#fecha_s7,#fech_cmint7,#fech_mint7,#fextenc7,#f_nacim7,#fech7,#fecha_7,#fech_cmintrab8,#fech_mintrab8,#fextencion8,#f_nacimiento8,#fech_8,#fecha_soli8,#fech_cmint8,#fech_min8,#lExtenc8,#f_ext8,#fech_cmintrab9,#fech8,#fech_8,#f_nacim8,#fech_mintr9,#fextencion9,#fecha_s9,#f_nacimiento9,#fecha_soli9,#fech_cmint9,#fech_mint9,#fextenc9,#fecha_a10,#fech_mintrab_10,#fech_cmintrab_10,#fecha_s9,#fech9,#f_nac9,#fecha_soli10,#f_nacimiento10,#fext_10,#f_nacimiento_11,#fech_minb6,#fech_extencion,#fech_conc_6,#fech_mintrab_11,#fech_mint_11,#fech_conc6,#fech_soli_11,#f_asesor,#Fech_dili6#f_ingreso6,#f_ingreso,#Fech_dili,#Fech_ingre,#sal_imputable,#sal_deuda,#vaca_comp,#agui_comp,#prest_mater,#sal_nodeven,#f_hech,#nacimiento,#fextencion,#f_mintrab,#fech_fall,#Fechasoli,#fech_ext,#f_cmintrab,#f_ingre,#f_ul,#f_ideobra,#f_des,#det_hecho,#fech_fall,#f_part,#f_final,#f_nacimiento5,#nacimiento03').flatpickr(
			{
			dateFormat: "d/m/Y ",
			enableTime: false,
			locale:'es'
			}
		);

		$('#seccionSV2').hide();	

	//*******************************************************************************************
	$('#seccionSV').hide();	
	$('#seccionSV1').hide();
      $('#extranjeo1').hide();	   
     
	//*******************************************************************************************
		$('#country').change(function(){

			var parametro ='';
			parametro=$('#country').val();
			//alert(parametro);
			if (parametro=='sv') {
	             $('#seccionSV').show();	
	             $('#seccionSV1').show();
               $('#extranjeo1').hide();
			}
			if (parametro!='sv') {
	             $('#extranjeo1').show();	
	        	$('#seccionSV').hide();	
	            $('#seccionSV1').hide();
	    

			}

		});
		
		//*******************************************************************************************
	$('#jr').hide();	//juridica
	$('#nt').hide();    //natural
    	$('#generon').hide();  
     
	//*******************************************************************************************
		$('#tipo_persona').change(function(){

			var parametro1 ='';
			parametro1=$('#tipo_persona').val();
		
			if (parametro1=='nat1') {
	             $('#nt').show();	
	             $('#"jr').hide();
			}
			if (parametro1!='nat1') {
	             $('#nt').hide();	
	        	$('#jr').show();	
	                 
                  
			}
		

		});
		//*************************************************************
		$('#generon').hide();	
     	$('#juridic').hide();
	    //*******************************************************************************************
		$('#tipo_persona1').change(function(){
           

           var parametro2 ='';
			parametro2=$('#tipo_persona1').val();
		
			if (parametro2=='p_natural') {
	             $('#generon').show();	
	             $('#"juridic').hide();
			}
			if (parametro1!='p_natural') {
	             $('#generon').hide();	
	        	$('#juridic').show();	
	                 
                  
			}
	  
		});

	
		//*******
		//**********ocultar salarios*********************************************************************************
		
      $('#sal_12').hide();	
      $('#sal_com1').hide();
      $('#reg_imsal').hide();
      $('#reg_salmix').hide();
    

		//***************salarios****************************************************************************
		$('#sal_tiem').change(function(){

	       $('#sal_12').show();	
           $('#sal_com1').hide();
           $('#reg_imsal').hide();
           $('#reg_salmix').hide();

		});


		$('#sal_com').change(function(){

	      $('#sal_com1').show();	
          $('#sal_12').hide();
          $('#reg_imsal').hide();
          $('#reg_salmix').hide();	

		});

		$('#reg_sal').change(function(){
		 $('#reg_imsal').show();
	     $('#sal_com1').hide();	
         $('#sal_12').hide();
         $('#reg_salmix').hide();


		});
		$('#reg_mix').change(function(){
	      $('#reg_imsal').hide();
          $('#reg_salmix').show();
	      $('#sal_com1').hide();	
          $('#sal_12').hide();	

		});
	
		//*****************relacion de hechos ocultar**************************************************************************
		


                 $('#des_dir').hide();
                 $('#des_ind').hide();
                 $('#otro').hide();
                 $('#riesgop').hide();
                   $('#terminacion').hide();
         //*****************relacion de hechos *******************************************************************

		$('#des_directo').change(function(){
          $('#des_dir').show();
         $('#des_ind').hide();
         $('#otro').hide();
         $('#riesgop').hide();
         $('#terminacion').hide();	

	     });
		$('#des_indirecto').change(function(){
          $('#des_ind').show();
          $('#des_dir').hide();
           $('#otro').hide();
            $('#riesgop').hide();
          $('#terminacion').hide();	

	     });
			$('#otro_hec').change(function(){
          $('#des_ind').hide();
          $('#des_dir').hide();
          $('#otro').show();
           $('#riesgop').hide();
           $('#terminacion').hide();	

	     });
			$('#r_prof').change(function(){
                
         $('#des_ind').hide();
          $('#des_dir').hide();
          $('#otro').hide();
           $('#riesgop').show();
           $('#terminacion').hide();	

				 });
		$('#reg_term').change(function(){

	      $('#sal_com1').hide();	
          $('#sal_12').hide();
          $('#reg_imsal').hide();
          $('#reg_salmix').hide();	
          $('#terminacion').show();	

		});
		//***************** ocultar**************************************************************************
		


                 $('#des_dir').hide();
                 $('#des_ind').hide();
                 $('#otro').hide();
                 $('#riesgop').hide();
                   $('#terminacion').hide();
         //*****************relacion de hechos *******************************************************************

		$('#des_directo').change(function(){
          $('#des_dir').show();
         $('#des_ind').hide();
         $('#otro').hide();
         $('#riesgop').hide();
         $('#terminacion').hide();	

	     });
		$('#des_indirecto').change(function(){
          $('#des_ind').show();
          $('#des_dir').hide();
           $('#otro').hide();
            $('#riesgop').hide();
          $('#terminacion').hide();	

	     });
			$('#otro_hec').change(function(){
          $('#des_ind').hide();
          $('#des_dir').hide();
          $('#otro').show();
           $('#riesgop').hide();
           $('#terminacion').hide();	

	     });
			$('#r_prof').change(function(){
                
         $('#des_ind').hide();
          $('#des_dir').hide();
          $('#otro').hide();
           $('#riesgop').show();
           $('#terminacion').hide();	

				 });
		$('#reg_term').change(function(){

	      $('#sal_com1').hide();	
          $('#sal_12').hide();
          $('#reg_imsal').hide();
          $('#reg_salmix').hide();	
          $('#terminacion').show();	

		});
		//***********************petitorios ocultos******************************************



             $('#comunes').hide();	
             $('#otras_presentaciones').hide();	
             $('#reclamos_profecional').hide();
             $('#reclamos_contratos').hide();	
	         $('#docum_ofre').hide();
	         $('#docum_precen').hide();	
	 	      $('#final').hide();	

		//***********************petitorios mostrar******************************************

               $('#rec_comunes').change(function(){
                $('#comunes').show();	
               $('#otras_presentaciones').hide();	
               $('#reclamos_profecional').hide();
             $('#reclamos_contratos').hide();	
	         $('#docum_ofre').hide();
	         $('#docum_precen').hide();	
	 	      $('#final').hide();	

               });
                 $('#presentaciones').change(function(){
             $('#comunes').hide();	
             $('#otras_presentaciones').show();	
             $('#reclamos_profecional').hide();
             $('#reclamos_contratos').hide();	
	         $('#docum_ofre').hide();
	         $('#docum_precen').hide();	
	 	      $('#final').hide();	

               });
                     $('#rec-riesgo').change(function(){
                $('#comunes').hide();	
               $('#otras_presentaciones').hide();	
               $('#reclamos_profecional').show();
             $('#reclamos_contratos').hide();	
	         $('#docum_ofre').hide();
	         $('#docum_precen').hide();	
	 	      $('#final').hide();	

               });
                        $('#rec_suspencion').change(function(){
                $('#comunes').hide();	
               $('#otras_presentaciones').hide();	
               $('#reclamos_profecional').hide();
             $('#reclamos_contratos').show();	
	         $('#docum_ofre').hide();
	         $('#docum_precen').hide();	
	 	      $('#final').hide();	

               });
                           $('#documento_ofre').change(function(){
                $('#comunes').hide();	
               $('#otras_presentaciones').hide();	
               $('#reclamos_profecional').hide();
             $('#reclamos_contratos').hide();	
	         $('#docum_ofre').show();
	         $('#docum_precen').hide();	
	 	      $('#final').hide();	

               });
                              $('#documento_presenta').change(function(){
                $('#comunes').hide();	
               $('#otras_presentaciones').hide();	
               $('#reclamos_profecional').hide();
             $('#reclamos_contratos').hide();	
	         $('#docum_ofre').hide();
	         $('#docum_precen').show();	
	 	      $('#final').hide();	

               });
                $('#c_final').change(function(){
                $('#comunes').hide();	
               $('#otras_presentaciones').hide();	
               $('#reclamos_profecional').hide();
             $('#reclamos_contratos').hide();	
	         $('#docum_ofre').hide();
	         $('#docum_precen').hide();	
	 	      $('#final').show();	

               });
         //************************************************************************************
         $('#nnit').hide();	
		$('#pnit').change(function(){

			var parametro1 ='';
			parametro1=$('#pnit').val();
			//alert(parametro);
			if (parametro1=='s') {
	             $('#nnit').show();	 
			}
				if (parametro1=='n') {
	             $('#nnit').hide();	 
			}
			

		});

});

//MODELO DE FUNCIONES PARA BOTONES***********************************************************
function myFunction(){
  alert("HOLA MUNDO");
}
	






