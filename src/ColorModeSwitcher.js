import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

 const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    
    <IconButton
  
      variant="ghost"
      color="current"
      position={'fixed'}
      right={'4'}
      top={'4'}
      zIndex={'overlay'}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
export default ColorModeSwitcher;