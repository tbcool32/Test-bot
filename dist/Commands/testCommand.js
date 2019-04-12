"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class testcommand {
    constructor() {
        this._command = "testCommand";
    }
    help() {
        return "This command does nothing";
        throw new Error("Method not implemented.");
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runcommand(args, msgObject, client) {
        msgObject.channel.send("IT WORKED!");
    }
}
exports.default = testcommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdENvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ29tbWFuZHMvdGVzdENvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxNQUFxQixXQUFXO0lBQWhDO1FBQ3FCLGFBQVEsR0FBRSxhQUFhLENBQUE7SUFxQjVDLENBQUM7SUFuQkcsSUFBSTtRQUNBLE9BQU0sMkJBQTJCLENBQUE7UUFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBRy9DLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBSXJDLENBQUM7SUFDRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFDMUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7SUFFdkMsQ0FBQztDQUdKO0FBdEJELDhCQXNCQyJ9