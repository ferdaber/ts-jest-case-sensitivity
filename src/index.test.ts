/// <reference types="package-with-exports/globaltypes" />
//  ^ the above reference will fail because it relies on ServiceHost to have `useCaseSensitiveFileNames` set when initialized
// if the working directory in which ts-jest is being run has a capital letter in its absolute path
// in https://github.com/kulshekhar/ts-jest/blob/83c0c1ec148c8c440b02c381bd4c79ba9ce2767f/src/legacy/compiler/ts-compiler.ts#L287
// the default implementation in TS is: https://github.com/microsoft/TypeScript/blob/f5ad78720fa8ba2d4ea693073264b4cb4e8abe5e/src/compiler/sys.ts#L1675

import type {} from "package-with-exports/globaltypes";
import { value as A } from "package-with-exports/a";
import { value as B } from "package-with-exports/b";
import type { value as C } from "package-with-exports/c";
import { Main } from "package-with-main";

export function takeMain(main: Main): void {}

new Main();

test("Sample", () => {
    expect(typeof A).toBe("string");
    expect(typeof B).toBe("string");
    const c: typeof C = "";
    expect(typeof c).toBe("string");
    expect(true).toBe(true);
});
