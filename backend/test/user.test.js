import * as mongoose from 'mongoose';
import { UserSchema } from '../src/modules/users/schemas/user.schema';

const userData = { name: 'TekLoon', email: 'tekloon@gmail.com', secretFriend: 'juliano' };

describe('User Model Test', () => {


    beforeAll(async() => {
        await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('create & save user successfully', async() => {
        const validUser = new UserSchema(userData);
        const savedUser = await validUser.save();

        expect(savedUser._id).toBeDefined();
        expect(savedUser.name).toBe(userData.name);
        expect(savedUser.email).toBe(userData.email);
        expect(savedUser.secretFriend).toBe(userData.secretFriend);

    })

    // O esquema de teste está funcionando !!!
    // Você não deve ser capaz de adicionar em qualquer campo que não esteja definido no esquema

    it('insert user successfully, but the field does not defined in schema should be undefined', async() => {
        const userWithInvalidField = new UserSchema({ name: 'TekLoon', email: 'tekloon@gmail.com', secretFriend: 'juliano' });
        const savedUserWithInvalidField = await userWithInvalidField.save();
        expect(savedUserWithInvalidField._id).toBeDefined();
        expect(savedUserWithInvalidField.email).toBeUndefined();
    });

    // Test Validation is working!!!
    // It should us told us the errors in on gender field.
    it('create user without required field should failed', async() => {
        const userWithoutRequiredField = new UserSchema({ name: 'TekLoon' });
        let err;
        try {
            const savedUserWithoutRequiredField = await userWithoutRequiredField.save();
            error = savedUserWithoutRequiredField;
        } catch (error) {
            err = error
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        expect(err.errors.gender).toBeDefined();
    });


});