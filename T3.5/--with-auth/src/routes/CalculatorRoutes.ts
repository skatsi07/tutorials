import { Request, Response } from 'express';
import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';

/**
 * Helper function to extract and validate numbers from query parameters or body.
 */
function parseInputs(req: Request): { a: number; b: number } | string {
  const body = req.body as Record<string, unknown> | undefined;
  const rawA = req.query.a ?? req.query.num1 ?? body?.a ?? body?.num1;
  const rawB = req.query.b ?? req.query.num2 ?? body?.b ?? body?.num2;

  if (rawA === undefined || rawB === undefined || rawA === '' || rawB === '') {
    return "Please provide query parameters 'a' and 'b' (or 'num1' and 'num2'), e.g. ?a=10&b=5";
  }

  const a = Number(rawA);
  const b = Number(rawB);

  if (isNaN(a) || isNaN(b)) {
    return "Both parameters must be valid numbers.";
  }

  return { a, b };
}

/**
 * GET / POST add
 */
function add(req: Request, res: Response) {
  const parsed = parseInputs(req);
  if (typeof parsed === 'string') {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({ error: parsed });
  }
  const { a, b } = parsed;
  return res.status(HttpStatusCodes.OK).json({
    operation: 'add',
    a,
    b,
    result: a + b,
  });
}

/**
 * GET / POST subtract
 */
function subtract(req: Request, res: Response) {
  const parsed = parseInputs(req);
  if (typeof parsed === 'string') {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({ error: parsed });
  }
  const { a, b } = parsed;
  return res.status(HttpStatusCodes.OK).json({
    operation: 'subtract',
    a,
    b,
    result: a - b,
  });
}

/**
 * GET / POST multiply
 */
function multiply(req: Request, res: Response) {
  const parsed = parseInputs(req);
  if (typeof parsed === 'string') {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({ error: parsed });
  }
  const { a, b } = parsed;
  return res.status(HttpStatusCodes.OK).json({
    operation: 'multiply',
    a,
    b,
    result: a * b,
  });
}

/**
 * GET / POST divide
 */
function divide(req: Request, res: Response) {
  const parsed = parseInputs(req);
  if (typeof parsed === 'string') {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({ error: parsed });
  }
  const { a, b } = parsed;
  if (b === 0) {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({ error: 'Cannot divide by zero.' });
  }
  return res.status(HttpStatusCodes.OK).json({
    operation: 'divide',
    a,
    b,
    result: a / b,
  });
}

export default {
  add,
  subtract,
  multiply,
  divide,
} as const;
