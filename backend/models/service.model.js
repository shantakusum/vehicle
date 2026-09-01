'use strict'
module.exports = (sequelize, DataTypes)=>{
    const Service = sequelize.define("Service", {
        ServiceId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            field: 'ServiceId'
        },
        FullName: {
            type : DataTypes.STRING,
            field: 'FullName',
            allowNull : false,
            required: true
        },
        
        Category: {
            type: DataTypes.STRING,
            allowNull: false
        },

        Price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
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
    Service.associate = function(models) {
        models.Service.hasMany(models.Booking,{
            onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
			foreignKey: 'ServiceId',
			constraints: false
        })
    }

    return Service;
}
