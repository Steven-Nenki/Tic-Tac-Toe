let cases = [...document.getElementsByClassName('case')];
let joueur = document.getElementById('joueur');
let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');
let scoreNul = document.getElementById('scoreNul');
let J1 = document.getElementById('J1')
let J2 = document.getElementById('J2')
let SJ1 = document.getElementById('SJ1')
let SJ2 = document.getElementById('SJ2')

let voile = document.getElementById('voile')
let button = document.getElementById('button')
let form = document.getElementById('form')




button.addEventListener('click', () => {
  let name1 = document.getElementById('name1').value
  let name2 = document.getElementById('name2').value
  if(name1 == '' || name2 == '') {
    if(name1 == '' && name2 == '') {
      alert('Veuillez entrer les noms des 2 joueurs')
    } else if (name1 == ''){
      alert('Veuillez entrer le nom du joueur 1')
    } else if (name2 == ''){
      alert('Veuillez entrer le nom du joueur 2')
    } 
  } else {
    voile.style.display = 'none'
    form.style.display = 'none'
    J1.textContent = name1
    J2.textContent = name2
    joueur.textContent = name1
  }
}, false)

let state = {
  SJ1: 'X',
  SJ2: 'O',
  joueurEnCours: '1',
  scoreJ1: 0,
  scoreJ2: 0,
  matchNuls: 0,
  c1: 0,
  c2: 0,
  c3: 0,
  c4: 0,
  c5: 0,
  c6: 0,
  c7: 0,
  c8: 0,
  c9: 0,
}

const resetState = () => {
  joueurEnCours = 1;
  state.c1 = 0;
  state.c2 = 0;
  state.c3 = 0;
  state.c4 = 0;
  state.c5 = 0;
  state.c6 = 0;
  state.c7 = 0;
  state.c8 = 0;
  state.c9 = 0;
};

const resetScore = () => {
  state.scoreJ1 = 0;
  score1.textContent = state.scoreJ1;
  state.scoreJ2 = 0,
  score2.textContent = state.scoreJ2;
  state.scoreNul = 0,
  scoreNul.textContent = state.scoreNul; 
}

const verifierVictoire = () => {
  if(
    (state.c1 == state.c2 && state.c2 == state.c3 && state.c1 > 0) ||
    (state.c4 == state.c5 && state.c5 == state.c6 && state.c4 > 0) ||
    (state.c7 == state.c8 && state.c8 == state.c9 && state.c7 > 0) ||
    (state.c1 == state.c4 && state.c4 == state.c7 && state.c1 > 0) ||
    (state.c2 == state.c5 && state.c5 == state.c8 && state.c2 > 0) ||
    (state.c3 == state.c6 && state.c6 == state.c9 && state.c3 > 0) ||
    (state.c1 == state.c5 && state.c5 == state.c9 && state.c1 > 0) ||
    (state.c3 == state.c5 && state.c5 == state.c7 && state.c3 > 0)
  ){
    return true;
  } else if(
    state.c1 !== 0 &&
    state.c2 !== 0 &&
    state.c3 !== 0 &&
    state.c4 !== 0 &&
    state.c5 !== 0 &&
    state.c6 !== 0 &&
    state.c7 !== 0 &&
    state.c8 !== 0 &&
    state.c9 !== 0
  ) {
    return null;
  } else{
    return false;
  }
}



