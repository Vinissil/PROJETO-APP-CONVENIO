import '../sass/styleSingin.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logoconvenio from '../assets/GOODCAREVERDE.png'

const Singin = () => {
        const [email, setEmail] = useState('');
        const [psw, setPsw] = useState('');
        const navigate = useNavigate();
    
        const handleLogin = () => {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.email === email && u.psw === psw)
    
            if (user) {
                localStorage.setItem('loggedInUser', JSON.stringify(user));
                navigate('/Singin')
            } else {
                alert("Credenciais inválidas. Tente novamente!")
            }
        };

    return (
        <>
        <body>
        <div>
            <form className="form-singin">
                <div className="singin-box">
                <img className='greenbrand' src={logoconvenio} alt="" />
                    <div className='form-title'>
                        <h1>Login</h1>
                    </div>
                    <div className="email-form">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="" placeholder="Digite seu usuário:" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="password-form">
                        <label className='title-user-singin' htmlFor="password">Senha:</label>
                        <input type="password" name="password" id="" placeholder="Digite sua senha" onChange={(e) => setPsw(e.target.value)}/>
                    </div>
                    <div className="button-form">
                        <button onClick={handleLogin} type="submit">Entrar</button>
                    </div>
                    <div className="singup-button-register">
                        <p>Não tem cadastro? <a href="/Singup"><br /><input type="button"
                        className='singin-button-register' value="Clique aqui" placeholder=""/></a></p>
                    </div>
                </div>
            </form>
        </div>
        </body>
        </>
    )
}

export default Singin