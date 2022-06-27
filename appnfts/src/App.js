import {useState, useEffect} from 'react';
import {ethers} from 'ethers';
import ModulableEyes from './artifacts/contracts/ModulableEyes.sol/ModulableEyes.json';
import './App.css';
import img1 from './image/1.png';
import img2 from './image/2.png';
import img3 from './image/3.png';
import img4 from './image/4.png';
import img5 from './image/5.png';
import img6 from './image/6.png';
import img7 from './image/7.png';
import img8 from './image/8.png';
import img9 from './image/9.png';
import img10 from './image/10.png';
import { FormatTypes } from 'ethers/lib/utils';

  const ggaddress = "0xCb57f442732ec337d4E1A78F6766fF364f4E3B3A";

function App() {

  const [error, setError] = useState('');
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contracts = new ethers.Contract(ggaddress, ModulableEyes.abi, provider);
      try {
        const cost = await contracts.cost();
        const totalSupply = await contracts.totalSupply();
        const object = {"cost": String(cost), "totalSupply": String(totalSupply)}
        setData(object);
      } catch(err) {
        setError(err.message);
      }
    }
  }

  async function mint() {
    
  }

  return (
    <div className="App">
      <div className="container">
        <div className="banniere">
            <img src={img1} alt="img"/>
            <img src={img2} alt="img"/>
            <img src={img3} alt="img"/>
            <img src={img4} alt="img"/>
            <img src={img5} alt="img"/>
            <img src={img6} alt="img"/>
            <img src={img7} alt="img"/>
            <img src={img8} alt="img"/>
            <img src={img9} alt="img"/>
            <img src={img10} alt="img"/>
        </div>
        {error && <p>{error}</p>}
        <h1>Mint a Modulable Eyes NFT !</h1>
        <p className="count">{data.totalSupply} / 50</p>
        <p className="cost"> Each Modulable Eyes NFT costs {data.cost / 10**18} eth (excluding gas fees)</p>
        <button onClick={mint}>Buy One Modulable Eyes NFT</button>
      </div>
    </div>
  );
}

export default App;
