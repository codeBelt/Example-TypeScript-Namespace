///<reference path='CommonComponent.ts'/>

module namespace1 {
    import CommonComponent = anothernamespace.CommonComponent;

    export class ClassTwo {

        private _component:CommonComponent;

        constructor() {
            this._component = new CommonComponent();
        }
    }
}