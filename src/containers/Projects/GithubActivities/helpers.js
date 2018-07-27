export const getActionFromType = (type, pullRequestAction) => {
  if (type === 'CreateEvent') {
    return 'Create new branch';
  } else if (type === 'PushEvent') {
    return 'Pushed to';
  };

  if(pullRequestAction === 'opened') {
    return 'Opened a pull request';
  }

  return 'Merge branch';
};
