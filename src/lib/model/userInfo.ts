// ユーザー情報
export class UserInfo {
    id: Number
    name: String
    password: String

    constructor(id: Number, name: String, password: String) {
        this.id = id
        this.name = name
        this.password = password
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            password: this.password
         };
    }

    static fromJSON(jsonString: string): UserInfo {
        const jsonObj = JSON.parse(jsonString);
        return new UserInfo(jsonObj.id, jsonObj.name, jsonObj.password);
    }
}
