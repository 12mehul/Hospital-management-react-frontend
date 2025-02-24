import { useEffect, useState } from "react";
import { showErrorToast } from "../toastContainer/Toastify";
import authFetch from "../axiosbase/custom";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const response = await authFetch(url);
      setData(response.data);
    } catch (error) {
      showErrorToast(error.response?.data.msg);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);
  return { data };
};
