import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'derivco-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
@ViewChild('reel1', {static: false}) reel1;
@ViewChild('reel2', {static: false}) reel2;
@ViewChild('reel3', {static: false}) reel3;

 public armClicked = false;
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

private startSpinning() {
  const desiredImageForReel1 = 5;
  const desiredImageForReel2 = 1;
  const desiredImageForReel3 = 5;

  const desiredPositionForReel1 = 2;
  const desiredPositionForReel2 = 2;
  const desiredPositionForReel3 = 2;

  this.spinReel(this.reel1, 2000, desiredImageForReel1, desiredPositionForReel1);
  this.spinReel(this.reel2, 2500, desiredImageForReel2, desiredPositionForReel2);
  this.spinReel(this.reel3, 3000, desiredImageForReel3, desiredPositionForReel3);
}

private async spinReel(reel, time, desiredImageForReel, desiredPosition) {  
  const translationMap = {
    1: 360,
    2: 240,
    3: 120,
    4: 0,
    5: -120
  }
  const dataPositionMap = {
    '360': 1,
    '240': 2,
    '120': 3,
    '0': 4,
    '-120': 5
  }
  
  const visibilityMap = {
    1: 'hidden',
    2: 'visible',
    3: 'visible',
    4: 'visible',
    5: 'hidden'
  }
  const rotatingToDesiredMap = {
    1: {
      1: {
        1: 360,
        2: 240,
        3: 120,
        4: 0,
        5: -120
      },
      2: {
        1: -120,
        2: 360,
        3: 240,
        4: 120,
        5: 0
      },
      3: {
        1: 0,
        2: -120,
        3: 360,
        4: 240,
        5: 120
      },
      4: {
        1: 120,
        2: 0,
        3: -120,
        4: 360,
        5: 240
      },
      5: {
        1: 240,
        2: 120,
        3: 0,
        4: -120,
        5: 360
      }
    },
    2: {
      1: {
        1: 240,
        2: 120,
        3: 0,
        4: -120,
        5: 360

      },
      2: {
        1: 360,
        2: 240,
        3: 120,
        4: 0,
        5: -120
      },
      3: {
        1: -120,
        2: 360,
        3: 240,
        4: 120,
        5: 0
      },
      4: {
        1: 0,
        2: -120,
        3: 360,
        4: 240,
        5: 120
      },
      5: {
        1: 120,
        2: 0,
        3: -120,
        4: 360,
        5: 240
      }
    },
    3: {
      1: {
        1: 120,
        2: 0,
        3: -120,
        4: 360,
        5: 240

      },
      2: {
        1: 240,
        2: 120,
        3: 0,
        4: -120,
        5: 360
      },
      3: {
        1: 360,
        2: 240,
        3: 120,
        4: 0,
        5: -120
      },
      4: {
        1: -120,
        2: 360,
        3: 240,
        4: 120,
        5: 0
      },
      5: {
        1: 0,
        2: -120,
        3: 360,
        4: 240,
        5: 120
      }
    },
    4: {
      1: {
        1: 0,
        2: -120,
        3: 360,
        4: 240,
        5: 120

      },
      2: {
        1: 120,
        2: 0,
        3: -120,
        4: 360,
        5: 240
      },
      3: {
        1: 240,
        2: 120,
        3: 0,
        4: -120,
        5: 360
      },
      4: {
        1: 360,
        2: 240,
        3: 120,
        4: 0,
        5: -120
      },
      5: {
        1: -120,
        2: 360,
        3: 240,
        4: 120,
        5: 0
      }
    },
    5: {
      1: {
        1: -120,
        2: 360,
        3: 240,
        4: 120,
        5: 0

      },
      2: {
        1: 0,
        2: -120,
        3: 360,
        4: 240,
        5: 120
      },
      3: {
        1: 120,
        2: 0,
        3: -120,
        4: 360,
        5: 240
      },
      4: {
        1: 240,
        2: 120,
        3: 0,
        4: -120,
        5: 360
      },
      5: {
        1: 360,
        2: 240,
        3: 120,
        4: 0,
        5: -120
      }
    }
  }
  Array.from(reel.nativeElement.childNodes).map(child => {
      const calculatedPosition = rotatingToDesiredMap[child.dataset.position][desiredImageForReel][desiredPosition];
      child.style.transform = `translateY(${calculatedPosition}px)`;
      child.dataset.position = dataPositionMap[calculatedPosition];
  })

  const interval = setInterval(() => {
    Array.from(reel.nativeElement.childNodes)
    .map(child => {
      if(child.dataset.position == 5) child.dataset.position = 1
      else child.dataset.position++
      child.style.transform = `translateY(${translationMap[child.dataset.position]}px)`;
        child.style.visibility = visibilityMap[child.dataset.position];
        return child;
    })
  }, 50); // se rodar a 100 para no mesmo lugar // 50 também // 25 também
  setTimeout(() => {
    clearInterval(interval);
    this.resetDataPosition;
    const originalPositionMap = {
      0: 4,
      1: 3,
      2: 2,
      3: 1,
      4: 5
    }
    Array.from(reel.nativeElement.childNodes).map((child, index) => {
      child.dataset.position = originalPositionMap[index];
      return child;
    })
  }, time);
}

public startReel() {
  console.log('there we go champion!');
  if (this.balance > 0) {
    this.armClicked = true;
    setTimeout(()=> this.armClicked = false, 500)
    this.startSpinning();
    this.balance--
  }
}
}
