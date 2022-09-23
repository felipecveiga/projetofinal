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
        console.log(`A Agência do Banco ABC - BRASIL é: ${this.agencia}`)
    }
    verCnpj(){
        console.log(`O CNPJ do Banco ABC - BRASIL é: ${this.cnpj}`)
    }
    verEndereco(){
        console.log(`O Endereço do Banco ABC - BRASIL é: ${this.endereco}`)
    }
}
