import { NavGroup } from '@shared/types/nav.types';

export const NAV_ITEMS: NavGroup[] = [
  {
    groupTitle: 'MAIN NAVIGATION',
    items: [
      {
        title: 'Dashboard',
        icon: 'material-symbols:dashboard-outline-rounded',
        route: '/dashboard',
      },
      {
        title: 'Profile',
        icon: 'iconamoon:profile-circle-duotone',
        children: [
          { title: 'Profiles' },
          { title: 'Projects' },
          { title: 'Works' },
          { title: 'Teams' },
          { title: 'Network' },
        ],
      },
      {
        title: 'My Account',
        icon: 'mdi:account-outline',
        children: [{ title: 'General' }, { title: 'Security' }, { title: 'Notifications' }],
      },
      {
        title: 'Authentication',
        icon: 'material-symbols:security',
        children: [{ title: 'Login' }, { title: 'Register' }],
      },
    ],
  },
  {
    groupTitle: 'UTILITIES',
    items: [
      { title: 'About', icon: 'mdi:information-outline' },
      { title: 'FAQ', icon: 'mdi:help-circle-outline' },
      { title: 'Tables', icon: 'mdi:table' },
      { title: 'Forms', icon: 'mdi:form-select' },
      { title: 'Charts', icon: 'mdi:chart-bar' },
    ],
  },
  {
    groupTitle: 'BRANDING',
    items: [
      {
        title: 'Upgrade to Premium',
        icon: 'mdi:rocket-launch-outline',
        badge: '🔥 Get access to 20+ extra pages & advanced features with Orion Premium!',
      },
    ],
  },
];
