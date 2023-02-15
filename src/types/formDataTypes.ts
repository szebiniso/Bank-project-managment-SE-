export interface RegisterDataTypes {
    data: {
        first_name: string
        last_name: string,
        phone_number: string,
        email: string,
        password: string,
        role: string
    }
    navigate?:any
}

export interface AuthDataTypes {
    data: {
        email: string;
        password: string;
    }
    navigate? : any;
}