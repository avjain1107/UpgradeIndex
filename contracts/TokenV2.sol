//SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract TokenV2 is Initializable {
    uint256 public value;

    function initialize() public initializer {}

    constructor() initializer {}

    function store(uint256 _value) public {
        value = _value;
    }

    // function increase() external {
    //     value += 1;
    // }
}
