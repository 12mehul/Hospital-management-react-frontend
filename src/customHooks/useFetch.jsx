import { useEffect, useState } from "react";
import { useToast } from "../context/ToastProvider";
import authFetch from "../axiosbase/custom";

export const useFetch = (url) => {
  const toast = useToast();
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const response = await authFetch(url);
      setData(response.data);
    } catch (error) {
      toast.error(error.response?.data.msg || error.message);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);
  return { data };
};
