/**
 * scaffold create tool.
 */

export class ScaffoldCreator {
  private _name: string = "";
  constructor(name: string) {
    this._name = name;
  }

  // 定制一个命令
  public command(commandName: string) {
    return this;
  }

  // 命令的描述
  public description(description: string) {
    return this;
  }

  // 指定 command 的 opiton
  public option(name: string) {
    return this;
  }

  // 指定option的别名
  public optionAlias(name: string) {
    return this;
  }

  // 操作
  public action(callback) {
    return this;
  }

  // 结束一个配置
  public end() {
    return this;
  }

  // 按步骤执行
  public step(thenableCallback) {
    return this;
  }

  //启动脚手架
  public start() {}
}

/**
 * 创建脚手架工具
 * 
 * 1. 单条命令展示：test ls
 * 2. 按步骤运行.
 */

// 根命令
const creator = new ScaffoldCreator("love");

// 注册命令
creator
  .description("默认命令")
  .action(() => {
    console.log("执行默认命令");
  })
  .end();

// 注册单条命令
creator
  .command("ls")
  .option("-V")
  .optionAlias("--version")
  .action(() => {
    console.log("运行了ls命令");
  })
  .end();

// 注册单条命令（拥有子命令）
creator.command("create");

creator
  .command("ls")
  .step(() => console.log("step 1"))
  .step(() => console.log("step 2"))
  .step(() => console.log("step 3"))
  .step(() => console.log("step 4"))
  .end();

creator.start();
