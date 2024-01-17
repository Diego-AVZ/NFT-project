var priceTao;

async function seeTaoPrice() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bittensor&vs_currencies=usd');
        const data = await response.json();
        priceTao = data.bittensor.usd;
    } catch (error) {
        console.error('Error al obtener el precio de TAO:', error);
    }
}

async function seeNftPrice() {
    await seeTaoPrice();

    if (priceTao !== undefined) {
        var priceNft = priceTao + 150;
        document.getElementById("pTao").innerText = "TAO price: $" + priceTao;
        document.getElementById("t2").innerText = "NFT price: $" + priceNft.toFixed(1);
    }
}

//_______________________
