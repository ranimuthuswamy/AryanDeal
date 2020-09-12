class Deal{
    constructor(){
        this.deal=createButton("Deal");
        this.noDeal=createButton("No Deal")
        this.show=createElement("h2")
        this.greeting=createElement("h3")
        this.formEnd=createButton("Resume")
        this.showAdd=createElement('h2')
    }
     display(){
        var avg=count/ask;
        //background("red");
    this.show.html("Your Average is: " + avg);
    this.show.position(displayWidth/2 - 330, displayHeight/2-295);
    this.deal.position(displayWidth/2 - 30, displayHeight/2-195);
    this.deal.style('color','green');
    this.deal.class('button');
    this.noDeal.position(displayWidth/2 - 30, displayHeight/2-95);
    this.noDeal.style('color','green');
    this.noDeal.class('button');
    this.showAdd.html("If you press the average will be added to your score")
    this.showAdd.position(displayWidth/2 - 330, displayHeight/2-5)
    this.showAdd.style('color','#F47C80')
    this.showAdd.style('fontSize','30px')
    game.hideMainButtons();
    this.formEnd.hide();
    this.noDeal.mousePressed(()=>{
        this.show.hide();
        this.greeting.html("Thank You for Participating " + playerName);
        this.greeting.position(displayWidth/2-150,displayHeight/2-150)
        theWinner.play();
        this.deal.hide();
        this.noDeal.hide();
        this.showAdd.hide();
    });
    this.deal.mousePressed(()=>{
        this.greeting.html("All The Best");
        this.greeting.position(displayWidth/2-150,displayHeight/2-150)
        this.greeting.style('fontSize','30px')
        this.greeting.style('color','green')
        this.formEnd.position( displayWidth-300,displayHeight/2+100)
        this.formEnd.style('color','orange');
        this.show.hide();
        this.deal.hide();
        this.noDeal.hide();
        ask=0;
        this.showAdd.hide();
        
        count=count+Math.round(avg);
        });

        this.formEnd.mousePressed(()=>{
            game.showMainButtons();
             this.deal.hide();
             this.noDeal.hide();
             this.greeting.hide();
             this.show.hide();
             this.formEnd.hide();
        })
    
    }
    endGame(){
       game.hideMainButtons();
        this.show.html("The Game is Over.You Played Well")
        this.show.position(displayWidth/2 - 330, displayHeight/2-295);
        this.greeting.html("Thank You for Participating " + playerName);
        this.greeting.position(displayWidth/2-150,displayHeight/2-150)
        theWinner.play();
        this.deal.hide();
        this.noDeal.hide();
    }
}