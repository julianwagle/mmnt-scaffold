
export const homeRoutes = {
  name: 'Home',
  to: '/',
  exact: true,
  icon: 'chart-pie',
  children: [
    { to: '/', name: 'Landing' },
    { to: '/dashboard', name: 'Dashboard', exact: true},
    { to: '/dashboard-alt', name: 'Dashboard alt' },
    { to: '/widgets', name: 'Widgets', exact: true},
    { to: '/starter', name: 'Starter' },

  ]
};

export const authenticationRoutes = {
  name: 'Authentication',
  to: '/authentication',
  icon: 'lock',
  children: [
    {
      to: '/authentication/basic',
      name: '',
      children: [
        { to: '/authentication/basic/login-or-signup', name: 'Sign in (basic)' },
        { to: '/authentication/card/login-or-signup', name: 'Sign in (card)' },
        { to: '/authentication/card/confirm-mail', name: 'Confirm e-mail' }
      ]
    }
  ]
};

export const profileRoutes = {
  name: 'Authentication',
  to: '/authentication',
  icon: 'lock',
  children: [
    {
      to: '/pages',
      name: '',
      children: [
        { to: '/social/profile', name: 'Profile & account' },
        { to: '/social/settings', name: 'Settings' },
        { to: '/authentication/card/log-out', name: 'Sign out' }
      ]
    }
  ]
};

export const ECommerceRoutes = {
  name: 'E commerce',
  to: '/e-commerce',
  icon: 'cart-plus',
  children: [
    { to: '/e-commerce/products/list', name: 'Product list' },
    { to: '/e-commerce/products/grid', name: 'Product grid' },
    { to: '/e-commerce/product-details', name: 'Product details' },
    { to: '/e-commerce/orders', name: 'Orders' },
    { to: '/e-commerce/order-details', name: 'Order details' },
    { to: '/e-commerce/customers', name: 'Customers' },
    { to: '/e-commerce/shopping-cart', name: 'Shopping cart' },
    { to: '/e-commerce/checkout', name: 'Checkout' },
    { to: '/e-commerce/favourite-items', name: 'Favourite items' }
  ]
};

export const socialRoutes = {
  name: 'Social media',
  to: '/socail',
  icon: 'copy',
  children: [
    { to: '/social/activity', name: 'Activity' },
    { to: '/social/associations', name: 'Associations' },
    { to: '/social/chat', name: 'Chat', exact: true },
    { to: '/social/event-detail', name: 'Event detail' },
    { to: '/social/event-create', name: 'Event create' },
    { to: '/social/events', name: 'Events' },
    { to: '/social/feed', name: 'Feed', exact: true },
    { to: '/social/notifications', name: 'Notifications' },
    { to: '/social/people', name: 'People' },
    { to: '/social/profile', name: 'Profile' },
    { to: '/social/settings', name: 'Settings' }
  ]
};

export const billingRoutes = {
  name: 'Billing',
  to: '/billing',
  icon: 'copy',
  children: [
    { to: '/billing/billing', name: 'Billing' },
    { to: '/billing/customer-details', name: 'Customer details' },
    { to: '/billing/invoice', name: 'Invoice' },
    { to: '/billing/pricing', name: 'Pricing' },
    { to: '/billing/pricing-alt', name: 'Pricing alt' },
  ]
};

export const funnelRoutes = {
  name: 'Funnel',
  to: '/funnel',
  icon: 'copy',
  children: [
    { to: '/funnel/faq', name: 'Faq' },
    { to: '/funnel/invite-people', name: 'Invite people' },
  ]
};

export const errorsRoutes = {
      to: '/errors',
      name: 'Errors',
      children: [
        { to: '/errors/404', name: '404' }, 
        { to: '/errors/500', name: '500' }
      ]
}


export const toolsRoutes = {
  name: 'Tools',
  to: '/tools',
  icon: 'copy',
  children: [
    { 
      name: 'Kanban',
      to: '/kanban',
      exact: true,
      icon: ['fab', 'trello']
    },
    {
      name: 'Calendar',
      to: '/calendar',
      exact: true,
      icon: 'calendar-alt'
    }
  ]
};

export const emailRoutes = {
  name: 'E mail',
  to: '/email',
  icon: 'envelope-open',
  children: [
    { to: '/email/inbox', name: 'Inbox' },
    { to: '/email/email-detail', name: 'Email detail' },
    { to: '/email/compose', name: 'Compose' }
  ]
};

export const documentationRoutes = {
  name: 'Documentation',
  to: '/documentation',
  exact: true,
  icon: 'book'
};

