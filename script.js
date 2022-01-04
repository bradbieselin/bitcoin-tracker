const trashContainer = document.querySelector('.trash-container');
const moneyElem = document.querySelector('.money');
const currencyFormatter = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
})

setupTrash();

async function setupTrash() {
    const bitcoinPrice = await fetch()
}