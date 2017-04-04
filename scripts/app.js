(function(){

var app = angular.module('game', []);

app.controller('GameController', function(){
  this.name = 'Hello';
  this.currentTab = 'game';

  this.backlogQueue = [];

  this.showBacklog = false;
  this.lines = ["I hear Jerusalem bells a-ringing", "Roman calvary choirs are singing", "Be my mirror, my sword and shield", "My missionaries in a foreign field", "For some reason I can't explain", "I know St. Peter won't call my name"];
  this.imageChanges = [1,2,4];
  this.images = ["res/images/pic1.jpg", "res/images/pic2.jpg", "res/images/pic3.jpg", "res/images/pic1.jpg"];
  this.currentLine = 0;
  this.currentImage = 0;

  this.backgroundImage = this.images[this.currentImage];

  this.forward = function(){
    if(this.currentTab === 'game'){
      if(this.textboxHidden){
        this.textboxHidden = false;
      } else {
        if(this.currentLine === this.imageChanges[this.currentImage]){
          this.currentImage++;
          this.backgroundImage = this.images[this.currentImage];
        }
        if(this.currentLine < this.lines.length -1){
          this.backlogQueue.push(this.lines[this.currentLine]);
          if(this.backlogQueue.length > 10){
            this.backlogQueue.splice(0,1);
          }
          this.currentLine++;
        }
      }

    }

  };

  this.toggleBacklog = function(){
    this.showBacklog = !this.showBacklog;
  };

  this.setBacklog = function(backBool){
    this.showBacklog = backBool;
  };

  this.setTab = function(tab){
    this.currentTab = tab;
    if(tab === 'game'){
      this.backgroundImage = this.images[this.currentImage];
    } else {
      this.backgroundImage = 'res/images/gallerybg.png'; //change to jpg later lmao
    }
  };

});


app.controller('GalleryController', function(){
  this.expand = function(){

  };

});

app.controller('SettingsController', function(){
  this.size = '10%';
  this.name = "Hello";

});

}());
