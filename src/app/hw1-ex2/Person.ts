import { Phone } from './Phone';

export class Person
{
    public name: string;
    public age: number;
    public phones: Phone[] = [];

    constructor(name: string, age: number)
    {
        this.name = name;
        this.age = age;
    }

    public addPhone(phone: Phone) : Person
    {
        this.phones.push(phone);
        return this;
    }
}