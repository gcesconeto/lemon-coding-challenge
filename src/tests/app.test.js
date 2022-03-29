const { OK, UNPROCESSABLE_ENTITY } = require('http-status-codes').StatusCodes;
const request = require('supertest');
const Ajv = require('ajv');

const app = require('../api/app');
const { input, output } = require('./appData');
const { outputSchema } = require('../schemas/io');

const ajv = new Ajv({ strict: false });
const validateOutput = ajv.compile(outputSchema);

describe('POST `/eligibility`', () => {
  it('Should receive status 200 and eligibility: true', async () => {
    const response = await request(app).post('/eligibility').send(input.eligible);
    expect(response.status).toBe(OK);
    expect(response.body).toEqual(output.eligible);
    expect(validateOutput(response.body)).toBe(true);
  });

  it('Should receive status 200 and eligibility: false', async () => {
    const response = await request(app).post('/eligibility').send(input.ineligible);
    expect(response.status).toBe(OK);
    expect(response.body).toEqual(output.ineligible);
    expect(validateOutput(response.body)).toBe(true);
  });

  it('Should receive status 422 and error message', async () => {
    const response = await request(app).post('/eligibility').send(input.wrongFormat);
    expect(response.status).toBe(UNPROCESSABLE_ENTITY);
    expect(response.body.message.error).toBeDefined();
    expect(response.body.message.params).toBeDefined();
  });
});
