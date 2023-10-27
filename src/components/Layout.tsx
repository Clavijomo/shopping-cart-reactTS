import { Stack } from '@mui/material';
import { useState } from 'react';
import dataHeader from '../data/autocompleteData';
import Header from './Header/Header';
import { IPropsOptions } from './Header/IHeader';

const Layout = () => {
  const [options, setOptions] = useState<IPropsOptions[]>(
    dataHeader && dataHeader.length ? dataHeader : []
  );
  
  return (
    <Stack>
      <Header 
        listOptions={options}
        label={'Buscador'}
      />
    </Stack>
  )
}

export default Layout;