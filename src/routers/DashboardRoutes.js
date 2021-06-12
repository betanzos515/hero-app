import React from 'react'
import { Switch, Route, Redirect } from 'react-router';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import {Navbar} from '../components/ui/Nabvar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
export const DashboardRoutes = ({history}) => {
    return (
        <>
            <Navbar history={history}/>
            <div className='container mt-4 ml-1 mr-1'>
                <Switch>
                    <Route exact path='/marvel' component={MarvelScreen}/>
                    <Route exact path='/heroes/:heroeId' component={HeroScreen}/>
                    <Route exact path='/dc' component={DcScreen}/>
                    <Route exact path='/search' component={SearchScreen}/>
                    
                    {/* El redirect es una funcio que se dispara siempre y cuando ninguna de las rutas sea correcta */}
                    <Redirect to='/marvel' /> 
                </Switch>
            </div>
        </>
    )
}
