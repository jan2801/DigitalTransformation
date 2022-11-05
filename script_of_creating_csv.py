import pandas as pd
import datetime
import pickle
from dateutil.relativedelta import relativedelta

with open(r"data_export.pickle", "rb") as input_file:
    data_new_ex = pickle.load(input_file)
with open(r"data_import.pickle", "rb") as input_file:
    data_new_im = pickle.load(input_file)
    
with open('params.txt', encoding='utf-8') as f:
    line = f.readline()
    
code = line.split(']')[0][1:].replace("'","").split(',')
parse_params = line.split(']')[1][1:].split(',')
code_lvl = int(parse_params[0])
region = parse_params[1].replace("'","")
country = parse_params[2].replace("'","")
per_in_month = int(parse_params[3])

def get_request_by_region(data_new_im, data_new_ex,code='all', code_lvl=10, region='all', country='all', per_in_month=36):
    date_per = pd.to_datetime(str(datetime.date.today() - relativedelta(months=per_in_month)))
    list_of_napr = {}
    tnved = str(code_lvl) + '-level-tnved'
    for napr in ['im','ex']:
        if napr=='im': data_new = data_new_im
        if napr=='ex': data_new = data_new_ex
#     for data_new in [data_new_im, data_new_ex]:
        if code=='all':
            if region == 'all' and country == 'all':

                list_of_napr[napr+'_all_tnved_all_regions_all_countries'] = (data_new[(data_new['period'] > date_per)].groupby(["nastranapr"]).Stoim.sum().reset_index().sort_values('Stoim',ascending=False).set_index("nastranapr"))

                
            if country != 'all' and region == 'all':

                list_of_napr[napr+'_all_tnved_regions_'+country] = (data_new[(data_new['nastranapr'] == country)  & (data_new['period'] > date_per)].groupby(["Region"]).Stoim.sum().reset_index().sort_values('Stoim',ascending=False).set_index("Region"))
                list_of_napr[napr+'_all_tnved_tnved_'+country] = (data_new[(data_new['nastranapr'] == country)  & (data_new['period'] > date_per)].groupby([tnved]).Stoim.sum().reset_index().sort_values('Stoim',ascending=False).set_index(tnved))
                 
            if region != 'all' and country == 'all':

                list_of_napr[napr+'_all_tnved_countries_'+region] = (data_new[(data_new['Region'] == region)  & (data_new['period'] > date_per)].groupby(["nastranapr"]).Stoim.sum().reset_index().sort_values('Stoim',ascending=False).set_index("nastranapr"))
                list_of_napr[napr+'all_tnved_tnved'+region] = (data_new[(data_new['Region'] == region)  & (data_new['period'] > date_per)].groupby([tnved]).Stoim.sum().reset_index().sort_values('Stoim',ascending=False).set_index(tnved))

        if code!='all':
            for c in code:
                if region == 'all' and country == 'all':
                    list_of_napr[napr+'_'+c+'_all_countries'] = (data_new[ (data_new['period'] > date_per) & (data_new[tnved].astype(str) == c)].groupby(["nastranapr"]).Stoim.sum().reset_index().sort_values('Stoim',ascending=False).set_index("nastranapr"))
                    list_of_napr[napr+'_'+c+'_all_regions'] = (data_new[ (data_new[tnved].astype(str) == c)].groupby(["Region"]).Stoim.sum().reset_index().sort_values('Stoim',ascending=False).set_index("Region"))
                    
                if country != 'all' and region == 'all':

                    list_of_napr[napr+'_'+c+'_regions_'+country] = (data_new[(data_new['nastranapr'] == country) & (data_new['period'] > date_per) & (data_new[tnved].astype(str) == c)].groupby(["Region"]).Stoim.sum().reset_index().sort_values('Stoim',ascending=False).set_index("Region"))
                     
                if region != 'all' and country == 'all':

                    list_of_napr[napr+'_'+c+'_all_countries_'+region] = (data_new[(data_new['Region'] == region) & (data_new['period'] > date_per) & (data_new[tnved].astype(str) == c)].groupby(["nastranapr"]).Stoim.sum().reset_index().sort_values('Stoim',ascending=False).set_index("nastranapr"))
                    
                if region != 'all' and country != 'all': 
                    list_of_napr[napr+'_'+c+'_'+region+'_'+country] = (data_new[(data_new['Region'] == region) & (data_new['nastranapr'] == country) & (data_new['period'] > date_per) & (data_new[tnved].astype(str) == c)].groupby(["nastranapr"]).Stoim.sum().reset_index().sort_values('Stoim',ascending=False).set_index("nastranapr"))
    return  list_of_napr




df_top_n = get_request_by_region(data_new_im, data_new_ex, code=code, code_lvl=code_lvl, region=region)

for key in (df_top_n):
    df_top_n[key].to_csv(key)
    
