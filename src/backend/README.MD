# Maintenance
## Backup / restore
> docker exec -t your-db-container pg_dumpall -c -U your-db-user | gzip > ./dump_$(date +"%Y-%m-%d_%H_%M_%S").gz <br/>
> docker exec -t opm-etl_postgis_1  pg_dumpall -c -U tim | gzip > ./dump_$(date +"%Y-%m-%d_%H_%M_%S").gz <br/>
> gunzip < your_dump.sql.gz | docker exec -i your-db-container psql -U your-db-user -d your-db-name <br/>
> gunzip < dump_2021-02-05_16_32_52.gz | docker exec -i opm-etl_postgis_1  psql -U tim -d opm <br/>

## Nginx
sudo ln /etc/nginx/sites-available/bioclim.scholtens.io /etc/nginx/sites-enabled/bioclim.scholtens.io
sudo service nginx restart
## Service
### Add service
sudo ln bioclim.service /etc/systemd/system/bioclim.service 
 
### Start service
sudo service bioclim start
 
 
