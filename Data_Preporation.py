from datetime import datetime

import pandas as pd
import os
import pickle

# Create directoty:
# data_result/result_export; data_result/result_import;
# data_new

# Also if you have new data, don't forget to delete it from the folder after processing


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

def remane_tnved(data):
    data2 = data.copy()
    data2 = data2.rename(columns={'tnved': '10-lvl-tnved'})
    return data2

def main():
    print('I am here!')

    dirpath = './data_new'
    file_list = os.listdir(dirpath)
    print('There are new files!')
    # check, if there is new data
    if len(os.listdir(dirpath)) != 0:
        df = pd.DataFrame()
        for filename in os.listdir(dirpath):
            filepath = os.path.join(dirpath, filename, 'DATTSVT.csv')
            data_new = pd.read_csv(filepath, sep='\t', low_memory=False)
            df = pd.concat([df, data_new])
        df = df.reset_index(drop=True)

        data = drop_col(df)
        data = change_type(data)
        data = level_create(data)
        data = drop_outliers(data)
        data = clean_tnved(data)
        data = period_to_datetime(data)
        data = remane_tnved(data)

        # Separate Export / import dataset
        data_ex = data[data['napr'] == 'ЭК']
        data_im = data[data['napr'] == 'ИМ']

        with open(r"./data_result/result_export/data_export.pickle", "rb") as input_file:
            df_old_exp = pickle.load(input_file)
        with open(r"./data_result/result_import/data_import.pickle", "rb") as input_file:
            df_old_imp = pickle.load(input_file)
        data_ex = pd.concat([data_ex, df_old_exp])
        data_ex = df.reset_index(drop=True)
        data_im = pd.concat([data_im, df_old_imp])
        data_im = df.reset_index(drop=True)

        with open('./data_result/result_export/data_export.pickle', 'wb') as f:
            pickle.dump(data_ex, f)
            f.close()
        with open('./data_result/result_import/data_import.pickle', 'wb') as f:
            pickle.dump(data_im, f)
            f.close()

        print('Concatenate new and all data!')

    else:
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
        data = remane_tnved(data)

        # Separate Export / import dataset
        data_ex = data[data['napr'] == 'ЭК']
        data_im = data[data['napr'] == 'ИМ']

        with open('./data_result/result_export/data_export.pickle', 'wb') as f:
            pickle.dump(data_ex, f)
            f.close()

        with open('./data_result/result_import/data_import.pickle', 'wb') as f:
            pickle.dump(data_im, f)
            f.close()

        print('Done new data!')

if __name__ == '__main__':
    main()

