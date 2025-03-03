import { useEffect, useState } from "react";
import { useToast } from "../context/ToastProvider";
import authFetch from "../axiosbase/custom";

export const useFetch = (url) => {
  const toast = useToast();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await authFetch(url);
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
    getData();
  }, [url]);
  return { data, loading };
};
