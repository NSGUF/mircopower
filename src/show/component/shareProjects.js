/**
 * Created by ZhifengFang on 2017/6/3.
 */
import React from 'react'
import ProjectItem from './shareProjectItem'

export default class Projects extends React.Component {

    render() {
        let id=0
        return (
            <div className="zerogrid">
                <div className="row wrap-box">
                    {
                        this.props.projects.map(project => (
                            <ProjectItem project={project} key={id++}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}