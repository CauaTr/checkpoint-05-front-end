type Valor = { carros: number }

export default function Cabecalho({ carros }: Valor) {

    return (
        <div className="bg-blue-500 text-white">
            <h1 className="text-center">Lava Rápido</h1>
            <h2 className="text-left">Contador: {carros}</h2>
        </div>
    )
}