const github = require('@actions/github');
const core = require('@actions/core');

const token = process.argv[2];
const owner = 'tsuyoshiwada';
const repo = 'actions-sandbox';
const project_name = 'sandbox';
const project_column = 'column1';

const octokit = new github.GitHub(token);

(async () => {
  const { data: projects } = await octokit.projects.listForRepo({ owner, repo });
  const project = projects.find((p) => p.name === target);
  if (project == null) {
    console.log('project does not exist');
    process.exit(0);
  }

  const columns = await octokit.projects.listColumns({ project_id: project.id });
  const column = columns.find((c) => c.name === project_column);
  if (column == null) {
    console.log('column does not exist');
    process.exit(0);
  }

  const cards = await octokit.projects.listCards({ column_id: column.id });

  console.log(cards.length);

  for (const card of cards) {
    console.log(card.id, card.note, card.url);
  }
})();
