import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Contexts/UserProvider';

const MarketCapTable = () => {
  const [cryptoData, setCryptoData] = useState([]); 
  const [selectedCoin, setSelectedCoin] = useState(null); 
  const { user } = useContext(UserContext); 
  const navigate = useNavigate();

  useEffect(() => {
    const socket = new WebSocket('wss://localhost:32769/api/MarketData/ws-market-data');

    socket.onopen = () => {
      console.log('WebSocket bağlantısı açıldı.');
      socket.send('İstemci WebSocket bağlantısını kurdu');
    };

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (Array.isArray(data)) {
          setCryptoData((prevData) => {
            const updatedData = [...data];
            return updatedData;
          });

          // Modalda gösterilen coinin verilerini güncelle
          if (selectedCoin) {
            const updatedCoin = data.find((coin) => coin.InstId === selectedCoin.InstId);
            if (updatedCoin) {
              setSelectedCoin(updatedCoin);
            }
          }
        }
      } catch (error) {
        console.error('Mesaj işlenemedi:', error);
      }
    };

    return () => {
      socket.close();
    };
  }, [selectedCoin]);

  const handleRowClick = (coin) => {
    if (!user) {
      alert('Bilgileri görmek için giriş yapmanız gerekmektedir!');
      navigate('/login');
      return;
    }
    setSelectedCoin(coin); 
  };

  if (!cryptoData || cryptoData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col md-12 text-center">
          <h1 className="mt-5 mb-5 text-white">Kripto Para Birimleri ve Fiyatları</h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped crypt-table-market-cap">
                <thead>
                  <tr>
                    <th scope="col">Sıra</th>
                    <th scope="col">Ad</th>
                    <th scope="col">Fiyat</th>
                    <th scope="col">24 Saatlik Hacim (USDT)</th>
                    <th scope="col">Değişim</th>
                  </tr>
                </thead>
                <tbody>
                  {cryptoData.map((coin, index) => (
                    <tr
                      key={index}
                      onClick={() => handleRowClick(coin)}
                      style={{ cursor: 'pointer' }}
                    >
                      <th>{index + 1}</th>
                      <td>{coin.InstId}</td>
                      <td>{coin.Last}</td>
                      <td>{parseFloat(coin.Vol24h).toLocaleString()}</td>
                      <td
                        style={{ paddingTop: '23px' }}
                        className={
                          parseFloat(coin.Last) > parseFloat(coin.Open24h)
                            ? 'crypt-up'
                            : 'crypt-down'
                        }
                      >
                        {(
                          ((parseFloat(coin.Last) - parseFloat(coin.Open24h)) /
                            parseFloat(coin.Open24h)) *
                          100
                        ).toFixed(2)}
                        %
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCoin && (
        <div
          className="modal"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={() => setSelectedCoin(null)}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: '#080e15',
              padding: '20px',
              borderRadius: '10px',
              width: '500px',
              textAlign: 'left',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{selectedCoin.InstId}</h3>
            <p>
              <strong>Fiyat:</strong> {selectedCoin.Last}
            </p>
            <p>
              <strong>Alış Fiyatı:</strong> {selectedCoin.AskPx}
            </p>
            <p>
              <strong>Satış Fiyatı:</strong> {selectedCoin.BidPx}
            </p>
            <p>
              <strong>24 Saatlik En Yüksek:</strong> {selectedCoin.High24h}
            </p>
            <p>
              <strong>24 Saatlik En Düşük:</strong> {selectedCoin.Low24h}
            </p>
            <p>
              <strong>24 Saatlik Hacim:</strong> {parseFloat(selectedCoin.Vol24h).toLocaleString()}
            </p>
            <p>
              <strong>Değişim:</strong>{' '}
              {(
                ((parseFloat(selectedCoin.Last) - parseFloat(selectedCoin.Open24h)) /
                  parseFloat(selectedCoin.Open24h)) *
                100
              ).toFixed(2)}
              %
            </p>
            <button
              onClick={() => setSelectedCoin(null)}
              style={{ marginTop: '20px' }}
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketCapTable;
