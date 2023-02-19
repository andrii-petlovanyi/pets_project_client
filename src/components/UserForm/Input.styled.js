import { styled } from '@mui/system';

export const FormInputStyled = styled('input')(({ theme }) => ({
  paddingTop: 4,
  paddingBottom: 4,
  paddingLeft: 12,
  width: 216,
  height: 32,
  border: '1px solid',
  borderColor: theme.palette.custom.subTitle,
  backgroundColor: theme.palette.primary.background,
  borderRadius: 40,
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: 18,
  lineHeight: 1.4,
}));
