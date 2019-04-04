export class PublishSubscribeHandler {
  static eventMap: Map<PubSubEvent, Function[]> = new Map();

  public static register(eventCode: PubSubEvent, callback: Function): void {
    if (this.eventMap.has(eventCode)) {
      this.eventMap.get(eventCode)!.push(callback);
    } else {
      this.eventMap.set(eventCode, [callback]);
    }
  }

  public static raiseEvent(eventCode: PubSubEvent, params: any): void {
    if (!this.eventMap.has(eventCode)) {
      return;
    }
    this.eventMap.get(eventCode)!.forEach(element => {
      console.log("Calling Function for EventCode : " + eventCode);
      console.log("Calling Function for EventCode, Function Def : " + element);
      element(params);
    });
  }
}

export enum PubSubEvent {
  FiltersUpdated,
  ReloadAllItems
}

export default PublishSubscribeHandler;
