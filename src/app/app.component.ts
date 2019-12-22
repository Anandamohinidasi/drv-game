import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'derivco-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 public rotationStyle = {'transform' :'translateZ(-288px) rotateX(60deg)'};
 public cellCount = 5;
 public selectedIndex = 1;

public nextButton() {
  //console.log(this.selectedIndex, this.cellCount);
 this.selectedIndex++;
 let angle = this.selectedIndex / this.cellCount * 360;
 this.rotationStyle = {'transform' : `rotateX(${angle}deg)`};  
console.log(this.rotationStyle);

};

ngOnInit() {
// setInterval(() => this.nextButton(), 500); 
}

}
