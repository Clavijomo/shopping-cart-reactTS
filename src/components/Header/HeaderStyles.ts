import { Autocomplete } from "@mui/material";
import styled from "styled-components";

const HeaderStyles = () => {
  const AutoCompleteStyles = styled(Autocomplete)(({}) => ({
    width: "100%",
    backgroundColor: '#ededed',    
  }));

  return {
    AutoCompleteStyles
  }
}

export default HeaderStyles;