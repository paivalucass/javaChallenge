const character = document.getElementsByClassName("character")[0];
const containerCharacter = document.getElementsByClassName("container-character")[0];


const VELOCITY = 10;  // Definindo a velocidade do personagem como 10 (pixels?)

const SCREEN_WIDTH = screen.width; // Pegando o valor da largura da tela do usuário e guardando em um const
const SCREEN_HEIGHT = screen.height;  // Pegando o valor da atura da tela do usúario e guardando em um const

let xPosition = 500;    // Variavel de posição do eixo x na tela (horizontal) (começa em 500)
let yPosition = 300;    // Variavel de posição do eixo y na tela (vertical) (começa em 300)

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]   // teclas de movimentação do personagenm
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"];   // direções de movimentação

window.addEventListener("keydown", (event) => {   // where the magic happens
    const key  = event.key;

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {   // se alguma tecla for tecla for pressionada a tecla atual é gravada
        return currentKey === key;
    })

    if(!keyPressedAvaiable) return;  // retorna nada se nenhuma tecla for pressionada 

    directions.forEach((direction) => {   
        if(character.classList.contains(direction)) character.classList.remove(direction);  // retira a posição anterior do boneco 
    })


    if(key === "ArrowUp"){  // se a tecla "para cima" for pressionada 
        character.classList.add("turnUp");     // boneco vira para cima (mt brabo)
        if(yPosition > 0){ // se a posição na vertical for > 0
            yPosition -= VELOCITY;   // posição do boneco muda (movimento para cima)
        }
    }

    if(key === "ArrowDown"){  // se a tecla "para baixo" for pressionada 
        character.classList.add("turnDown");    // boneco vira para baixo 
        if (yPosition < SCREEN_HEIGHT){   // se a posição na vertical for < ALTURA_DA_TELA
            yPosition += VELOCITY; // posição do boneco muda (movimento para baixo)
        }
    }

    if(key === "ArrowLeft"){   // se a tecla "para esquerda" for pressionada 
        character.classList.add("turnLeft");    // boneco vira para esquerda
        if (xPosition > 0){  // se a posição na horizontal for > 0
            xPosition -= VELOCITY;    // posição do boneco muda (movimento para esquerda)
        }
    }

    if(key === "ArrowRight"){  // se a tecla "para direita" for pressionada 
        character.classList.add("turnRight");      // boneco vira para direita
        if (xPosition < SCREEN_WIDTH){   // se a posição na horizontal for < LARGURA_DA_TELA
            xPosition += VELOCITY;  // posição do boneco muda (movimento para direita)
        }
    }

    containerCharacter.style.top = `${yPosition}px`;
    containerCharacter.style.left = `${xPosition}px`
});
