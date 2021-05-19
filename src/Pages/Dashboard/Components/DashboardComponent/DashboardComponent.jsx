import { useQuery } from '@apollo/client';
import React from 'react'

import { ALL_DATABASE } from '../../../../services/queries/DatabaseQueries';
import { ALL_ENV } from '../../../../services/queries/EnvironmentQueries';
import { ALL_FRAMEWORK } from '../../../../services/queries/FrameworkQueries';
import { ALL_LANGUAGE } from '../../../../services/queries/LanguageProgrammationQueries';

import Database from '../Database/Database';
import Environnement from '../Environnement/Environnement';
import Framework from '../Framework/Framework';
import LanguagePro from '../LanguagePro/LanguagePro';

export default function DashboardComponent(){
    const {loading: LanguageLoading,
        error: languageError,
        data: languagedata
    } = useQuery(ALL_LANGUAGE)

    const {loading: DBLoading,
        error: DBError,
        data: DBData
    } = useQuery(ALL_DATABASE)

    const {loading: FLoading,
        error: FError,
        data: FData
    } = useQuery(ALL_FRAMEWORK)

    const {loading: ENVLoading,
        error: ENVError,
        data: ENVData
    } = useQuery(ALL_ENV)

    if(LanguageLoading && DBLoading && FLoading && ENVLoading){
        return <p>LOADING...</p>
    }
    if(languageError && DBError && FError && ENVError){
        return <p>ERROR...</p>
    }

    let listLanguage = []
    if(languagedata){
        languagedata.allProgrammingLanguages.map(language=>(
            listLanguage.push(language)
        ))
    }
    let listDB = []
    if(DBData){
        DBData.allDatabases.map(db=>(
            listDB.push(db)
        ))
    }
    const listFramework = []
    if(FData){
        FData.allFrameworks.map(Framework=>(
            listFramework.push(Framework)
        ))
    }

    const EnvList = []
    if(ENVData){
        ENVData.allEnvironments.map(env=>(
            EnvList.push(env)
        ))
    }

    return(
        <>
            
               <div className="w-full py-6 grid justify-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                    <LanguagePro listLanguage={listLanguage}/>
                    <Framework framework={listFramework}/>
                    <Database listDB={listDB}/>
                    <Environnement EnvList = {EnvList}/>
               </div>
        </>
    )
}