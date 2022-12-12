import './index.css';

export default function GalleryGrid() {
  return (
    <div className="container_galleryGrid">
      <div className="containerBoxSearch">
        <div className="boxSearchColor">
          <div className="textParts">
            <p>
              <span className="blackPart">Galeria das</span>
              <span className="pinkPart"> Mermãs Digitais </span>
            </p>
          </div>
          <p>
            Diga Xis! E vem ver pra galeria das Mermãs Veja o que nás anda
            aprontando ;D
          </p>
        </div>
        <div className="input_box">
          <div className="box_box">
            <input
              type="text"
              placeholder="Pesquisar"
              className="seacrhInput"
            />
            <button className="buttonSearch">
              <img src="./image/MagnifyingGlass.png" alt="Ícone de foguete" />
            </button>
          </div>
        </div>
      </div>
      <div className="gallery_grid">
        <div className="gallery_grid_item">
          <img
            src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
            alt="Ícone de foguete"
          />
          <div className="overlay">
            <div className="content">
              <h3>Abertura da oficinas das Mermãs</h3>
              <button>
                <p>Ver mais</p>
              </button>
            </div>
          </div>
        </div>
        <div className="gallery_grid_item">
          <img
            src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
            alt="Ícone de foguete"
          />
        </div>
        <div className="gallery_grid_item">
          <img
            src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
            alt="Ícone de foguete"
          />
        </div>
        <div className="gallery_grid_item">
          <img
            src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
            alt="Ícone de foguete"
          />
        </div>
        <div className="gallery_grid_item">
          <img
            src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
            alt="Ícone de foguete"
          />
        </div>
        <div className="gallery_grid_item">
          <img
            src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
            alt="Ícone de foguete"
          />
        </div>
        <div className="gallery_grid_item">
          <img
            src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
            alt="Ícone de foguete"
          />
        </div>
        <div className="gallery_grid_item">
          <img
            src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
            alt="Ícone de foguete"
          />
        </div>
        <div className="gallery_grid_item">
          <img
            src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
            alt="Ícone de foguete"
          />
        </div>
        <div className="gallery_grid_item">
          <img
            src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
            alt="Ícone de foguete"
          />
        </div>
        <div className="gallery_grid_item">
          <img
            src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
            alt="Ícone de foguete"
          />
        </div>
        <div className="gallery_grid_item">
          <img
            src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
            alt="Ícone de foguete"
          />
        </div>
        <div className="gallery_grid_item">
          <img
            src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
            alt="Ícone de foguete"
          />
        </div>
        <div className="gallery_grid_item">
          <img
            src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
            alt="Ícone de foguete"
          />
        </div>
        <div className="gallery_grid_item">
          <img
            src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
            alt="Ícone de foguete"
          />
        </div>
        <div className="gallery_grid_item">
          <img
            src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
            alt="Ícone de foguete"
          />
        </div>
      </div>

      {/*
      <div className="pagination"> */}
      <div className="pagination">
        <button className="buttonPagination">
          <img src="./image/arrowL.png" alt="Ícone de foguete" />
        </button>

        <span className="numberPagination">1</span>
        <span className="numberPagination">2</span>
        <span className="numberPagination">3</span>
        <span className="numberPagination">...</span>
        <span className="numberPagination">10</span>

        <button className="buttonPagination">
          <img src="./image/arrowR.png" alt="Ícone de foguete" />
        </button>
      </div>
    </div>
  );
}
