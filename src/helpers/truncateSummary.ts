export const truncateSummary = (summary: string) => {
  if (!!summary && summary.length > 100) {
    return summary.slice(0, 100) + '...';
  }
  return summary;
};
