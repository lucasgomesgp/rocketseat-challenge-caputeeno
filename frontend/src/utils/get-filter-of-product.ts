export function getFilterOfProduct(filter: string, currentPriority: string): string{
    return `${filter ? `filter:{category:"${filter}"}`:""} ${currentPriority}`;
}