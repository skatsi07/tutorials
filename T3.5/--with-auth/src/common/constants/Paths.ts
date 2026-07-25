import jetPaths from 'jet-paths';

const Paths = {
  _: '/api',
  Users: {
    _: '/users',
    Get: '/all',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:id',
  },
  Calculator: {
    _: '/calculator',
    Add: '/add',
    Subtract: '/subtract',
    Multiply: '/multiply',
    Divide: '/divide',
  },
} as const;

export const JetPaths = jetPaths(Paths);
export default Paths;
