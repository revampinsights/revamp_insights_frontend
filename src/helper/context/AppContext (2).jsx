import { createContext } from "react";
import PropTypes from 'prop-types';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    // create states that you want to manage here
    return (
    <AppContext.Provider 
        value={{ 
        // states
        }}>
        {children}
    </AppContext.Provider>
    );
};

AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}
