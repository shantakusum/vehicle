'use strict'
module.exports = (sequelize, DataTypes)=>{
    const Booking =sequelize.define("Booking", {
        BookingId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            field: 'BookingId'
        },
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        MechanicId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        ServiceId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Vehicle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Status: {
            type: DataTypes.ENUM(
                "Pending",
                "Assigned",
                "Mechanic On The Way",
                "Completed",
                "Cancelled"
            ),
            defaultValue: "Pending"
        },

        Amount: {
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
        Booking.associate = function(models) {
        models.Booking.belongsTo(models.User,{
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'UserId',
            constraints: false
        })
        models.Booking.belongsTo(models.Mechanic,{
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'MechanicId',
            constraints: false
        })
        models.Booking.belongsTo(models.Service,{
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'ServiceId',
            constraints: false
            
        })
    }

        return Booking;
}
