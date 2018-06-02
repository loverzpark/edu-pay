/* SystemJS module definition */
export {};

declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare var jQuery: any;
interface Document {
    msExitFullscreen: any;
    mozCancelFullScreen: any;
    mozFullScreenElement:any;
    msFullscreenElement:any;
}



