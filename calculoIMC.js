
    function Calcular()
    {
        // IMC = p / (a*a)
        var peso	= document.getElementById("peso").value
        var altura  = document.getElementById("altura").value
        var IMCCalculado = peso / (altura * altura)
        //alert(IMCCalculado)
        
        var oIMC = document.getElementById("IMC")
        oIMC.value = IMCCalculado.toFixed(2)
        
        var oSituacao = document.getElementById("situacao")
        
        if(IMCCalculado < 18.5)  {oSituacao.innerHTML = "Magreza"}
        
        if( (IMCCalculado>18.5) && (IMCCalculado<25) )
        {
            oSituacao.innerHTML="Normal"
        }

        if ( (IMCCalculado>=25) && (IMCCalculado<30) )
        {
            oSituacao.innerHTML="Sobrepeso"
        }

        if ( (IMCCalculado>=30) && (IMCCalculado<40) )
        {
            oSituacao.innerHTML="Obesidade"
        }
        
        if (IMCCalculado>=40)
        {
            oSituacao.innerHTML="Obesidade Grave"
        }

    }