import { AiOutlineInstagram } from 'react-icons/ai';

import { BsFacebook, BsTwitter } from 'react-icons/bs';
import './index.css';

interface FooterProps {
  pathImage?: string;
}

export const Footer = ({ pathImage = './image/girls.png' }: FooterProps) => {
  return (
    <footer className="delay">
      <div id="help" className="container delay_distance">
        <div>
          <div id="logo-footer">
            <img
              src="../../../public/image/girls.png"
              alt="Logo do projeto Mermãs Digitais: quatro meninas com características diferentes"
            />
            <h3>
              MERMÃS <br />
              DIGITAIS
            </h3>
          </div>
          <p>
            Projeto de extensão desenvolvido pelo Instituto <br />
            Federal do Maranhão, Campus Imperatriz
          </p>
          <address>Av. Newton Belo, S/N - Vila Maria, Imperatriz - MA</address>
        </div>
        <div id="quick-access">
          <h3>ACESSO RÁPIDO</h3>
          <div>
            <ul>
              <li>
                <a href="#home">Página Inicial</a>
              </li>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#course">Projeto</a>
              </li>
              <li>
                <a href="#activity">Atividades</a>
              </li>
              <li>
                <a href="#register">Como Participar?</a>
              </li>
              <li>
                <a href="#form">Contato</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div id="contacts">
            <h3>CONTATO</h3>
            <ul>
              <li>
                <a href="mailto:mermasdigitaisifma@gmail.com">
                  <i className="ph-envelope-simple"></i>
                  mermasdigitaisifma@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:">
                  <i className="ph-whatsapp-logo"></i>(99) 99999-9999
                </a>
              </li>
            </ul>
          </div>
          <div id="socials">
            <h3>SOCIAL</h3>
            <ul>
              <li>
                <a href="https://www.facebook.com/mermasdigitais">
                  <BsFacebook size={22} color="#9854cb" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/mermas.digitais/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineInstagram size={22} color="#9854cb" />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsTwitter size={22} color="#9854cb" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="copyright">
        @2022 MERMÃS DIGITAIS | Desenvolvido por Mermãs Digitais
      </div>
    </footer>
  );
};
