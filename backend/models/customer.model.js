'use strict'
module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define("User", {
        UserId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            field: 'UserId'
        },
        FullName: {
            type : DataTypes.STRING,
            field: 'FullName',
            allowNull : false,
            required: true
        },
        
        UserEmail: {
            type: DataTypes.STRING,
            field: 'UserEmail',
            allowNull: false,
            required: true
        },
        Password: {
            type: DataTypes.STRING,
            field: 'Password',
            allowNull: false,
            required: true
        },
        Phone: {
            type: DataTypes.STRING,
            field: 'Phone',
            allowNull: false,
            required: true
        },
        CreatedAt: {
            type: DataTypes.DATE,
            field: 'CreatedAt',
            defaultValue: DataTypes.NOW()
        },
        UpdatedAt: {
            type: DataTypes.DATE,
            field: 'UpdatedAt',
            defaultValue: DataTypes.NOW()
        }             
    },{
        timestamps: true,
        createdAt: 'CreatedAt',
        updatedAt: 'UpdatedAt',
        freezeTableName: false
    });
    User.associate = function(models) {
        models.User.hasMany(models.Booking,{
            onDelete: 'CASCADE',
        	onUpdate: 'CASCADE',
			foreignKey: 'UserId',
			constraints: false
        })
    }

    return User;
}
