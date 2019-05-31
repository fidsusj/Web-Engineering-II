export class Todo {
  // wenn public in argumentliste, dann wird automatisch ein property feld angelegt
  constructor(
    public name: string,
    public done: boolean = false,
    public id?: number,  // private id: number | undefined
  ) {}
}
