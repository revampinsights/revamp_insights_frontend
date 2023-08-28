import styled from 'styled-components';
import PropTypes from 'prop-types';

const MODES = {
    success: { textColor: '#FFFFFF', bgColor: '#4CAF50' },
    error: { textColor: '#FFFFFF', bgColor: '#F44336' },
    warning: { textColor: '#FFFFFF', bgColor: '#FFC107' },
    info: { textColor: '#FFFFFF', bgColor: '#2196F3' },
}

const _Toast = styled.div`
    @keyframes slideIn {
        0% {
        opacity: 0;
        transform: translateX(100%);
        }
        100% {
        opacity: 1;
        transform: translateX(0);
        }
    }

    @keyframes slideOut {
        0% {
        opacity: 1;
        transform: translateX(0);
        }
        100% {
        opacity: 0;
        transform: translateX(100%);
        }
    }

    position: fixed;
    bottom: 1rem;
    right: 1rem;
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 16px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    animation-duration: 0.5s;
    animation-fill-mode: both;

    &.slide-in {
        animation-name: slideIn;
    }

    &.slide-out {
        animation-name: slideOut;
    }

    color: ${({ mode }) => MODES[mode]?.textColor };
    background-color: ${({ mode }) => MODES[mode]?.bgColor};
`;

const Toast = ({ mode, message, animation, onAnimationEnd }) => {
    return (
        <_Toast
            className={`slide-${animation}`}
            mode={mode}
            onAnimationEnd={onAnimationEnd}
        >{message}</_Toast>
    );
}

Toast.propTypes = {
    mode: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    animation: PropTypes.string.isRequired,
    onAnimationEnd: PropTypes.func || undefined
}

export default Toast;