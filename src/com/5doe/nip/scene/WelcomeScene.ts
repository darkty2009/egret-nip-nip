/**
 *
 * @author 
 *
 */
class WelcomeScene extends egret.DisplayObjectContainer {
	public constructor() {
        super();
        if(this.stage) {
            this.initialize();
        } else {
            this.addEventListener(egret.Event.ADDED_TO_STAGE,this.initialize,this);
        }
	}
	
	private initialize():void {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.initialize,this);
        
        console.log(this.stage);
	}
}
