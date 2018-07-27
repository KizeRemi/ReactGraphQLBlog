export const getActionFromType = (type, pullRequestAction) => {
  if (type === 'CreateEvent') {
    return 'Create new branch';
  } else if (type === 'PushEvent') {
    return 'Pushed to';
  } else {
    if(pullRequestAction === 'opened') {
      return 'Opened a pull request';
    } else {
      return 'Merge branch';
    };
  };
};
