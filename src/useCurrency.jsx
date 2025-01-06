const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "GHS",
});
export const priceConverter = (price) => intl.format(price);
export default function useCurrency(price) {
  return intl.format(price);
}
