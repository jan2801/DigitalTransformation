from datetime import datetime

import pandas as pd
import os
import pickle

from dateutil.relativedelta import relativedelta


def drop_col(data):
    data2 = data.copy()
    columns_to_drop = [
        'edizm',
        'Kol'
    ]
    return data2.drop(columns_to_drop, axis=1)

def change_type(data):
    data2 = data.copy()
    columns_to_float = [
        'Stoim',
        'Netto'
    ]
    for column in columns_to_float:
        data2[column] = data2[column].apply(lambda x: float(x.replace(',', '.')))
    return data2

def level_create(data):
    data2 = data.copy()
    data2['2-level-tnved'] = data2['tnved'].astype(str).str.slice(start=0, stop=2)
    data2['4-level-tnved'] = data2['tnved'].astype(str).str.slice(start=0, stop=4)
    data2['6-level-tnved'] = data2['tnved'].astype(str).str.slice(start=0, stop=6)
    data2['8-level-tnved'] = data2['tnved'].astype(str).str.slice(start=0, stop=8)
    return data2

def drop_outliers(data):
    data2 = data.copy()
    data2 = data2[data2.Stoim != 0.]
    data2 = data2[data2.Netto != 0.]
    netto = data2[data2.Netto == 0.]
    data2 = pd.concat([data2, netto[netto.Stoim > 100000]])
    return data2

def clean_tnved(data):
    data2 = data.copy()
    return data2[data2.tnved != 'XXXXXXXXXX']

def period_to_datetime(data):
    data2 = data.copy()
    list_text = data.period.tolist()
    list_period = []
    for elem in list_text:
        list_period.append(datetime.strptime(elem, "%m/%Y"))
    data2.period = list_period
    return data2

def main():
    print('I am here!')
    # read data from disk
    dirpath = './data'
    file_list = os.listdir(dirpath)
    df = pd.DataFrame()
    for filename in os.listdir(dirpath):
        filepath = os.path.join(dirpath, filename, 'DATTSVT.csv')
        data_new = pd.read_csv(filepath, sep='\t', low_memory=False)
        df = pd.concat([df, data_new])
    df = df.reset_index(drop=True)

    # transform_data
    data = drop_col(df)
    data = change_type(data)
    data = level_create(data)
    data = drop_outliers(data)
    data = clean_tnved(data)
    data = period_to_datetime(data)

    print(data.columns)
    # Separate Export / import dataset
    data_ex = data[data['napr'] == 'ЭК']
    data_im = data[data['napr'] == 'ИМ']

    with open('./data_export.pickle', 'wb') as f:
        pickle.dump(data_ex, f)
        f.close()

    with open('./data_import.pickle', 'wb') as f:
        pickle.dump(data_im, f)
        f.close()

    print('Done!')
if __name__ == '__main__':
    main()