class Game{
    constructor(){

    }

    start(){
      
        
            form=new Form();
            form.display();
            
        }
        
    play(){
        form.hide();
        background(bg); 
        ask=0;
        end=0;
      
        this.b0=createButton("India");
        this.b0.position(displayWidth-200,displayHeight/2-370);
        this.b0.class('button');
        this.b0.mousePressed(()=>{
            this.b0.attribute('disabled','')
            this.b0.class('disabled','')
          ask+=1
          end+=1
          console.log(end);
          bClicked.play();
            this.b1.hide();
            this.b2.hide();
            this.b3.hide();
            this.b4.hide();
            this.b5.hide();
            this.b6.hide();
            this.b7.hide();
            this.b8.hide();
            this.b9.hide();
           this.greetingQ0=createElement("h2")
           this.btans01=createButton("28 states,7 union territories")
           this.btans01.style('backgroundColor','#FFEFE5');
           this.btans02=createButton("29 states,7 union territories")
           this.btans03=createButton("29 states,8 union territories")
           this.btans04=createButton("28 states,8 union territories")
           this.btans01.position(displayWidth/2 - 230, displayHeight/2-195)
           this.btans02.position(displayWidth/2 - 30, displayHeight/2-195)
           this.btans02.style('backgroundColor','#FFEFE5');
           this.btans03.position(displayWidth/2 - 230, displayHeight/2-95)
           this.btans03.style('backgroundColor','#FFEFE5');
           this.btans04.position(displayWidth/2 - 30, displayHeight/2-95)
           this.btans04.style('backgroundColor','#FFEFE5');
            this.greetingQ0.html("There are __________________states and ___________________union territories")
            this.greetingQ0.position(displayWidth/2 - 430, displayHeight/2-295)
           
          // alert(this.btans04.elt.innerHTML);

            this.btans04.mousePressed(()=>{
                this.btans01.hide();
                this.btans02.hide();
                this.btans03.hide();
                this.btans04.hide();
                this.greeting=createElement("h1");
                this.greeting2=createElement("h2");
                this.greeting.html("Yes, You Are Right");
                this.greeting2.html(" The state of J&K has been bifurcated into two Union Territories (J&K and Ladakh). ");
                this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                this.greeting2.position(displayWidth/2-400,displayHeight/2-50)
                //this.b0.attribute('disabled','disabled')
                correctAns.play();
                bClicked.stop();
                count=count+50
                console.log(count);
                this.next=createButton("next");
                this.next.position(displayWidth-300,displayHeight/2+100)
                this.next.mousePressed(()=>{
                  this.next.hide();
                    this.greetingQ0.hide();
                    this.b1.show()
                    this.b2.show()
                    this.b3.show()
                    this.b4.show()
                    this.b5.show()
                    this.b6.show()
                    this.b7.show() 
                    this.b8.show()
                    this.b9.show()
                    //this.next.class('button','')
                //     this.greetingQ1.hide();
                //    this.greetingQ2.hide();
                //    this.greetingQ4.hide();
                //    this.greetingQ3.hide();
                //    this.greetingQ5.hide();
                //    this.greetingQ6.hide();
                //    this.greetingQ7.hide();
                //    this.greetingQ8.hide();
                   this.greeting.hide();
                   this.greeting2.hide();
                    this.btans01.hide();
                    this.btans02.hide();
                    this.btans03.hide();
                    this.btans04.hide();
                    if(ask===3){
                  
                 
                      var deal=new Deal();
                      deal.display();
                    }
                    if(end===10){
                      var deal2= new Deal();
                     deal2.endGame();
                    }
                });     
            });
        

            this.btans03.mousePressed(()=>{
                this.btans01.hide();
                this.btans02.hide();
                this.btans03.hide();
                this.btans04.hide();
                this.greeting=createElement("h1");
                
                this.greeting.html("Sorry, You Are Wrong");
                
                this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                count-=20
                //this.b0.attribute('disabled','disabled')
                wrongAns.play();
                bClicked.stop();
                this.next=createButton("next");
                this.next.position(displayWidth-300,displayHeight/2+100)
                this.next.mousePressed(()=>{
                  this.next.hide();
                    this.greetingQ0.hide();
                    this.b1.show()
                    this.b2.show()
                    this.b3.show()
                    this.b4.show()
                    this.b5.show()
                    this.b6.show()
                    this.b7.show() 
                    this.b8.show()
                    this.b9.show()
                    //this.next.class('button','')
                //     this.greetingQ1.hide();
                //    this.greetingQ2.hide();
                //    this.greetingQ4.hide();
                //    this.greetingQ3.hide();
                //    this.greetingQ5.hide();
                //    this.greetingQ6.hide();
                //    this.greetingQ7.hide();
                //    this.greetingQ8.hide();
                   this.greeting.hide();
                   this.greeting2.hide();
                    this.btans01.hide();
                    this.btans02.hide();
                    this.btans03.hide();
                    this.btans04.hide();
                    if(ask===3){
                  
                 
                      var deal=new Deal();
                      deal.display();
                    }
                    if(end===10){
                      var deal2= new Deal();
                      deal2.endGame();
                     }
                });
            });

            this.btans02.mousePressed(()=>{
                this.btans01.hide();
                this.btans02.hide();
                this.btans03.hide();
                this.btans04.hide();
                this.greeting=createElement("h1");
                
                this.greeting.html("Sorry, You Are Wrong");
                count-=20
                this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                //this.b0.attribute('disabled','disabled')
                wrongAns.play();
                bClicked.stop();
                this.next=createButton("next");

                this.next.position(displayWidth-300,displayHeight/2+100)
                this.next.mousePressed(()=>{
                  this.next.hide();
                    this.greetingQ0.hide();
                    this.b1.show()
                    this.b2.show()
                    this.b3.show()
                    this.b4.show()
                    this.b5.show()
                    this.b6.show()
                    this.b7.show() 
                    this.b8.show()
                    this.b9.show()
                    //this.next.class('button','')
                //     this.greetingQ1.hide();
                //    this.greetingQ2.hide();
                //    this.greetingQ4.hide();
                //    this.greetingQ3.hide();
                //    this.greetingQ5.hide();
                //    this.greetingQ6.hide();
                //    this.greetingQ7.hide();
                //    this.greetingQ8.hide();
                   this.greeting.hide();
                   this.greeting2.hide();
                    this.btans01.hide();
                    this.btans02.hide();
                    this.btans03.hide();
                    this.btans04.hide();
                    if(ask===3){
                  
                 
                      var deal=new Deal();
                      deal.display();
                    }
                    if(end===10){
                      var deal2= new Deal();
                      deal2.endGame();
                     }
                });
            });

            this.btans01.mousePressed(()=>{
                this.btans01.hide();
                this.btans02.hide();
                this.btans03.hide();
                this.btans04.hide();
                this.greeting=createElement("h1");
                
                this.greeting.html("Sorry, You Are Wrong");
                count-=20
                this.greeting.position(displayWidth/2-150,displayHeight/2-150)
              // this.b0.attribute('disabled','disabled')
              wrongAns.play();
              bClicked.stop();
              this.next=createButton("next");
              this.next.position(displayWidth-300,displayHeight/2+100)
              this.next.mousePressed(()=>{
                this.next.hide();
                  this.greetingQ0.hide();
                  this.b1.show()
                  this.b2.show()
                  this.b3.show()
                  this.b4.show()
                  this.b5.show()
                  this.b6.show()
                  this.b7.show() 
                  this.b8.show()
                  this.b9.show()
                  //this.next.class('button','')
              //     this.greetingQ1.hide();
              //    this.greetingQ2.hide();
              //    this.greetingQ4.hide();
              //    this.greetingQ3.hide();
              //    this.greetingQ5.hide();
              //    this.greetingQ6.hide();
              //    this.greetingQ7.hide();
              //    this.greetingQ8.hide();
                 this.greeting.hide();
                 this.greeting2.hide();
                  this.btans01.hide();
                  this.btans02.hide();
                  this.btans03.hide();
                  this.btans04.hide();
                  if(ask===3){
                  
                 
                    var deal=new Deal();
                    deal.display();
                  }
                  if(end===10){
                    var deal2= new Deal();
                     deal2.endGame();
                   }
              });
            });

           
           
        });


























        this.b1=createButton("Location");
        this.b1.position(displayWidth-200,displayHeight/2-320);
        this.b1.class('button');
        this.b1.mousePressed(()=>{
            this.b1.attribute('disabled','')
            this.b1.class('disabled')
            ask+=1
            end+=1
            bClicked.play();
            this.b0.hide()
            this.b2.hide()
            this.b3.hide()
            this.b4.hide()
            this.b5.hide()
            this.b6.hide()
            this.b7.hide()
            this.b8.hide()
            this.b9.hide()
            this.greetingQ1=createElement("h2")
           this.btans11=createButton("Uttar Pradesh")
           this.btans11.style('backgroundColor','#FFE925');
           this.btans12=createButton("Gujarat")
           this.btans13=createButton("Andhra Pradesh")
           this.btans14=createButton("Rajasthan")
           this.btans11.position(displayWidth/2 - 230, displayHeight/2-195)
           this.btans12.position(displayWidth/2 - 30, displayHeight/2-195)
           this.btans12.style('backgroundColor','#FFE925');
           this.btans13.position(displayWidth/2 - 230, displayHeight/2-95)
           this.btans13.style('backgroundColor','#FFE925');
           this.btans14.position(displayWidth/2 - 30, displayHeight/2-95)
           this.btans14.style('backgroundColor','#FFE925');
            this.greetingQ1.html("In which the State of India the Kandala Port is located")
            this.greetingQ1.position(displayWidth/2 - 430, displayHeight/2-295)
           
            

            this.btans12.mousePressed(()=>{
                this.btans11.hide();
                this.btans12.hide();
                this.btans13.hide();
                this.btans14.hide();
                this.greeting=createElement("h1");
                this.greeting2=createElement("h2");
                this.greeting.html("Yes, You Are Right");
                this.greeting2.html(" The Port of Kandla is located on the Gulf of Kutch on the northwestern coast of India ");
                this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                this.greeting2.position(displayWidth/2-400,displayHeight/2-50)
                //this.b0.attribute('disabled','disabled')
                correctAns.play();
                count+=50
                bClicked.stop();
                this.next=createButton("next");
            this.next.position(displayWidth-300,displayHeight/2+100)
            this.next.mousePressed(()=>{
              this.next.hide();
            //    this.greetingQ0.hide();
                 this.greetingQ1.hide();
                 this.b0.show()
                 this.b2.show()
                 this.b3.show()
                 this.b4.show()
                 this.b5.show()
                 this.b6.show()
                 this.b7.show() 
                 this.b8.show()
                 this.b9.show()
            //    this.greetingQ2.hide();
            //    this.greetingQ4.hide();
            //    this.greetingQ3.hide();
            //    this.greetingQ5.hide();
            //    this.greetingQ6.hide();
            //    this.greetingQ7.hide();
            //    this.greetingQ8.hide();
               this.greeting.hide();
               this.greeting2.hide();
                this.btans11.hide();
                this.btans12.hide();
                this.btans13.hide();
                this.btans14.hide();
                if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                     deal2.endGame();
                 }
            });
            });
        

            this.btans13.mousePressed(()=>{
                this.btans11.hide();
                this.btans12.hide();
                this.btans13.hide();
                this.btans14.hide();
                this.greeting=createElement("h1");
                
                this.greeting.html("Sorry, You Are Wrong");
                count-=20
                this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                //this.b0.attribute('disabled','disabled')
                wrongAns.play();
                bClicked.stop();
                this.next=createButton("next");
            this.next.position(displayWidth-300,displayHeight/2+100)
            this.next.mousePressed(()=>{
              this.next.hide();
            //    this.greetingQ0.hide();
                 this.greetingQ1.hide();
                 this.b0.show()
                 this.b2.show()
                 this.b3.show()
                 this.b4.show()
                 this.b5.show()
                 this.b6.show()
                 this.b7.show() 
                 this.b8.show()
                 this.b9.show()
            //    this.greetingQ2.hide();
            //    this.greetingQ4.hide();
            //    this.greetingQ3.hide();
            //    this.greetingQ5.hide();
            //    this.greetingQ6.hide();
            //    this.greetingQ7.hide();
            //    this.greetingQ8.hide();
               this.greeting.hide();
               //this.greeting2.hide();
                this.btans11.hide();
                this.btans12.hide();
                this.btans13.hide();
                this.btans14.hide();
                if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                     deal2.endGame();
                 }
            });
            });

            this.btans14.mousePressed(()=>{
                this.btans11.hide();
                this.btans12.hide();
                this.btans13.hide();
                this.btans14.hide();
                this.greeting=createElement("h1");
                
                this.greeting.html("Sorry, You Are Wrong");
                count-=20
                this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                //this.b0.attribute('disabled','disabled')
                wrongAns.play();
                bClicked.stop();
                this.next=createButton("next");
            this.next.position(displayWidth-300,displayHeight/2+100)
            this.next.mousePressed(()=>{
              this.next.hide();
            //    this.greetingQ0.hide();
                 this.greetingQ1.hide();
                 this.b0.show()
                 this.b2.show()
                 this.b3.show()
                 this.b4.show()
                 this.b5.show()
                 this.b6.show()
                 this.b7.show() 
                 this.b8.show()
                 this.b9.show()
            //    this.greetingQ2.hide();
            //    this.greetingQ4.hide();
            //    this.greetingQ3.hide();
            //    this.greetingQ5.hide();
            //    this.greetingQ6.hide();
            //    this.greetingQ7.hide();
            //    this.greetingQ8.hide();
               this.greeting.hide();
               this.greeting2.hide();
                this.btans11.hide();
                this.btans12.hide();
                this.btans13.hide();
                this.btans14.hide();
                if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                     deal2.endGame();
                 }
            });
            });

