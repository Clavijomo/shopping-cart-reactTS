import { Autocomplete, Stack, TextField } from '@mui/material';
import { FunctionComponent } from 'react';
import { IHeader } from './IHeader';

const Header:FunctionComponent<IHeader> = ({listOptions, label}) => {  
  return (
    <Stack>
      <Stack>
        <Stack>

        </Stack>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={
            listOptions && listOptions.map((item) => item.name)
          }
          renderInput={(params) => (
            <TextField
            {...params}            
              label={label}
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
      </Stack>
    </Stack>
  )
}

export default Header