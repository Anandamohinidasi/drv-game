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
 public line1Score = 0;
 public line2Score = 0;
 public line3Score = 0;
 public math = Math;

 public winningLine = {
  '5,5,5' : {
    1: false,
    2: false,
    3: false
  },
  '1,1,1': {
    1: false,
    2: false,
    3: false
  },
  '4,4,4': {
    1: false,
    2: false,
    3: false
  },
  '2,2,2': {
    1: false,
    2: false,
    3: false
  },
  '3,3,3': {
    1: false,
    2: false,
    3: false
  },
  cherryFirst: () => this['5,5,5'][1],
  cherrySecond: () => this['5,5,5'][2],
  cherryLast: () => this['5,5,5'][3],
  threeSeven: () => this['1,1,1'][1] || this['1,1,1'][2] || this['1,1,1'][3],
  sevenCherryComb: false,
  threeTimesThreeBarAny: false,
  threeTimesTwoBarAny: false,
  threeTimesSingleBar: false,
  anyBarComb: false,
  checkAnyBarCombination(combination: string) {
    this.anyBarComb = combination.includes('3');
    console.log(this.anyBarComb)
  },
  checkCherrySevenCombination(combination: string) {
    this.sevenCherryComb = combination.includes('1') && combination.includes('5');
  }
 }

private async startSpinning() {
  const desiredImageForReel1 = Math.floor(Math.random() * 5) + 1;
  const desiredImageForReel2 = Math.floor(Math.random() * 5) + 1;;
  const desiredImageForReel3 = Math.floor(Math.random() * 5) + 1;;

  const desiredPositionForReel1 = Math.floor(Math.random() * 5) + 1;;
  const desiredPositionForReel2 = Math.floor(Math.random() * 5) + 1;;
  const desiredPositionForReel3 = Math.floor(Math.random() * 5) + 1;;

  this.spinReel(this.reel1, 2000, desiredImageForReel1, desiredPositionForReel1);
  this.spinReel(this.reel2, 2500, desiredImageForReel2, desiredPositionForReel2);
  this.spinReel(this.reel3, 3000, desiredImageForReel3, desiredPositionForReel3);
  setTimeout(() => {
    this.checkResult();
  }, 3000);
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
  }, time);
}

private checkResult() {
  const cherrySevenCombination = {
    1: 75,
    2: 75,
    3: 75
  }
  const winningTableMap = {
    '5,5,5' : {
      1: 2000,
      2: 1000,
      3: 4000
    },
    '1,1,1': {
      1: 150,
      2: 150,
      3: 150
    },
    '4,4,4': {
      1: 50,
      2: 50,
      3: 50
    },
    '2,2,2': {
      1: 20,
      2: 20,
      3: 20
    },
    '3,3,3': {
      1: 10,
      2: 10,
      3: 10
    },
    checkAnyBarCombination(combination: string) {
      return combination.includes('3') && 5;
    },
    checkCherrySevenCombination(combination: string) {
      return combination.includes('1') && combination.includes('5') && 75;
    }
  }

  const originalPositionMap = {
    0: 4,
    1: 3,
    2: 2,
    3: 1,
    4: 5
  }

  let line1: any = [];
  let line2: any = [];
  let line3: any = [];

  Array.from(this.reel1.nativeElement.childNodes).map((child, index) => {
    if(child.dataset.position == 4) line1.push(originalPositionMap[index]);
    if(child.dataset.position == 3) line2.push(originalPositionMap[index]);
    if(child.dataset.position == 2) line3.push(originalPositionMap[index]);
    child.dataset.position = originalPositionMap[index];
   
    return child;
  })
  Array.from(this.reel2.nativeElement.childNodes).map((child, index) => {
    if(child.dataset.position == 4) line1.push(originalPositionMap[index]);
    if(child.dataset.position == 3) line2.push(originalPositionMap[index]);
    if(child.dataset.position == 2) line3.push(originalPositionMap[index]);
    child.dataset.position = originalPositionMap[index];
  
    return child;
  }) 
  Array.from(this.reel3.nativeElement.childNodes).map((child, index) => {
    if(child.dataset.position == 4) line1.push(originalPositionMap[index]);
    if(child.dataset.position == 3) line2.push(originalPositionMap[index]);
    if(child.dataset.position == 2) line3.push(originalPositionMap[index]);
    child.dataset.position = originalPositionMap[index];

    return child;
  });
  line1 = line1.join(',');
  line2 = line2.join(',');
  line3 = line3.join(',');

  this.line1Score = winningTableMap[line1] ? winningTableMap[line1][1] : winningTableMap.checkCherrySevenCombination(line1) || winningTableMap.checkAnyBarCombination(line1);
  this.line2Score = winningTableMap[line2] ? winningTableMap[line2][2] : winningTableMap.checkCherrySevenCombination(line2) || winningTableMap.checkAnyBarCombination(line2);
  this.line3Score = winningTableMap[line3] ? winningTableMap[line3][3] : winningTableMap.checkCherrySevenCombination(line3) || winningTableMap.checkAnyBarCombination(line3);
  console.log(`Line results: ${line1}\n ${line2} \n ${line3}`)
  console.log(`You won: 
  ${this.line1Score} \n
  ${this.line2Score} \n
  ${this.line3Score}
  `);

  const map = {
    [this.line1Score]: {
      i: 1,
      value: line1
    },
    [this.line2Score]: {
      i: 2,
      value: line2,
    },
    [this.line3Score]: {
      i: 3,
      value: line3
    }
  };

  const bestPrice = Math.max(this.line1Score,
  this.line1Score,
  this.line1Score);

  const bestWinningLine = map[bestPrice];
  
  console.log('best winning line', bestPrice, bestWinningLine);
    
  this.balance += Math.max(this.line1Score,
    this.line1Score,
    this.line1Score);
  
  if (this.winningLine[bestWinningLine.value]) this.winningLine[bestWinningLine.value][bestWinningLine.i] = true;
  this.winningLine.checkCherrySevenCombination(bestWinningLine.value);
  !!!this.winningLine.sevenCherryComb && this.winningLine.checkAnyBarCombination(bestWinningLine.value);
}

private resetAll() {
  this.line1Score = 0;
  this.line2Score = 0;
  this.line3Score = 0;
}

public startReel() {
  if (this.balance > 0) {
    this.armClicked = true;
    setTimeout(()=> this.armClicked = false, 500);
    this.resetAll();
    this.startSpinning();
    this.balance--
  }
}
}
