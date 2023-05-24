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
          
        },
versiones_prp:  async (req,res)=>
        {
            try {
                const parametro2 = req.query.parametro2; // Obtener el parámetro1 desde la consulta del componente de React  
                
                const pool = await getConettion_empresas()
                const result=await pool.request()
                 .query(querys.versiones_prp.replace('@parametro2', parametro2));
                 res.json({
                     info:{
                          status:200,
                           url:"/versiones"},
                           data:result.recordset})
                
                } catch (error) {
                console.log(error)
                }
          
        } ,
        
    Precios_arts:   async (req,res)=>
                {
                    try {
                                              
                    const parametro = req.query.parametro; // Obtener el parámetro desde la consulta del componente de React
                    const parametro1 = req.query.parametro1; // Obtener el parámetro1 desde la consulta del componente de React  
                            
                    const pool = await getConettion_empresas()
                    const result=await pool.request()                                                      
                    .query(querys.preciosyarts.replace('@parametro', parametro).replace('@parametro1', parametro1));                          
                         res.json({
                             info:{
                                  status:200,
                                   url:"/preciosyarts"},
                                   data:result.recordset})
                                   
                        
                        } catch (error) {
                        console.log(error)
                        }
                  
                }
                  


}


/**listado_Apps*/