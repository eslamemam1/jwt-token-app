import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  //debugger;
  const token = localStorage.getItem('token');
  const colonedReq = req.clone({
    setHeaders: {
      authorization: `Bearer ${token}`,
    },
  });
  return next(colonedReq);
};
