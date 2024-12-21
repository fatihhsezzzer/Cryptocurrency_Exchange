import { Link } from 'react-router-dom';

const MarketCapTable = () => {
  return (
    <div className="container">
      {/* Başlık */}
      <div className="row">
        <div className="col md-12 text-center">
          <h1 className="mt-5 mb-5 text-white">
            Top 100 Cryptocurrencies By Market Capitalization
          </h1>
        </div>
      </div>

      {/* Tablo */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped crypt-table-market-cap">
                <thead>
                  <tr>
                    <th scope="col">Rank</th>
                    <th scope="col" className="text-left pl-2">Name</th>
                    <th scope="col">Market Cap</th>
                    <th scope="col">Price</th>
                    <th scope="col">24 Hour Volume</th>
                    <th scope="col">Change</th>
                    <th scope="col">7 days</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Örnek veri (Dinamikleştirilebilir) */}
                  {[
                    {
                      rank: 1,
                      name: 'Bitcoin',
                      img: 'images/coins/btc.png',
                      marketCap: '$239048209',
                      price: '$4559',
                      volume: '$2344234',
                      change: '-0.04%',
                      canvasData: '[65,59,81,81,56,55,40,80,90]',
                      bgColor: 'rgba(247,97,78,0.5)',
                      borderColor: 'f7614e',
                      up: false,
                    },
                    {
                      rank: 2,
                      name: 'Ethereum',
                      img: 'images/coins/eth.png',
                      marketCap: '$239048209',
                      price: '$4559',
                      volume: '$2344234',
                      change: '-4.04%',
                      canvasData: '[34,54,23,56,76,78,34,56,45]',
                      bgColor: 'rgba(247,97,78,0.5)',
                      borderColor: 'f7614e',
                      up: false,
                    },
                  ].map((coin, index) => (
                    <tr key={index}>
                      <th>{coin.rank}</th>
                      <td className="text-left pl-2 font-weight-bold">
                        <img
                          src={coin.img}
                          width="20"
                          className="pr-1 crypt-market-cap-logo"
                          alt="coin"
                        />{' '}
                        <Link to="/exchange.html">{coin.name}</Link>
                      </td>
                      <td>{coin.marketCap}</td>
                      <td>{coin.price}</td>
                      <td>{coin.volume}</td>
                      <td className={coin.up ? 'crypt-up' : 'crypt-down'}>
                        {coin.change}
                      </td>
                      <td
                        className="crypt-marketcap-canvas"
                        data-charts={coin.canvasData}
                        data-bg={coin.bgColor}
                        data-border={coin.borderColor}
                      >
                        <canvas></canvas>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row mb-4 mt-4">
          <div className="col-md-6">
            <a href="#" className="crypt-btn crypt-button-inline crypt-btn-green">
              Next 100 <i className="pe pe-7s-angle-right-circle"></i>
            </a>
            <a href="#" className="crypt-btn crypt-button-inline crypt-btn-red">
              View All
            </a>
          </div>
          <div className="col-md-6 mt-3">
            <p>
              <i>
                *Coin Market Cap provides direct cryptocurrency market
                capitalization data
              </i>
            </p>
          </div>
        </div>
        <hr />

        {/* Toplam Piyasa Değeri */}
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <h1 className="mt-5 mb-3">
                <b>
                  Total Market Cap:{' '}
                  <span className="crypt-up">$884,056,234,480</span>
                </b>
              </h1>
              <p className="mb-5">Last updated: Nov 20, 2019 3:00 PM UTC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketCapTable;
