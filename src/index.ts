console.log('hello');
// import * as core from "@actions/core";
// import * as github from "@actions/github";
//
// const run = async () => {
//   const token = core.getInput("token", { required: true });
//   const label = core.getInput("label", { required: true });
//   const pr = github.context.payload.pull_request;
//
//   if (pr == null) {
//     return console.log(
//       "Could not get pull request number from context, exiting"
//     );
//   }
//
//   const client = new github.GitHub(token);
//
//   client.issues.addLabels({
//     owner: github.context.repo.owner,
//     repo: github.context.repo.repo,
//     issue_number: pr.number,
//     labels: [label]
//   });
// };
//
// (async () => {
//   try {
//     await run();
//   } catch (e) {
//     core.error(e);
//     core.setFailed(e.message);
//   }
// })();
