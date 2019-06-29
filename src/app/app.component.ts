import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  thisVsLet = `let can be declared locally and can be accessible  inside the scope it's declared.

  For example if I am using a for loop and I need to declare i value then I can use  "let i = 0" to use i value inside the loop i value is not accessible out side the looop.
  For (let i = 0; i< this.samplearraylength; i++){ }
  
  This can be accessible any where in current component, if we want to use any variable outside the scope. That means if we declare the variable public we can access that variable any where in the perticular class.
  Consider the above example here sampleArray  is a array type object which is declared publically and we can access that  array here inside the for loop.`
  json = {
    a: 5,
    b: {
      c: {
        d: 10,
        e: {
          f: {
            g: {
              h: {
                ok: 10
              }
            }
          }
        }
      }
    }
  }

  keys = "";
  reverseOfString: string;
  reverse: any;

  countMaxCharacters() {
    var counts = {};
    var array = ['hello world', 'hello world'];
    let value = array.join("");
    var ch: string, index: number, len: number, count: number;
    for (index = 0, len = value.length; index < len; ++index) {
      ch = value.charAt(index);
      count = counts[ch];
      counts[ch] = count ? count + 1 : 1;
    }
    for (ch in counts) {
      console.log(ch + " count: " + counts[ch]);
    }
  }

  getKeys(jsonData: any) {
    for (let i in jsonData) {
      this.keys = this.keys + " " + i + " "
      if (jsonData[i]) {
        this.getKeys(jsonData[i]);
      }
      else {
        return {};
      }
    }
  }
  private reverseStringUsingReverse(str: string) {
    return str.split("").reverse().join("");
  }
  private reverseStringUsingRecursion(str: string) {
    if (str === "")
      return "";
    else
      return this.reverseStringUsingRecursion(str.substr(1)) + str.charAt(0);
  }
  reverseTheString(isUsingReverse: boolean, value) {
    if (isUsingReverse) {
      this.reverse = "Using reverse method:" + this.reverseStringUsingReverse(value);
    } else {
      this.reverse = "Using recusrion method:" + this.reverseStringUsingRecursion(value);
    }
  }

  getUnique() {
    var names = ["Roma", "Sumita", "Sachin", "Karan", "Karan", "Sumita", "Roma", "Alice", "Rob", "Alice"];
    let array = names;
    var uniqueArray = [];
    for (var value of array) {
      if (uniqueArray.indexOf(value) === -1) {
        uniqueArray.push(value);
      }
    }
    console.log(uniqueArray);
    return uniqueArray;
  }

}
