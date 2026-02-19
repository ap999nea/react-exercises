import { useState } from "react";

export const useLoader = () => {
  const [loading, setIsLoading] = useState<boolean>(false);

  return { loading, setIsLoading };
};
