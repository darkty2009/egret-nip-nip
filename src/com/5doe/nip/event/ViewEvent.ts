/**
 *
 * @author 
 *
 */
class ViewEvent extends Event {
	public constructor() {
        super();
	}
	
    public sceneName: String;
    
    public getSceneInstance():egret.DisplayObjectContainer {
        var instance = null;
        switch(this.sceneName) {
            case 'Welcome': instance = new WelcomeScene; break;
            case 'Loading': instance = new LoadingScene; break;
            case 'Game': instance = new GameScene; break;
            case 'Result': instance = new ResultScene; break;
            case 'Top': instance = new TopScene; break;
        }
        
        return instance;
    }
}
