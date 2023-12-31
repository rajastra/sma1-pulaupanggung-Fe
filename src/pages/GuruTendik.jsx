import './GuruTendik.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BackDrop from '../components/BackDrop';

function GuruTendik() {
  const [guruData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await axios.get(`${URL}/api/v1/teachers`);
        setNewsData(data.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {loading && <BackDrop loading={loading} />}
      {!loading &&
        <div className="div">
          <div className="heading">Guru & tendik</div>
          <div className="container-wrapper">
            <div className="content-section">
              {guruData?.map((item) => (
                <div className="card" key={item.id} style={{
                  width: '100%',
                  marginBottom: '20px',
                  height: '500px',
                }}>
                  <div style={{
                    width: '100%',
                    height: '400px',
                  }}>
                    <img src={item?.photo} style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }} alt="guru" />
                  </div>
                  <div className="desc">
                    <p className="desc1">{item?.name}</p>
                    <p className="desc2">{item?.jabatan}</p>
                  </div>
                </div>
              ))
              }
            </div>
          </div>
        </div>

      }
    </>

  );
}

export default GuruTendik;
