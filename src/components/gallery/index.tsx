import { useNavigate } from 'react-router-dom';
import './index.css';

export default function Gallery() {
  const navigate = useNavigate();
  return (
    <section id="gallery">
      <div className="container_gallery">
        <div className="textTitleSection">
          <div className="textParts">
            <h1 className="blackPart">Galeria das</h1>{' '}
            <h1 className="pinkPart">Mermãs Digitais </h1>
          </div>
          <div className="head_buttonGallery">
            <button
              className="iconGallery button_nextGallery"
              onClick={() => navigate('/galeria')}
            >
              <img src="./image/arrow.svg" alt="Ícone de foguete" />
            </button>
          </div>
        </div>

        <div className="gallery_box">
          <img
            src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
            className="img_gallery"
          />
          <img
            src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
            className="img_gallery"
          />
          <img
            src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
            className="img_gallery"
          />
          <img
            src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
            className="img_gallery"
          />
        </div>
      </div>
    </section>
  );
}
