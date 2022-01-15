// TESTING WITH JEST

import { ParallaxItem } from "./parallaxItemConstructor";

// Assets importation
import cloudTest from "../../Assets/Clouds/cloud-test.svg";

describe("ParallaxItem constructor ...", () => {
    test("... is defined", () => {
        const result = new ParallaxItem("alt", 0, 0, true, 0, 0, cloudTest, 100, 0)
        expect(result).toBeDefined();
    })

    test("... function updateWidth return width in px", () => {
        const result = new ParallaxItem("alt", 0, 0, true, 0, 0, cloudTest, 100, 0)
        expect(result.updateWidth(0)).toBe('100px');
    })
})