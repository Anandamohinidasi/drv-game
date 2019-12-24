import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'derivco-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
@ViewChild('reel1', {static: false}) reel1;
@ViewChild('reel2', {static: false}) reel2;
@ViewChild('reel3', {static: false}) reel3;

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

private startSpinning() {  
  this.spinReel(this.reel1, 2000);
  this.spinReel(this.reel2, 2500);
  this.spinReel(this.reel3, 3000);
}

private async spinReel(reel, time) {
  const visibilityMap = {
    '240' : 'visible',
    '-120' : 'hidden',
    '360' : 'hidden'
  };
  const initialPCherry = this.getSimbolPosition(reel, 4);
  const initialPSeven = this.getSimbolPosition(reel, 3);
  const initialPTwoBar = this.getSimbolPosition(reel, 2);
  const initialPBar = this.getSimbolPosition(reel, 1);
  const initialPThreeBar = this.getSimbolPosition(reel, 0);
  const interval = setInterval(()=>{
    Array.from(reel.nativeElement.childNodes)
    .map(child => {
      const yTranslated = new WebKitCSSMatrix(window.getComputedStyle(child).webkitTransform);
      const translationMap = {
        '-240' : 360,
        default : yTranslated.f - 10
      }
      if(yTranslated.f - 10 == -240) child.style.transform = `translateY(360px)`;
      else child.style.transform = `translateY(${yTranslated.f - 10}px)`;
        child.style.visibility = visibilityMap[yTranslated.f - 10];
        return child;
    })
  }, this.getNeededVelocity(initialPCherry, 240, 10, time));
  setTimeout(function() {
    clearInterval(interval);
  }.bind(this), time);
}

private getNeededVelocity(startingPoint, desiredFinalPoint, stepSize, cicleDuration): number {
  console.log('actual position', startingPoint);
  console.log('desired final position', desiredFinalPoint);
  
  const totalCicleVelocity =  (desiredFinalPoint - startingPoint) / cicleDuration;
  console.log('velocity to achieve desired ',totalCicleVelocity);
  const intervalTime = stepSize / Math.abs(totalCicleVelocity);
  console.log('tempo proposto ', intervalTime);
  
  return intervalTime;
}

private getSimbolPosition(parent, childIndex): number {
  const element = parent.nativeElement.childNodes[childIndex];
  const elementPositionMatrix = new WebKitCSSMatrix(window.getComputedStyle(element).webkitTransform);
  return elementPositionMatrix.f
}

public startReel() {
  console.log('there we go champion!');
  if (this.balance > 0) {
    this.armClicked = true;
    setTimeout(()=> this.armClicked = false, 500)
    //this.reelSpinning = true;
    this.startSpinning();
    this.balance--
  }
}


ngOnInit() {
// setInterval(() => this.nextButton(), 500); 
}

}
