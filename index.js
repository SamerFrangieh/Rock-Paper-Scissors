function theGame(){

    //var audio = new Audio("./audios/c\a);
    //audio.play();
    var youScore = 0;
    var aiScore = 0;

    

    // Making event listeners for all 3 buttons
    for(let i=0; i<document.querySelectorAll(".butt").length;i++)

        document.querySelectorAll(".butt")[i].addEventListener("click", function(){
            var click = new Audio("./audios/click.wav");
            click.play();


            var type = document.querySelectorAll(".butt")[i].classList[0];
            exec(type);
            Animation(type);

    });
    //---------------------------------------

    function exec(type){

        switch(type){

            case('rock'):
                document.querySelector('.img1 img').setAttribute('src','./images/rock.webp');
                break;

            case('paper'):
                document.querySelector('.img1 img').setAttribute('src',"./images/paper.webp");
                break;

            case('scissors'):
                document.querySelector('.img1 img').setAttribute('src',"./images/2644fd66c3d4de114b00ea2e6a36dd62-scissors-playful-cartoon.webp");
                break;

            default:
                break;
        }

        randomImage(type);

    }

    function randomImage(type1){
        let index = 0;
        var images = ['./images/rock.webp',"./images/paper.webp","./images/2644fd66c3d4de114b00ea2e6a36dd62-scissors-playful-cartoon.webp"]

        let interval = setInterval(function(){
            document.querySelector('.img2 img').setAttribute('src',images[index]);
            index = ((index + 1)%3);

        },80)

        setTimeout(function(){
            clearInterval(interval);
            var ran = (Math.floor(Math.random() * 3)) + 1;

            if(ran === 1){
                document.querySelector('.img2 img').setAttribute('src','./images/rock.webp');
                ran = 'rock';
            }
            if(ran === 2){
                document.querySelector('.img2 img').setAttribute('src',"./images/paper.webp");
                ran = 'paper';
            }
            if(ran === 3){
                document.querySelector('.img2 img').setAttribute('src',"./images/2644fd66c3d4de114b00ea2e6a36dd62-scissors-playful-cartoon.webp");
                ran = 'scissors';
            }

            findWinner(type1, ran);


        },1000)
        
    }

    function findWinner(type1, type2){

        if(type1 === type2){
            document.querySelector("h2").innerHTML = 'Draw';
        }
        else if(type1 == 'rock' && type2 == 'paper'){
            document.querySelector("h2").innerHTML = 'You Lose';
            aiScore+=1;
            document.querySelector("h3").innerHTML = "You:"+youScore+' - Ai:'+aiScore;
        }
        else if(type1 == 'rock' && type2 == 'scissors'){
            document.querySelector("h2").innerHTML = 'You Win';
            youScore+=1;
            document.querySelector("h3").innerHTML = "You:"+youScore+' - Ai:'+aiScore;
        }
        else if(type1 == 'paper' && type2 == 'rock'){
            document.querySelector("h2").innerHTML = 'You Win';
            youScore+=1;
            document.querySelector("h3").innerHTML = "You:"+youScore+' - Ai:'+aiScore;
        }
        else if(type1 == 'paper' && type2 == 'scissors'){
            document.querySelector("h2").innerHTML = 'You Lose';
            aiScore+=1;
            document.querySelector("h3").innerHTML = "You:"+youScore+' - Ai:'+aiScore;
        }
        else if(type1 == 'scissors' && type2 == 'paper'){
            document.querySelector("h2").innerHTML = 'You Win';
            youScore+=1;
            document.querySelector("h3").innerHTML = "You:"+youScore+' - Ai:'+aiScore;
        }
        else if(type1 == 'scissors' && type2 == 'rock'){
            document.querySelector("h2").innerHTML = 'You Lose';
            aiScore+=1;
            document.querySelector("h3").innerHTML = "You:"+youScore+' - Ai:'+aiScore;
        }

    }

    function Animation(type){
        document.querySelector("."+type).classList.add("pressed");
        setTimeout(function(){
            document.querySelector("."+type).classList.remove("pressed");
        },100)
    }


}

theGame();