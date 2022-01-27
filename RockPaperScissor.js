const buttonRock = document.querySelector('#rock'); 
        const buttonPaper = document.querySelector('#paper'); 
        const buttonScissor = document.querySelector('#scissor'); 
        const results = document.querySelector('#results'); 
        const scoreUser = document.querySelector('#playerScores'); 
        const scoreComputer = document.querySelector('#computerScores'); 
        const playAgain = document.querySelector('#playagain'); 

        let puntenUser = 0; 
        let puntenPC = 0; 

        //keuze pc
        let keuzePc = function(){
            let nummer = Math.floor(Math.random()*3); 
            if(nummer === 0){
                return "paper"
            }else if(nummer === 1){
                return "scissor"
            }else if(nummer === 2){
                return "rock"
            }else{
                "dat is vreemd, hier is iets misgegaan!"
            }
        }

        let vergelijk = function(user, pc){
            if(puntenPC < 5 && puntenUser <5){
                if(user === pc){
                    results.innerHTML = 'Gelijkspel. Keuze user is: ' + user + '. Keuze pc is: ' + pc + '.'; 
                } else if((user === 'rock' && pc === 'scissor') || (user === 'paper' && pc === 'rock')||(user === 'scissor' && pc==='paper')){
                    puntenUser = puntenUser + 1; 
                    if(puntenUser === 5){
                        scoreUser.innerHTML = puntenUser; 
                        results.innerHTML = 'User heeft 5 keer gewonnen. Het spel is afgelopen.'
                        scoreUser.style.color = "red"; 
                        results.style.color = "red"; 
                        results.style.fontweight = "bold"; 
                    } else{
                        results.innerHTML = 'User wins with: ' + user + '. Pc picked: ' + pc + '.'
                        scoreUser.innerHTML = puntenUser; 
                    }
                    
                } else{
                    puntenPC = puntenPC + 1; 
                    if(puntenPC === 5){
                        scoreComputer.innerHTML = puntenPC; 
                        results.innerHTML = 'PC heeft 5 keer gewonnen. Het spel is afgelopen.'
                        scoreComputer.style.color = "red"; 
                        results.style.color = "red"; 
                        results.style.fontweight = "bold"; 

                    } else{
                        results.innerHTML = 'Pc wins with: ' + pc + '. User picked: ' + user + '.'
                        scoreComputer.innerHTML = puntenPC;  
                    }
                }
            } 
        }
        
        buttonRock.addEventListener('click', game=>{
                let keuzeUser = buttonRock.innerHTML 
                keuzeUser = keuzeUser.toLowerCase(); 
                vergelijk(keuzeUser, keuzePc()); 
        }); 

        buttonScissor.addEventListener('click', game=>{
            let keuzeUser = buttonScissor.innerHTML 
            keuzeUser = keuzeUser.toLowerCase(); 
            vergelijk(keuzeUser, keuzePc()); 
        }); 

        buttonPaper.addEventListener('click', game=>{
            let keuzeUser = buttonPaper.innerHTML 
            keuzeUser = keuzeUser.toLowerCase(); 
            vergelijk(keuzeUser, keuzePc()); 
        }); 

        playAgain.addEventListener('click', function(){
            puntenUser = 0; 
            puntenPC = 0;  
            results.innerHTML = ''; 
            scoreComputer.innerHTML = '0'; 
            scoreUser.innerHTML = '0'; 
            scoreComputer.style.color = "white"; 
            scoreUser.style.color = "white"; 
            results.style.fontweight = "normal"; 
            results.style.color = "white"; 
        })
        
