import express from 'express'
import { editContact, editEmail, editFullname, editPassword, getInfo } from '../controllers/Edit.js'

const EditRoutes = express.Router()

EditRoutes.post('/getInfo', getInfo)
EditRoutes.put('/fullname', editFullname)
EditRoutes.put('/email', editEmail)
EditRoutes.put('/mobile', editContact)
EditRoutes.put('/password', editPassword)

export default EditRoutes