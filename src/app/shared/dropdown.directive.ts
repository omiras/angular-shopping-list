import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})


export class DropdownDirective {

    @HostBinding('class.open') openClass = false;
    @HostListener('click', ['$event.target'])
    onClick() {
      this.toggleVisibility();
   }

    private toggleVisibility() {
        this.openClass = !this.openClass;
    }

    constructor(private el:ElementRef, private renderer: Renderer2) { }

}