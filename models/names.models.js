const names = [{ id: 1, name: "Fabrizzio" }];
let history = 1;

export class Name {
  constructor(name) {
    this.name = name;
  }

  save() {
    history++;
    let name = this.name;
    names.push({ id: history, name });
  }
  static fetchById(id) {
    const nameByID = names.find((e) => e.id === Number(id));
    return nameByID;
  }

  static fetchAll() {
    return names;
  }
}
