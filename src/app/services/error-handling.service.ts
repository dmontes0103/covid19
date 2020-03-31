import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  public static get STACK_OFLW ():string{
    return 'https://stackoverflow.com/search?q=';
  }

  constructor() { }

  redirectToSolution(error: string):void{
    (window as any).open(ErrorHandlingService.STACK_OFLW + encodeURI(error), "_blank");
  }

}
