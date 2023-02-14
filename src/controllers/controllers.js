import {getConettion_empresas} from '../database/conexion_Empresas.js'
import { querys } from '../database/querys.js'

export const controller= {

        equipos:   async (req,res)=>
                    {
                        try {
                            const pool = await getConettion_empresas()
                            const result=await pool
                             .request()
                             .query(querys.equipos_prp)
                             res.json({
                                 info:{
                                      status:200,
                                       url:"/equipos"},
                                       data:result.recordset})
                            
                            } catch (error) {
                            console.log(error)
                            }
                      
                    }
                      ,
        locales:  async (req,res)=>
        {
            try {
                const pool = await getConettion_empresas()
                const result=await pool
                 .request()
                 .query(querys.locales_prp)
                 res.json({
                     info:{
                          status:200,
                           url:"/locales"},
                           data:result.recordset})
                
                } catch (error) {
                console.log(error)
                }
          
        }
                    



}


/**HOLALALALALAL*/