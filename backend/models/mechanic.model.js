'use strict'
module.exports = (sequelize, DataTypes)=>{
    const Mechanic =sequelize.define("Mechanic", {
        MechanicId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            field: 'MechanicId'
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        Phone: {
            type: DataTypes.STRING,
            allowNull: false
        },

        Status: {
            type: DataTypes.ENUM("Available", "Busy", "Offline"),
            defaultValue: "Available"
        },

        JobsCompleted: {
            type: DataTypes.INTEGER,
            defaultValue: 0
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
        Mechanic.associate = function(models) {
        models.Mechanic.hasMany(models.Booking,{
            onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
			foreignKey: 'MechanicId',
			constraints: false
        })
    }   

        return Mechanic;
}
