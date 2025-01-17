import React, { useState } from 'react';
import './CadEnd.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate



function Cadastro() {
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');

    const navigate = useNavigate();

    const handleFinalizar = () => {
        navigate('/'); // Navega para a rota principal ('/') que � o seu Login
    };

    return (
        <div className="cadastro-container">
            <Link to="/" className="back-arrow"> &larr; </Link>
            <img src={logo} alt="Fast Model Logo" className="logo" />

            <form> {}
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="CEP*"
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Rua*"
                        value={rua}
                        onChange={(e) => setRua(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="N�mero*"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Bairro*"
                        value={bairro}
                        onChange={(e) => setBairro(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Cidade*"
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                        required
                    />
                </div>

                <button type="button" onClick={handleFinalizar} className="btn-login">
                    FINALIZAR
                </button>
            </form>
        </div>
    );
}

export default Cadastro;
