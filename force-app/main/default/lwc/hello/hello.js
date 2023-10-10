import { LightningElement } from 'lwc';

export default class Hello extends LightningElement {

    property='';
    eventHandler(event){

        this.property=event.target.value;
    }
}