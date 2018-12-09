



export interface IProfileArgs {
    _id?: string;
    name: string;
    removable?: boolean;
    editable?: boolean;
}


interface IProfile extends IProfileArgs {
    valid();
}


export abstract class Profile implements IProfile {
   
    name: string;
    age: number
    constructor(args ) {
       if (!args) {
           // create default or throw error 
       }
       this.name = args.name;
       this.age = args.age;
    }
    valid() {
        return undefined;
    }
}
