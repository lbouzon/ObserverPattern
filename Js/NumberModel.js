class NumberModel {
	constructor() {
	this.number = 0;	
	this.color = 'red';
    this.observers = [];
  }

  
  increment(){
	  const colors = ['orange','red','green','blue'];
	  this.number++;
	  this.color = colors [Math.floor(Math.random()* colors.length)];
	  this.notifyObservers();
  }
  
  addObserver(o) {
    this.observers.push(o);
  }

  unsubscribe(f) {
    this.observers = this.observers.filter(subscriber => subscriber !== f);
  }

  notifyObservers() {
	for (let o of this.observers){
		o.update(this);
	}
  }
}
