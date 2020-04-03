console.log("Mensagem enviada com sucesso. Aguarde nosso contato");
  
  $.validator.addMethod("equal",function(value,element,param){
    return value == param;
  });
   
  $().ready(function(){
    var validator = $("#form").bind("invalid-form.validate",function(){
      $("#msg").html("Este formulário tem "+ validator.numberOfInvalids()+" erro(s)");
     
    }).validate(
      {
        errorElement:"el",  
        errorPlacement: function(error,element){
          element.parent("td").next("td").html(error);
        },
        success: function (label){
           
          label.text("Correto!").removeClass("error").addClass("ok");
        },
        submitHandler: function(form){
          form.submit();
        },
        rules:{
          numero:{
            required:true,
            number: true,
            maxlength:15          
          },
          pass:{
            required:true,
            password:true       
          },
          validado:{
            required:true,
            equal: "Validado"
          }
           
        },
        messages:{
          numero:{
            required:"Esse campo não pode ser vazio",
            number:"Este campo é numerico",
            maxlength:"apenas 15 caracteres"
          },
          pass:{
            required:"Esse campo não pode ser vazio",
            password: "digite devmedia"
          },
          validado:{
            required:"Esse campo não pode ser vazio",
            equal: "digite Validado"
          }
             
        }
           
       
      }
     
    )
   
  });