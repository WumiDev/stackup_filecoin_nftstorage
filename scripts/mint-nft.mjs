const CONTRACT_ADDRESS = "0x53bf6a2c5cAd8AD2f9fff3A44B056db3051a0866";
const META_DATA_URL = "ipfs://bafyreifyhuhvso6gjn7i7e2dida7jcrv7nbqq22446vi4j4gulci4f37gu/metadata.json";

// Function to mint NFT
async function mintNFT(contractAddress, metaDataURL) {
  const ExampleNFT = await ethers.getContractFactory("ExampleNFT");
  const [owner] = await ethers.getSigners();
  await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL);
  console.log("NFT minted to: ", owner.address);
 }

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
