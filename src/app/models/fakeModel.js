import Sequelize, { Model } from 'sequelize'

class fakeModel extends Model {
  static init(connection) {
    super.init(
      {
        /*
          name: Sequelize.STRING
          age: Sequelize.NUMBER
        */
      },
      {
        sequelize: connection,
      }
    )
    return this
  }

  static associate(models) {
    this.belongsTo(models.ModelName, { foreignKey: 'FK_Name', as: 'alisas' })
  }
}

export default fakeModel
