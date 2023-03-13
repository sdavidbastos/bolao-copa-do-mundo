import { describe, expect, it } from "vitest";
import { Api } from "../api/api";

describe("test singleton", () => {
    it("should equal", () => {
        const [api1, api2] = [Api.getInstance(),Api.getInstance()];
        const [service1, service2] = [Api.getInstance().userService, Api.getInstance().userService];

        expect(api1).toEqual(api2);
        expect(service1).toEqual(service2);
    })
})