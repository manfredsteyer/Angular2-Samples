import {Component, Decorator, Template, If} from 'angular2/angular2';
import {EventEmitter} from 'angular2/src/core/annotations/events';
import {Item} from 'item';

/*
@Decorator({
    selector: 'optionbox',
    bind: {
        'selected': 'selected'
    }
})
*/
@Component({
    selector: 'optionbox',
    bind: {
        'selected': 'selected'
    }
})
@Template({
    inline: '<content></content>'
})
export class OptionBox {

    options: Array<Option> = [];
    selected;
    changed;

    constructor(@EventEmitter('changed') changed: Function) {
        this.changed = changed;
    }
    
    registerOption(option: Item) {
        this.options.push(option);
    }

    select(option: Item) {
        
        this.selected = option.value;
        
        this.changed();
        
        for (let o of this.options) {
            o.selected = (option == o);   
        }
    }
    
}

