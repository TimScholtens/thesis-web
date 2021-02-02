curl -X POST -H 'Accept: */*' -H 'Accept-Encoding: gzip, deflate' -H 'Connection: keep-alive' -H 'Content-Length: 712' -H 'Content-Type: application/json' -H 'User-Agent: python-requests/2.25.1' -d '{"neighbourhoods_code": ["WK000300"], "years": [2016], "bioclims": ["code", "name", "township", "year", "bio1_temperature_avg_year", "bio2_temperature_range_avg_year", "bio3_isothermality", "bio4_temperature_std_year", "bio5_temperature_max_year", "bio6_temperature_min_year", "bio7_temperature_range_max_year", "bio8_temperature_avg_wettest_quarter", "bio9_temperature_avg_driest_quarter", "bio10_temperature_avg_warmest_quarter", "bio11_temperature_avg_coldest_quarter", "bio12_rain_sum_year", "bio13_rain_sum_wettest_month", "bio14_rain_sum_driest_month", "bio15_rain_std", "bio16_rain_sum_wettest_quarter", "bio17_rain_sum_driest_quarter", "bio18_rain_sum_warmest_quarter", "bio19_rain_sum_coldest_quarter"]}' http://127.0.0.1:5000/api/variables/neighbourhood


curl 'http://localhost:5000/api/variables/neighbourhood' \
  -H 'Referer: http://localhost:8080/' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36' \
  -H 'Content-Type: application/json' \
  --data-raw '{"neighbourhoods_code": ["WK000300"], "years": [2016], "bioclims": ["code", "name", "township", "year", "bio1_temperature_avg_year", "bio2_temperature_range_avg_year", "bio3_isothermality", "bio4_temperature_std_year", "bio5_temperature_max_year", "bio6_temperature_min_year", "bio7_temperature_range_max_year", "bio8_temperature_avg_wettest_quarter", "bio9_temperature_avg_driest_quarter", "bio10_temperature_avg_warmest_quarter", "bio11_temperature_avg_coldest_quarter", "bio12_rain_sum_year", "bio13_rain_sum_wettest_month", "bio14_rain_sum_driest_month", "bio15_rain_std", "bio16_rain_sum_wettest_quarter", "bio17_rain_sum_driest_quarter", "bio18_rain_sum_warmest_quarter", "bio19_rain_sum_coldest_quarter"]}' \
  --compressed


Beide cURL commands werken