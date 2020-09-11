import { User } from './../user';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getAll() {
    try {
      return await this.userModel.find().exec();
    } catch (error) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
    
  }

  async getById(id: string) {
    try {
      return await this.userModel.findById(id).exec();  
    } catch (error) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    
  }

  async getByEmail(email: string) {
    try {
      return await this.userModel.findOne({ email }).exec();
    } catch (error) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }    
  }

  async create(user: User) {
    try {
      const createdUser = new this.userModel(user);
      return await createdUser.save();
    } catch (error) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }    
  }

  async update(id: string, user: User) {
    try {
      await this.userModel.updateOne({ _id: id }, user).exec();
      return this.getById(id);
    } catch (error) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }    
  }

  async delete(id: string) {
    try {
        return await this.userModel.deleteOne({ _id: id }).exec();  
    } catch (error) {
        throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }    
  }
}
