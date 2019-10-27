const helloWorld = artifacts.require("HelloWorld");

// Create a new instance of the smart contract to test
contract("HelloWorld", () => {
    it ("Should deploy the smart contract properly", async () => {
        const helloWorldContract = await helloWorld.deployed();
        assert(helloWorldContract.address != "");
    }),

    it ("Prints hello World", async () => {
        const helloWorldContract = await helloWorld.deployed();
        const result = await helloWorldContract.helloWorld();
        assert(result == "Hello World");
    })
});