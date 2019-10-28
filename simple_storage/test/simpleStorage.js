const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", () => {
    it("Should set the value of data variable", async () => {
        const simpleStorage = await SimpleStorage.deployed();
        await simpleStorage.setData("New Data");
    });

    it("The value of data is changed", async () => {
        const simpleStorage = await SimpleStorage.deployed();
        const result = await simpleStorage.getData();
        assert(result == "New Data");
    });
});