// argument.js
module.exports = [
  "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
  [
    {
      metadata: {
        name: "AccountExtension",
        metadataURI: "ipfs://QmSKJFE3NJv6t2Wmb35rnHJ1ae1RQSUWmKH12DXxMQ4Uyp",
        implementation: "0x80157dbf0eb11925de2cd5bb8ba2cc3c461ee6cc",
      },
      functions: [
        {
          functionSelector: "0xe8a3d485",
          functionSignature: "contractURI()",
        },
        {
          functionSelector: "0xb61d27f6",
          functionSignature: "execute(address,uint256,bytes)",
        },
        {
          functionSelector: "0x47e1da2a",
          functionSignature: "executeBatch(address[],uint256[],bytes[])",
        },
        {
          functionSelector: "0x8b52d723",
          functionSignature: "getAllActiveSigners()",
        },
        {
          functionSelector: "0xe9523c97",
          functionSignature: "getAllAdmins()",
        },
        {
          functionSelector: "0xd42f2f35",
          functionSignature: "getAllSigners()",
        },
        {
          functionSelector: "0xf15d424e",
          functionSignature: "getPermissionsForSigner(address)",
        },
        {
          functionSelector: "0x7dff5a79",
          functionSignature: "isActiveSigner(address)",
        },
        {
          functionSelector: "0x24d7806c",
          functionSignature: "isAdmin(address)",
        },
        {
          functionSelector: "0xbc197c81",
          functionSignature:
            "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)",
        },
        {
          functionSelector: "0xf23a6e61",
          functionSignature:
            "onERC1155Received(address,address,uint256,uint256,bytes)",
        },
        {
          functionSelector: "0x150b7a02",
          functionSignature: "onERC721Received(address,address,uint256,bytes)",
        },
        {
          functionSelector: "0x4b0bddd2",
          functionSignature: "setAdmin(address,bool)",
        },
        {
          functionSelector: "0x938e3d7b",
          functionSignature: "setContractURI(string)",
        },
        {
          functionSelector: "0x40053da6",
          functionSignature:
            "setPermissionsForSigner((address,address[],uint256,uint128,uint128,uint128,uint128,bytes32),bytes)",
        },
        {
          functionSelector: "0x01ffc9a7",
          functionSignature: "supportsInterface(bytes4)",
        },
        {
          functionSelector: "0x73e925d6",
          functionSignature:
            "verifySignerPermissionRequest((address,address[],uint256,uint128,uint128,uint128,uint128,bytes32),bytes)",
        },
      ],
    },
  ],
];
