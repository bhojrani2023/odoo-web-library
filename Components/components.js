//Learn how components can be defined and created. 

import { Component, useState, mount} from "@odoo/owl"; 

class Greener extends Component {
    static template = "Greener"; 

    setup(){
        this.state = useState({ word: 'Hello'})
    }
}