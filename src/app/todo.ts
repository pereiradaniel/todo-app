export class Todo {
  id: number;
  title: string ='';
  complete: boolen = false;

  constructor(values: Object = {}) {
      Object.assign(this, values);
  }
}
