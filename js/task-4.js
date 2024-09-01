`use strict`;
function getShippingCost(country) {
  let country;
  let price;
  const message = `Shipping to ${country} will cost ${price} credits`;
  switch (getShippingCost) {
    case 1:
      country = `Australia`;
      price = 170;
      return message;
      break;

    case 2:
      country = `China`;
      price = 100;
      return message;
      break;

    case 3:
      country = `Chile`;
      price = 250;
      return message;
      break;

    case 4:
      country = `Jamaica`;
      price = 120;
      return message;
      break;

    default:
      return message`Sorry, there is no delivery to your country`;
      break;
  }
}

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
