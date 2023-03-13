export function formattedDate(timestamp: number) {
    const date = new Date(timestamp);
    return date.toLocaleDateString("pt-br", { timeZone: "UTC" });
}

export function formattedMoney(value: number) {
    return value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    });
}