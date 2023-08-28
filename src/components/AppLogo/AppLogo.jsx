import PropTypes from 'prop-types';
import ColoredLogo from '../../assets/images/colored-logo.png';
import ColorlessLogo from '../../assets/images/colorless-logo.svg';

const AppLogo = ({ tw_classes=[], colored=true }) => {
    const logoSrc = colored ? ColoredLogo : ColorlessLogo;

    return (
        <span className={`flex items-end font-bold text-current text-2xl ${tw_classes.join(' ')}`}>
            <img src={logoSrc} alt="Revamp Logo" className="w-9 h-11" />
            <span>evamp</span>
        </span>
    );
};

AppLogo.propTypes = {
    tw_classes: PropTypes.array,
    colored: PropTypes.bool,
};

export default AppLogo;