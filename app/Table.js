import React from 'react';
import Data from './DummyData'
import Data2 from './DummyData2'

export default class Table extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isLoading : true
        }

        setTimeout(() => {this.loading = true; this.populateData(Data)}, 5);
    }

    populateData(data) {
        this.setState({
            data: data,
            isLoading : false
        })
    }

    refresh() {
       this.populateData(Data2);
    }
    reset() {
       this.populateData(Data);
    }

    render() {
        console.log("Rendering ... ")

        let columns = ["last_name", "first_name", "email", "gender"];

        var header = columns.map((value, index) => {
            return <th data-field={value}>{value.toUpperCase() }</th>
        });

        let loader = null;
        if(this.state.isLoading) {
            loader = <span className='center'> Loading.. </span>
        }
       
        return (
            <div> 
                 <button className="orange tiny btn btn-floating" onClick={this.refresh.bind(this) }>
                     <i className=" tiny material-icons ">play_for_work</i> 
                 </button>
                    {loader}
                 <button className="yellow right tiny btn btn-floating" onClick={this.reset.bind(this) }> 
                    <i className=" tiny material-icons ">replay</i> 
                </button>
                <table className="bordered stripped highlighted">
                    <thead>
                        <tr>
                            {header}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(function (data, index) {
                                return <tr>
                                    <td>    {data.last_name}</td>
                                    <td>    {data.first_name}</td>
                                    <td>    {data.email}</td>
                                    <td> {data.gender == "Male" ? 'M ' : 'F' }</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

