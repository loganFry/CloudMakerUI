export class Instances {
    Instances: Instance[];
}
export class Instance {
    instance_name: string;
    id: string;
    email: string;
    
    constructor(email: string, employeeId: string, instanceName: string){
        this.email = email;
        this.id = employeeId;
        this.instance_name = instanceName;
    }
}

