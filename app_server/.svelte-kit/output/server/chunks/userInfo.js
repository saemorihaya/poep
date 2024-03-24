class UserInfo {
  id;
  name;
  password;
  constructor(id, name, password) {
    this.id = id;
    this.name = name;
    this.password = password;
  }
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      password: this.password
    };
  }
  static fromJSON(jsonString) {
    const jsonObj = JSON.parse(jsonString);
    return new UserInfo(jsonObj.id, jsonObj.name, jsonObj.password);
  }
}
export {
  UserInfo as U
};
