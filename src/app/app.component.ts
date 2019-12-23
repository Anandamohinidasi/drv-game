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
 public armClicked = false;
 public reelSpinning = false;
 public balance = 10;
 public winningLine = {
  cherryFirst: false,
  cherrySecond: false,
  cherryLast: false,
  threeSeven: false,
  sevenCherryComb: false,
  threeTimesThreeBarAny: false,
  threeTimesTwoBarAny: false,
  threeTimesSingleBar: false,
  anyBarComb: false
 }

public nextButton() {
 this.selectedIndex++;
 let angle = this.selectedIndex / this.cellCount * 360;
 this.rotationStyle = {'transform' : `rotateX(${angle}deg)`};  
};

public startReel() {
  console.log('there we go champion!');
  if (this.balance > 0) {
    this.armClicked = true;
    setTimeout(()=> this.armClicked = false, 500)
    this.reelSpinning = true;
    this.balance--
  }
}

ngOnInit() {
// setInterval(() => this.nextButton(), 500); 
}

}
