export interface TestContext {
    keys(): string[];
    <T>(id: string): T;
}
