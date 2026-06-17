import express from 'express';

const tableName = "<TABLE_NAME>";
const tablePath = "Data/<TABLE_NAME>.json";
const configPath = "Config/Schema/<TABLE_NAME>.json";

const router = express.Router();

export { router };