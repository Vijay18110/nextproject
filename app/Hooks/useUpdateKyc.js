// hooks/useUpdateKyc.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axiosInstance from "../Utils/axiosInstance";
import ApiEncryptDecrypt from "../Utils/Encryption";
const Key = import.meta.env.VITE_Encryption_Decryption_Key;
const useUpdateKyc = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const updateKyc = async ({ payload, Key, setEditMode }) => {
        setLoading(true);
        try {
            const encryptedData = await ApiEncryptDecrypt.encryptString(
                Key,
                JSON.stringify(payload)
            );

            const formdata = new FormData();
            formdata.append("Body", encryptedData);

            const result = await axiosInstance.post(
                "/UpdateMyKycDetails",
                formdata,
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );

            const decryptedRes = await ApiEncryptDecrypt.decryptString(
                Key,
                result.data.body
            );
            const obj = JSON.parse(decryptedRes);

            if (obj.Status === 1 && obj.Response === null) {
                toast.error(obj.Message);
            }

            if (obj.Status === 0) {
                dispatch(fetchKycDetails());
                toast.success(obj.Message);
                if (setEditMode) setEditMode(false);
            }
            if (obj.Status === 3) {
                navigate('/login')
                sessionStorage.clear();
                dispatch(uiAction.updateAppType("Business"));
            }
        } catch (error) {
            console.error("Update KYC failed:", error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return { updateKyc, loading };
};

export default useUpdateKyc;
