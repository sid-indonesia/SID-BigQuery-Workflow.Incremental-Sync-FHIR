const datasetName = 'fhir_dataset_multiple_sources';
const paramTimestampSubIntervalIntegerValue = 60;
const paramTimestampSubIntervalDatePartValue = 'MINUTE';
const startTimestamp = new Date().toISOString();

module.exports = {
  datasetName,
  paramTimestampSubIntervalIntegerValue,
  paramTimestampSubIntervalDatePartValue,
  startTimestamp,
};
