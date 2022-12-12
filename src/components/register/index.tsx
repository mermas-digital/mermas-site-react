import styles from './index.module.css';

export function Register() {
  return (
    <section className="delay_distance" id={styles['register']}>
      <div className={styles.container}>
        <div className={styles.register_container}>
          <div className={styles.container_1}>
            <div>
              <h2 className={styles.title}>
                Gostou?? Perde tempo não miga
                <br />
                Vem ver como participar
              </h2>

              <ul>
                <li>
                  <i>
                    <img src="./image/check.svg" alt="Ícone de checagem" />
                  </i>
                  <p>Ser Menina</p>
                </li>

                <li>
                  <i>
                    <img src="./image/check.svg" alt="Ícone de checagem" />
                  </i>
                  <p>Ser Estudante da Rede Estadual</p>
                </li>

                <li>
                  <i>
                    <img src="./image/check.svg" alt="Ícone de checagem" />
                  </i>
                  <p>Ser Estudante do Ensino Médio</p>
                </li>
              </ul>
            </div>
            <img
              src="./image/girlRegister.png"
              alt="Imagem de uma menina com um notebook"
              className={styles.girlRegister}
            />
          </div>
          <div className={styles.container_2}>
            <button className={styles.buttonRegister}>
              <a href="#" target="_blank" rel="noreferrer">
                Inscreva-se
              </a>
            </button>
            <div className={styles.container_2_1}>
              <img
                src="./image/emble.svg"
                alt="Ícone de emblema das inscriçoẽs confirmadas"
              />
              <h3>2° Etapa: Inscrições Abertas</h3>
            </div>
          </div>
        </div>

        {/*
        <div className={styles.register_qrcode}>
          <button>Increva-se</button>
          <div className={styles.line}>
            <i>ou</i>
          </div>
          <div className={styles.qrcode}>
            <img
              src="./image/qrcode.svg"
              alt="Imagem de QRCode para acessar as inscriçoẽs"
            />
          </div>
          <p>
            Basta scanear o QRCode com a câmera do seu celular ou clicar no
            botão “Inscreva-se” para acessar o formulário de inscrição
          </p>
        </div> */}
      </div>
    </section>
  );
}
