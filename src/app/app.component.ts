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
@ViewChild('debugReel1', {static: false}) debugReel1;
@ViewChild('debugReel2', {static: false}) debugReel2;
@ViewChild('debugReel3', {static: false}) debugReel3;

 public armClicked = false;
 public isSpinning = false;
 public debugMode = false;
 public balance = 10;
 public line1Score = 0;
 public line2Score = 0;
 public line3Score = 0;
 public math = Math;
 public debitCreditMoney: number | string = 0;
 public debugLine = 4;

 public showFlyingPrice = false;
 private cashAudio = new Audio('http://soundbible.com/mp3/Cash%20Register%20Cha%20Ching-SoundBible.com-184076484.mp3');
 private payingAmountSound = new Audio('/assets/audio/coins_scattered.mp3');
 private whileSpinningFunnySound = new Audio('https://previews.customer.envatousercontent.com/files/258604467/preview.mp3');

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
  sevenCherryComb: false,
  anyBarComb: false,
  checkAnyBarCombination(combination: string) {
    this.anyBarComb = combination.includes('3');
  },
  checkCherrySevenCombination(combination: string) {
    this.sevenCherryComb = combination.includes('1') && combination.includes('5');
  }
 }

private async startSpinning() {
  const debugReel1Image = this.debugMode &&
                          this.debugReel1.nativeElement.childNodes[0] &&
                          this.debugReel1.nativeElement.childNodes[0].dataset.position;
  const debugReel2Image = this.debugMode &&
                          this.debugReel2.nativeElement.childNodes[0] &&
                          this.debugReel2.nativeElement.childNodes[0].dataset.position;
  const debugReel3Image = this.debugMode &&
                          this.debugReel3.nativeElement.childNodes[0] &&
                          this.debugReel3.nativeElement.childNodes[0].dataset.position;

  const desiredImageForReel1 = debugReel1Image || Math.floor(Math.random() * 5) + 1;
  const desiredImageForReel2 = debugReel2Image || Math.floor(Math.random() * 5) + 1;;
  const desiredImageForReel3 = debugReel3Image || Math.floor(Math.random() * 5) + 1;;

  const desiredPositionForReel1 = (this.debugMode && this.debugLine) || 
                                  Math.floor(Math.random() * 5) + 1;
  const desiredPositionForReel2 = (this.debugMode && this.debugLine) ||
                                   Math.floor(Math.random() * 5) + 1;
  const desiredPositionForReel3 = (this.debugMode && this.debugLine) ||
                                   Math.floor(Math.random() * 5) + 1;

  this.spinReel(this.reel1, 2000, desiredImageForReel1, desiredPositionForReel1);
  this.spinReel(this.reel2, 2500, desiredImageForReel2, desiredPositionForReel2);
  this.spinReel(this.reel3, 3000, desiredImageForReel3, desiredPositionForReel3);
  this.isSpinning = true;
  this.whileSpinningFunnySound.loop = true;

  setTimeout(() => {
    this.showFlyingPrice = false;
    this.checkResult();
    this.isSpinning = false;
    this.whileSpinningFunnySound.pause();
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
  Array.from(reel.nativeElement.childNodes).map((child : HTMLElement) => {
      const calculatedPosition = rotatingToDesiredMap[child.dataset.position][desiredImageForReel][desiredPosition];
      child.style.transform = `translateY(${calculatedPosition}px)`;
      child.dataset.position = dataPositionMap[calculatedPosition];
  })

  const interval = setInterval(() => {
    Array.from(reel.nativeElement.childNodes)
    .map((child : HTMLElement) => {
      if(child.dataset.position === '5') child.dataset.position = '1'
      else child.dataset.position = (parseInt(child.dataset.position) + 1).toString();
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

  Array.from(this.reel1.nativeElement.childNodes).map((child : HTMLElement, index) => {
    if(child.dataset.position === '4') line1.push(originalPositionMap[index]);
    if(child.dataset.position === '3') line2.push(originalPositionMap[index]);
    if(child.dataset.position === '2') line3.push(originalPositionMap[index]);
    child.dataset.position = originalPositionMap[index];
   
    return child;
  })
  Array.from(this.reel2.nativeElement.childNodes).map((child : HTMLElement, index) => {
    if(child.dataset.position === '4') line1.push(originalPositionMap[index]);
    if(child.dataset.position === '3') line2.push(originalPositionMap[index]);
    if(child.dataset.position === '2') line3.push(originalPositionMap[index]);
    child.dataset.position = originalPositionMap[index];
  
    return child;
  }) 
  Array.from(this.reel3.nativeElement.childNodes).map((child : HTMLElement, index) => {
    if(child.dataset.position === '4') line1.push(originalPositionMap[index]);
    if(child.dataset.position === '3') line2.push(originalPositionMap[index]);
    if(child.dataset.position === '2') line3.push(originalPositionMap[index]);
    child.dataset.position = originalPositionMap[index];
    console.log(child.dataset.position, typeof child.dataset.position);
    
    return child;
  });
  line1 = line1.join(',');
  line2 = line2.join(',');
  line3 = line3.join(',');

  this.line1Score = winningTableMap[line1] ? winningTableMap[line1][1] : winningTableMap.checkCherrySevenCombination(line1) || winningTableMap.checkAnyBarCombination(line1);
  this.line2Score = winningTableMap[line2] ? winningTableMap[line2][2] : winningTableMap.checkCherrySevenCombination(line2) || winningTableMap.checkAnyBarCombination(line2);
  this.line3Score = winningTableMap[line3] ? winningTableMap[line3][3] : winningTableMap.checkCherrySevenCombination(line3) || winningTableMap.checkAnyBarCombination(line3);

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
  this.line2Score,
  this.line3Score);

  const bestWinningLine = map[bestPrice];
  
  setTimeout(()=> {
    this.balance += bestPrice;
    this.debitCreditMoney = `+ ${bestPrice}`;
    this.showFlyingPrice = true;
    this.payingAmountSound.play()
  }, 500)
  
  if (this.winningLine[bestWinningLine.value]) this.winningLine[bestWinningLine.value][bestWinningLine.i] = true;
  this.winningLine.checkCherrySevenCombination(bestWinningLine.value);
  !!!this.winningLine.sevenCherryComb && this.winningLine.checkAnyBarCombination(bestWinningLine.value);
}

private resetAll() {
  this.line1Score = 0;
  this.line2Score = 0;
  this.line3Score = 0;
  this.winningLine.sevenCherryComb = false;
  this.winningLine.anyBarComb = false;
  Object.values(this.winningLine).
  map(obj => {
    if(typeof obj === 'object') {
      Object.keys(obj).map(key => {
        return obj[key] = false;
      })
    }
    return obj   
  }) 
}

public startReel() {
  if (this.balance > 0) {
    this.armClicked = true;
    this.showFlyingPrice = false;
    this.resetAll();
    setTimeout(()=> this.armClicked = false, 500);
    setTimeout(() => {
      this.whileSpinningFunnySound.play();
      this.startSpinning();
    }, 450)
    this.balance--
    this.debitCreditMoney = -1;
    this.cashAudio.play();
    this.showFlyingPrice = true;
  }
}

onDragStart(event: DragEvent) {
  event.dataTransfer.setData('text', (event.target as HTMLElement).id);
}

onDragOver(event: DragEvent) {
  event.preventDefault()
}

onDrop(event: DragEvent) {
  (event.target as HTMLElement).appendChild(
    document.getElementById(
      event.dataTransfer.getData('text')
      ).cloneNode(true)
    )
}

}
