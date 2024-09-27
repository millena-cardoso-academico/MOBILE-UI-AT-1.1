import '../styles/NavBar.css';
import PropTypes from 'prop-types';

const BarraDeNavegacao = ({ logo, iconeUsuario }) => {
  return (
    <nav className="barra-de-navegacao">
      <div className="barra-esquerda">
        <img src={logo} alt="Logo da Marca" className="logo" />
        <span className="marca">Linhas e Novelos</span>
      </div>
      <div className="barra-centro">
        <a href="#produtos" className="item-navegacao">Produtos</a>
        <a href="#servicos" className="item-navegacao">Serviços</a>
        <a href="#contato" className="item-navegacao">Contato</a>
      </div>
      <div className="barra-direita">
        <img src={iconeUsuario} alt="Ícone do Usuário" className="icone-usuario" />
      </div>
    </nav>
  );
};

BarraDeNavegacao.propTypes = {
  logo: PropTypes.string.isRequired,
  iconeUsuario: PropTypes.string.isRequired
};

export default BarraDeNavegacao;