import React, { Component } from 'react'
import Teacherlist from '../../Teacherlist/Teacherlist'
import { Route, Redirect, Switch } from 'react-router-dom';
import Latestteacherslist from '../Latestteacherslist/Latestteacherslist';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export default class Mainpanel extends Component {



    render() {
       

        return (
            <div>

               <Teacherlist teachers_list={this.props.filtered_teachers}/>

            </div>
                   

        )
    }
}
