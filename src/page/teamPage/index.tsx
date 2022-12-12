import { Footer } from '../../components/footer';
import { Navbar } from '../../components/header';
import Team from '../../components/Team';
import './styles.css';

export default function TeamPage() {
  return (
    <div className="containerTeamPage">
      <Navbar showGallery={false} />
      <div className="container__content__team__page">
        <Team />
      </div>
      <div className="footer__team">
        <Footer />
      </div>
    </div>
  );
}
