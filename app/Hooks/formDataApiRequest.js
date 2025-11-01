import { useState, useRef } from "react";

import { toast } from "react-toastify";
import axiosInstance from "../Utils/axiosInstance";
import ApiEncryptDecrypt from "../Utils/Encryption";
const Key = import.meta.env.VITE_Encryption_Decryption_Key;
const useFormDataApiRequest = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const lastRequest = useRef({}); // 🔁 store last request
  const sendApiRequest = async (
    method,
    url,
    data = null,
    selectedFiles = {},
    fileName = "",
    { onSuccess, onStatus3, showToast = false, navigate = null } = {}
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
      selectedFiles,
      fileName,
      options: { onSuccess, onStatus3, showToast, navigate },
    };
    try {
      const formData = new FormData();

      if (selectedFiles.length > 0) {
        Array.from(selectedFiles).forEach((file) => {
          formData.append(fileName, file);
        });
      } else {
        formData.append(fileName, selectedFiles);
      }

      const encryptedData = await ApiEncryptDecrypt.encryptString(
        Key,
        JSON.stringify({ ...data })
      );
      formData.append("Body", encryptedData);
      let res;
      if (method === "POST") {
        res = await axiosInstance.post(url, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
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

      setStatus(result.Status);
      console.log("payload", data)
      console.log("result", result)
      if (result.Status === 0) {
        formData.get("BanlFile");
        showToast &&
          toast.success(result.Message, {
            toastId: "success",
          });
        onSuccess?.(result);
      } else if (result.Status === 1) {
        toast.error(result.Message, {
          toastId: "error",
        });
        setError(result.Message);
      } else if (result.Status === 3) {
        onStatus3?.(result);
      } else if (result.Status === 2) {
        toast.error(result.Message, { toastId: "errofdr" });
      }
    } catch (err) {
      console.error("API error:", err);
      toast.error(err?.message || "Something went wrong.", {
        toastId: "error1",
      });
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

export default useFormDataApiRequest;
