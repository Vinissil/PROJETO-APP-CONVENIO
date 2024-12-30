import '../sass/styleSingin.scss'

const Singin = () => {
    return (
        <>
        <div>
            <form className="form-singin">
                <div className="singin-box">
                    <div className='form-title'>
                        <h1>Login</h1>
                    </div>
                    <div className="email-form">
                        <input type="email" name="email" id="" placeholder="Digite seu email aqui" />
                    </div>
                    <div className="password-form">
                        <input type="password" name="password" id="" placeholder="Digite aqui sua senha" />
                    </div>
                    <div className="button-form">
                        <button type="submit">Entrar</button>
                    </div>
                    <div className="singup-button">
                        <p>Não tem cadastro? <input type="button" value="Clique aqui" placeholder=""/></p>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

export default Singin