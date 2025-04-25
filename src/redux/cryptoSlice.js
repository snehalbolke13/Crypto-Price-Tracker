import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 'btc',
    name: 'Bitcoin',
    symbol: 'BTC',
    logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    price: 50000,
    change1h: 0.5,
    change24h: 2.1,
    change7d: -1.2,
    marketCap: 900000000,
    volume24h: 25000000,
    circulatingSupply: '19M',
    maxSupply: '21M',
    chart: 'https://dummyimage.com/120x40/ccc/000.png&text=Chart',
  },
  // Add more mock assets here if needed
];

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateAssetsRandomly: (state) => {
      return state.map((asset) => {
        const randomDelta = () => (Math.random() * 2 - 1).toFixed(2);
        return {
          ...asset,
          price: +(asset.price * (1 + randomDelta() / 100)).toFixed(2),
          change1h: +randomDelta(),
          change24h: +randomDelta(),
          change7d: +randomDelta(),
          volume24h: asset.volume24h + Math.floor(Math.random() * 10000),
        };
      });
    },
  },
});

export const { updateAssetsRandomly } = cryptoSlice.actions;
export const selectAssets = (state) => state.crypto;
export default cryptoSlice.reducer;