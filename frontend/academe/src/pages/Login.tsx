import { useRef } from 'react';
import { Button } from '../components/Button';
import { TextBar } from '../components/TextBar';
import logo from '../assets/colored-logo.svg';
import moldure from '../assets/squares-moldure.svg';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 

const Login: React.FC = () => {
    const ref = useRef<HTMLButtonElement | null>(null);
    const navigate = useNavigate();
  
    const handleGoToProfile = () => {
      navigate('/Profile');
    };

    return (
        <div className="Login flex h-screen w-screen flex-col items-center justify-start">
            {/** Logo **/}
            <Link to="/" className='text-[#006ACB]'>
                <img src={logo} alt="logo" className="logo mb-8 mt-16" style={{ width: '150px', height: 'auto' }} />
            </Link>
            {/** Form **/}
            <div className="Login-form">
                <form action="" className="w-96 p-4 flex flex-col items-center justify-center gap-4">
                    <TextBar label="Login" type='email' placeholder='Insira seu e-mail institucional' />
                    <TextBar label="Senha" type='password' placeholder='Digite sua senha' />
                    <a href="" className='text-[#006ACB]'>Esqueci minha senha</a>

                    <Button ref={ref} size="default" shape="pill" className="p-4 mt-4 mb-4 w-full justify-center" 
                    onClick={handleGoToProfile} // Redirecionamento para o perfil
                    >Entrar</Button>
                    
                    <div className="flex items-center gap-2 w-full">
                        <hr className="flex-1 border-t border-[#006ACB]" />
                         <span className="text-[#006ACB]">ou</span>
                        <hr className="flex-1 border-t border-[#006ACB]" />
                    </div>

                    {/* Usando o Link para redirecionar para a página de registro */}
                    <Link to="/signup" className='text-[#006ACB]'>Cadastre-se</Link>
                    
                </form>
            </div>

            {/** Footer and Moldure **/}
            <img 
                src={moldure} 
                alt="Moldura" 
                className="hidden 2xl:flex absolute bottom-20 right-0 w-[562px] h-auto z-0 pointer-events-none" 
            />
            <div className='footer absolute bottom-0 h-20 w-screen bg-gradient-to-r from-[#006ACB] to-[#003465] z-0 pointer-events-none' />
        </div>
    );
}

export default Login;