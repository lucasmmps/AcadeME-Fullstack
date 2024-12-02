import { useRef, useState } from 'react';
import { Button } from '../components/Button';
import { TextBar } from '../components/TextBar';
import logo from '../assets/white-logo.svg';
import moldure from '../assets/squares-moldure.svg';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp: React.FC = () => {
    const ref = useRef<HTMLButtonElement | null>(null);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Formulário enviado', formData);

        // Verifica se as senhas e emails correspondem
        if (formData.password !== formData.confirmPassword) {
            alert('As senhas não correspondem.');
            return;
        }

        if (formData.email !== formData.confirmEmail) {
            alert('Os e-mails não correspondem.');
            return;
        }

        try {
            // Faz a requisição POST para o backend
            const response = await fetch('http://localhost:5000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Se o cadastro foi bem-sucedido, redireciona para a página Profile
                navigate('/profile');
            } else {
                // Se houve um erro, exibe a mensagem de erro
                alert(data.message || 'Erro ao cadastrar usuário.');
            }
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            alert('Erro ao cadastrar usuário.');
        }
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
                <form onSubmit={handleSubmit} className="w-full max-w-lg p-4 flex flex-col items-center justify-center gap-4">
                    <h1 className="page-title text-[#006ACB] text-3xl mb-2">Cadastro</h1>
                    <TextBar 
                        label="Nome" 
                        name="name" 
                        placeholder="Insira seu nome completo" 
                        onChange={handleChange} 
                        value={formData.name}
                    />
                    <TextBar 
                        label="Telefone" 
                        name="phone" 
                        type="phone" 
                        placeholder="Insira seu número com DDD" 
                        onChange={handleChange} 
                        value={formData.phone}
                    />
                    <TextBar 
                        label="E-mail institucional" 
                        name="email" 
                        type="email" 
                        placeholder="Insira seu e-mail institucional" 
                        onChange={handleChange} 
                        value={formData.email}
                    />
                    <TextBar 
                        label="Confirme seu e-mail" 
                        name="confirmEmail" 
                        type="email" 
                        placeholder="Confirme seu e-mail institucional" 
                        onChange={handleChange} 
                        value={formData.confirmEmail}
                    />
                    
                    {/** Password Area **/}
                    <div className="password-container flex items-start p-0 gap-4">
                        <div className="password-register items-start text-start">
                            <TextBar 
                                label="Senha" 
                                name="password" 
                                type="password" 
                                placeholder="Crie uma senha forte" 
                                onChange={handleChange} 
                                value={formData.password}
                            />
                            <div className="password-requirements text-[#94A2B7] mt-2">
                                <span>Mínimo 8 dígitos</span><br />
                                <span>Mínimo 1 número</span><br />
                                <span>Mínimo 1 letra maiúscula</span><br />
                                <span>Mínimo 1 letra minúscula</span><br />
                                <span>Mínimo 1 caractere especial</span>
                            </div>
                        </div>
                        <TextBar 
                            label="Confirme sua senha" 
                            name="confirmPassword" 
                            type="password" 
                            placeholder="Confirme sua senha" 
                            onChange={handleChange} 
                            value={formData.confirmPassword}
                        />
                    </div>
                    <Button type="submit" ref={ref} className="p-4 mt-12"> Prosseguir </Button>
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