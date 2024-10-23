function convertCurrency(from, to, amount) {
    if (from === "USD" && to === "PKR") {
        return amount * 277;  // Example rate: 1 USD = 277 PKR
    } else if (from === "PKR" && to === "USD") {
        return amount / 277;  // Reverse conversion
    } else if (from === "PKR" && to === "Saudi Riyal") {
        return amount / 74;  // Example rate: 1 Saudi Riyal = 74 PKR
    } else if (from === "Saudi Riyal" && to === "PKR") {
        return amount * 74;  // Reverse conversion
    } else if (from === "Saudi Riyal" && to === "USD") {
        return amount / 3.75;  // Example rate: 1 USD = 3.75 Saudi Riyal
    } else if (from === "USD" && to === "Saudi Riyal") {
        return amount * 3.75;  // Example rate: 1 USD = 3.75 Saudi Riyal
    }
    
    // If conversion isn't available:
    return "Conversion not available";
}

// Correct currency selection functions
function USDollar() {
    document.getElementById('fromCurrency').value = "USD";
}
function SaudiRiyal() {
    document.getElementById('fromCurrency').value = "Saudi Riyal";
}
function PKR(){
    document.getElementById('fromCurrency').value = "PKR";
}

function USDollarto() {
    document.getElementById('toCurrency').value = "USD";
}
function SaudiRiyalto() {
    document.getElementById('toCurrency').value = "Saudi Riyal";
}
function PKRto(){
    document.getElementById('toCurrency').value = "PKR";
}

function performConversion() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value);

    // Check if amount is valid
    if (!amount || isNaN(amount)) {
        document.getElementById('result').innerText = "Please enter a valid amount.";
        return;
    }

    const result = convertCurrency(fromCurrency, toCurrency, amount);

    if (typeof result === 'number') {
        // Display result with currency details
        document.getElementById('result').innerText = `Converted Amount: ${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
    } else {
        document.getElementById('result').innerText = result;  // Display the error message
    }
}
