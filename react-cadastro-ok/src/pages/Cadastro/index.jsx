import { Link } from "react-router-dom"


function Cadastro (){


    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Cadastro</h2>
            <form className="flex flex-col gap-5">
                <input placeholder="Nome" type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                <input placeholder="Email" type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                <input placeholder="Senha" type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400">Cadastrar</button>
            </form>
            <Link to="/login" className="text-blue-700 hover:underline mt-4 block text-center">Já tem uma conta? Faça login </Link>
        </div>
    )

}



export default Cadastro