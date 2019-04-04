/* Implement PublishSubscribeHandler
2 Methods to be implemented
  1- register(eventCode: PubSubEvent, callback: Function):
  2- raiseEvent(eventCode: PubSubEvent, params: any)

  Hint - Use  eventMap: Map<PubSubEvent, Function[]> = new Map(); 
*/
export class PublishSubscribeHandler {}

export enum PubSubEvent {
  FiltersUpdated,
  ReloadAllItems
}

export default PublishSubscribeHandler;
