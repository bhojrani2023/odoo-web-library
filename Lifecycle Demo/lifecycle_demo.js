/*
Consider all the possible lifecycle hooks: 
[
    The root component controls a sub component (DemoComponent). 
    It logs all its lifecycle methods in the console. 
    Try modifying its state by clicking on it, or by clicking on 2 main buttons, 
    and look into the console to see what happens.  
]
*/

import {
    Component, 
    useState, 
    mount, 
    useComponent, 
    onWillStart, 
    onMounted, 
    onWillUnmount, 
    onWillUpdateProps, 
    onPatched, 
    onWillPatch, 
    onWillRender, 
    onRendered, 
    onWillDestroy, 
} from "@odoo/owl"; 


function useLogLifecycle() {
    const component = useComponent(); 
    const name = component.constructor.name; 
    
    onWillStart(() => console.log(`${name}:willStart`)); 
    onMounted(() => console.log(`${name}:Mounted`)); 
    onWillUnmount(() => console.log(`${name}:Mounted`)); // need to check for this 
    onWillUpdateProps(() => console.log(`${name}:WillUpdateProps`)); 
    onPatched(() => console.log(`${name}:Patched`)); 
    onWillPatch(() => console.log(`${name}:WillPatch`)); 
    onWillRender(() => console.log(`${name}:WillRender`)); 
    onRendered(() => console.log(`${name}:Rendered`)); 
    onWillDestroy(() => console.log(`${name}:willDestroy`)); 

}

class DemoComponent extends Component {
    static template = "DemoComponent"; 

    setup(){
        useLogLifecycle(); 
        this.state = useState({ n: 0}); 
    }

    increment(){
        this.state.n++; 
    }

    toggleSubComponent(){
        this.state.flag = !this.state.flag; 
    }
}

mount(Root, document.body, { templates: TEMPLATES, dev: true}); 

