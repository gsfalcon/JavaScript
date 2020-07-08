var palavra = String("garrafa")
var contador = Number(prompt("QUAL A CONTAGEM INICIAL?\nmax: 5000")) //Insira o valor desejado no contador
        if (contador >= 5000){
        contador = 5000; //Limitador do contador em 5000 para evitar travamentos
        }
        if (contador <= 0){ //Limitadora do contador para números menores ou iguais a zero (0)
        document.write("Insira um valor MAIOR QUE ZERO para começar a brincadeira.<br>Aperte F5 para recarregar a página!")
        }
    while (contador > 0) {
        if (contador != 1) {
        document.write(contador + " " + palavra + "s" + " de cerveja no muro.<br>") //Texto no plural e no singular com if, nem sempre vai funcionar, mas para este exercício, vai funcionar
        }
        if (contador != 1) {
        document.write(contador + " " + palavra + "s" + " no muro.<br>")
        }
        if (contador == 1) {
        document.write(contador + " " + palavra + " de cerveja no muro.<br>")
        document.write(contador + " " + palavra + " no muro.<br>")
        }
    document.write("Se uma " + palavra + " cair no chão, quantas ficarão no muro?<br><hr>")
    contador = contador - 1
        if (contador == 0) {
        document.write("Não sobraram " + palavra + "s" + " de cerveja no muro...<br>")  //Mensagem final, quando contador for ZERO
        }
    }