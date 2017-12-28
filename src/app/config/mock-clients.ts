import { Client } from './client';
import { Link } from './link';

export const CLIENTS: Client[] = [
  { serviceUuid: 11, name: 'Viber' },
  { serviceUuid: 12, name: 'Priceminister' },
  { serviceUuid: 13, name: 'Rakuten TV' },
  { serviceUuid: 14, name: 'Travel' },
  { serviceUuid: 15, name: 'Affiliate Mall' }
];

export const LINKS: Link[] = [
  { id: 1, name: 'Clients', url: '/clients' },
  { id: 2, name: 'User', url: '/users' },
  { id: 3, name: 'Bulk Actions', url: '#' },
  { id: 4, name: 'Roles & Privileges', url: '#' },
  { id: 5, name: 'Reports', url: '#' },
  { id: 6, name: 'Approvals', url: '#' }
]
