pragma solidity ^0.5.8;

contract SimpleStorage {
    
    string public data = "My data";
    
    function setData (string memory _data) public {
        data = _data;
    }
    
    function getData () public view returns (string memory) {
        return data;
    }
}