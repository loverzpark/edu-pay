export interface User {
    id: number;
    name: string;
    invoicenumber: string;
    creationDate: string;
    dueDate: string;
    term: string;
    students: number;
    student: number;
}

export interface CreateBills {
    schoolName:  string;
    logo: ImageData;
    address: string;
}
