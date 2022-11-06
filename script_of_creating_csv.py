import datetime
import pickle
from dateutil.relativedelta import relativedelta
import sys

folder_name = str(sys.argv[0])



with open(r"data_export.pickle", "rb") as input_file:
    data_new_ex = pickle.load(input_file)
with open(r"data_import.pickle", "rb") as input_file:
    data_new_im = pickle.load(input_file)
    

    
def get_request_by_region(data_new_im, data_new_ex,code='all', code_lvl=10, region='all', country='all', per_start='01-2018', per_end='12-2022'):
    per_start = datetime.strptime(per_start,'%m-%Y') - relativedelta(days = 15)
    per_end = datetime.strptime(per_end,'%m-%Y') + relativedelta(days = 15)
    
    list_of_napr = {}
    tnved = str(code_lvl) + '-level-tnved'
    for napr in ['im','ex']:
        if napr=='im': data_new = data_new_im
        if napr=='ex': data_new = data_new_ex
#     for data_new in [data_new_im, data_new_ex]:
        if code=='all':
            
            if region == 'all' and country == 'all':

                list_of_napr[napr+'_all_all_all_topcontryes'] = (data_new[(data_new['period'] > per_start) & (data_new['period'] < per_end)].groupby(["nastranapr"]).Stoim.sum().reset_index().sort_values('Stoim',ascending=False).set_index("nastranapr"))
                list_of_napr[napr+'_all_all_all_topregions'] = (data_new[ (data_new['period'] > per_start) & (data_new['period'] < per_end)].groupby(["Region"]).Stoim.sum().reset_index().sort_values('Stoim',ascending=False).set_index("Region"))
                
            if country != 'all' and region == 'all':

                list_of_napr[napr+'_all_all_'+country+'_topregions'] = (data_new[(data_new['nastranapr'] == country)  & (data_new['period'] > per_start) & (data_new['period'] < per_end)].groupby(["Region"]).Stoim.sum().reset_index().sort_values('Stoim',ascending=False).set_index("Region"))
                list_of_napr[napr+'_all_all_'+country+'_toptnveds'] = (data_new[(data_new['nastranapr'] == country)  & (data_new['period'] > per_start) & (data_new['period'] < per_end)].groupby([tnved]).Stoim.sum().reset_index().sort_values('Stoim',ascending=False).set_index(tnved))
                 
            if region != 'all' and country == 'all':

                list_of_napr[napr+'_all_'+region+'_all_topcontryes'] = (data_new[(data_new['Region'] == region)  & (data_new['period'] > per_start) & (data_new['period'] < per_end)].groupby(["nastranapr"]).Stoim.sum().reset_index().sort_values('Stoim',ascending=False).set_index("nastranapr"))
                list_of_napr[napr+'_all_'+region+'_all_toptnveds'] = (data_new[(data_new['Region'] == region)  & (data_new['period'] > per_start) & (data_new['period'] < per_end)].groupby([tnved]).Stoim.sum().reset_index().sort_values('Stoim',ascending=False).set_index(tnved))
            
            if region != 'all' and country != 'all': 
                list_of_napr[napr+'_all_'+region+'_'+country+'_topcontryes'] = (data_new[(data_new['Region'] == region) & (data_new['nastranapr'] == country) & (data_new['period'] > per_start) & (data_new['period'] < per_end)].groupby(["nastranapr"]).Stoim.sum().reset_index().sort_values('Stoim',ascending=False).set_index("nastranapr"))
        
        if code!='all':
            for c in code:
                if region == 'all' and country == 'all':
                    list_of_napr[napr+'_'+c+'_all_all_topcontryes'] = (data_new[ (data_new['period'] > per_start) & (data_new['period'] < per_end) & (data_new[tnved].astype(str) == c)].groupby(["nastranapr"]).Stoim.sum().reset_index().sort_values('Stoim',ascending=False).set_index("nastranapr"))
                    list_of_napr[napr+'_'+c+'_all_all_topregions'] = (data_new[(data_new['period'] > per_start) & (data_new['period'] < per_end) & (data_new[tnved].astype(str) == c)].groupby(["Region"]).Stoim.sum().reset_index().sort_values('Stoim',ascending=False).set_index("Region"))
                    
                if country != 'all' and region == 'all':

                    list_of_napr[napr+'_'+c+'_all_'+country+'_topregions'] = (data_new[(data_new['nastranapr'] == country) & (data_new['period'] > per_start) & (data_new['period'] < per_end) & (data_new[tnved].astype(str) == c)].groupby(["Region"]).Stoim.sum().reset_index().sort_values('Stoim',ascending=False).set_index("Region"))
                     
                if region != 'all' and country == 'all':

                    list_of_napr[napr+'_'+c+'_'+region+'_all__topcontryes'] = (data_new[(data_new['Region'] == region) & (data_new['period'] > per_start) & (data_new['period'] < per_end) & (data_new[tnved].astype(str) == c)].groupby(["nastranapr"]).Stoim.sum().reset_index().sort_values('Stoim',ascending=False).set_index("nastranapr"))
                    
                if region != 'all' and country != 'all': 
                    list_of_napr[napr+'_'+c+'_'+region+'_'+country+'_topcountryes'] = (data_new[(data_new['Region'] == region) & (data_new['nastranapr'] == country) & (data_new['period'] > per_start) & (data_new['period'] < per_end) & (data_new[tnved].astype(str) == c)].groupby(["nastranapr"]).Stoim.sum().reset_index().sort_values('Stoim',ascending=False).set_index("nastranapr"))
    return  list_of_napr




 
    

with open('params.txt', encoding='utf-8') as f:
    line = f.readline()

    code = line.split(']')[0][1:].replace("'","").split(',')
    parse_params = line.split(']')[1][1:].split(',')
    code_lvl = int(parse_params[0])
    region = parse_params[1].replace("'","")
    country = parse_params[2].replace("'","")
    per_start = parse_params[3].replace("'","")
    per_end = parse_params[4].replace("'","")
    
    
    
    df_top_n = get_request_by_region(data_new_im, data_new_ex, code=code, code_lvl=code_lvl, region=region, country = country, per_start=per_start, per_end=per_end)
    
    for key in (df_top_n):     
        df_top_n[key].to_csv(folder_name+'/'+key+'.csv')
        
                    

        
    