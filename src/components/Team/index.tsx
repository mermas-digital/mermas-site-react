import { useRef } from 'react';
import styles from './styles.module.css';

export default function Team() {
  const scrollDowwn = useRef(null);

  const handleScroll = () => {
    //roll down
    scrollDowwn.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',

      // inline: 'nearest',
    });
  };

  return (
    <section id={styles['team']}>
      <div className={styles.container__wrapper}>
        <div className={styles.containerChat}>
          <div className={styles.containerChat__title}>
            <div className={styles.text__complete}>
              <p className={styles.textBlackChat}>Equipe das</p>
              <p className={styles.textPinkChat}>Mermãs Digitais</p>
            </div>
          </div>
          <div className={styles.containerChat__describe}>
            <p className={styles.describe__chat}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            </p>
          </div>

          <div className={styles.container__roll__down} onClick={handleScroll}>
            <div className={styles.container__roll__down__item}>
              <p className={styles.text__down}>rola para baixo</p>
              <img src="/image/arrowDown.png" alt="arrowDown" />
            </div>
          </div>

          <div className={styles.chat__message}>
            <div className={styles.chat__message__left}>
              <div className={styles.chat__message__item}>
                <img src="/image/imageProfile.jpeg" alt="arrowDown" />
                <p className={styles.chat__message__item__text}>
                  Olá, eu sou Simone, Coordenadora do projeto, venha falar
                  comigo por aqui!
                </p>
              </div>
            </div>
            <div className={styles.chat__message__right}>
              <div className={styles.chat__message__item}>
                <p className={styles.chat__message__item__text}>
                  E eu sou o Thiago! Coordenador do projeto, venha falar comigo
                  por aqui!
                </p>
                <img src="/image/imageProfile.jpeg" alt="arrowDown" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.column__gallery__team} ref={scrollDowwn}>
          <div
            className={`${styles.gallery_grid_item_team_column_one} ${styles.column__gallery__team__margin__top}`}
          >
            <div className={styles.card__profile}>
              <img
                className={styles.with__border__color}
                src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
                alt="Ícone de foguete"
              />
              <div className={styles.column__profile__info}>
                <p className={styles.name__profile}>Nome</p>
                <p className={styles.last__name__profile}>Sobrenome</p>
                <p className={styles.role__profile}>Coordenadora</p>
                <p className={styles.email__profile}>test@gmail.com</p>
              </div>
            </div>
          </div>

          <div
            className={`${styles.gallery_grid_item_team_column_one} ${styles.column__gallery__team__margin__top}`}
          >
            <div className={styles.card__profile}>
              <img
                src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
                alt="Ícone de foguete"
              />
              <div className={styles.column__profile__info}>
                <p className={styles.name__profile}>Nome</p>
                <p className={styles.last__name__profile}>Sobrenome</p>
                <p className={styles.role__profile}>Coordenadora</p>
                <p className={styles.email__profile}>test@gmail.com</p>
              </div>
            </div>
          </div>

          <div
            className={`${styles.gallery_grid_item_team_column_one} ${styles.column__gallery__team__margin__top}`}
          >
            <div className={styles.card__profile}>
              <img
                src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
                alt="Ícone de foguete"
              />
              <div className={styles.column__profile__info}>
                <p className={styles.name__profile}>Nome</p>
                <p className={styles.last__name__profile}>Sobrenome</p>
                <p className={styles.role__profile}>Coordenadora</p>
                <p className={styles.email__profile}>test@gmail.com</p>
              </div>
            </div>
          </div>

          <div className={styles.gallery_grid_item_team_column_one}>
            <div className={styles.card__profile}>
              <img
                className={styles.with__border__color}
                src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
                alt="Ícone de foguete"
              />
              <div className={styles.column__profile__info}>
                <p className={styles.name__profile}>Nome</p>
                <p className={styles.last__name__profile}>Sobrenome</p>
                <p className={styles.role__profile}>Coordenadora</p>
                <p className={styles.email__profile}>test@gmail.com</p>
              </div>
            </div>
          </div>
          <div className={styles.gallery_grid_item_team_column_one}>
            <div className={styles.card__profile}>
              <img
                src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
                alt="Ícone de foguete"
              />
              <div className={styles.column__profile__info}>
                <p className={styles.name__profile}>Nome</p>
                <p className={styles.last__name__profile}>Sobrenome</p>
                <p className={styles.role__profile}>Coordenadora</p>
                <p className={styles.email__profile}>test@gmail.com</p>
              </div>
            </div>
          </div>
          <div className={styles.gallery_grid_item_team_column_one}>
            <div className={styles.card__profile}>
              <img
                src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
                alt="Ícone de foguete"
              />
              <div className={styles.column__profile__info}>
                <p className={styles.name__profile}>Nome</p>
                <p className={styles.last__name__profile}>Sobrenome</p>
                <p className={styles.role__profile}>Coordenadora</p>
                <p className={styles.email__profile}>test@gmail.com</p>
              </div>
            </div>
          </div>

          <div
            className={`${styles.gallery_grid_item_team_column_one} ${styles.column__gallery__team__margin__top}`}
          >
            <div className={styles.card__profile}>
              <img
                src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
                alt="Ícone de foguete"
              />
              <div className={styles.column__profile__info}>
                <p className={styles.name__profile}>Nome</p>
                <p className={styles.last__name__profile}>Sobrenome</p>
                <p className={styles.role__profile}>Coordenadora</p>
                <p className={styles.email__profile}>test@gmail.com</p>
              </div>
            </div>
          </div>
          <div
            className={`${styles.gallery_grid_item_team_column_one} ${styles.column__gallery__team__margin__top}`}
          >
            <div className={styles.card__profile}>
              <img
                src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
                alt="Ícone de foguete"
              />
              <div className={styles.column__profile__info}>
                <p className={styles.name__profile}>Nome</p>
                <p className={styles.last__name__profile}>Sobrenome</p>
                <p className={styles.role__profile}>Coordenadora</p>
                <p className={styles.email__profile}>test@gmail.com</p>
              </div>
            </div>
          </div>
          <div
            className={`${styles.gallery_grid_item_team_column_one} ${styles.column__gallery__team__margin__top}`}
          >
            <div className={styles.card__profile}>
              <img
                src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
                alt="Ícone de foguete"
              />
              <div className={styles.column__profile__info}>
                <p className={styles.name__profile}>Nome</p>
                <p className={styles.last__name__profile}>Sobrenome</p>
                <p className={styles.role__profile}>Coordenadora</p>
                <p className={styles.email__profile}>test@gmail.com</p>
              </div>
            </div>
          </div>

          <div className={styles.gallery_grid_item_team_column_one}>
            <div className={styles.card__profile}>
              <img
                src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
                alt="Ícone de foguete"
              />
              <div className={styles.column__profile__info}>
                <p className={styles.name__profile}>Nome</p>
                <p className={styles.last__name__profile}>Sobrenome</p>
                <p className={styles.role__profile}>Coordenadora</p>
                <p className={styles.email__profile}>test@gmail.com</p>
              </div>
            </div>
          </div>
          <div className={styles.gallery_grid_item_team_column_one}>
            <div className={styles.card__profile}>
              <img
                src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
                alt="Ícone de foguete"
              />
              <div className={styles.column__profile__info}>
                <p className={styles.name__profile}>Nome</p>
                <p className={styles.last__name__profile}>Sobrenome</p>
                <p className={styles.role__profile}>Coordenadora</p>
                <p className={styles.email__profile}>test@gmail.com</p>
              </div>
            </div>
          </div>
          <div className={styles.gallery_grid_item_team_column_one}>
            <div className={styles.card__profile}>
              <img
                src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
                alt="Ícone de foguete"
              />
              <div className={styles.column__profile__info}>
                <p className={styles.name__profile}>Nome</p>
                <p className={styles.last__name__profile}>Sobrenome</p>
                <p className={styles.role__profile}>Coordenadora</p>
                <p className={styles.email__profile}>test@gmail.com</p>
              </div>
            </div>
          </div>
          <div className={styles.clip__path__wave} />
        </div>
      </div>
    </section>
  );
}
