import React, {Component} from 'react'
import './Work.scss'

import item_1 from '../../../img/icon/communication.svg'
import item_2 from '../../../img/icon/faster-point-layout.svg'
import item_3 from '../../../img/icon/eliminate-downtimes.svg'
import item_4 from '../../../img/icon/number-of-clashes.svg'

class Work extends Component {
    render() {
        const workItem = [{
            icon: item_1,
            title: '75% faster point layout compared to tape measurement'
        }, {
            icon: item_2,
            title: 'Reduce number of clashes and reworks'
        }, {
            icon: item_3,
            title: 'Make communication with the stakeholders more clear'
        }, {
            icon: item_4,
            title: 'Eliminate downtimes due to less errors'
        }];

        return <section className='work'>
            <div className='container'>
                <div className="title">
                    <h3>Decreasing clashes & reworks with AR</h3>
                    <p>Each year $15B spent on reworks in construction projects. We are building technology that helps
                        to avoid reworks and thus increase productivity. How? KADO creates on-site model visualization
                        with precise and stable coordinate frames directly linked to the Revit or CAD or BIM models.</p>
                </div>
                <ul className="work-items">
                    {
                        workItem.map((item, i) => (
                            <li key={i}>
                                <div className="work-icon">
                                    <img src={item.icon} alt="icon"/>
                                </div>
                                <h4>{item.title}</h4>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    }
}

export default Work;