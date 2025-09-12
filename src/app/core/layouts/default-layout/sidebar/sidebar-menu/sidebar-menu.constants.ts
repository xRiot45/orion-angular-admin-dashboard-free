import { NavGroup } from '@shared/types/nav.types';

export const NAV_ITEMS: NavGroup[] = [
  {
    groupTitle: 'MENU',
    items: [
      {
        title: 'Dashboard',
        icon: 'material-symbols:dashboard-outline-rounded',
        route: '/',
      },
      {
        title: 'Authentication',
        icon: 'material-symbols:security',
        children: [
          { title: 'Login', route: '/auth/login' },
          { title: 'Register', route: '/auth/register' },
        ],
      },
      {
        title: 'Pages',
        icon: 'material-symbols:description',
        children: [
          { title: 'Error 401', route: '/error/401' },
          { title: 'Error 404', route: '/error/404' },
          { title: 'Error 500', route: '/error/500' },
        ],
      },
      {
        title: 'Tables',
        icon: 'mdi:table-large',
        route: '/tables',
        children: [
          { title: 'Basic Table', route: '/tables/basic' },
          { title: 'Data Table', route: '/tables/data' },
        ],
      },
    ],
  },
  {
    groupTitle: 'OTHERS',
    items: [
      {
        title: 'UI Elements',
        icon: 'mdi:palette',
        route: '#',
        children: [
          // A
          { title: 'Accordion', route: '/ui-elements/accordion' },
          { title: 'Alert', route: '/ui-elements/alert' },
          { title: 'Alert Dialog', route: '/ui-elements/alert-dialog' },
          { title: 'Avatar', route: '/ui-elements/avatar' },

          // B
          { title: 'Badge', route: '/ui-elements/badge' },
          { title: 'Breadcrumb', route: '/ui-elements/breadcrumb' },
          { title: 'Button', route: '/ui-elements/button' },

          // C
          { title: 'Calendar', route: '/ui-elements/calendar' },
          { title: 'Card', route: '/components/card' },
          { title: 'Carousel', route: '/ui-elements/carousel' },
          { title: 'Checkbox', route: '/ui-elements/checkbox' },
          { title: 'Combobox', route: '/ui-elements/combobox' },
          { title: 'Command', route: '/ui-elements/command' },

          // D
          { title: 'Date Picker', route: '/ui-elements/datepicker' },
          { title: 'Dialog', route: '/ui-elements/dialog' },
          { title: 'Divider', route: '/ui-elements/divider' },
          { title: 'Dropdown', route: '/ui-elements/dropdown' },

          // F
          { title: 'Form', route: '/components/form' },

          // I
          { title: 'Input', route: '/ui-elements/input' },

          // L
          { title: 'Loader', route: '/ui-elements/loader' },

          // M
          { title: 'Menu', route: '/ui-elements/menu' },

          // P
          { title: 'Pagination', route: '/ui-elements/pagination' },
          { title: 'Popover', route: '/ui-elements/popover' },
          { title: 'Progress Bar', route: '/ui-elements/progress-bar' },

          // R
          { title: 'Radio', route: '/ui-elements/radio' },
          { title: 'Resizable', route: '/ui-elements/resizable' },
          { title: 'Rating', route: '/ui-elements/rating' },

          // S
          { title: 'Select', route: '/ui-elements/select' },
          { title: 'Skeleton', route: '/ui-elements/skeleton' },
          { title: 'Slider', route: '/ui-elements/slider' },
          { title: 'Switch', route: '/ui-elements/switch' },

          // T
          { title: 'Tabs', route: '/ui-elements/tabs' },
          { title: 'Toast', route: '/ui-elements/toast' },
          { title: 'Toggle', route: '/ui-elements/toggle' },
          { title: 'Toogle Group', route: '/ui-elements/toggle-group' },
          { title: 'Tooltip', route: '/ui-elements/tooltip' },
        ],
      },
      { title: 'Basic Charts', icon: 'mdi:chart-bar', route: '/charts/basic' },
      { title: 'FAQ', icon: 'mdi:help-circle-outline', route: '/faq' },
    ],
  },
];
