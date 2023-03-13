import { beforeEach, describe, expect, it } from 'vitest'
import { User } from '../../api/entities/User'

import { userFactory } from "../../api/factories"
import { IUser } from '../../types'

const { userData: data, userService: service } = userFactory()
const user: IUser = { name: "David", email: "david@david.com", password: "123"}

beforeEach(() => {
    data.length = 0
})

describe("User Service", () => {
    it("should save new user", () => {
        service.save(user)

        const result = data[0]
        expect(result).toMatchObject(user);
        expect(result.id).not.toBe("")
    })

    it("should signUp", () => {
        const userObj = service.signUp(user)
        const result = data[0]
        expect(userObj).toMatchObject(result)
    })
})