import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[tabPanelContent]',
})
export class TabPanelContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
