import { useState, useEffect } from 'react';
import { toast } from 'react-toastify'; // Assuming you're using toast notifications
import { useNavigate } from 'react-router-dom';
import ApiEncryptDecrypt from '../Utils/Encryption';
import axiosInstance from '../Utils/axiosInstance';
import { useDispatch } from 'react-redux';
const Key = import.meta.env.VITE_Encryption_Decryption_Key;
export function useGetDropDownData(flag, value) {
    const [dropData, setDropData] = useState([]);
    const [loading, setLoading] = useState(true); // Optional: to handle loading state
    const [error, setError] = useState(null);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const getLoggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
                if (getLoggedInUser) {
                    const data = {
                        Fk_CustomerId: getLoggedInUser.AutoID,
                        LoginToken: getLoggedInUser.LoginToken,
                        AppVersion: getLoggedInUser?.AppVersion,
                        DeviceType: "Web",
                        Flag: flag,
                        Value: value
                    };

                    const encryptedData = await ApiEncryptDecrypt.encryptString(Key, JSON.stringify(data));
                    const jsonData = { Body: encryptedData };
                    const res = await axiosInstance.post("/DropDownData", jsonData);
                    const decryptedRes = await ApiEncryptDecrypt.decryptString(Key, res.data.body);
                    const obj = JSON.parse(decryptedRes);
                    // console.log(encryptedData)
                    console.log("apiCalled", obj)
                    console.log(data)
                    if (!obj.Status) {
                        setDropData(obj.Response.dropDownData);
                        // console.log(obj.Response.dropDownData?.slice(1))
                    }
                    if (obj.Status === 3) {
                        navigate('/login')
                        dispatch(uiAction.updateAppType("Business"));
                        sessionStorage.clear();
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
