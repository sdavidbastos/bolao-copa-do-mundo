import { User } from "../../api/entities/User";
import { faker } from '@faker-js/faker';

export class UserBuilder {
    id: string = faker.name.fullName();
    name: string = faker.name.fullName();
    email: string = faker.helpers.unique(faker.internet.email, [
        this.name,
      ]);
    password: string = "123456";
    isAdmin: boolean = false;
    score: number = faker.datatype.number({min: 0, max: 10});

    build(): User {
        return new User({ id: this.id, name: this.name, email: this.email, password: this.email, isAdmin: this.isAdmin, score: this.score })
    }
}