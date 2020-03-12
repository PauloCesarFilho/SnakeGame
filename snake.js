window.onload = function () {
    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 100);
   
    //velocidade
    const vel = 1;
    var vx = vy = 0;
    //pontos(cabeca da snake)
    var px = 10;
    var py = 15;
    //tamanho da peca
    var tp = 30;
    //quantidade
    var qp = 20;
    //fruta
    var ax = ay = 15;
    //rastro
    var trail = [];
    tail = 2;


    function game() {
        //ponto
        px += vx;
        py += vy;
        //pontox (cabeca da snake)	
        if (px < 0) {
            px = qp - 1;
        }

        if (px > qp - 1) {
            px = 0;
        }
        //pontoy (cabeca da snake)
        if (py < 0) {
            py = qp - 1;
        }
        if (py > qp - 1) {
            py = 0;
        }

        //cor do stage
        ctx.fillStyle = "green";
        ctx.fillRect(0, 0, stage.width, stage.height);

        //cor da fruta
        ctx.fillStyle = "red";
        ctx.fillRect(ax * tp, ay * tp, tp, tp);

        //snake e rastro
        ctx.fillStyle = "orange";
        for (var i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x * tp, trail[i].y * tp, tp - 1, tp - 1);

            if (trail[i].x == px && trail[i].y == py) {
                vx = vy = 0;
                tail = 2;
            }
        }

        trail.push({ x: px, y: py })
        while (trail.length > tail) {
            trail.shift();
        }
        if (ax == px && ay == py) {
            tail++;
            ax = Math.floor(Math.random() * qp);
            ay = Math.floor(Math.random() * qp);
        }

    }
    //controle das teclas
    function keyPush(event) {
        
        switch (event.keyCode) {            
            case 37://esquerda
                vx = -vel;
                vy = 0;
                break;

            case 38://cima
                vx = 0;
                vy = -vel;
                break;

            case 39://direita
                vx = vel;
                vy = 0;
                break;

            case 40://baixo
                vx = 0;
                vy = vel;
                break;
            default:

                break;
                

        }
        //mapear no console as teclas digitadas
        tecla = event.keyCode;
        console.log(tecla);
    }
}