function applyDiscount(prices, rule) {
    return prices.map(rule);
}

const prices = [10000, 30000, 60000, 80000];

// Rule 1: 10% off everything
const discount10 = price => price * 0.9;

const result1 = applyDiscount(prices, discount10);

console.log(result1);

// Rule 2: Remove 5,000 from items over 50,000
const discount5000 = price => {
    if (price > 50000) {
        return price - 5000;
    }

    return price;
};

const result2 = applyDiscount(prices, discount5000);

console.log(result2);