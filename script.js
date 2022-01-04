let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let stockPriceElement = document.getElementById('stock-price');
const trashContainer = document.querySelector(".trash-container");
const moneyElem = document.querySelector(".money");
const currencyFormatter = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2
})

const trashFormatter = new Intl.NumberFormat("en-us", {
  minimumIntegerDigits: 7,
  maximumFractionDigits: 0,
  useGrouping: false
})

const ONE_MILLION_DOLLARS = 1000000;

setupTrash()

async function setupTrash () {
  ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    stockPriceElement.innerText = currencyFormatter.format(price);
  }

  const trashAmount = {
    xxl: {
      amount: parseInt(`${stringifiedAmount[0]}${stringifiedAmount[1]}`),
      icon: "bitcoin",
    },
    xl: {
      amount: parseInt(stringifiedAmount[2]),
      icon: "bitcoin",
    },
    lg: {
      amount: parseInt(stringifiedAmount[3]),
      icon: "bitcoin",
    },
    md: {
      amount: parseInt(stringifiedAmount[4]),
      icon: "bitcoin",
    },
    sm: {
      amount: parseInt(stringifiedAmount[5]),
      icon: "bitcoin",
    },
    xs: {
      amount: parseInt(stringifiedAmount[6]),
      icon: "bitcoin",
    },
  }

  Object.values(trashAmount).forEach(({ amount, icon }) => {
    for (let i = 0; i < amount; i++) {
      createTrash(icon)
    }
  })
}

function createTrash(icon) {
  
}
