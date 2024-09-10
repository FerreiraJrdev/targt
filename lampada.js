function descobrirLampadas() {
    // Estado inicial das lâmpadas: todas desligadas
    let lampadas = [false, false, false]; // lampadas[0] = lâmpada 1, lampadas[1] = lâmpada 2, lampadas[2] = lâmpada 3
  
    // Ligar o primeiro interruptor por um tempo e depois desligá-lo (a lâmpada correspondente ficará quente)
    let lampada1Quente = true; //simulando que a lâmpada 1 foi ligada e desligada, ficando quente
  
    // ligar o segundo interruptor e deixar ligado
    lampadas[1] = true; // lampada 2 ligada
  
    // a lampada 3 permanece desligada e fria
  
    //simular a ida até a sala das lâmpadas e verificar o estado delas
    console.log("Indo à sala das lâmpadas...");
  
    if (lampada1Quente) {
      console.log("Lâmpada 1 está quente e desligada -> Controlada pelo Interruptor 1");
    }
    if (lampadas[1]) {
      console.log("Lâmpada 2 está ligada -> Controlada pelo Interruptor 2");
    }
    if (!lampadas[2]) {
      console.log("Lâmpada 3 está fria e desligada -> Controlada pelo Interruptor 3");
    }
  }
  
  descobrirLampadas();
  