
export const version = '1.0.1';
export const navbarBreakPoint = 'xl'; // Vertical navbar breakpoint
export const topNavbarBreakpoint = 'lg';
export const settings = {
  email: '', 
  currentUser: false,
  token: false,
  isFluid: false,
  isRTL: false,
  isDark: false,
  isTopNav: true,
  isVertical: false,
  get isCombo() {
    return this.isVertical && this.isTopNav;
  },
  showBurgerMenu: false, // controls showing vertical nav on mobile
  currency: '$',
  isNavbarVerticalCollapsed: false,
  navbarStyle: 'transparent'
};
export default { version, navbarBreakPoint, topNavbarBreakpoint, settings };
