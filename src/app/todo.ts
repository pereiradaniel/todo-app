// Each Todo instance will have three properties:
//    id:         number, unique ID of the todo item
//    title:      string, title of the todo item
//    compelte:   boolean, whether or not the todo item is complete
export class Todo {
  id: number;
  title: string ='';
  complete: boolen = false;

  constructor(values: Object = {}) {
      Object.assign(this, values);
  }
}
