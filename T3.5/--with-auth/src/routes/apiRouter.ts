import { Router } from 'express';

import Paths from '@src/common/constants/Paths';

import CalculatorRoutes from './CalculatorRoutes';
import UserRoutes from './UserRoutes';

/******************************************************************************
                                Setup
******************************************************************************/

const apiRouter = Router();

// ----------------------- Add UserRouter --------------------------------- //

const userRouter = Router();

userRouter.get(Paths.Users.Get, UserRoutes.getAll);
userRouter.post(Paths.Users.Add, UserRoutes.add);
userRouter.put(Paths.Users.Update, UserRoutes.update);
userRouter.delete(Paths.Users.Delete, UserRoutes.delete);

apiRouter.use(Paths.Users._, userRouter);

// ----------------------- Add CalculatorRouter --------------------------- //

const calculatorRouter = Router();

calculatorRouter.get(Paths.Calculator.Add, CalculatorRoutes.add);
calculatorRouter.post(Paths.Calculator.Add, CalculatorRoutes.add);

calculatorRouter.get(Paths.Calculator.Subtract, CalculatorRoutes.subtract);
calculatorRouter.post(Paths.Calculator.Subtract, CalculatorRoutes.subtract);

calculatorRouter.get(Paths.Calculator.Multiply, CalculatorRoutes.multiply);
calculatorRouter.post(Paths.Calculator.Multiply, CalculatorRoutes.multiply);

calculatorRouter.get(Paths.Calculator.Divide, CalculatorRoutes.divide);
calculatorRouter.post(Paths.Calculator.Divide, CalculatorRoutes.divide);

apiRouter.use(Paths.Calculator._, calculatorRouter);

/******************************************************************************
                                Export
******************************************************************************/

export default apiRouter;
