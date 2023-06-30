import { quantityItems } from "@/utils/quantity-items";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export function SkeletonUI() {
  return (
    <>
      {quantityItems.map((qtd) => (
        <Stack spacing={0.5} key={qtd}>
          <Skeleton variant="rectangular" width={250} height={180} />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </Stack>
      ))}
    </>
  );
}