            this.btans11.mousePressed(()=>{
                this.btans11.hide();
                this.btans12.hide();
                this.btans13.hide();
                this.btans14.hide();
                this.greeting=createElement("h1");
                
                this.greeting.html("Sorry, You Are Wrong");
                count-=20
                this.greeting.position(displayWidth/2-150,displayHeight/2-150)
              // this.b0.attribute('disabled','disabled')
              wrongAns.play();
              bClicked.stop();
              this.next=createButton("next");
            this.next.position(displayWidth-300,displayHeight/2+100)
            this.next.mousePressed(()=>{
              this.next.hide();
            //    this.greetingQ0.hide();
                 this.greetingQ1.hide();
                 this.b0.show()
                 this.b2.show()
                 this.b3.show()
                 this.b4.show()
                 this.b5.show()
                 this.b6.show()
                 this.b7.show() 
                 this.b8.show()
                 this.b9.show()
            //    this.greetingQ2.hide();
            //    this.greetingQ4.hide();
            //    this.greetingQ3.hide();
            //    this.greetingQ5.hide();
            //    this.greetingQ6.hide();
            //    this.greetingQ7.hide();
            //    this.greetingQ8.hide();
               this.greeting.hide();
               this.greeting2.hide();
                this.btans11.hide();
                this.btans12.hide();
                this.btans13.hide();
                this.btans14.hide();
                if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                     deal2.endGame();
                 }
            });
            });
            
        });






































        this.b2=createButton("Smartphone");
        this.b2.position(displayWidth-200,displayHeight/2-270);
        this.b2.class('button');
        this.b2.mousePressed(()=>{
            this.b2.attribute('disabled','')
            this.b2.class('disabled')
            ask+=1
            end+=1
            bClicked.play();
            this.b1.hide()
            this.b0.hide()
            this.b3.hide()
            this.b4.hide()
            this.b5.hide()
            this.b6.hide()
            this.b7.hide()
            this.b8.hide()
            this.b9.hide()
            this.greetingQ2=createElement("h2")
           this.btans21=createButton("1972")
           this.btans22=createButton("1973")
           this.btans23=createButton("1992")
           this.btans24=createButton("1982")
           this.btans21.position(displayWidth/2 - 230, displayHeight/2-195)
           this.btans21.style('backgroundColor','#E36410');
           this.btans22.position(displayWidth/2 - 30, displayHeight/2-195)
           this.btans22.style('backgroundColor','#E36410');
           this.btans23.position(displayWidth/2 - 230, displayHeight/2-95)
           this.btans23.style('backgroundColor','#E36410');
           this.btans24.position(displayWidth/2 - 30, displayHeight/2-95)
           this.btans24.style('backgroundColor','#E36410');
            this.greetingQ2.html("When  was the first smartphone invented")
            this.greetingQ2.position(displayWidth/2 - 330, displayHeight/2-295)
           //alert(ask)
           console.log(ask);

            this.btans23.mousePressed(()=>{
                this.btans21.hide();
                this.btans22.hide();
                this.btans23.hide();
                this.btans24.hide();
                this.greeting=createElement("h1");
                this.greeting2=createElement("h2");
                this.greeting.html("Yes, You Are Right");
                this.greeting2.html("The first smartPhone was called the Simon Personal Communicator");
                this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                this.greeting2.position(displayWidth/2-400,displayHeight/2-50)
                //this.b0.attribute('disabled','disabled')
                correctAns.play();
                count=count+50
               
                bClicked.stop();
                this.next=createButton("next");
            this.next.position(displayWidth-300,displayHeight/2+100)
            this.next.mousePressed(()=>{
              this.next.hide();
               // this.greetingQ0.hide();
            //     this.greetingQ1.hide();
             this.greetingQ2.hide();
             this.b1.show()
             this.b0.show()
             this.b3.show()
             this.b4.show()
             this.b5.show()
             this.b6.show()
             this.b7.show() 
             this.b8.show()
             this.b9.show()
            //    this.greetingQ4.hide();
            //    this.greetingQ3.hide();
            //    this.greetingQ5.hide();
            //    this.greetingQ6.hide();
            //    this.greetingQ7.hide();
            //    this.greetingQ8.hide();
               this.greeting.hide();
               this.greeting2.hide();
                this.btans21.hide();
                this.btans22.hide();
                this.btans23.hide();
                this.btans24.hide();
                // alert(ask)
                if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame();
                 }
            //     else{
            //     alert(456)}
            });
            });
        

            this.btans22.mousePressed(()=>{
                this.btans21.hide();
                this.btans22.hide();
                this.btans23.hide();
                this.btans24.hide();
                this.greeting=createElement("h1");
                
                this.greeting.html("Sorry, You Are Wrong");
                count-=20
                this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                //this.b0.attribute('disabled','disabled')
                wrongAns.play();
                bClicked.stop();
                this.next=createButton("next");
            this.next.position(displayWidth-300,displayHeight/2+100)
            this.next.mousePressed(()=>{
              this.next.hide();
               // this.greetingQ0.hide();
            //     this.greetingQ1.hide();
             this.greetingQ2.hide();
             this.b1.show()
             this.b0.show()
             this.b3.show()
             this.b4.show()
             this.b5.show()
             this.b6.show()
             this.b7.show() 
             this.b8.show()
             this.b9.show()
            //    this.greetingQ4.hide();
            //    this.greetingQ3.hide();
            //    this.greetingQ5.hide();
            //    this.greetingQ6.hide();
            //    this.greetingQ7.hide();
            //    this.greetingQ8.hide();
               this.greeting.hide();
               this.greeting2.hide();
                this.btans21.hide();
                this.btans22.hide();
                this.btans23.hide();
                this.btans24.hide();
                if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame();
                 }
            });
            });

            this.btans24.mousePressed(()=>{
                this.btans21.hide();
                this.btans22.hide();
                this.btans23.hide();
                this.btans24.hide();
                this.greeting=createElement("h1");
                
                this.greeting.html("Sorry, You Are Wrong");
                count-=20
                this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                //this.b0.attribute('disabled','disabled')
                wrongAns.play();
                bClicked.stop();
                this.next=createButton("next");
            this.next.position(displayWidth-300,displayHeight/2+100)
            this.next.mousePressed(()=>{
              this.next.hide();
               // this.greetingQ0.hide();
            //     this.greetingQ1.hide();
             this.greetingQ2.hide();
             this.b1.show()
             this.b0.show()
             this.b3.show()
             this.b4.show()
             this.b5.show()
             this.b6.show()
             this.b7.show() 
             this.b8.show()
             this.b9.show()
            //    this.greetingQ4.hide();
            //    this.greetingQ3.hide();
            //    this.greetingQ5.hide();
            //    this.greetingQ6.hide();
            //    this.greetingQ7.hide();
            //    this.greetingQ8.hide();
               this.greeting.hide();
               this.greeting2.hide();
                this.btans21.hide();
                this.btans22.hide();
                this.btans23.hide();
                this.btans24.hide();
                if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame(); 
                 }
            });
            });

            this.btans21.mousePressed(()=>{
                this.btans21.hide();
                this.btans22.hide();
                this.btans23.hide();
                this.btans24.hide();
                this.greeting=createElement("h1");
                
                this.greeting.html("Sorry, You Are Wrong");
                count-=20
                this.greeting.position(displayWidth/2-150,displayHeight/2-150)
              // this.b0.attribute('disabled','disabled')
              wrongAns.play();
              bClicked.stop();
              this.next=createButton("next");
            this.next.position(displayWidth-300,displayHeight/2+100)
            this.next.mousePressed(()=>{
              this.next.hide();
               // this.greetingQ0.hide();
            //     this.greetingQ1.hide();
             this.greetingQ2.hide();
             this.b1.show()
             this.b0.show()
             this.b3.show()
             this.b4.show()
             this.b5.show()
             this.b6.show()
             this.b7.show() 
             this.b8.show()
             this.b9.show()
            //    this.greetingQ4.hide();
            //    this.greetingQ3.hide();
            //    this.greetingQ5.hide();
            //    this.greetingQ6.hide();
            //    this.greetingQ7.hide();
            //    this.greetingQ8.hide();
               this.greeting.hide();
               this.greeting2.hide();
                this.btans21.hide();
                this.btans22.hide();
                this.btans23.hide();
                this.btans24.hide();
                if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame();
                 }
            });
            });
            
        });

























        this.b3=createButton("Officer");
        this.b3.position(displayWidth-200,displayHeight/2-210);
        this.b3.class('button');
        this.b3.mousePressed(()=>{
          ask+=1
          end+=1
            bClicked.play();
            this.b3.attribute('disabled','')
            this.b3.class('disabled')
            this.b1.hide()
            this.b2.hide()
            this.b0.hide()
            this.b4.hide()
            this.b5.hide()
            this.b6.hide()
            this.b7.hide()
            this.b8.hide()
            this.b9.hide()
            this.greetingQ3=createElement("h2")
            this.btans31=createButton("Kiren Bedi")
            this.btans32=createButton("Kiran Bedi")
            this.btans33=createButton("Kiran Badi")
            this.btans34=createButton("Kirane Bedi")
            this.btans31.position(displayWidth/2 - 230, displayHeight/2-195)
            this.btans31.style('backgroundColor','#4C65FF');
            this.btans32.position(displayWidth/2 - 30, displayHeight/2-195)
            this.btans32.style('backgroundColor','#4C65FF');
            this.btans33.position(displayWidth/2 - 230, displayHeight/2-95)
            this.btans33.style('backgroundColor','#4C65FF');
            this.btans34.position(displayWidth/2 - 30, displayHeight/2-95)
            this.btans34.style('backgroundColor','#4C65FF');
             this.greetingQ3.html("Who was the first woman IPS officer of India")
             this.greetingQ3.position(displayWidth/2 - 330, displayHeight/2-295)
            
             
 
             this.btans32.mousePressed(()=>{
                 this.btans31.hide();
                 this.btans32.hide();
                 this.btans33.hide();
                 this.btans34.hide();
                 this.greeting=createElement("h1");
                 this.greeting2=createElement("h2");
                 this.greeting.html("Yes, You Are Right");
                 this.greeting2.html("Kiran Bedi is a retired Indian Police Service officer and social activist ");
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                 this.greeting2.position(displayWidth/2-400,displayHeight/2-50)
                 //this.b0.attribute('disabled','disabled')
                 correctAns.play();
                 count=count+50
                 bClicked.stop();
                 this.next=createButton("next");
             this.next.position(displayWidth-300,displayHeight/2+100)
             this.next.mousePressed(()=>{
              this.next.hide();
               //  this.greetingQ0.hide();
             //     this.greetingQ1.hide();
             //    this.greetingQ2.hide();
             //    this.greetingQ4.hide();
               this.greetingQ3.hide();
               this.b1.show()
               this.b2.show()
               this.b0.show()
               this.b4.show()
               this.b5.show()
               this.b6.show()
               this.b7.show() 
               this.b8.show()
               this.b9.show()
             //    this.greetingQ5.hide();
             //    this.greetingQ6.hide();
             //    this.greetingQ7.hide();
             //    this.greetingQ8.hide();
                this.greeting.hide();
                this.greeting2.hide();
                 this.btans31.hide();
                 this.btans32.hide();
                 this.btans33.hide();
                 this.btans34.hide();
                 if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                     deal2.endGame();
                 }
             });
             });
         
 
             this.btans33.mousePressed(()=>{
                 this.btans31.hide();
                 this.btans32.hide();
                 this.btans33.hide();
                 this.btans34.hide();
                 this.greeting=createElement("h1");
                 
                 this.greeting.html("Sorry, You Are Wrong");
                 count-=20
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                 //this.b0.attribute('disabled','disabled')
                 wrongAns.play();
                 bClicked.stop();
                 this.next=createButton("next");
             this.next.position(displayWidth-300,displayHeight/2+100)
             this.next.mousePressed(()=>{
              this.next.hide();
               //  this.greetingQ0.hide();
             //     this.greetingQ1.hide();
             //    this.greetingQ2.hide();
             //    this.greetingQ4.hide();
               this.greetingQ3.hide();
               this.b1.show()
               this.b2.show()
               this.b0.show()
               this.b4.show()
               this.b5.show()
               this.b6.show()
               this.b7.show() 
               this.b8.show()
               this.b9.show()
             //    this.greetingQ5.hide();
             //    this.greetingQ6.hide();
             //    this.greetingQ7.hide();
             //    this.greetingQ8.hide();
                this.greeting.hide();
                this.greeting2.hide();
                 this.btans31.hide();
                 this.btans32.hide();
                 this.btans33.hide();
                 this.btans34.hide();
                 if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                var deal2= new Deal();
                  deal2.endGame();;
                 }
             });
             });
 
             this.btans34.mousePressed(()=>{
                 this.btans31.hide();
                 this.btans32.hide();
                 this.btans33.hide();
                 this.btans34.hide();
                 this.greeting=createElement("h1");
                 
                 this.greeting.html("Sorry, You Are Wrong");
                 count-=20
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                 //this.b0.attribute('disabled','disabled')
                 wrongAns.play();
                 bClicked.stop();
                 this.next=createButton("next");
             this.next.position(displayWidth-300,displayHeight/2+100)
             this.next.mousePressed(()=>{
              this.next.hide();
               //  this.greetingQ0.hide();
             //     this.greetingQ1.hide();
             //    this.greetingQ2.hide();
             //    this.greetingQ4.hide();
               this.greetingQ3.hide();
               this.b1.show()
               this.b2.show()
               this.b0.show()
               this.b4.show()
               this.b5.show()
               this.b6.show()
               this.b7.show() 
               this.b8.show()
               this.b9.show()
             //    this.greetingQ5.hide();
             //    this.greetingQ6.hide();
             //    this.greetingQ7.hide();
             //    this.greetingQ8.hide();
                this.greeting.hide();
                this.greeting2.hide();
                 this.btans31.hide();
                 this.btans32.hide();
                 this.btans33.hide();
                 this.btans34.hide();
                 if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame();
                 }
             });
             });
 
             this.btans31.mousePressed(()=>{
                 this.btans31.hide();
                 this.btans32.hide();
                 this.btans33.hide();
                 this.btans34.hide();
                 this.greeting=createElement("h1");
                 
                 this.greeting.html("Sorry, You Are Wrong");
                 count-=20
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
               // this.b0.attribute('disabled','disabled')
               wrongAns.play();
               bClicked.stop();
               this.next=createButton("next");
             this.next.position(displayWidth-300,displayHeight/2+100)
             this.next.mousePressed(()=>{
              this.next.hide();
               //  this.greetingQ0.hide();
             //     this.greetingQ1.hide();
             //    this.greetingQ2.hide();
             //    this.greetingQ4.hide();
               this.greetingQ3.hide();
               this.b1.show()
               this.b2.show()
               this.b0.show()
               this.b4.show()
               this.b5.show()
               this.b6.show()
               this.b7.show() 
               this.b8.show()
               this.b9.show()
             //    this.greetingQ5.hide();
             //    this.greetingQ6.hide();
             //    this.greetingQ7.hide();
             //    this.greetingQ8.hide();
                this.greeting.hide();
                this.greeting2.hide();
                 this.btans31.hide();
                 this.btans32.hide();
                 this.btans33.hide();
                 this.btans34.hide();
                 if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame();
                 }
             });
             });
             
        });





















        this.b4=createButton("Film");
        this.b4.position(displayWidth-200,displayHeight/2-150);
        this.b4.class('button');
        this.b4.mousePressed(()=>{
            this.b4.attribute('disabled','')
            this.b4.class('disabled')
            ask+=1
            end+=1
            bClicked.play();
            this.b1.hide()
            this.b2.hide()
            this.b3.hide()
            this.b0.hide()
            this.b5.hide()
            this.b6.hide()
            this.b7.hide()
            this.b8.hide()
            this.b9.hide()
            this.greetingQ4=createElement("h2")
            this.btans41=createButton("1986")
            this.btans42=createButton("1869")
            this.btans43=createButton("1896")
            this.btans44=createButton("1969")
            this.btans41.position(displayWidth/2 - 230, displayHeight/2-195)
            this.btans41.style('backgroundColor','pink');
            this.btans42.position(displayWidth/2 - 30, displayHeight/2-195)
            this.btans42.style('backgroundColor','pink');
            this.btans43.position(displayWidth/2 - 230, displayHeight/2-95)
            this.btans43.style('backgroundColor','pink');
            this.btans44.position(displayWidth/2 - 30, displayHeight/2-95)
            this.btans44.style('backgroundColor','pink');
             this.greetingQ4.html("When had the Indian film industry started?")
             this.greetingQ4.position(displayWidth/2 - 330, displayHeight/2-295)
            
             
 
             this.btans43.mousePressed(()=>{
                 this.btans41.hide();
                 this.btans42.hide();
                 this.btans43.hide();
                 this.btans44.hide();
                 this.greeting=createElement("h1");
                 this.greeting2=createElement("h2");
                 this.greeting.html("Yes, You Are Right");
                 this.greeting2.html("Ardeshir Irani released Alam Ara, the first Indian talkie, on 14 March 1931");
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                 this.greeting2.position(displayWidth/2-400,displayHeight/2-50)
                 //this.b0.attribute('disabled','disabled')
                 correctAns.play();
                 count=count+50
                 bClicked.stop();
                 this.next=createButton("next");
             this.next.position(displayWidth-300,displayHeight/2+100)
             this.next.mousePressed(()=>{
              this.next.hide();
               //  this.greetingQ0.hide();
             //     this.greetingQ1.hide();
             //    this.greetingQ2.hide();
                 this.greetingQ4.hide();
                 this.b1.show()
                 this.b2.show()
                 this.b3.show()
                 this.b0.show()
                 this.b5.show()
                 this.b6.show()
                 this.b7.show() 
                 this.b8.show()
                 this.b9.show()
               //this.greetingQ3.hide();
             //    this.greetingQ5.hide();
             //    this.greetingQ6.hide();
             //    this.greetingQ7.hide();
             //    this.greetingQ8.hide();
                this.greeting.hide();
                this.greeting2.hide();
                 this.btans41.hide();
                 this.btans42.hide();
                 this.btans43.hide();
                 this.btans44.hide();
                 if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame();
                 }
             });
             });
         
 
             this.btans42.mousePressed(()=>{
                 this.btans41.hide();
                 this.btans42.hide();
                 this.btans43.hide();
                 this.btans44.hide();
                 this.greeting=createElement("h1");
                 
                 this.greeting.html("Sorry, You Are Wrong");
                 count-=20
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                 //this.b0.attribute('disabled','disabled')
                 wrongAns.play();
                 bClicked.stop();
                 this.next=createButton("next");
             this.next.position(displayWidth-300,displayHeight/2+100)
             this.next.mousePressed(()=>{
              this.next.hide();
               //  this.greetingQ0.hide();
             //     this.greetingQ1.hide();
             //    this.greetingQ2.hide();
                 this.greetingQ4.hide();
                 this.b1.show()
                 this.b2.show()
                 this.b3.show()
                 this.b0.show()
                 this.b5.show()
                 this.b6.show()
                 this.b7.show() 
                 this.b8.show()
                 this.b9.show()
               //this.greetingQ3.hide();
             //    this.greetingQ5.hide();
             //    this.greetingQ6.hide();
             //    this.greetingQ7.hide();
             //    this.greetingQ8.hide();
                this.greeting.hide();
                this.greeting2.hide();
                 this.btans41.hide();
                 this.btans42.hide();
                 this.btans43.hide();
                 this.btans44.hide();
                 if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame();
                 }

             });
             });
 
             this.btans44.mousePressed(()=>{
                 this.btans41.hide();
                 this.btans42.hide();
                 this.btans43.hide();
                 this.btans44.hide();
                 this.greeting=createElement("h1");
                 
                 this.greeting.html("Sorry, You Are Wrong");
                 count-=20
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                 //this.b0.attribute('disabled','disabled')
                 wrongAns.play();
                 bClicked.stop();
                 this.next=createButton("next");
             this.next.position(displayWidth-300,displayHeight/2+100)
             this.next.mousePressed(()=>{
              this.next.hide();
               //  this.greetingQ0.hide();
             //     this.greetingQ1.hide();
             //    this.greetingQ2.hide();
                 this.greetingQ4.hide();
                 this.b1.show()
                 this.b2.show()
                 this.b3.show()
                 this.b0.show()
                 this.b5.show()
                 this.b6.show()
                 this.b7.show() 
                 this.b8.show()
                 this.b9.show()
               //this.greetingQ3.hide();
             //    this.greetingQ5.hide();
             //    this.greetingQ6.hide();
             //    this.greetingQ7.hide();
             //    this.greetingQ8.hide();
                this.greeting.hide();
                this.greeting2.hide();
                 this.btans41.hide();
                 this.btans42.hide();
                 this.btans43.hide();
                 this.btans44.hide();
                 if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame();
                 }
             });
             });
 
             this.btans41.mousePressed(()=>{
                 this.btans41.hide();
                 this.btans42.hide();
                 this.btans43.hide();
                 this.btans44.hide();
                 this.greeting=createElement("h1");
                 
                 this.greeting.html("Sorry, You Are Wrong");
                 count-=20
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
               // this.b0.attribute('disabled','disabled')
               wrongAns.play();
               bClicked.stop();
               this.next=createButton("next");
             this.next.position(displayWidth-300,displayHeight/2+100)
             this.next.mousePressed(()=>{
              this.next.hide();
               //  this.greetingQ0.hide();
             //     this.greetingQ1.hide();
             //    this.greetingQ2.hide();
                 this.greetingQ4.hide();
                 this.b1.show()
                 this.b2.show()
                 this.b3.show()
                 this.b0.show()
                 this.b5.show()
                 this.b6.show()
                 this.b7.show() 
                 this.b8.show()
                 this.b9.show()
               //this.greetingQ3.hide();
             //    this.greetingQ5.hide();
             //    this.greetingQ6.hide();
             //    this.greetingQ7.hide();
             //    this.greetingQ8.hide();
                this.greeting.hide();
                this.greeting2.hide();
                 this.btans41.hide();
                 this.btans42.hide();
                 this.btans43.hide();
                 this.btans44.hide();
                 if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame();
                 }
             });
             });
             
        });





















        this.b5=createButton("Maths");
        this.b5.position(displayWidth-200,displayHeight/2-90);
        this.b5.class('button');
        this.b5.mousePressed(()=>{
            this.b5.attribute('disabled','')
            this.b5.class('disabled')
            ask+=1
            end+=1
            bClicked.play();
            this.b1.hide()
            this.b2.hide()
            this.b3.hide()
            this.b4.hide()
            this.b0.hide()
            this.b6.hide()
            this.b7.hide()
            this.b8.hide()
            this.b9.hide()
            this.greetingQ5=createElement("h2")
            this.btans51=createButton("Scott Flansburg")
            this.btans52=createButton("Sunder Pichai")
            this.btans53=createButton("Shakuntala devi")
            this.btans54=createButton("Granth Thakkar")
            this.btans51.position(displayWidth/2 - 230, displayHeight/2-195)
            this.btans51.style('backgroundColor','#B92A22');
            this.btans52.position(displayWidth/2 - 30, displayHeight/2-195)
            this.btans52.style('backgroundColor','#B92A22');
            this.btans53.position(displayWidth/2 - 230, displayHeight/2-95)
            this.btans53.style('backgroundColor','#B92A22');
            this.btans54.position(displayWidth/2 - 30, displayHeight/2-95)
            this.btans54.style('backgroundColor','#B92A22');
             this.greetingQ5.html("Who is the fastest mathematician in the world?")
             this.greetingQ5.position(displayWidth/2 - 330, displayHeight/2-295)
            
             
 
             this.btans51.mousePressed(()=>{
                 this.btans51.hide();
                 this.btans52.hide();
                 this.btans53.hide();
                 this.btans54.hide();
                 this.greeting=createElement("h1");
                 this.greeting2=createElement("h2");
                 this.greeting.html("Yes, You Are Right");
                 this.greeting2.html("Scott Flansburg  is an American dubbed 'The Human Calculator'  ");
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                 this.greeting2.position(displayWidth/2-400,displayHeight/2-50)
                 //this.b0.attribute('disabled','disabled')
                 correctAns.play();
                 bClicked.stop();
                 count=count+50
                 this.next=createButton("next");
             this.next.position(displayWidth-300,displayHeight/2+100)
             this.next.mousePressed(()=>{
              this.next.hide();
               //  this.greetingQ0.hide();
             //     this.greetingQ1.hide();
             //    this.greetingQ2.hide();
             //    this.greetingQ4.hide();
               //this.greetingQ3.hide();
               this.greetingQ5.hide();
               this.b1.show()
               this.b2.show()
               this.b3.show()
               this.b4.show()
               this.b0.show()
               this.b6.show()
               this.b7.show() 
               this.b8.show()
               this.b9.show()
             //    this.greetingQ6.hide();
             //    this.greetingQ7.hide();
             //    this.greetingQ8.hide();
                this.greeting.hide();
                this.greeting2.hide();
                 this.btans51.hide();
                 this.btans52.hide();
                 this.btans53.hide();
                 this.btans54.hide();
                 if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame();
                 }
             });
             });
         
 
             this.btans52.mousePressed(()=>{
                 this.btans51.hide();
                 this.btans52.hide();
                 this.btans53.hide();
                 this.btans54.hide();
                 this.greeting=createElement("h1");
                 
                 this.greeting.html("Sorry, You Are Wrong");
                 count-=20
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                 //this.b0.attribute('disabled','disabled')
                 wrongAns.play();
                 bClicked.stop();
                 this.next=createButton("next");
             this.next.position(displayWidth-300,displayHeight/2+100)
             this.next.mousePressed(()=>{
              this.next.hide();
               //  this.greetingQ0.hide();
             //     this.greetingQ1.hide();
             //    this.greetingQ2.hide();
             //    this.greetingQ4.hide();
               //this.greetingQ3.hide();
               this.greetingQ5.hide();
               this.b1.show()
               this.b2.show()
               this.b3.show()
               this.b4.show()
               this.b0.show()
               this.b6.show()
               this.b7.show() 
               this.b8.show()
               this.b9.show()
             //    this.greetingQ6.hide();
             //    this.greetingQ7.hide();
             //    this.greetingQ8.hide();
                this.greeting.hide();
                this.greeting2.hide();
                 this.btans51.hide();
                 this.btans52.hide();
                 this.btans53.hide();
                 this.btans54.hide();
                 if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame();
                 }
             });
             });
 
             this.btans54.mousePressed(()=>{
                 this.btans51.hide();
                 this.btans52.hide();
                 this.btans53.hide();
                 this.btans54.hide();
                 this.greeting=createElement("h1");
                 
                 this.greeting.html("Sorry, You Are Wrong");
                 count-=20
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                 //this.b0.attribute('disabled','disabled')
                 wrongAns.play();
                 bClicked.stop();
                 this.next=createButton("next");
             this.next.position(displayWidth-300,displayHeight/2+100)
             this.next.mousePressed(()=>{
              this.next.hide();
               //  this.greetingQ0.hide();
             //     this.greetingQ1.hide();
             //    this.greetingQ2.hide();
             //    this.greetingQ4.hide();
               //this.greetingQ3.hide();
               this.greetingQ5.hide();
               this.b1.show()
               this.b2.show()
               this.b3.show()
               this.b4.show()
               this.b0.show()
               this.b6.show()
               this.b7.show() 
               this.b8.show()
               this.b9.show()
             //    this.greetingQ6.hide();
             //    this.greetingQ7.hide();
             //    this.greetingQ8.hide();
                this.greeting.hide();
                this.greeting2.hide();
                 this.btans51.hide();
                 this.btans52.hide();
                 this.btans53.hide();
                 this.btans54.hide();
                 if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame();
                 }
             });
             });
 
             this.btans53.mousePressed(()=>{
                 this.btans51.hide();
                 this.btans52.hide();
                 this.btans53.hide();
                 this.btans54.hide();
                 this.greeting=createElement("h1");
                 
                 this.greeting.html("Sorry, You Are Wrong");
                 count-=20
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
               // this.b0.attribute('disabled','disabled')
               wrongAns.play();
               bClicked.stop();
               this.next=createButton("next");
             this.next.position(displayWidth-300,displayHeight/2+100)
             this.next.mousePressed(()=>{
              this.next.hide();
               //  this.greetingQ0.hide();
             //     this.greetingQ1.hide();
             //    this.greetingQ2.hide();
             //    this.greetingQ4.hide();
               //this.greetingQ3.hide();
               this.greetingQ5.hide();
               this.b1.show()
               this.b2.show()
               this.b3.show()
               this.b4.show()
               this.b0.show()
               this.b6.show()
               this.b7.show() 
               this.b8.show()
               this.b9.show()
             //    this.greetingQ6.hide();
             //    this.greetingQ7.hide();
             //    this.greetingQ8.hide();
                this.greeting.hide();
                this.greeting2.hide();
                 this.btans51.hide();
                 this.btans52.hide();
                 this.btans53.hide();
                 this.btans54.hide();
                 if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame();
                 }
             });
             });
             
        });
































        this.b6=createButton("Company");
        this.b6.position(displayWidth-200,displayHeight/2-30);
        this.b6.class('button');
        this.b6.mousePressed(()=>{
            this.b6.attribute('disabled','')
            this.b6.class('disabled')
            ask+=1
            end+=1
            bClicked.play();
            this.b1.hide()
            this.b2.hide()
            this.b3.hide()
            this.b4.hide()
            this.b5.hide()
            this.b0.hide()
            this.b7.hide()
            this.b8.hide()
            this.b9.hide()
            this.greetingQ6=createElement("h2")
            this.btans61=createButton("Windows")
            this.btans62=createButton("Amazon")
            this.btans63=createButton("Microsoft")
            this.btans64=createButton("Apple")
            this.btans61.position(displayWidth/2 - 230, displayHeight/2-195)
            this.btans61.style('backgroundColor','#7848A8');
            this.btans62.position(displayWidth/2 - 30, displayHeight/2-195)
            this.btans62.style('backgroundColor','#7848A8');
            this.btans63.position(displayWidth/2 - 230, displayHeight/2-95)
            this.btans63.style('backgroundColor','#7848A8');
            this.btans64.position(displayWidth/2 - 30, displayHeight/2-95)
            this.btans64.style('backgroundColor','#7848A8');
             this.greetingQ6.html("Which company is the richest in the world?")
             this.greetingQ6.position(displayWidth/2 - 330, displayHeight/2-295)
            
             
 
             this.btans62.mousePressed(()=>{
                 this.btans61.hide();
                 this.btans62.hide();
                 this.btans63.hide();
                 this.btans64.hide();
                 this.greeting=createElement("h1");
                 this.greeting2=createElement("h2");
                 this.greeting.html("Yes, You Are Right");
                 this.greeting2.html("With 18% growth in the last year resulting in an eye-watering brand value of $220 billion  ");
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                 this.greeting2.position(displayWidth/2-450,displayHeight/2-50)
                 //this.b0.attribute('disabled','disabled')
                 correctAns.play();
                 count=count+50
                 bClicked.stop();
                 this.next=createButton("next");
             this.next.position(displayWidth-300,displayHeight/2+100)
             this.next.mousePressed(()=>{
              this.next.hide();
               //  this.greetingQ0.hide();
             //     this.greetingQ1.hide();
             //    this.greetingQ2.hide();
             //    this.greetingQ4.hide();
              // this.greetingQ3.hide();
             //    this.greetingQ5.hide();
                 this.greetingQ6.hide()
                 this.b1.show()
                 this.b2.show()
                 this.b3.show()
                 this.b4.show()
                 this.b5.show()
                 this.b0.show()
                 this.b7.show() 
                 this.b8.show()
                 this.b9.show()
             //    this.greetingQ7.hide();
             //    this.greetingQ8.hide();
                this.greeting.hide();
                this.greeting2.hide();
                 this.btans61.hide();
                 this.btans62.hide();
                 this.btans63.hide();
                 this.btans64.hide();
                 if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame();
                 }
             });
             });
         
 
             this.btans61.mousePressed(()=>{
                 this.btans61.hide();
                 this.btans62.hide();
                 this.btans63.hide();
                 this.btans64.hide();
                 this.greeting=createElement("h1");
                 
                 this.greeting.html("Sorry, You Are Wrong");
                 count-=20
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                 //this.b0.attribute('disabled','disabled')
                 wrongAns.play();
                 bClicked.stop();
                 this.next=createButton("next");
             this.next.position(displayWidth-300,displayHeight/2+100)
             this.next.mousePressed(()=>{
              this.next.hide();
               //  this.greetingQ0.hide();
             //     this.greetingQ1.hide();
             //    this.greetingQ2.hide();
             //    this.greetingQ4.hide();
              // this.greetingQ3.hide();
             //    this.greetingQ5.hide();
                 this.greetingQ6.hide()
                 this.b1.show()
                 this.b2.show()
                 this.b3.show()
                 this.b4.show()
                 this.b5.show()
                 this.b0.show()
                 this.b7.show() 
                 this.b8.show()
                 this.b9.show()
             //    this.greetingQ7.hide();
             //    this.greetingQ8.hide();
                this.greeting.hide();
                this.greeting2.hide();
                 this.btans61.hide();
                 this.btans62.hide();
                 this.btans63.hide();
                 this.btans64.hide();
                 if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame();
                 }
             });
             });
 
             this.btans64.mousePressed(()=>{
                 this.btans61.hide();
                 this.btans62.hide();
                 this.btans63.hide();
                 this.btans64.hide();
                 this.greeting=createElement("h1");
                 
                 this.greeting.html("Sorry, You Are Wrong");
                 count-=20
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                 //this.b0.attribute('disabled','disabled')
                 wrongAns.play();
                 bClicked.stop();
                 this.next=createButton("next");
             this.next.position(displayWidth-300,displayHeight/2+100)
             this.next.mousePressed(()=>{
              this.next.hide();
               //  this.greetingQ0.hide();
             //     this.greetingQ1.hide();
             //    this.greetingQ2.hide();
             //    this.greetingQ4.hide();
              // this.greetingQ3.hide();
             //    this.greetingQ5.hide();
                 this.greetingQ6.hide()
                 this.b1.show()
                 this.b2.show()
                 this.b3.show()
                 this.b4.show()
                 this.b5.show()
                 this.b0.show()
                 this.b7.show() 
                 this.b8.show()
                 this.b9.show()
             //    this.greetingQ7.hide();
             //    this.greetingQ8.hide();
                this.greeting.hide();
               // this.greeting2.hide();
                 this.btans61.hide();
                 this.btans62.hide();
                 this.btans63.hide();
                 this.btans64.hide();
                 if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame();
                 }
             });
             });
 
             this.btans63.mousePressed(()=>{
                 this.btans61.hide();
                 this.btans62.hide();
                 this.btans63.hide();
                 this.btans64.hide();
                 this.greeting=createElement("h1");
                 
                 this.greeting.html("Sorry, You Are Wrong");
                 count-=20
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
               // this.b0.attribute('disabled','disabled')
               wrongAns.play();
               bClicked.stop();
               this.next=createButton("next");
             this.next.position(displayWidth-300,displayHeight/2+100)
             this.next.mousePressed(()=>{
              this.next.hide();
               //  this.greetingQ0.hide();
             //     this.greetingQ1.hide();
             //    this.greetingQ2.hide();
             //    this.greetingQ4.hide();
              // this.greetingQ3.hide();
             //    this.greetingQ5.hide();
                 this.greetingQ6.hide()
                 this.b1.show()
                 this.b2.show()
                 this.b3.show()
                 this.b4.show()
                 this.b5.show()
                 this.b0.show()
                 this.b7.show() 
                 this.b8.show()
                 this.b9.show()
             //    this.greetingQ7.hide();
             //    this.greetingQ8.hide();
                this.greeting.hide();
                //this.greeting2.hide();
                 this.btans61.hide();
                 this.btans62.hide();
                 this.btans63.hide();
                 this.btans64.hide();
                 if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame();
                 }
             });
             });
             
        });































        this.b7=createButton("Biology");
        this.b7.position(displayWidth-200,displayHeight/2+30);
        this.b7.class('button');
        this.b7.mousePressed(()=>{
            this.b7.attribute('disabled','')
            this.b7.class('disabled')
            ask+=1
            end+=1
            bClicked.play();
            this.b1.hide()
            this.b2.hide()
            this.b3.hide()
            this.b4.hide()
            this.b5.hide()
            this.b6.hide()
            this.b0.hide()
            this.b8.hide()
            this.b9.hide()

            this.greetingQ7=createElement("h2")
            this.btans71=createButton("Famar")
            this.btans72=createButton("Fumer")
            this.btans73=createButton("Femar")
            this.btans74=createButton("Femur")
            this.btans71.position(displayWidth/2 - 230, displayHeight/2-195)
            this.btans71.style('backgroundColor','#C7969B');
            this.btans72.position(displayWidth/2 - 30, displayHeight/2-195)
            this.btans72.style('backgroundColor','#C7969B');
            this.btans73.position(displayWidth/2 - 230, displayHeight/2-95)
            this.btans73.style('backgroundColor','#C7969B');
            this.btans74.position(displayWidth/2 - 30, displayHeight/2-95)
            this.btans74.style('backgroundColor','#C7969B');
             this.greetingQ7.html("Which is the longest as well as largest bone in the human body?")
             this.greetingQ7.position(displayWidth/2 - 330, displayHeight/2-295)
            
             
 
             this.btans74.mousePressed(()=>{
                 this.btans71.hide();
                 this.btans72.hide();
                 this.btans73.hide();
                 this.btans74.hide();
                 this.greeting=createElement("h1");
                 this.greeting2=createElement("h2");
                 this.greeting.html("Yes, You Are Right");
                 this.greeting2.html("Your femur, or thighbone, is the largest bone in your body");
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                 this.greeting2.position(displayWidth/2-350,displayHeight/2-50)
                 //this.b0.attribute('disabled','disabled')
                 count=count+50
                 correctAns.play();
                 bClicked.stop();
                 this.next=createButton("next");
             this.next.position(displayWidth-300,displayHeight/2+100)
             this.next.mousePressed(()=>{
              this.next.hide();
               //  this.greetingQ0.hide();
             //     this.greetingQ1.hide();
             //    this.greetingQ2.hide();
             //    this.greetingQ4.hide();
              // this.greetingQ3.hide();
             //    this.greetingQ5.hide();
             //    this.greetingQ6.hide();
                 this.greetingQ7.hide();
                 this.b1.show()
                 this.b2.show()
                 this.b3.show()
                 this.b4.show()
                 this.b5.show()
                 this.b6.show()
                 this.b0.show() 
                 this.b8.show()
                 this.b9.show()
             //    this.greetingQ8.hide();
                this.greeting.hide();
                this.greeting2.hide();
                 this.btans71.hide();
                 this.btans72.hide();
                 this.btans73.hide();
                 this.btans74.hide();
                 if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame();
                 }
             });
             });
         
 
             this.btans71.mousePressed(()=>{
                 this.btans71.hide();
                 this.btans72.hide();
                 this.btans73.hide();
                 this.btans74.hide();
                 this.greeting=createElement("h1");
                
                 this.greeting.html("Sorry, You Are Wrong");
                 count-=20
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                 //this.b0.attribute('disabled','disabled')
                 wrongAns.play();
                 bClicked.stop();
                 this.next=createButton("next");
             this.next.position(displayWidth-300,displayHeight/2+100)
             this.next.mousePressed(()=>{
              this.next.hide();
               //  this.greetingQ0.hide();
             //     this.greetingQ1.hide();
             //    this.greetingQ2.hide();
             //    this.greetingQ4.hide();
              // this.greetingQ3.hide();
             //    this.greetingQ5.hide();
             //    this.greetingQ6.hide();
                 this.greetingQ7.hide();
                 this.b1.show()
                 this.b2.show()
                 this.b3.show()
                 this.b4.show()
                 this.b5.show()
                 this.b6.show()
                 this.b0.show() 
                 this.b8.show()
                 this.b9.show()
             //    this.greetingQ8.hide();
                this.greeting.hide();
                this.greeting2.hide();
                 this.btans71.hide();
                 this.btans72.hide();
                 this.btans73.hide();
                 this.btans74.hide();
                 if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame();
                 }
             });
             });
 
             this.btans72.mousePressed(()=>{
                 this.btans71.hide();
                 this.btans72.hide();
                 this.btans73.hide();
                 this.btans74.hide();
                 this.greeting=createElement("h1");
                 
                 this.greeting.html("Sorry, You Are Wrong");
                 count-=20
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                 //this.b0.attribute('disabled','disabled')
                 wrongAns.play();
                 bClicked.stop();
                 this.next=createButton("next");
             this.next.position(displayWidth-300,displayHeight/2+100)
             this.next.mousePressed(()=>{
              this.next.hide();
               //  this.greetingQ0.hide();
             //     this.greetingQ1.hide();
             //    this.greetingQ2.hide();
             //    this.greetingQ4.hide();
              // this.greetingQ3.hide();
             //    this.greetingQ5.hide();
             //    this.greetingQ6.hide();
                 this.greetingQ7.hide();
                 this.b1.show()
                 this.b2.show()
                 this.b3.show()
                 this.b4.show()
                 this.b5.show()
                 this.b6.show()
                 this.b0.show() 
                 this.b8.show()
                 this.b9.show()
             //    this.greetingQ8.hide();
                this.greeting.hide();
                this.greeting2.hide();
                 this.btans71.hide();
                 this.btans72.hide();
                 this.btans73.hide();
                 this.btans74.hide();
                 if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame();
                 }
             });
             });
 
             this.btans73.mousePressed(()=>{
                 this.btans71.hide();
                 this.btans72.hide();
                 this.btans73.hide();
                 this.btans74.hide();
                 this.greeting=createElement("h1");
                 
                 this.greeting.html("Sorry, You Are Wrong");
                 count-=20
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
               
               // this.b0.attribute('disabled','disabled')
               wrongAns.play();
               bClicked.stop();
               this.next=createButton("next");
             this.next.position(displayWidth-300,displayHeight/2+100)
             this.next.mousePressed(()=>{
              this.next.hide();
               //  this.greetingQ0.hide();
             //     this.greetingQ1.hide();
             //    this.greetingQ2.hide();
             //    this.greetingQ4.hide();
              // this.greetingQ3.hide();
             //    this.greetingQ5.hide();
             //    this.greetingQ6.hide();
                 this.greetingQ7.hide();
                 this.b1.show()
                 this.b2.show()
                 this.b3.show()
                 this.b4.show()
                 this.b5.show()
                 this.b6.show()
                 this.b0.show() 
                 this.b8.show()
                 this.b9.show()
             //    this.greetingQ8.hide();
                this.greeting.hide();
                this.greeting2.hide();
                 this.btans71.hide();
                 this.btans72.hide();
                 this.btans73.hide();
                 this.btans74.hide();
                 if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame();
                 }
             });
             });
             
        });






















        this.b8=createButton("Physics");
        this.b8.position(displayWidth-200,displayHeight/2+90);
        this.b8.class('button');
        this.b8.mousePressed(()=>{
            this.b8.attribute('disabled','')
            this.b8.class('disabled')
            ask+=1
            end+=1
            bClicked.play();
            this.b1.hide()
            this.b2.hide()
            this.b3.hide()
            this.b4.hide()
            this.b5.hide()
            this.b6.hide()
            this.b7.hide()
            this.b0.hide()
            this.b9.hide()
            this.greetingQ8=createElement("h2")
            this.btans81=createButton("Breadth")
            this.btans82=createButton("Length")
            this.btans83=createButton("Weight")
            this.btans84=createButton("Height")
            this.btans81.position(displayWidth/2 - 230, displayHeight/2-195)
            this.btans81.style('backgroundColor','#D9BE8F');
            this.btans82.position(displayWidth/2 - 30, displayHeight/2-195)
            this.btans82.style('backgroundColor','#D9BE8F');
            this.btans83.position(displayWidth/2 - 230, displayHeight/2-95)
            this.btans83.style('backgroundColor','#D9BE8F');
            this.btans84.position(displayWidth/2 - 30, displayHeight/2-95)
            this.btans84.style('backgroundColor','#D9BE8F');
             this.greetingQ8.html("The force of gravity depends on ___________________ of an object?")
             this.greetingQ8.position(displayWidth/2 - 330, displayHeight/2-295)
            
             
 
             this.btans83.mousePressed(()=>{
                 this.btans81.hide();
                 this.btans82.hide();
                 this.btans83.hide();
                 this.btans84.hide();
                 this.greeting=createElement("h1");
                 this.greeting2=createElement("h2");
                 this.greeting.html("Yes, You Are Right");
                 this.greeting2.html("The magnitude is equal to the force of gravity divided by the mass of the object.");
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                 this.greeting2.position(displayWidth/2-350,displayHeight/2-50)
                 //this.b0.attribute('disabled','disabled')
                 correctAns.play();
                 count=count+50
                 bClicked.stop();
                 this.next=createButton("next");
             this.next.position(displayWidth-300,displayHeight/2+100)
             this.next.mousePressed(()=>{
              this.next.hide();
               //  this.greetingQ0.hide();
             //     this.greetingQ1.hide();
             //    this.greetingQ2.hide();
             //    this.greetingQ4.hide();
              // this.greetingQ3.hide();
             //    this.greetingQ5.hide();
             //    this.greetingQ6.hide();
               //  this.greetingQ7.hide();
                 this.greetingQ8.hide();
                 this.b1.show()
                 this.b2.show()
                 this.b3.show()
                 this.b4.show()
                 this.b5.show()
                 this.b6.show()
                 this.b7.show() 
                 this.b0.show()
                 this.b9.show()
                this.greeting.hide();
                this.greeting2.hide();
                 this.btans81.hide();
                 this.btans82.hide();
                 this.btans83.hide();
                 this.btans84.hide();
                 if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame();
                 }
             });
             });
         
 
             this.btans81.mousePressed(()=>{
                 this.btans81.hide();
                 this.btans82.hide();
                 this.btans83.hide();
                 this.btans84.hide();
                 this.greeting=createElement("h1");
                
                 this.greeting.html("Sorry, You Are Wrong");
                 count-=20
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                 //this.b0.attribute('disabled','disabled')
                 wrongAns.play();
                 bClicked.stop();
                 this.next=createButton("next");
             this.next.position(displayWidth-300,displayHeight/2+100)
             this.next.mousePressed(()=>{
              this.next.hide();
               //  this.greetingQ0.hide();
             //     this.greetingQ1.hide();
             //    this.greetingQ2.hide();
             //    this.greetingQ4.hide();
              // this.greetingQ3.hide();
             //    this.greetingQ5.hide();
             //    this.greetingQ6.hide();
               //  this.greetingQ7.hide();
                 this.greetingQ8.hide();
                 this.b1.show()
                 this.b2.show()
                 this.b3.show()
                 this.b4.show()
                 this.b5.show()
                 this.b6.show()
                 this.b7.show() 
                 this.b0.show()
                 this.b9.show()
                this.greeting.hide();
                this.greeting2.hide();
                 this.btans81.hide();
                 this.btans82.hide();
                 this.btans83.hide();
                 this.btans84.hide();
                 if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame();
                 }
             });
             });
 
             this.btans82.mousePressed(()=>{
                 this.btans81.hide();
                 this.btans82.hide();
                 this.btans83.hide();
                 this.btans84.hide();
                 this.greeting=createElement("h1");
                 
                 this.greeting.html("Sorry, You Are Wrong");
                 count-=20
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                 //this.b0.attribute('disabled','disabled')
                 wrongAns.play();
                 bClicked.stop();
                 this.next=createButton("next");
             this.next.position(displayWidth-300,displayHeight/2+100)
             this.next.mousePressed(()=>{
              this.next.hide();
               //  this.greetingQ0.hide();
             //     this.greetingQ1.hide();
             //    this.greetingQ2.hide();
             //    this.greetingQ4.hide();
              // this.greetingQ3.hide();
             //    this.greetingQ5.hide();
             //    this.greetingQ6.hide();
               //  this.greetingQ7.hide();
                 this.greetingQ8.hide();
                 this.b1.show()
                 this.b2.show()
                 this.b3.show()
                 this.b4.show()
                 this.b5.show()
                 this.b6.show()
                 this.b7.show() 
                 this.b0.show()
                 this.b9.show()
                this.greeting.hide();
                this.greeting2.hide();
                 this.btans81.hide();
                 this.btans82.hide();
                 this.btans83.hide();
                 this.btans84.hide();
                 if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame();
                 }
             });
             });
 
             this.btans84.mousePressed(()=>{
                 this.btans81.hide();
                 this.btans82.hide();
                 this.btans83.hide();
                 this.btans84.hide();
                 this.greeting=createElement("h1");
                 
                 this.greeting.html("Sorry, You Are Wrong");
                 count-=20
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
               
               // this.b0.attribute('disabled','disabled')
               wrongAns.play();
               bClicked.stop();
               this.next=createButton("next");
             this.next.position(displayWidth-300,displayHeight/2+100)
             this.next.mousePressed(()=>{
              this.next.hide();
               //  this.greetingQ0.hide();
             //     this.greetingQ1.hide();
             //    this.greetingQ2.hide();
             //    this.greetingQ4.hide();
              // this.greetingQ3.hide();
             //    this.greetingQ5.hide();
             //    this.greetingQ6.hide();
               //  this.greetingQ7.hide();
                 this.greetingQ8.hide();
                 this.b1.show()
                 this.b2.show()
                 this.b3.show()
                 this.b4.show()
                 this.b5.show()
                 this.b6.show()
                 this.b7.show() 
                 this.b0.show()
                 this.b9.show()
                this.greeting.hide();
                this.greeting2.hide();
                 this.btans81.hide();
                 this.btans82.hide();
                 this.btans83.hide();
                 this.btans84.hide();
                 if(ask===3){
                  
                 
                  var deal=new Deal();
                  deal.display();
                }
                if(end===10){
                  var deal2= new Deal();
                  deal2.endGame();
                 }
             });
             });
             
        });



































        
        

        this.b9=createButton("Sports");
        this.b9.position(displayWidth-200,displayHeight/2+150);
        this.b9.class('button');
        this.b9.mousePressed(()=>{
            this.b9.attribute('disabled','')
            this.b9.class('disabled')
            ask+=1
            end+=1
            bClicked.play();
            this.b1.hide()
            this.b2.hide()
            this.b3.hide()
            this.b4.hide()
            this.b5.hide()
            this.b6.hide()
            this.b7.hide()
            this.b8.hide()
            this.b0.hide()
            this.greetingQ9=createElement("h2")
            this.btans91=createButton("Cricket")
            this.btans92=createButton("Basketball")
            this.btans93=createButton("football")
            this.btans94=createButton("Chess")
            this.btans91.position(displayWidth/2 - 230, displayHeight/2-195)
            this.btans91.style('backgroundColor','#E8A0AB');
            this.btans92.position(displayWidth/2 - 30, displayHeight/2-195)
            this.btans92.style('backgroundColor','#E8A0AB');
            this.btans93.position(displayWidth/2 - 230, displayHeight/2-95)
            this.btans93.style('backgroundColor','#E8A0AB');
            this.btans94.position(displayWidth/2 - 30, displayHeight/2-95)
            this.btans94.style('backgroundColor','#E8A0AB');
             this.greetingQ9.html("Which sport does LBW refers to?")
             this.greetingQ9.position(displayWidth/2 - 230, displayHeight/2-295)
            
             
 
             this.btans91.mousePressed(()=>{
                 this.btans91.hide();
                 this.btans92.hide();
                 this.btans93.hide();
                 this.btans94.hide();
                 this.greeting=createElement("h1");
                 this.greeting2=createElement("h2");
                 this.greeting.html("Yes, You Are Right");
                 this.greeting2.html("Leg before wicket is one of the ways in which a batsman can be dismissed in the sport of cricket.");
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                 this.greeting2.position(displayWidth/2-500,displayHeight/2-50)
                 //this.b0.attribute('disabled','disabled')
                 correctAns.play();
                 count=count+50
                 bClicked.stop();
                 this.next=createButton("next");
                 this.next.position(displayWidth-300,displayHeight/2+100)
                 this.next.mousePressed(()=>{
                  this.next.hide();
                   //  this.greetingQ0.hide();
                 //     this.greetingQ1.hide();
                 //    this.greetingQ2.hide();
                 //    this.greetingQ4.hide();
                  // this.greetingQ3.hide();
                 //    this.greetingQ5.hide();
                 //    this.greetingQ6.hide();
                   //  this.greetingQ7.hide();
                    // this.greetingQ8.hide();
                    this.greetingQ9.hide();
                    this.b1.show()
                    this.b2.show()
                    this.b3.show()
                    this.b4.show()
                    this.b5.show()
                    this.b6.show()
                    this.b7.show() 
                    this.b8.show()
                    this.b0.show()
                    this.greeting.hide();
                    this.greeting2.hide();
                     this.btans91.hide();
                     this.btans92.hide();
                     this.btans93.hide();
                     this.btans94.hide();
                     if(ask===3){
                  
                 
                      var deal=new Deal();
                      deal.display();
                    }
                    if(end===10){
                      var deal2= new Deal();
                      deal2.endGame();
                     }
                 });
             });
         
 
             this.btans93.mousePressed(()=>{
                 this.btans91.hide();
                 this.btans92.hide();
                 this.btans93.hide();
                 this.btans94.hide();
                 this.greeting=createElement("h1");
                
                 this.greeting.html("Sorry, You Are Wrong");
                 count-=20
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                 //this.b0.attribute('disabled','disabled')
                 wrongAns.play();
                 bClicked.stop();
                 this.next=createButton("next");
                 this.next.position(displayWidth-300,displayHeight/2+100)
                 this.next.mousePressed(()=>{
                  this.next.hide();
                   //  this.greetingQ0.hide();
                 //     this.greetingQ1.hide();
                 //    this.greetingQ2.hide();
                 //    this.greetingQ4.hide();
                  // this.greetingQ3.hide();
                 //    this.greetingQ5.hide();
                 //    this.greetingQ6.hide();
                   //  this.greetingQ7.hide();
                    // this.greetingQ8.hide();
                    this.greetingQ9.hide();
                    this.b1.show()
                    this.b2.show()
                    this.b3.show()
                    this.b4.show()
                    this.b5.show()
                    this.b6.show()
                    this.b7.show() 
                    this.b8.show()
                    this.b0.show()
                    this.greeting.hide();
                    this.greeting2.hide();
                     this.btans91.hide();
                     this.btans92.hide();
                     this.btans93.hide();
                     this.btans94.hide();
                     if(ask===3){
                  
                 
                      var deal=new Deal();
                      deal.display();
                    }
                    if(end===10){
                      var deal2= new Deal();
                      deal2.endGame();
                     }
                 });
             });
 
             this.btans92.mousePressed(()=>{
                 this.btans91.hide();
                 this.btans92.hide();
                 this.btans93.hide();
                 this.btans94.hide();
                 this.greeting=createElement("h1");
                 
                 this.greeting.html("Sorry, You Are Wrong");
                 count-=20
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
                 //this.b0.attribute('disabled','disabled')
                 wrongAns.play();
                 bClicked.stop();
                 this.next=createButton("next");
                 this.next.position(displayWidth-300,displayHeight/2+100)
                 this.next.mousePressed(()=>{
                  this.next.hide();
                   //  this.greetingQ0.hide();
                 //     this.greetingQ1.hide();
                 //    this.greetingQ2.hide();
                 //    this.greetingQ4.hide();
                  // this.greetingQ3.hide();
                 //    this.greetingQ5.hide();
                 //    this.greetingQ6.hide();
                   //  this.greetingQ7.hide();
                    // this.greetingQ8.hide();
                    this.greetingQ9.hide();
                    this.b1.show()
                    this.b2.show()
                    this.b3.show()
                    this.b4.show()
                    this.b5.show()
                    this.b6.show()
                    this.b7.show() 
                    this.b8.show()
                    this.b0.show()
                    this.greeting.hide();
                    //this.greeting2.hide();
                     this.btans91.hide();
                     this.btans92.hide();
                     this.btans93.hide();
                     this.btans94.hide();
                     if(ask===3){
                  
                 
                      var deal=new Deal();
                      deal.display();
                    }
                    if(end===10){
                      var deal2= new Deal();
                      deal2.endGame();
                     }
                 });
             });
 
             this.btans94.mousePressed(()=>{
                 this.btans91.hide();
                 this.btans92.hide();
                 this.btans93.hide();
                 this.btans94.hide();
                 this.greeting=createElement("h1");
                 
                 this.greeting.html("Sorry, You Are Wrong");
                 count-=20
                 this.greeting.position(displayWidth/2-150,displayHeight/2-150)
              
               // this.b0.attribute('disabled','disabled')
               wrongAns.play();
               bClicked.stop();
               this.next=createButton("next");
               this.next.position(displayWidth-300,displayHeight/2+100)
               this.next.mousePressed(()=>{
                 this.next.hide();
                 //  this.greetingQ0.hide();
               //     this.greetingQ1.hide();
               //    this.greetingQ2.hide();
               //    this.greetingQ4.hide();
                // this.greetingQ3.hide();
               //    this.greetingQ5.hide();
               //    this.greetingQ6.hide();
                 //  this.greetingQ7.hide();
                  // this.greetingQ8.hide();
                  this.greetingQ9.hide();
                  this.b1.show()
                  this.b2.show()
                  this.b3.show()
                  this.b4.show()
                  this.b5.show()
                  this.b6.show()
                  this.b7.show() 
                  this.b8.show()
                  this.b0.show()
                  this.greeting.hide();
                  this.greeting2.hide();
                   this.btans91.hide();
                   this.btans92.hide();
                   this.btans93.hide();
                   this.btans94.hide();
                   if(ask===3){
                  
                 
                    var deal=new Deal();
                    deal.display();
                  }
                  if(end===10){
                    var deal2= new Deal();
                    deal2.endGame();
                   }
               });
             });
            
        });

    }
    showMainButtons(){
      
      this.b0.show()
      this.b1.show()
             
             this.b2.show();
             this.b3.show()
             this.b4.show()
             this.b5.show()
             this.b6.show()
             this.b7.show() 
             this.b8.show()
             this.b9.show()
    }
    hideMainButtons(){
      this.b0.hide()
      this.b1.hide()
      this.b2.hide()
      this.b3.hide()
      this.b4.hide()
      this.b5.hide()
      this.b6.hide()
      this.b7.hide()
      this.b8.hide()
      this.b9.hide()
    }
    }

