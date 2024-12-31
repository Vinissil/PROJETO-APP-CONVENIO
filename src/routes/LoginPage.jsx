import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('loggerdUser'));

    const handleLogout =() => {
        localStorage.removeItem('loggedinUser')
        navigate('/Singin')
    }

    if (!user) {
        navigate('/Singin')
    }

    return (
        <>
        <div className="dashboard-container">
        <button onClick={handleLogout}>Sair</button>
        </div>

        </>
    )
}

export default LoginPage