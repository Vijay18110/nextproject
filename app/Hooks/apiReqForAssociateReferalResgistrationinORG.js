import { useState, useRef } from "react";

import { toast } from "react-toastify";
import ApiEncryptDecrypt from "../Utils/Encryption";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiAction } from "../Redux/Slices/uiSlice";
import store from "../Redux/Store";
import axiosInstance from "../Utils/axiosInstanceForAssoReferalRegiInOrg";
const Key = import.meta.env.VITE_Encryption_Decryption_Key;
const useApiRequest = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { appType } = store.getState().uiReducers;
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const lastRequest = useRef({}); // 🔁 store last request
  const sendApiRequest = async (
    method,
    url,
    data = null,
    { onSuccess, onStatus3, onError, showToast = false,
    } = {}
  ) => {
    if (loading) {
      return;
    }
    setLoading(true);
    setError(null);
    setResponse(null);
    // 🔁 Save for recall
    lastRequest.current = {
      method,
      url,
      data,
      options: { onSuccess, onStatus3, showToast, navigate },
    };
    try {
      console.log("from org", url, data);
      const encryptedData = await ApiEncryptDecrypt.encryptString(
        Key,
        JSON.stringify({ ...data })
      );
      const jsonData = { Body: encryptedData };
      let res;
      if (method === "POST") {
        res = await axiosInstance.post(url, jsonData);
      } else if (method === "GET") {
        const params = new URLSearchParams(data).toString();
        res = await axiosInstance.get(`${url}?${params}`);
      } else {
        throw new Error("Unsupported HTTP method");
      }
      const decrypted = await ApiEncryptDecrypt.decryptString(
        Key,
        res.data.body
      );
      const result = JSON.parse(decrypted);
      setResponse(result.Response);
      console.log("data " + appType, data)
      console.log(url, result)
      setStatus(result.Status);
      if (result.Status === 0) {
        // console.log(result)
        showToast && toast.success(result.Message, {
          toastId: "success"
        });
        onSuccess?.(result);
      } else if (result.Status === 1) {
        onError?.()
        toast.error(result.Message, {
          toastId: "error",
        });
        setError(result.Message);
      } else if (result.Status === 3) {
        onStatus3?.(result);
        // sessionStorage.removeItem("loggedInUser");
        sessionStorage.clear();
        dispatch(uiAction.updateAppType("Business"));
        navigate("/login")
        toast.error(result.Message, {
          toastId: "error1",
        });
      }
    } catch (err) {
      console.error("API error:", err);
      toast.error(err?.message || "Something went wrong.", {
        toastId: "error1",
      });
      onError?.()
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  // 🔁 Function to recall the last API request
  const recallRequest = () => {
    const { method, url, data, options } = lastRequest.current || {};
    if (method && url) {
      sendApiRequest(method, url, data, options);
    } else {
      console.warn("No previous API call to recall.");
    }
  };
  return {
    loading,
    response,
    error,
    status,
    sendApiRequest,
    recallRequest, // <-- exposed here
  };
};

export default useApiRequest;
