import { kegiatan_data } from '../data';

import waveUp from '../assets/wave-more-up.png';
import waveDown from '../assets/wave-more-down.png';
import news from '../assets/news-kegiatan.png';
import News from './News';

const NewsKegiatanList = () => {
  return (
    <div className="container-news">
      <div className="header-news">
        <img className="wave-news-up" src={waveUp} alt="wave" />
        <div className="header-container">
          <h3 className="heading-news">Kegiatan Terkini</h3>
          <div className="line">
            <hr className="line-header" />
            <hr className="line-sub-header" />
          </div>
        </div>
      </div>
      <div className="content-news">
        <div className="section-news">
          {kegiatan_data.map((data) => {
            return <News {...data} key={data.id} />;
          })}
        </div>
        <div className="logo-news">
          <img className="news-image" src={news} alt="" />
        </div>
      </div>
      <img className="wave-news-up" src={waveDown} alt="wave" />
    </div>
  );
};
export default NewsKegiatanList;
