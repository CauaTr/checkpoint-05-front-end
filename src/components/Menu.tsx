import { Link } from "react-router-dom";

export default function Menu() {

    return (
        <div>
            <nav className="bg-gray-800 text-center p-4">
                <Link className="text-white font-bold" to='/'>Home</Link>
                <span className="text-white font-bold"> | </span>
                <Link className="text-white font-bold" to='/sobre'>Sobre</Link>
                <span className="text-white font-bold"> | </span>
                <Link className="text-white font-bold" to='/agendamentos'>Agendamento</Link>
            </nav>
        </div>
    )
}