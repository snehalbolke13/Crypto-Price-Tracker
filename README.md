# 💸 Real-Time Crypto Price Tracker

A responsive React + Redux Toolkit application that simulates real-time crypto price tracking for popular assets like BTC and ETH. It mimics WebSocket behavior using `setInterval` and manages all state with Redux.

![demo](demo.gif) <!-- Replace with actual gif or video link if needed -->

---

## 🚀 Features

- 📊 Crypto table UI with:
  - Name, Symbol, Price, % changes, Market Cap, Volume, Supply, and 7D chart
  - Color-coded % changes (green for gain, red for loss)
- 🔄 Simulated real-time updates every 1–2 seconds
- ⚛️ Fully managed using **Redux Toolkit**
- 📱 Responsive design using TailwindCSS
- 🖼️ Static charts using sample images

---

## 🛠️ Tech Stack

- **React**
- **Redux Toolkit**
- **TailwindCSS**
- **Vite** (for fast dev build)
- **Mock data + setInterval** (simulated WebSocket)

---

## 📁 Project Structure
crypto-price-tracker/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── charts/          # Put your static 7D chart images here
│   ├── components/
│   │   └── CryptoTable.jsx
│   ├── redux/
│   │   ├── cryptoSlice.js
│   │   └── store.js
│   ├── App.jsx
│   ├── index.js
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md

