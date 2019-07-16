export class Instances {
    Instances: Instance[];
}
export class Instance {
    Email: string;
    EmployeeID: string;
    InstanceName: string;
    constructor(email: string, employeeId: string, instanceName: string){
        this.Email = email;
        this.EmployeeID = employeeId;
        this.InstanceName = instanceName;
    }
}

