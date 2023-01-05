import './App.scss';
import {AuctionPage} from './AuctionPage';
import {AuctionTemplate} from './db';

function App() {
  return (
    <div className="App">
      <AuctionPage auction={AuctionTemplate} />
    </div>
  );
}

export default App;