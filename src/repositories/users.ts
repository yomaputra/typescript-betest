/* eslint-disable @typescript-eslint/no-explicit-any */
import UserModel from "../models/users";
import Repository from "./interface";

class User implements Repository {
  getAll(): any {
    return UserModel.find();
  }

  getById(id: string): any {
    return UserModel.findById(id);
  }

  create(values: Record<string, any>): any {
    return new UserModel(values).save().then((user) => user.toObject());
  }

  update(id: string, values: Record<string, any>): any {
    return UserModel.findByIdAndUpdate(id, values);
  }

  delete(id: string): any {
    return UserModel.findByIdAndDelete(id);
  }

  getUsersByEmail(email: string): any {
    return UserModel.findOne({ email });
  }

  getUsersByToken = (token: string) =>
    UserModel.findOne({ "authenticate.sessionToken": token });

  getUsersByIdentity = (identity: string) =>
    UserModel.findOne({ identityNumber: identity });

  getUsersByAccountNumber = (accountNumber: number) =>
    UserModel.findOne({ accountNumber: accountNumber });
}

const UserRepository = new User();

export default UserRepository;
