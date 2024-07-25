import {getConettion_empresas_frq, getConettion_empresas_prp} from '../database/conexion_Empresas.js'
import { querys } from '../database/querys.js'

export const controller= {

        equipos:   async (req,res)=>
                    {
                        try {
                            const pool = await getConettion_empresas_prp()
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
                      
        versiones:  async (req,res)=>
        {
            try {
                const parametro2 = req.query.parametro2; // Obtener el parámetro1 desde la consulta del componente de React  
                
                const pool = await getConettion_empresas_prp()
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
                            
                    const pool = await getConettion_empresas_prp()
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
                  
                },
        not_sync:   async (req,res)=>
                    {
                        try {
                            const pool = await getConettion_empresas_prp()
                            const result=await pool
                             .request()
                             .query(querys.locales_not_sync)
                             res.json({
                                 info:{
                                      status:200,
                                       url:"/sync"},
                                       data:result.recordset})
                            
                            } catch (error) {
                            console.log(error)
                            }
                      
                    },
        DB_SPACE_PRP:   async (req,res)=>
                    {
                        try {
                            const pool = await getConettion_empresas_prp()
                            const result=await pool
                             .request()
                             .query(querys.db_space_prp)
                             res.json({
                                 info:{
                                      status:200,
                                       url:"/db_spaceprp"},
                                       data:result.recordset})
                            
                            } catch (error) {
                            console.log(error)
                            }
                      
                    }, 
        HD_SPACE_PRP:   async (req,res)=>
                    {
                        try {
                            const pool = await getConettion_empresas_prp()
                            const result=await pool
                             .request()
                             .query(querys.hd_space_prp)
                             res.json({
                                 info:{
                                      status:200,
                                       url:"/hd_spaceprp"},
                                       data:result.recordset})
                            
                            } catch (error) {
                            console.log(error)
                            }
                      
                    },                       
        equipos_frq:   async (req,res)=>
                    {
                        try {
                            const pool = await getConettion_empresas_frq()
                            const result=await pool
                             .request()
                             .query(querys.equipos_frp)
                             res.json({
                                 info:{
                                      status:200,
                                       url:"/equipos_frq"},
                                       data:result.recordset})
                            
                            } catch (error) {
                            console.log(error)
                            }
                      
                    }
                      ,
                      
        versiones_frq:  async (req,res)=>
        {
            try {
                const parametro2 = req.query.parametro2; // Obtener el parámetro1 desde la consulta del componente de React  
                
                const pool = await getConettion_empresas_frq()
                const result=await pool.request()
                 .query(querys.versiones_frq.replace('@parametro2', parametro2));
                 res.json({
                     info:{
                          status:200,
                           url:"/versiones_frq"},
                           data:result.recordset})
                
                } catch (error) {
                console.log(error)
                }
          
        } ,
        
        Precios_arts_frq:   async (req,res)=>
                {
                    try {
                                              
                    const parametro = req.query.parametro; // Obtener el parámetro desde la consulta del componente de React
                    const parametro1 = req.query.parametro1; // Obtener el parámetro1 desde la consulta del componente de React  
                            
                    const pool = await getConettion_empresas_frq()
                    const result=await pool.request()                                                      
                    .query(querys.preciosyarts_frq.replace('@parametro', parametro).replace('@parametro1', parametro1));                          
                         res.json({
                             info:{
                                  status:200,
                                   url:"/preciosyarts_frq"},
                                   data:result.recordset})
                        
                        } catch (error) {
                        console.log(error)
                        }
                  
                },
        not_sync_frq:   async (req,res)=>
                    {
                        try {
                            const pool = await getConettion_empresas_frq()
                            const result=await pool
                             .request()
                             .query(querys.locales_not_sync)
                             res.json({
                                 info:{
                                      status:200,
                                       url:"/sync_frq"},
                                       data:result.recordset})
                            
                            } catch (error) {
                            console.log(error)
                            }
                      
                    },
        ventas_mes_corriente:   async (req,res)=>
                    {
                        try {
        const pool = await getConettion_empresas_prp();
        const request = pool.request();
        request.timeout = 30000; // Establece el tiempo de espera de la consulta en 30 segundos (30000 ms)

        const result = await request.query(querys.Ventas_Mes_Corriente);
        
        res.json({
            info: {
                status: 200,
                url: "/ventas_mes_corriente"
            },
            data: result.recordset
        });
    } catch (error) {
        console.log(error);
    }
                    },
        
                    promos_prp:   async (req,res)=>
                            {
                                try {
                                                          
                                const parametro = req.query.parametro; // Obtener el parámetro desde la consulta del componente de React
                                const parametro1 = req.query.parametro1; // Obtener el parámetro1 desde la consulta del componente de React  
                                        
                                const pool = await getConettion_empresas_prp()
                                const result=await pool.request()                                                      
                                .query(querys.promos.replace('@parametro', parametro).replace('@parametro1', parametro1));                          
                                     res.json({
                                         info:{
                                              status:200,
                                               url:"/promos_prp"},
                                               data:result.recordset})
                                               
                                    
                                    } catch (error) {
                                    console.log(error)
                                    }
                              
                            }
                            ,
        
                    promos_frq:   async (req,res)=>
                            {
                                try {
                                                          
                                const parametro = req.query.parametro; // Obtener el parámetro desde la consulta del componente de React
                                const parametro1 = req.query.parametro1; // Obtener el parámetro1 desde la consulta del componente de React  
                                        
                                const pool = await getConettion_empresas_frq()
                                const result=await pool.request()                                                      
                                .query(querys.promos_frq.replace('@parametro', parametro).replace('@parametro1', parametro1));                          
                                     res.json({
                                         info:{
                                              status:200,
                                               url:"/promos_frq"},
                                               data:result.recordset})
                                               
                                    
                                    } catch (error) {
                                    console.log(error)
                                    }
                              
                            }
                  


}