const jouerCase = (e) => {
  let idCase = e.target.id;
  if (state[idCase] !== 0) return;

  state[idCase] = state.joueurEnCours;

  let isVictoire = verifierVictoire();

  if(isVictoire === true){
    setTimeout(() => {
      if (
        (state.scoreJ1 == 1 && state.scoreJ2 == 0) ||
        (state.scoreJ1 == 2 && state.scoreJ2 == 0) ||
        (state.scoreJ1 == 4 && state.scoreJ2 == 0) ||
        (state.scoreJ1 == 2 && state.scoreJ2 == 1) ||
        (state.scoreJ1 == 3 && state.scoreJ2 == 1) ||
        (state.scoreJ1 == 3 && state.scoreJ2 == 2) ||
        (state.scoreJ1 == 4 && state.scoreJ2 == 1) ||
        (state.scoreJ1 == 4 && state.scoreJ2 == 2) ||
        (state.scoreJ1 == 4 && state.scoreJ2 == 3)
        ) {
        alert(`Victoire de ${J1.textContent}`);
      } else if (
        (state.scoreJ2 == 1 && state.scoreJ1 == 0) ||
        (state.scoreJ2 == 2 && state.scoreJ1 == 0) ||
        (state.scoreJ2 == 4 && state.scoreJ1 == 0) ||
        (state.scoreJ2 == 2 && state.scoreJ1 == 1) ||
        (state.scoreJ2 == 3 && state.scoreJ1 == 1) ||
        (state.scoreJ2 == 3 && state.scoreJ1 == 2) ||
        (state.scoreJ2 == 4 && state.scoreJ1 == 1) ||
        (state.scoreJ2 == 4 && state.scoreJ1 == 2) ||
        (state.scoreJ2 == 4 && state.scoreJ1 == 3)
      ) {
        alert(`Victoire de ${J2.textContent}`);
      }
      });
    

      // Joueur 1
    if(state.joueurEnCours == 1) {
      e.target.textContent = state.SJ1;
      state.scoreJ1++
      score1.textContent = state.scoreJ1;

      // 3-0
      setTimeout(() => {
      if(state.scoreJ1 == 3 && state.scoreJ2 == 0) {
        alert(`${J1.textContent} écrase ${J2.textContent}`)
      } 
      },);
      
      // ?-?
      setTimeout(() => {
        if (state.scoreJ1 == state.scoreJ2) {
          alert(`${J1.textContent} égalise le score !`)
        } 
      });
      
      // 5-0
      setTimeout(() => {
        if (state.scoreJ1 == 5 && state.scoreJ2 == 0) {
          alert(`${J1.textContent} remporte la partie haut la main`)
          resetScore()  
        } 
      });
      
      // 5-?
      setTimeout(() => {
        if (state.scoreJ1 == 5) {
          alert(`${J1.textContent} remporte la partie`)
          resetScore()
        }
      });

      // Joueur 2
    } else {
      e.target.textContent = state.SJ2;
      state.scoreJ2++
      score2.textContent = state.scoreJ2;

      // 3-0
      setTimeout(() => {
        if(state.scoreJ2 == 3 && state.scoreJ1 == 0) {
          alert(`${J2.textContent} écrase ${J1.textContent}`)
        } 
        });
        
      // ?-?
      setTimeout(() => {
        if (state.scoreJ2 == state.scoreJ1) {
          alert(`${J2.textContent} égalise le score !`)
        } 
      });
      
      // 5-0
      setTimeout(() => {
        if (state.scoreJ2 == 5 && state.scoreJ1 == 0) {
          alert(`${J2.textContent} remporte la partie haut la main`)
          resetScore()  
        } 
      });
      
      // 5-?
      setTimeout(() => {
        if (state.scoreJ2 == 5) {
          alert(`${J2.textContent} remporte la partie`)
          resetScore()
        }
      });
    }
    setTimeout(() => {
      resetState();
      cases.forEach( (c) => (c.textContent = ''));
      });


      // Match null
  } else if (isVictoire === null) {
    setTimeout(() => {
      if (state.matchNuls == 3) {
        alert('Vous avez un exellent niveau, impossible de vous départager')
        resetScore()
      } else {
        alert('Match null')
      }
    })

    function MatchNul () {
      if (state.joueurEnCours == 1) {
        e.target.textContent = state.SJ1
      } else {
        e.target.textContent = state.SJ2
      }
    }
    MatchNul()
    state.matchNuls++
    scoreNul.textContent = state.matchNuls;
    joueur.textContent = '1';

    setTimeout(() => {
    resetState();
    cases.forEach( (c) => (c.textContent = ''));
    });
      
    
    
  } 
  
  else if (isVictoire === false) {
    if (state.joueurEnCours == 1) {
      e.target.textContent = state.SJ1;
      state.joueurEnCours = 2;
      joueur.textContent = J2.textContent;
    } else {
      e.target.textContent = state.SJ2;
      state.joueurEnCours = 1;
      joueur.textContent = J1.textContent;
    }
  }
};



cases.forEach((el) => {
  el.addEventListener('click', jouerCase);
});