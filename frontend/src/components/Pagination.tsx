import { useFilter } from "@/hooks/useFilter";
import { ContainerPagination, NumberPagination } from "@/styles/Pagination";

export default function Pagination() {
  const numbersForPagination = [1, 2, 3, 4, 5];
  const { queryOptions, setQueryOptions } = useFilter();
  function handlePagination(numberOfPage: number) {
    setQueryOptions({
      filterQuery: "",
      pageOfPagination: numberOfPage,
    });
  }
  return (
    <ContainerPagination>
      {numbersForPagination.map((number) => (
        <NumberPagination
          onClick={() => {
            handlePagination(number);
          }}
          $isBold={number === queryOptions.pageOfPagination}
          key={number}
        >
          {number}
        </NumberPagination>
      ))}
      <NumberPagination
        onClick={() => {
          handlePagination(queryOptions.pageOfPagination - 1);
        }}
        disabled={queryOptions.pageOfPagination === 1}
      >
        {"<"}
      </NumberPagination>
      <NumberPagination
        onClick={() => {
          handlePagination(queryOptions.pageOfPagination + 1);
        }}
        disabled={queryOptions.pageOfPagination === 5}
      >
        {">"}
      </NumberPagination>
    </ContainerPagination>
  );
}
