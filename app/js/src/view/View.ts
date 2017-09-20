export abstract class View<T> {
    
    private elem: Element;
    
    constructor(selector: string) {

        this.elem = <Element>document.querySelector(selector);
    }

    update(model: T): void {

        this.elem.innerHTML = this.template(model);
    }

    abstract template(model: T): string;
}