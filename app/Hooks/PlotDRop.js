import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../Utils/axiosInstance";
import ApiEncryptDecrypt from "../Utils/Encryption";
const Key = import.meta.env.VITE_Encryption_Decryption_Key;

export function useGetDropDownDataOFPLOT(flag, value) {
  const navigate = useNavigate();
  const [dropData, setDropData] = useState([]);
  const [loading, setLoading] = useState(true); // Optional: to handle loading state
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getLoggedInUser = JSON.parse(
          sessionStorage.getItem("loggedInUser")
        );
        if (getLoggedInUser) {
          const data = {
            AutoId: getLoggedInUser.AutoID,
            LoginToken: getLoggedInUser.LoginToken,
            AppVersion: JSON.parse(sessionStorage.getItem("loggedInUser"))?.AppVersion,
            DeviceType: "Web",
            Flag: flag,
            value: value || "",
          };
          console.log(data)
          const encryptedData = await ApiEncryptDecrypt.encryptString(
            Key,
            JSON.stringify(data)
          );
          const jsonData = { Body: encryptedData };
          const res = await axiosInstance.post("/GetProjectBlockDDL", jsonData);
          const decryptedRes = await ApiEncryptDecrypt.decryptString(
            Key,
            res.data.body
          );
          const obj = JSON.parse(decryptedRes);

          if (!obj.Status) {
            setDropData(obj.Response.dropDownData);
          }
          if (obj.Status === 3) {
            navigate("/login");
          }
        }
      } catch (error) {
        console.log(error);
        setError(error); // Set the error if one occurs
      } finally {
        setLoading(false); // Optionally, set loading to false when finished
      }
    };
    fetchData();
  }, [flag, value]); // Re-run the effect when the 'flag' changes

  return { dropData, loading, error }; // Return the dropData, loading state, and any error
}
