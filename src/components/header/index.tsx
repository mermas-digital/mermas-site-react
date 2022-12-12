import React, { useCallback, useRef } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './index.css';
interface NavbarProps {
  showGallery?: boolean;
  showGalleryEllipse?: boolean;
}
export const Navbar = ({
  showGallery = false,
  showGalleryEllipse = false,
}: NavbarProps) => {
  const [show, setShow] = React.useState(false);
  const navRef = useRef<
    HTMLDivElement & {
      style: {
        transform: string;
      };
    }
  >(null);
  const headerRef = useRef<HTMLHeadElement>(null);

  const showMenu = () => {
    setShow(!show);
  };
  const showNav = () => {
    show
      ? navRef?.current?.classList.add('show')
      : navRef?.current?.classList.remove('show');
  };

  const changeColorHeader = useCallback(() => {
    const header = headerRef?.current;
    if (window.scrollY >= 1) {
      header?.classList.add('scroll');
    } else {
      header?.classList.remove('scroll');
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', changeColorHeader);
    return () => {
      window.removeEventListener('scroll', changeColorHeader);
    };
  }, [changeColorHeader]);

  React.useEffect(() => {
    showNav();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  const redirectCorrect = (section: string) => {
    if (
      window.location.href.split('/').length < 5 &&
      window.location.href.split('/')[3] !== '#'
    ) {
      window.location.href = window.location.href.replace(
        window.location.href.split('/')[3],
        `#${section}`,
      );
    } else if (
      window.location.href.split('/').length === 5 &&
      window.location.href.split('/')[3] !== '#'
    ) {
      const firstReplace = window.location.href.replace(
        window.location.href.split('/')[3],
        `#${section}`,
      );

      const secondReplace = firstReplace.replace(
        `/${firstReplace.split('/')[4]}`,
        '',
      );
      window.location.href = secondReplace;
    }
  };

  return (
    <>
      {showGalleryEllipse && (
        <>
          <div className="elipse1" />
          <div className="elipse2" />
        </>
      )}
      {showGalleryEllipse && <div className="elipse3" />}
      <header className="header" ref={headerRef}>
        <nav className="containerNavbar delay_500" ref={navRef}>
          <div className="containerLogo">
            <img
              src="../../../public/image/sideLogo.png"
              alt="logo side"
              className="sideLogo"
            />
            <a className="logo" href="#">
              Mermãs Digitais
            </a>
          </div>
          <div className="menu">
            <ul className="group_button">
              <li>
                <a className="button_click" href="#home">
                  Página Inicial
                </a>
              </li>
              <li>
                <a onClick={() => redirectCorrect('about')}>Sobre</a>
              </li>

              <li>
                <a onClick={() => redirectCorrect('course')}>Projeto</a>
              </li>
              <li>
                <a onClick={() => redirectCorrect('activity')}>Atividades</a>
              </li>
              <li>
                <a onClick={() => redirectCorrect('register')}>
                  Como participar?
                </a>
              </li>
              <li>
                <Link className="link" to="/time">
                  Equipe
                </Link>
              </li>
              <li>
                <a onClick={() => redirectCorrect('form')}>Contato</a>
              </li>
              <li>
                <a onClick={() => redirectCorrect('gallery')}>Galeria</a>
              </li>
            </ul>
          </div>

          {!show ? (
            <div className="toggle icon-menu" onClick={() => showMenu()}>
              <AiOutlineMenu
                size={40}
                style={{
                  color: '#A688FF',
                  cursor: 'pointer',
                }}
              />
            </div>
          ) : (
            <div className="toggle icon-close" onClick={() => showMenu()}>
              <AiOutlineClose
                size={40}
                style={{
                  color: '#A688FF',
                  cursor: 'pointer',
                }}
              />
            </div>
          )}
        </nav>
      </header>
    </>
  );
};
