export const lightPrimary = `#8cdbd6`;
export const darkPrimary = `#4a8c88`;
export const lightSecondary = `#f03f41`;

export const BISCUIT_SIZE = 50;
export const COLLAPSED_MENU_HEIGHT = 50;
export const BOARD_MAX_WIDTH = 600;
export const BOARD_WIDTH =
  window.innerWidth > BOARD_MAX_WIDTH
    ? BOARD_MAX_WIDTH - 60
    : window.innerWidth - (BISCUIT_SIZE + 10);
