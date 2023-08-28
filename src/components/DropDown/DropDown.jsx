import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DDWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  border-radius: 5px;
  border: 0.5px solid ${({ borderColor }) => borderColor || '#00071466'};
  color: ${({ color }) => color || '#000'};
  background-color: ${({ bgcolor }) => bgcolor || '#fff'};
  padding: calc(.2rem + .6vmin) calc(.3rem + .7vmin);
  font-size: calc(.5rem + .5vmin);
  font-weight: bold;
  position: relative;
`;

const DropDown = ({ children, style = {}, items = [], multiple = false }) => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState([]);
  const dropdownRef = useRef(null);

  const selectItem = (item) => {
    if (multiple) {
      const updatedSelection = selected.includes(item)
        ? selected.filter((selectedItem) => selectedItem !== item)
        : [...selected, item];

      setSelected(updatedSelection);
    } else {
      const newSelected = selected.length > 0 && selected[0] === item ? [] : [item];
      setSelected(newSelected);
      setActive(false);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <DDWrapper {...style} ref={dropdownRef}>
      <div className="flex items-center gap-2" onClick={() => setActive(!active)}>
        {children}
        <i className={`fa-solid fa-chevron-${active ? 'up' : 'down'}`}></i>
      </div>
      {active && items.length > 0 && (
        <div className="flex flex-col absolute z-10 min-w-[8rem] max-w-[12rem] mt-1 max-h-44 cursor-default bg-white left-0 top-full overflow-y-auto border rounded">
          {items.map((item, idx) => (
            <span
              className={`flex items-center justify-between gap-2 border-b p-2 hover:bg-[#0959fec] hover:text-gray-800 cursor-pointer ${
                selected.includes(item) ? 'text-[#0959FE] font-bold' : 'font-medium'
              }`}
              key={`dd_menu_${idx}`}
              onClick={() => selectItem(item)}
            >
              <span>{item}</span>
              {selected.includes(item) && <i className="fa-solid fa-check"></i>}
            </span>
          ))}
        </div>
      )}
    </DDWrapper>
  );
};

DropDown.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  items: PropTypes.array,
  multiple: PropTypes.bool,
};

export default DropDown;
