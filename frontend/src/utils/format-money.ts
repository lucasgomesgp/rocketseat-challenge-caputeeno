export function formatToMoney(money: number) {
  return money.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
