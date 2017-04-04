(function(){

var app = angular.module('game', []);

app.controller('GameController', function(){
  this.name = 'Hello';

  this.showBacklog = false;
  this.lines = ["I hear Jerusalem bells a-ringing", "Roman calvary choirs are singing", "Be my mirror, my sword and shield", "My missionaries in a foreign field", "For some reason I can't explain", "I know St. Peter won't call my name"];
  this.imageChanges = [1,2,4];
  this.images = ['res/images/pic1.jpg','res/images/pic2.jpg', 'res/images/pic3.jpg'];
  this.currentLine = 0;
  this.currentImage = 0;

  this.forward = function(){
    if(this.currentLine === this.imageChanges[this.currentImage]){
      this.currentImage++;
    }
    if(this.currentLine < this.lines.length -1){
      this.currentLine++;
    }
  };

  this.toggleBacklog = function(){
    this.showBacklog = !this.showBacklog;
  };

});

}());
