const datasetName = 'fhir_dataset_multiple_sources';
const paramTimestampSubIntervalIntegerValue = 361;
const paramTimestampSubIntervalDatePartValue = 'MINUTE';
const startTimestamp = new Date().toISOString();
const workflowName = 'Incremental Sync FHIR';

module.exports = {
  datasetName,
  paramTimestampSubIntervalIntegerValue,
  paramTimestampSubIntervalDatePartValue,
  startTimestamp,
  workflowName,
};
