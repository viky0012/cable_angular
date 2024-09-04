import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token=localStorage.getItem('w2d_access_token');
  if(token)
  {
    return true;
  }
  else
  {
    window.location.href = '/login';
    return false; 
  }
};
