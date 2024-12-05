import { Model, Types } from 'mongoose';

export type TOrder = {
  email: string;
  car: Types.ObjectId;
  quantity: number;
  totalPrice: number;
};

export type TOrderModel = Model<TOrder>;
