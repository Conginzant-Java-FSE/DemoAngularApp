import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem("token")

  if(token){
    console.log(token);
    const modReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    return next(modReq);
  }
  return next(req);
  
};
