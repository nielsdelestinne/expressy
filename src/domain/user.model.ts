export class User {

    constructor(
        public _id: number,
        public _name: string,
        public _nickname: string,
        public _email: string)
    { }


    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get nickname(): string {
        return this._nickname;
    }

    get email(): string {
        return this._email;
    }
}
