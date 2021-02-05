# Service
## Add service
sudo ln thesis.service /etc/systemd/system/thesis.service 
 
## Start service
 sudo service start thesis.service
 
 
# Maintenance
## Backup / restore
docker exec -t your-db-container pg_dumpall -c -U your-db-user | gzip > ./dump_$(date +"%Y-%m-%d_%H_%M_%S").gz
docker exec -t opm-etl_postgis_1  pg_dumpall -c -U tim | gzip > ./dump_$(date +"%Y-%m-%d_%H_%M_%S").gz
gunzip < your_dump.sql.gz | docker exec -i your-db-container psql -U your-db-user -d your-db-name
gunzip < dump_2021-02-05_16_32_52.gz | docker exec -i opm-etl_postgis_1  psql -U tim -d opm