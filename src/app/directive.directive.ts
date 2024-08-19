import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective implements OnInit {

  constructor(private el: ElementRef) { }

  @Input("appDirective") backgroundColor!: string

  @HostBinding("class.active") active: boolean = false;
  @HostBinding("style.color") color: string = "";
  @HostBinding("attr.id") id: string = "main"
  @HostBinding("style.backgroundColor") bgColor!: string;

  ngOnInit(): void {
    this.bgColor = this.backgroundColor
  }

  @HostListener("click") mouseClick = () => {
    this.active = true;
    this.color = "brown";
  }

  @HostListener("mouseover") mouseOver = () => {
    this.active = false;
    this.id = "";
  }

  @HostListener("dblclick") onDblclick = () => {
    this.el.nativeElement.remove()
  }

}
