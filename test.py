from bs4 import BeautifulSoup
from selenium import webdriver
import time
import json

driver = webdriver.Chrome('/Users/pol18/Documents/corona/chromedriver')
driver.get('https://wuhanvirus.kr')

html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
time.sleep(1)
wo_list = driver.find_element_by_class_name('row.dashboard.world')
time.sleep(1)
wo_value = wo_list.text.split('\n')
wo_key = ['wo_inf',
          'wo_inf_diff',
          'wo_inf_name',
          'wo_death',
          'wo_death_diff',
          'wo_death_name',
          'wo_cured',
          'wo_cured_diff',
          'wo_cured_name',
          'wo_death_rate',
          'wo_death_rate_name',
          'wo_country_test',
          'wo_country_diff',
          'wo_country_name']
wo_dic = { name:value for name, value in zip(wo_key, wo_value) }

kr_list = driver.find_element_by_class_name('row.dashboard.korea')
time.sleep(1)
kr_value = kr_list.text.split('\n')
kr_key = ['kr_inf',
          'kr_inf_diff',
          'kr_inf_name',
          'kr_death',
          'kr_death_diff',
          'kr_death_name',
          'kr_cured',
          'kr_cured_diff',
          'kr_cured_name',
          'kr_candidate',
          'kr_candidate_diff',
          'kr_candidate_name',
          'kr_test',
          'kr_test_diff',
          'kr_test_name',
          'kr_negative',
          'kr_negative_diff',
          'kr_negative_name']
kr_dic = { name:value for name, value in zip(kr_key, kr_value) }

json_wo = json.dumps(wo_dic)
json_kr = json.dumps(kr_dic)

with open('/test.json', 'w', encoding='utf-8') as make_file:
    json.dump(kr_dic, make_file, indent="\t")

with open('/test.json', 'r') as f:
    kr_data = json.load(f)
print(json.dumps(kr_data, indent="\t") )
driver.close()
