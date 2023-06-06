


class TestSuite {
    constructor() {
        this.testChain = [];
    }

    addTest(testFn) {
        this.testChain.push(testFn);
        return this;
    }

    run() {
        for (const testFn of this.testChain) {
            testFn();
        }
    }

}
export default TestSuite