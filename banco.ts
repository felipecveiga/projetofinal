export  class banco{
    agencia: number;
    cnpj: number;
    telefone:string;
    endereco:string;

    constructor(
        agencia: number,
        cnpj: number,
        telefone:string,
        endereco:string,
        )

    {
        this.agencia = agencia;
        this.cnpj = cnpj;
        this.telefone = telefone;
        this.endereco = endereco;

        }
    verAgencia(){
        console.log(`A Agência do Banco Generation - Brasil é: ${this.agencia}`)
    }
    verCnpj(){
        console.log(`O CNPJ do Banco Generation - Brasil é: ${this.cnpj}`)
    }
    verTelefone(){
        console.log(`O numero de telefone do Banco Generation - Brasil é: ${this.telefone}`)
    }
    verEndereco(){
        console.log(`O Endereço do Banco Generation - BRASIL é: ${this.endereco}`)
    }
}
