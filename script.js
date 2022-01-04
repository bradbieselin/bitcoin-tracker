let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let stockPriceElement = document.getElementById('stock-price');
const trashContainer = document.querySelector(".trash-container");
const currencyFormatter = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2
})

const trashFormatter = new Intl.NumberFormat("en-us", {
  minimumIntegerDigits: 6,
  maximumFractionDigits: 0,
  useGrouping: false,
})

ws.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let price = parseFloat(stockObject.p).toFixed(2);
  stockPriceElement.innerText = currencyFormatter.format(price);
  lastPrice = price;
}

const max = 99999;
const BITCOIN_PRICE_GOAL = Math.floor(Math.random() * max);

setupTrash()

async function setupTrash() {
  const stringifiedAmount = trashFormatter.format(BITCOIN_PRICE_GOAL);
  const trashAmount = {
    xxl: {
      amount: parseInt(`${stringifiedAmount[0]}${stringifiedAmount[1]}`),
      icon: "bitcoin",
    },
    xl: {
      amount: parseInt(stringifiedAmount[2]),
      icon: "dollar",
    },
    lg: {
      amount: parseInt(stringifiedAmount[3]),
      icon: "bitcoin",
    },
    md: {
      amount: parseInt(stringifiedAmount[4]),
      icon: "dollar",
    },
    sm: {
      amount: parseInt(stringifiedAmount[5]),
      icon: "bitcoin",
    },
    xs: {
      amount: parseInt(stringifiedAmount[6]),
      icon: "dollar",
    },
  }

   Object.values(trashAmount).forEach(({ amount, icon }) => {
    for (let i = 0; i < amount; i++) {
      createTrash(icon)
    }
  })
}

function createTrash(icon) {
  const img = document.createElement("img")
  const top = randomNumberBetween(0, 50)
  const size = top / 5 + 1
  img.classList.add("trash")
  img.src = `imgs/${icon}.svg`
  img.style.width = `${size}vmin`
  img.style.height = `${size}vmin`
  img.style.top = `${top}vh`
  img.style.left = `${randomNumberBetween(0, 100)}vw`
  img.style.setProperty("--rotation", `${randomNumberBetween(-30, 30)}deg`)
  trashContainer.appendChild(img)
}

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}