export const componentRoutes = {
  name: 'Components',
  to: '/components',
  icon: 'puzzle-piece',
  children: [
    { to: '/components/alerts', name: 'Alerts' },
    { to: '/components/accordions', name: 'Accordions' },
    {
      to: '/components/autocomplete',
      name: 'Autocomplete'
    },
    { to: '/components/avatar', name: 'Avatar' },
    { to: '/components/badges', name: 'Badges' },
    { to: '/components/backgrounds', name: 'Backgrounds' },
    { to: '/components/breadcrumb', name: 'Breadcrumb' },
    { to: '/components/buttons', name: 'Buttons' },
    { to: '/components/cards', name: 'Cards' },
    {
      to: '/components/cookie-notice',
      name: 'Cookie notice'
    },
    { to: '/components/collapses', name: 'Collapses' },
    {
      to: '/components/carousel',
      name: 'Carousel'
    },
    { to: '/components/dropdowns', name: 'Dropdowns' },
    { to: '/components/forms', name: 'Forms' },
    { to: '/components/listgroups', name: 'List groups' },
    { to: '/components/modals', name: 'Modals' },
    { to: '/components/navs', name: 'Navs' },
    {
      to: '/components',
      name: 'Navbar',
      children: [
        { to: '/components/navbars', name: 'Default' },
        {
          to: '/components/navbar-vertical',
          name: 'Vertical'
        },
        {
          to: '/components/navbar-top',
          name: 'Top'
        },
        {
          to: '/components/combo',
          name: 'Combo'
        }
      ]
    },
    { to: '/components/pageheaders', name: 'Page headers' },
    { to: '/components/paginations', name: 'Paginations' },
    { to: '/components/popovers', name: 'Popovers' },
    { to: '/components/progress', name: 'Progress' },
    { to: '/components/sidepanel', name: 'Sidepanel' },
    { to: '/components/spinners', name: 'Spinners' },
    {
      to: '/components/tab',
      name: 'Tabs',
      badge: {
        text: `New`,
        color: 'soft-success'
      }
    },
    { to: '/components/tables', name: 'Tables' },
    { to: '/components/tooltips', name: 'Tooltips' }
  ]
};

export const pluginRoutes = {
  name: 'Plugins',
  to: '/plugins',
  icon: 'plug',
  children: [
    { to: '/plugins/bulk-select', name: 'Bulk select' },
    {
      to: '/plugins/react-beautiful-dnd',
      name: 'Beautiful DnD'
    },
    {
      to: '/plugins',
      name: 'Chart',
      children: [{ to: '/plugins/chart', name: 'Chart Js' }, { to: '/plugins/echarts', name: 'Echarts' }]
    },
    { to: '/plugins/countup', name: 'Countup' },
    { to: '/plugins/code-highlight', name: 'Code Highlight' },
    { to: '/plugins/datetime', name: 'Datetime' },
    { to: '/plugins/dropzone', name: 'Dropzone' },
    { to: '/plugins/emoji-mart', name: 'Emoji Mart' },
    { to: '/plugins/font-awesome', name: 'Font Awesome' },
    {
      to: '/plugins/calendar-example',
      name: 'Full Calendar'
    },
    { to: '/plugins/image-lightbox', name: 'Image lightbox' },
    { to: '/plugins/lottie', name: 'Lottie' },
    {
      to: '/plugins',
      name: 'Map',
      children: [
        { to: '/plugins/leaflet-map', name: 'Leaflet map' },
        { to: '/plugins/google-map', name: 'Google map' },
        { to: '/plugins/echart-map', name: 'Echart Map' }
      ]
    },
    { to: '/plugins/plyr', name: 'Plyr' },
    { to: '/plugins/progressbar', name: 'Progressbar' },
    { to: '/plugins/react-hook-form', name: 'React Hook Form' },
    {
      to: '/plugins/react-bootstrap-table2',
      name: 'BS Table2'
    },
    { to: '/plugins/select', name: 'Select' },
    { to: '/plugins/slick-carousel', name: 'Slick Carousel' },
    { to: '/plugins/scroll-bar', name: 'Scroll Bar' },
    { to: '/plugins/toastify', name: 'Toastify' },
    { to: '/plugins/typed', name: 'Typed' },
    { to: '/plugins/wysiwyg', name: 'WYSIWYG editor' }
  ]
};

export const utilityRoutes = {
  name: 'Utilities',
  to: '/utilities',
  icon: ['fab', 'hotjar'],
  children: [
    { to: '/utilities/borders', name: 'Borders' },
    { to: '/utilities/clearfix', name: 'Clearfix' },
    { to: '/utilities/closeIcon', name: 'Close icon' },
    { to: '/utilities/colors', name: 'Colors' },
    { to: '/utilities/display', name: 'Display' },
    { to: '/utilities/embed', name: 'Embed' },
    { to: '/utilities/figures', name: 'Figures' },
    { to: '/utilities/flex', name: 'Flex' },
    { to: '/utilities/grid', name: 'Grid' },
    { to: '/utilities/sizing', name: 'Sizing' },
    { to: '/utilities/spacing', name: 'Spacing' },
    { to: '/utilities/stretchedLink', name: 'Stretched link' },
    { to: '/utilities/typography', name: 'Typography' },
    { to: '/utilities/verticalAlign', name: 'Vertical align' },
    { to: '/utilities/visibility', name: 'Visibility' }
  ]
};

export default [
  homeRoutes,
  funnelRoutes,
  billingRoutes,
  errorsRoutes,
  socialRoutes,
  toolsRoutes,
  emailRoutes,
  authenticationRoutes,
  profileRoutes,
  ECommerceRoutes,
  componentRoutes,
  utilityRoutes,
  pluginRoutes,
  documentationRoutes,
];
