const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/getPrice', async (req, res) => {
  const tokenSymbol = req.query.symbol;
  const apiKey = '78eda0c9-d62b-480c-8750-6d35fe71e654'; // Reemplaza con tu clave de API de CoinMarketCap

  const apiUrl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?symbol=${tokenSymbol}&CMC_PRO_API_KEY=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (data.status.error_code === 0) {
      const price = data.data[0].quote.USD.price;
      res.json({ price });
    } else {
      res.status(500).json({ error: `Error en la solicitud: ${data.status.error_message}` });
    }
  } catch (error) {
    res.status(500).json({ error: `Error en la solicitud: ${error.message}` });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
