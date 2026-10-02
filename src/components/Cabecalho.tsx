type Valor = { carros: number }

export default function Cabecalho({ carros }: Valor) {

    return (
        <div className="bg-blue-500 text-white">
            <h1 className="text-center">Cabeçalho da página</h1>
            <p className="text-left">Contador: {carros}</p>
        </div>
    )
}