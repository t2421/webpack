import subFunc from './sub';
import jquery from 'jquery';
import Greeter from './Test'
export function main(){
    subFunc();
    var greet = new Greeter("hello");
    greet.greet();
}