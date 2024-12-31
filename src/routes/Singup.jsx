import logoconvenio from '../assets/GOODCAREVERDE.png'
import '../sass/styleSingup.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Singup = () => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [psw, setPsw] = useState('');
    const [confirmPsw, setConfirmPsw] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        //verifica senhas iguais
        if (psw !== confirmPsw) {
            alert('As senhas são diferentes.')
            return;
        }

        const users = JSON.parde(localStorage.getItem('users')) || [];
        const userExists = users.some(u  => u.email === email);

        if (userExists) {
            alert('Usuário já cadastrado!');
            return;
        }
    
        const newUser = { userName, email, psw };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Cadastro realizado com sucesso!')
        navigate('/Singin');
    }

    return(
        <>
        <body>
        <div>
            <form className="form-singup">
                <div className="singup-box">
                        <img className='greenbrand' src={logoconvenio} alt="" />
                            <div className='form-title-singup'>
                                <h1>Cadastrar</h1>
                                </div>
                            <div className="name-form-singup">
                                <label htmlFor="name">Nome:</label>
                                <input type="text" name="name" id="" placeholder="Digite seu nome:" 
                                    onChange={(e) => setUserName(e.target.value)}/>
                            <div className="email-form-singup">
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" id="" placeholder="Digite seu email:" 
                                    onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="password-form-singup">
                                <label className='title-user-singup' htmlFor="password">Senha:</label>
                                <input type="password" name="password" id="" placeholder="Digite sua senha" 
                                        onChange={(e) => setPsw(e.target.value)}
                                    />
                            </div>
                            <div className="password-form-singup">
                                <label className='title-user-singup' htmlFor="password">Confirmar Senha:</label>
                                <input type="password" name="password" id="" placeholder="Digite sua senha de novo" onChange={(e) => setConfirmPsw(e.target.value)}/>
                            </div>
                            <div className="button-form-singup">
                                <button onClick={handleRegister} type="submit">Cadastrar</button>
                            </div>
                            <div className="singup-button-singup">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </body>
        </>
    )
}

export default Singup