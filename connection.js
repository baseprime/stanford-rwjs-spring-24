import Sequelize from 'sequelize'

export const connection = new Sequelize('postgres://greg@localhost:5432/rwjs')
