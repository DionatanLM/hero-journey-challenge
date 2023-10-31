import { InputBase, styled } from '@mui/material'

export const cardStyles = (boxShadowColor, isSelected) => ({
  width: 176,
  padding: 1,
  backgroundColor: 'transparent',
  boxShadow: `0 0 0px 1px ${boxShadowColor}, 0 0 10px 1px ${boxShadowColor}, inset 0px 0px 10px 0px ${boxShadowColor}`,
  transition: 'all 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    filter: 'brightness(1.04)'
  },
  cursor: 'pointer',
  transform: isSelected ? 'scale(1.05)' : 'scale(1)',
  filter: isSelected && 'brightness(1.2)',

  '&::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 2,
    top: 0,
    left: 0,
    backgroundColor: '#00000059',
    zIndex: 1,
    opacity: isSelected ? 0 : 0.5,
    transition: 'all 0.3s'
  }
})

export const styleBoxShadowColor = total => {
  if (total <= 250) {
    return '#A9A9A9'
  } else if (total > 250 && total <= 350) {
    return '#17c700'
  } else if (total > 350 && total <= 500) {
    return '#9400D3'
  } else if (total > 500 && total <= 550) {
    return '#FF8C00'
  } else {
    return '#FF0000'
  }
}

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '230px',
    [theme.breakpoints.up('sm')]: {
      width: '26ch',
      '&:focus': {
        width: '30ch'
      }
    }
  }
}))
export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#ffffff24',
  '&:hover': {
    filter: 'brightness(1.1)'
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  }
}))
