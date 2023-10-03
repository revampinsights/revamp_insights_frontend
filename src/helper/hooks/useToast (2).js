import { useContext } from "react";
import { ToastContext } from "../context/toast_context";

export const useToast = () => {
    return useContext(ToastContext);
};
