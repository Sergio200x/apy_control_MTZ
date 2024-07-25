import sql from 'mssql';


const sqlConfig_prp ={
user:process.env.DB_USER,
password:process.env.DB_PWD,
server:process.env.DB_IP,
database:process.env.DB_NAME,
port:parseInt(process.env.DB_PORT, 10),
options: {
    encrypt: false, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

async function getConettion_empresas_prp(){ 

    try {
        const pool = await sql.connect(sqlConfig_prp)
        return pool;        
    } catch (error) {
        console.log(error)
    }

}
const sqlConfig_frq ={
    user:process.env.DB_USER,
    password:process.env.DB_PWD,
    server:process.env.DB_IP,
    database:process.env.DB_NAME_FRQ,
    port:parseInt(process.env.DB_PORT, 10),
    options: {
        encrypt: false, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
      }
    }
    
   async function getConettion_empresas_frq(){ 
    
        try {
            const pool = await sql.connect(sqlConfig_frq)
            return pool;        
        } catch (error) {
            console.log(error)
        }
    
    }
    
export{ getConettion_empresas_frq, getConettion_empresas_prp };