// create a variable to hold your NFT's
let nft_arr = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, creator) {
    let nft = {
        name: name,
        description: description,
        creator: creator,
        dateMinted: new Date()
    };
    nft_arr.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nft_arr.length; i++) {
        console.log("Name of the NFT : " + nft_arr[i].name);
        console.log("Description : " + nft_arr[i].description);
        console.log("Created By : " + nft_arr[i].creator);
        console.log("Date Minted : " + nft_arr[i].dateMinted);
        console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*");
        console.log();
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nft_arr.length;
}

// call your functions below this line
mintNFT("NFT 1", "First NFT", "Saswat Samantaray");
mintNFT("NFT 2", "Second NFT", "Deepesh Senapati");
mintNFT("NFT 3", "Third NFT", "Sambit Sahoo");
mintNFT("NFT 4", "Forth NFT", "Amit Kumar Jha");

listNFTs();
console.log("Total No of Supply: " + getTotalSupply());
