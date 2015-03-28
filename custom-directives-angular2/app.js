import {Component, Template} from 'angular2/angular2';
import {bootstrap} from 'angular2/angular2';
import {OptionBox} from 'optionBox';    
import {Item} from 'item';

@Component({
    selector: 'app'
})
@Template({
  url: 'app.html',
  directives: [OptionBox, Item]
})
class App {

    versandart = "<nicht gewählt>";

    changed(art) {
        this.versandart = art;
    }
  
}

bootstrap(App);

