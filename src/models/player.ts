/*
A palavra chave "export" é usada para exportar a classe Player,
Permitindo que ela seja importadae utilizada em outros projetos em outros arquivos do projeto.
A palavra chave "class" é usada para definir um classe em TypeScript
*/

export class Player{
/* 
A palavra public é usada para definir
propriedades publicas da classe, que podem ser acessadas de fora da classe
*/
    public name: string; //Nome do player
    public health: number; //A vida do player
    public level: number; //O nível do player
// Construtor da classe player
/*
O construtor é um método especial que é chamado quando
uma nova instância da classe é criada
*/
    constructor(name: string, health: number = 100, level: number = 1){
//A palavra this é usada para se referir à instância atual da classe.
// Ele atribui o valor de cada instância à ele.
        this.name = name; // Inicializando o nome do player.
        this.health = health; // Inicializando a vida do player.
        this.level = level; // Inicializando o nível do player.
    }
// Métodos da classe player.
/* Métodos são dunções que pertencem àuma classe e podem ser 
chamadas em instâncias dessa classe. */
    public attack(): string{
        const damage = this.level * 10;
// O ataque é o dano que o player vai causar a outro player,
// Já o return é a variavél que usamos que dá a função o retorno de um valor.
        return `O player ${this.name} atacou e causou ${damage} de dano!`;
    }
// Agora vamos definir um dano ao player que sofreu o ataque.
public takeDamage(damage: number): string {
// Diminui a vida do player de acordo com o dano recebido.
    this.health -= damage;
// Verifica se a vida do player chegou a 0 ou ficou abaixo de 0.
    if (this.health <= 0) {
// Garante que a vida do player não fique negativa.
        this.health = 0;
// Retorna uma mensagem informando que o player foi derrotado.
        return `O player ${this.name} recebeu ${damage} de dano e foi derrotado!`;
    }
// Caso o player ainda tenha vida, retorna uma mensagem

// informando o dano recebido e sua vida restante.
        return `O player ${this.name} recebeu ${damage} de dano e agora tem ${this.health} de vida.`;
    }

    public cure(): string {
        const healing = this.level * 20;
        return `O player ${this.name} se curou em ${healing} de vida`
    }
    public takeHealing (healing: number): string{
        this.health += healing;

        if (this.health >= 100){
            this.health = 100;
        }

        return `O player ${this.name} se curou em ${healing} de vida, e agora tem ${this.health} de vida`
    }
}