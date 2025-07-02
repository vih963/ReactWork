import { Link } from "react-router-dom"

function Cadastro (){


    return (
        <div className="mx-auto mt-10 bg-white p-8 border border-grey-300 rouded-lg shadow-lg">
            <h2>Cadastro</h2>
            <form action="">
                <input placeholder="Nome" type="text" />
                <input placeholder="Email" type="email" />
                <input placeholder="Senha" type="password" />
                <button>Cadastrar</button>
            </form>
            <Link to="/login">Já tem uma conta? Faça login </Link>
        </div>
    )

}



export default Cadastro