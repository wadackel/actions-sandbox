"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const github = __importStar(require("@actions/github"));
const run = () => __awaiter(this, void 0, void 0, function* () {
    const token = core.getInput("token", { required: true });
    const label = core.getInput("label", { required: true });
    const pr = github.context.payload.pull_request;
    if (pr == null) {
        return console.log("Could not get pull request number from context, exiting");
    }
    const client = new github.GitHub(token);
    client.issues.addLabels({
        owner: github.context.repo.owner,
        repo: github.context.repo.repo,
        issue_number: pr.number,
        labels: [label]
    });
});
(() => __awaiter(this, void 0, void 0, function* () {
    try {
        yield run();
    }
    catch (e) {
        core.error(e);
        core.setFailed(e.message);
    }
}))();
