import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';

interface User extends Model {
    readonly id: number;
}

// Need to declare the static model so `findOne` etc. use correct types.
type UserStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): User;
}

// TS can't derive a proper class definition from a `.define` call, therefor we need to cast here.
const MyDefineModel = <UserStatic>sequelize.define('MyDefineModel', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
    }
});