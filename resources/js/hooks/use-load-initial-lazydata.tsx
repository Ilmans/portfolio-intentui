import { router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export const useLoadInitialLazyData = (data: any, dataName: string) => {
  // initial load data
  const [loadingData, setLoadingData] = useState(true);
  useEffect(() => {
    if (data !== undefined) {
      setLoadingData(false);
      return;
    }
    setTimeout(() => {
      router.reload({
        only: [dataName],
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => setLoadingData(false),
      });
    }, 200);
  }, [data]);

  // on change page
  const onChangePage = (page: any) => {
    setLoadingData(true);
    router.reload({
      data: {
        page,
      },
      only: [dataName],
      replace: true,
      onSuccess: () => {
        window.scrollTo(0, 0);
        setLoadingData(false);
      },
    });
  };

  return { onChangePage, loadingData };
};
