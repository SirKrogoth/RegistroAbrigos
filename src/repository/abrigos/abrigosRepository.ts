import abrigosModel from '../../models/abrigos/abrigosModel';
import iAbrigos from '../../models/abrigos/interfaces/iAbrigos';
import { QueryTypes } from "sequelize";

function create(abrigo: iAbrigos){
    return abrigosModel.create(abrigo);
}

export default {
    create
}