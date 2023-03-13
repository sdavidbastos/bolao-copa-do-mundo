import { User } from "../../core/entities/User";
import { faker } from '@faker-js/faker';
export class UserBuilder {
    id: string = faker.name.fullName();
    name: string = faker.name.fullName();
    email: string = faker.helpers.unique(faker.internet.email, [
        this.name,
    ]);
    password: string = faker.random.alpha(10);
    isAdmin: boolean = faker.datatype.boolean();
    score: number = faker.datatype.number({ min: 0, max: 10 });

    setId(id: string) {
        this.id = id
        return this
    }
    build(): User {
        return new User({ id: this.id, name: this.name, email: this.email, password: this.email, isAdmin: this.isAdmin, score: this.score })
    }
}