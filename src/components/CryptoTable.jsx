import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAssets, updateAssetsRandomly } from "../redux/cryptoSlice";

const CryptoTable = () => {
  const dispatch = useDispatch();
  const assets = useSelector(selectAssets);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateAssetsRandomly());
    }, 2000);
    return () => clearInterval(interval);
  }, [dispatch]);

  const getChangeColor = (value) => (value >= 0 ? "text-green-600" : "text-red-600");

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full border text-sm font-sans border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-center font-semibold px-4 py-2">#</th>
            <th className="text-center font-semibold px-4 py-2">Logo</th>
            <th className="text-center font-semibold px-4 py-2">Name</th>
            <th className="text-center font-semibold px-4 py-2">Symbol</th>
            <th className="text-center font-semibold px-4 py-2">Price</th>
            <th className="text-center font-semibold px-4 py-2">1h %</th>
            <th className="text-center font-semibold px-4 py-2">24h %</th>
            <th className="text-center font-semibold px-4 py-2">7d %</th>
            <th className="text-center font-semibold px-4 py-2">Market Cap</th>
            <th className="text-center font-semibold px-4 py-2">24h Volume</th>
            <th className="text-center font-semibold px-4 py-2">Circulating Supply</th>
            <th className="text-center font-semibold px-4 py-2">Max Supply</th>
            <th className="text-center font-semibold px-4 py-2">7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={asset.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="text-center px-4 py-2">{index + 1}</td>
              <td className="text-center px-4 py-2">
                <img src={asset.logo} alt={asset.name} className="w-6 h-6 mx-auto" />
              </td>
              <td className="text-center px-4 py-2">{asset.name}</td>
              <td className="text-center px-4 py-2">{asset.symbol}</td>
              <td className="text-right px-4 py-2">${asset.price.toLocaleString()}</td>
              <td className={`text-center px-4 py-2 ${getChangeColor(asset.change1h)}`}>{asset.change1h}%</td>
              <td className={`text-center px-4 py-2 ${getChangeColor(asset.change24h)}`}>{asset.change24h}%</td>
              <td className={`text-center px-4 py-2 ${getChangeColor(asset.change7d)}`}>{asset.change7d}%</td>
              <td className="text-right px-4 py-2">${asset.marketCap.toLocaleString()}</td>
              <td className="text-right px-4 py-2">${asset.volume24h.toLocaleString()}</td>
              <td className="text-right px-4 py-2">{asset.circulatingSupply}</td>
              <td className="text-right px-4 py-2">{asset.maxSupply}</td>
              <td className="text-center px-4 py-2">
                <img src={asset.chart} alt="7d chart" className="w-28 h-8 object-contain mx-auto" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;