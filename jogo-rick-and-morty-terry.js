let personagemComMedo;
let fundo;
let vilao;
let portal;
let vitoria;
let derrota;
const tamanho = 64;
let andarx = 0;
let andary = 0;
const velocidade = 64;
let botao;


function setup() {
    createCanvas(512, 512);
    fundo = loadImage("preto.jpg");
    vilao = loadImage("terry1.png");
    personagemComMedo = loadImage("medo64.png");
    portal = loadImage("portal.png");
    vitoria = loadImage("feliz2.png");
    derrota = loadImage("terry.png");

}

function draw() {
    background(220);


    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            image(fundo, tamanho * i, tamanho * j, tamanho, tamanho);
        }
    }



    image(personagemComMedo, andarx, andary, tamanho, tamanho);
    image(portal, 450, 448, tamanho, tamanho);



    if (andarx === 320 && andary === 0 || andarx === 256 && andary === 256 || andarx === 128 && andary === 448 || andarx === 384 && andary === 128 || andarx === 128 && andary === 128 || andarx === 64 && andary === 320 || andarx === 384 && andary === 320 || andarx === 256 && andary === 384 || andarx === 0 && andary === 192 || andarx === 64 && andary === 320) {
        rect(125, 125, 256, 256);
        textSize(35);
        text("Você morreu!", 145, 200);
        image(derrota, 200, 220, 100, 150);

        botao = createButton("Reiniciar");

        botao.mousePressed(reset);

        noLoop();

    }


    if (andarx === 448 && andary === 448) {
        rect(125, 125, 256, 256);
        textSize(35);
        text("Você ganhou!", 145, 200);
        image(vitoria, 170, 220, 150, 150);

        botao = createButton("Reiniciar");

        botao.mousePressed(reset);

        noLoop();
    }

}


function reset() {
    andarx = 0;
    andary = 0;
    botao.remove();
    loop();
}

//a função kayPressed é executada toda vez que uma tecla é pressionada
function keyPressed() {
    if (keyIsDown(DOWN_ARROW) && andary < 448) {
        andary += velocidade;
    }
    if (keyIsDown(UP_ARROW) && andary > 0) {
        andary -= velocidade;
    }
    if (keyIsDown(RIGHT_ARROW) && andarx < 448) {
        andarx += velocidade;
    }
    if (keyIsDown(LEFT_ARROW) && andarx > 0) {
        andarx -= velocidade;
    }
}