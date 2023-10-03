import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Toast from "../../components/Toast/Toast";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const show = (message, mode = 'info') => {
        setToasts([...toasts, { message, mode, animation: 'in', id: Date.now() }]);
    };

    const removeToast = (id) => {
        setToasts(toasts.filter((toast) => toast.id !== id));
    };

    useEffect(() => {
        if (toasts.length === 0) {
            return;
        }

        const timer = setTimeout(() => {
            setToasts((prevToasts) =>
                prevToasts.map((toast) => ({
                    ...toast,
                    animation: 'out',
                    onAnimationEnd: () => removeToast(toast.id),
                }))
            );
        }, 3000); // Trigger slide-out animation after 3 seconds

        return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [toasts]);

    return (
        <ToastContext.Provider value={{ show }}>
            { children }
            <div className="flex flex-col gap-2">
                {toasts.map((toast, index) => (
                    <Toast
                        key={index}
                        mode={toast.mode}
                        message={toast.message}
                        animation={toast.animation}
                        onAnimationEnd={toast.onAnimationEnd}
                    />
                ))}
            </div>
        </ToastContext.Provider>
    );
};

ToastProvider.propTypes = {
    children: PropTypes.node.isRequired
}
