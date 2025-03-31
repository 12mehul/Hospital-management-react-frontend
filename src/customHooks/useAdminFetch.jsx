import { useEffect, useState } from "react";
import { useToast } from "../context/ToastProvider";
import adminFetch from "../axiosbase/interceptors";

export const useAdminFetch = (url) => {
  const toast = useToast();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await adminFetch(url);
      if (response.data) {
        setLoading(false);
        setData(response.data);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.response?.data.msg || error.message);
    }
  };

  useEffect(() => {
    if (!url) return; // 🚀 Stop execution if URL is null or empty
    getData();
  }, [url]);
  return { data, loading };
};
