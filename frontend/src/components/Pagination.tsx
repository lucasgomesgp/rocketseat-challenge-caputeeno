import { ContainerPagination, NumberPagination } from "@/styles/Pagination";

export default function Pagination() {
  const numbersForPagination = [1, 2, 3, 4, 5];

  return (
    <ContainerPagination>
      {numbersForPagination.map((number) => (
        <NumberPagination key={number}>{number}</NumberPagination>
      ))}
      <NumberPagination>{"<"}</NumberPagination>
      <NumberPagination>{">"}</NumberPagination>
    </ContainerPagination>
  );
}
