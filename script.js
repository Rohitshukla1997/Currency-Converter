
function convert() {
    const amount = document.getElementById('amount').value;
    const baseCurrency = 'USD';
    const targetCurrency = document.getElementById('currency').value;
    const apiKey = 'e9cbade06c19b96195b28f946a5f348f';

    fetch(`https://api.forexrateapi.com/v1/latest?api_key=${apiKey}&base=${baseCurrency}&currencies=${targetCurrency}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[targetCurrency];
            const convertedAmount = (amount * rate).toFixed(2);

            document.getElementById('result').innerHTML = `${amount} ${baseCurrency} is equal to ${convertedAmount} ${targetCurrency}`;
            document.getElementById('resultContainer').style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('result').innerHTML = 'Error fetching data. Please try again later.';
            document.getElementById('resultContainer').style.display = 'block';
        });
}