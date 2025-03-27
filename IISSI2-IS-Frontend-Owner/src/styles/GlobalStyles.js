import { DefaultTheme } from '@react-navigation/native';

const brandPrimary = '#be0f2e'; // Granate US. rgba(190,15,46,255)
const brandPrimaryTap = '#AA001A'; // Granate US más oscuro
const brandSecondary = '#feca1b'; // Amarillo US.rgba(254,202,27,255)
const brandSecondaryTap = '#EAB607'; // Amarillo US más oscuro
const brandSuccess = '#95be05'; // Verde US
const brandBackground = 'rgb(242, 242, 242)'; // Gris claro

const navigationTheme = {
  ...DefaultTheme, // Asegura que se incluyen todas las propiedades necesarias
  colors: {
    ...DefaultTheme.colors, // Mantiene los colores por defecto y los sobrescribe
    primary: brandSecondary,
    background: brandBackground,
    card: brandPrimary,
    text: '#ffffff',
    border: `${brandPrimary}99`,
    notification: `${brandSecondaryTap}ff`, // Badge
  },
};

export {
  brandPrimary,
  brandPrimaryTap,
  brandSecondary,
  brandSecondaryTap,
  brandSuccess,
  brandBackground,
  navigationTheme,
};
