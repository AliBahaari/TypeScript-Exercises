const cryptoModule = require("crypto");

class Block {
  timestamp: any;
  currentBlockHash: string;

  constructor(private data: any, public previousBlockHash?: string) {
    this.timestamp = Date.now();
    this.currentBlockHash = this.computeHash();
  }

  public computeHash(): string {
    const blockHash = `${this.previousBlockHash}${
      this.timestamp
    }${Object.values(this.data)
      .map((value) => value)
      .join("")}`;

    return cryptoModule.createHash("SHA256").update(blockHash).digest("hex");
  }
}

class Blockchain {
  private blocks: Block[] = [];

  constructor() {
    this.blocks = [this.startGenesisBlock()];
  }

  private startGenesisBlock(): Block {
    return new Block({}, "0");
  }

  private obtainLatestBlock(): Block {
    return this.blocks[this.blocks.length - 1];
  }

  public addNewBlock(block: Block): void {
    block.previousBlockHash = this.obtainLatestBlock().currentBlockHash;
    block.currentBlockHash = block.computeHash();
    this.blocks.push(block);
  }

  public blocksNumber(): number {
    return this.blocks.length;
  }

  public checkChainValidity(): boolean {
    for (let i = 0; i < this.blocks.length; i++) {
      const currentBlock = this.blocks?.[i];
      const previousBlock = this.blocks?.[i - 1];

      if (currentBlock && previousBlock) {
        if (currentBlock.currentBlockHash !== currentBlock.computeHash()) {
          return false;
        }

        if (currentBlock.previousBlockHash !== previousBlock.currentBlockHash) {
          return false;
        }
      }
    }
    return true;
  }
}

const firstBlock = new Block({ name: "Ali", family: "Bahaari" });
const secondBlock = new Block({ name: "Payaam", family: "Bahaari" });

const chain = new Blockchain();
chain.addNewBlock(firstBlock);
chain.addNewBlock(secondBlock);

console.log(chain);
console.log("Validity: " + chain.checkChainValidity());
console.log(chain.blocksNumber());
