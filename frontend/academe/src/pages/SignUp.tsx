import { useRef } from 'react';
import { Button } from '../components/Button';
import { TextBar } from '../components/TextBar';
import logo from '../assets/white-logo.svg';
import moldure from '../assets/squares-moldure.svg';
import { Link, useNavigate } from 'react-router-dom'; // Importando useNavigate
import './SignUp.css';
import Profile from './Profile';

const SignUp: React.FC = () => {
    const ref = useRef<HTMLButtonElement | null>(null);
    const navigate = useNavigate(); // Criando a instância de navigate

    const handleProceed = () => {
        navigate('/profile'); // Redireciona para a página Profile
    };

    return (
        <div className="SignUp flex h-screen flex-col gap-0 2xl:flex-row 2xl:gap-96">
            {/** Left Banner **/}
            <div className="banner hidden 2xl:flex bg-gradient-to-br from-[#006ACB] to-[#003465] p-16 flex-col justify-center items-center w-[472px] h-screen">
                <Link to="/" className='text-[#006ACB]'><img src={logo} alt="logo" className="banner-logo mb-8" /></Link>
                <p className="banner-text text-[#F0F2F5] text-[26px] leading-relaxed text-center">
                    Você está a um passo da sua revolução acadêmica
                </p>
            </div>

            {/** Form **/}
            <div className="SignUp-form flex items-center justify-center bg-white h-screen">
                <form action="" className="w-full max-w-lg p-4 flex flex-col items-center justify-center gap-4">
                    <h1 className="page-title text-[#006ACB] text-3xl mb-2">Cadastro</h1>
                    <TextBar label="Nome" placeholder="Insira seu nome completo" />
                    <TextBar label="Telefone" type="phone" placeholder="Insira seu número com DDD" />
                    <TextBar label="E-mail institucional" type="email" placeholder="Insira seu e-mail institucional" />
                    <TextBar label="Confirme seu e-mail" type="email" placeholder="Confirme seu e-mail institucional" />
                    
                    {/** Password Area **/}
                    <div className="password-container flex items-start p-0 gap-4">
                        <div className="password-register items-start text-start">
                            <TextBar label="Senha" type="password" placeholder="Crie uma senha forte" />
                            <div className="password-requirements text-[#94A2B7] mt-2">
                                <span>Mínimo 8 dígitos</span><br />
                                <span>Mínimo 1 número</span><br />
                                <span>Mínimo 1 letra maiúscula</span><br />
                                <span>Mínimo 1 letra minúscula</span><br />
                                <span>Mínimo 1 caractere especial</span>
                            </div>
                        </div>
                        <TextBar label="Confirme sua senha" type="password" placeholder="Confirme sua senha" />
                    </div>
                    <Button onClick={handleProceed} ref={ref} size="default" shape="pill" className="p-4 mt-12"> Prosseguir </Button>
                </form>
            </div>

            {/** Right Moldure **/}
            <img 
                src={moldure} 
                alt="Moldura" 
                className="hidden 2xl:flex absolute bottom-0 right-0 w-[562px] h-auto z-0 pointer-events-none" 
            />
        </div>
    );
}

export default SignUp;