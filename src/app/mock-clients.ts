import { Client } from './client';
import { Link } from './link';

export const CLIENTS: Client[] = [
  {id: 11, name: 'Viber'},
  {id: 12, name: 'Priceminister'},
  {id: 13, name: 'Rakuten TV'},
  {id: 14, name: 'Travel'},
  {id: 15, name: 'Affiliate Mall'}
];

export const LINKS: Link[] = [
  {id: 1, name: 'Clients', url: '/clients'},
  {id: 2, name: 'User', url: '/users'},
  {id: 3, name: 'UI Customisation', url: '#'},
  {id: 4, name: 'Roles & Privileges', url: '/clients'},
  // {id: 5, name: 'Clients', url: '/clients'},
  // {id: 6, name: 'Clients', url: '/clients'}
]
