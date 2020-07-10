var largura_mesa_px = parseFloat($("#mesa").css("width"));
var largura_mesa = 235;
var caneta = {
    x: 24.4,
    y: 44.6
}
function mmToPixels(mm) {
    var px = largura_mesa_px*mm/largura_mesa;
    return px;
}


$("input").on("change",function() {
    var x = parseFloat($("#x").val());
    var y = parseFloat($("#y").val());
    var altura_placa = parseFloat($("#altura").val());
    var largura_placa = parseFloat($("#largura").val());

        //Vetores com base nas coordenadas do Cura

    //Vetor origem
    var origem={
        x : -117.5,
        y : 117.5
    };

    //Vetor do centro da placa
    var placa = {
        x: x+largura_placa/2,
        y: -y-altura_placa/2
    };

    //Vetor de orientação do Cura
    var cura = {
        x: origem.x+placa.x,
        y: origem.y+placa.y
    }

    //Vetor topo esquerdo
    var topo = {
        x: -117.5,
        y:-117.5
    };
    //Vetor centro ao topo esquerdo da placa
    
    var top_placa = {
        x: -largura_placa/2,
        y: -altura_placa/2
    }
    s
    //Resultados
    $("#cura_x").html(cura.x.toFixed(2));
    $("#cura_y").html(cura.y.toFixed(2));

    //Desenho
    position_placa = {
        x: mmToPixels(-topo.x+cura.x+top_placa.x+caneta.x),
        y: mmToPixels(-topo.y+cura.y+top_placa.y+caneta.y)
    };
    //var position_placa.x = mmToPixels(x)+mmToPixels(caneta_x);
    //var top = largura_mesa_px-mmToPixels(altura_placa)-mmToPixels(y)-mmToPixels(caneta_y);

    $("#placa").css("width",mmToPixels(largura_placa)+"px");
    $("#placa").css("height",mmToPixels(altura_placa)+"px");
    $("#placa").css("left",position_placa.x+"px");
    $("#placa").css("top",position_placa.y+"px");

    $("#placa-bico").css("width",mmToPixels(largura_placa)+"px");
    $("#placa-bico").css("height",mmToPixels(altura_placa)+"px");
    $("#placa-bico").css("left",(position_placa.x-mmToPixels(caneta.x))+"px");
    $("#placa-bico").css("top",(position_placa.y-mmToPixels(caneta.y)-mmToPixels(altura_placa))+"px");


});