export const querys ={
   
    equipos_prp:"use MOSTAZA_ERP   select  LTRIM(RTRIM(v.local)) as 'Codigolocal',  IIF(v.PARAMETRO='VERSION','Profit',v.parametro) as 'Aplicacion',    rtrim(ltrim(v.valor)) as 'Nversion',  MAX(v.FECHATRANS) as 'FechaAct',   RTRIM(LTRIM(v.EQUIPO))AS EQUIPO  ,   RTRIM(LTRIM(v.caja))AS Caja  from hparamloc AS V   where v.PARAMETRO like 'version'   and v.FECHATRANS > getdate()-1  GROUP BY v.empresa, v.local, v.parametro, v.valor,v.EQUIPO,v.caja order by v.local ,V.EQUIPO",
    locales_prp:"select distinct rtrim(ltrim(v.local)) as 'Codigolocal' , rtrim(ltrim(l.local_nombre)) as 'Nombrelocal' from hparamloc AS V   INNER JOIN [MOSTAZA_ERP].[dbo].[locales] AS L ON L.local_codigo = V.LOCAL     where v.PARAMETRO like 'version'   and v.FECHATRANS > getdate()-1  GROUP BY v.LOCAL,l.local_nombre ",
    versiones_prp:"select LTRIM(RTRIM(hpl.local)) as 'Codigo_Local',rtrim(ltrim(substring(loc.local_nombre,0,20))) as 'Nombre_local', case when rtrim(ltrim(hpl.PARAMETRO))='Version' then 'Profit' when rtrim(ltrim(hpl.PARAMETRO))='Informes|Version' then 'Informes'  when rtrim(ltrim(hpl.PARAMETRO))='PanelRappi|VERSION' then 'Rappi' when rtrim(ltrim(hpl.PARAMETRO))='PanelPedidosYa|VERSION' then 'Peya' when rtrim(ltrim(hpl.PARAMETRO))='PanelMTZ|VERSION' then 'AppMtz'   when rtrim(ltrim(hpl.PARAMETRO))='ActualizaDatos|VERSION' then 'Actualizadatos'  when rtrim(ltrim(hpl.PARAMETRO))='Centralizador' then 'Centralizador'  when rtrim(ltrim(hpl.PARAMETRO))='CentralizadorComanda|Version' then 'CentralizadorComanda'  when rtrim(ltrim(hpl.PARAMETRO))='PanelMELI|VERSION' then 'Meli' when rtrim(ltrim(hpl.PARAMETRO))='DescargaLocal|VERSION' then 'DescargaLocal'  when rtrim(ltrim(hpl.PARAMETRO))='ZonaEntrega|Version' then 'DualpointCaja'   when rtrim(ltrim(hpl.PARAMETRO))='ZonaLlamador|Version' then 'Dualpointllamador'  when rtrim(ltrim(hpl.PARAMETRO))='PantallaComanda|Version' then 'PantallaComanda'   when rtrim(ltrim(hpl.PARAMETRO))='CFOCXVERSI' then 'OCX'  when rtrim(ltrim(hpl.PARAMETRO))='VERSIONT' then 'totem.exe' when rtrim(ltrim(hpl.PARAMETRO))='Informes' then 'Informes' when rtrim(ltrim(hpl.PARAMETRO))='ActiveX|Version' then 'DLL MercadoPago' end as 'Parametro',  rtrim(ltrim(replace(replace(hpl.valor,'.:: v',''),'::.',''))) as 'Nro_version',MAX( substring(convert(varchar,hpl.FECHATRANS,103),0,15)) as 'FechaTrans',RTRIM(LTRIM(substring(hpl.EQUIPO,0,15)))AS EQUIPO  ,RTRIM(LTRIM(hpl.caja))AS Caja from  (select *, ROW_NUMBER() OVER ( PARTITION BY equipo, parametro, local    ORDER BY fechatrans DESC)   rango from hparamloc where parametro in('Informes|Version','PanelRappi|VERSION','PanelPedidosYa|VERSION','PanelMTZ|VERSION','ActualizaDatos|VERSION','Centralizador','CentralizadorComanda|Version','VERSION','PanelMELI|VERSION','DescargaLocal|VERSION','ZonaEntrega|Version','ZonaLlamador|Version','PantallaComanda|Version','CFOCXVERSI','VERSIONT','ActiveX|Version') and local not in ('pru','test','') and FECHATRANS > getdate()-10 )as hpl left join locales loc on loc.local_codigo = hpl.local collate SQL_Latin1_General_CP1_CI_AS where rango = 1 and hpl.parametro = '@parametro2' and hpl.fechatrans>getdate()-10 group by hpl.LOCAL,loc.local_nombre,hpl.PARAMETRO, hpl.valor ,hpl.FECHATRANS , hpl.EQUIPO,hpl.caja order by hpl.LOCAL desc",
    preciosyarts:" use mostaza_erp select TIPO='PROPIO',rtrim(ltrim(ISNULL(substring(l.local_nombre,0,20),'VACIO'))) AS 'NOMBRE_DE_LOCAL', rtrim(ltrim(ISNULL(p.LISP_CODIGO,'VACIO'))) AS 'CODIGO_DE_LOCAL',rtrim(ltrim(ISNULL(p.ART_CODIGO,'VACIO'))) AS 'CODIGO_DE_ARTICULO',rtrim(ltrim(ISNULL(a.ART_DESCORTA,'VACIO'))) AS 'DESC_CORTA',rtrim(ltrim(ISNULL(a.ART_DESLARGA,'VACIO'))) AS 'DESC_LARGA',rtrim(ltrim(ISNULL(p.PRE_PRECIO,'VACIO'))) AS 'PRECIO',rtrim(ltrim(isnull(p.PRE_PRECIOUNIDAD,'VACIO'))) AS 'PRECIO_UNI',rtrim(ltrim(ISNULL(converT(varchar,p.PRE_FECCAM,3),'VACIO'))) AS 'ULTIMO_ENV',rtrim(ltrim(ISNULL(convert(varchar,p.dfecha_desde,3),'VACIO'))) AS 'DESDE',rtrim(ltrim(ISNULL(convert(varchar,p.dfecha_hasta,3),'VACIO'))) AS 'HASTA',rtrim(ltrim(ISNULL(a.ART_PADRE,'VACIO'))) AS 'RUBRO',rtrim(ltrim(ISNULL(a.tpr_codigo,'VACIO'))) AS 'ES_MENU' ,rtrim(ltrim(ISNULL(a.ART_ACTIVO,'VACIO'))) AS 'ACTIVO',rtrim(ltrim(ISNULL(a.art_comanda,'VACIO'))) AS 'SE_AGRANDA',rtrim(ltrim(ISNULL(a.ART_FACTURABLE,'VACIO'))) AS 'SE_FACTURA',rtrim(ltrim(ISNULL(a.ART_SEVENDE,'VACIO'))) AS 'SE_VENDE',rtrim(ltrim(isnull(a.ART_CALIDAD,'VACIO'))) AS 'SE_ENVIA_A_LOCAL',rtrim(ltrim(ISNULL(a.ART_ENMENU,'VACIO'))) AS 'EN_BOTONERA',rtrim(ltrim(ISNULL(a.ART_PMSOLO,'VACIO'))) AS 'JERARQUIA_EN_ZONA' from mostaza_erp.dbo.precios p inner join MOSTAZA_ERP.dbo.locales l on l.local_codigo=p.lisp_codigo inner join MOSTAZA_ERP.dbo.articulos_E a on a.art_codigo=p.ART_CODIGO where a.art_descorta like '%@parametro%' and p.LISP_CODIGO like '%@parametro1%'"
}