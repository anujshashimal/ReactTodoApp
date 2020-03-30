import React, {Component} from 'react';
import deleteocn from '../assets/delete.png';
import editicon from '../assets/edit.png';
import completeicon from '../assets/complete.png';
import completeiconlist from '../assets/completeicon.png';
import pendingicon from '../assets/pending.png';

class ListItem extends Component{

    constructor(props) {
        super(props);
        this.state = {
            index:'',
            cdatas: [],
            datas: [],
            act:0,
        }
    }

    onSubmit = (e) =>{

        e.preventDefault();
        let datas = this.state.datas;
        let name = this.refs.name.value;

        if(name == ''){alert('Item Value is Empty')
        }else{
            if(this.state.act == 0){
                let data ={name}
                datas.unshift(data)

            }else{
                let index = this.state.index;
                datas[index].name = name;
            }
                this.setState({
                datas: datas,
                act: 0
            });
            this.refs.myForm.reset()
        }
    }

    onRemove = (i) => {
        let datas = this.state.datas;
        datas.splice(i, 1);
        this.setState({
            datas: datas
        })
        this.refs.myForm.reset();
        this.refs.name.focus();
        }

    onEdit = (i) => {
        let data = this.state.datas[i];
        this.refs.name.value = data.name;
        this.setState({
            act:1,
            index: i
        })
    }

    onComplete = (i, index) => {
        let cdata = this.state.cdatas;
        let cname = i;

        console.log("Item adding")

        let list ={cname}
        cdata.push(list);
        console.log(cdata)

        this.setState({
            cdata:cname,
            act:0
        });
        let datas = this.state.datas;
        datas.splice(index, 1);
    }


    onCompleteRemove = (i) =>{
        let cdatas = this.state.cdatas;
        cdatas.splice(i, 1);
        this.setState({
            cdatas: cdatas
        })

    }



    render(){
        let datas = this.state.datas;
        let cdata = this.state.cdatas;
        return(
            <div>
                <div className='formheader'>
                <form ref='myForm' className='myForm'>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            </div>
                        </div>
                        <input type ='text' ref='name' placeholder='Item Name' className="form-control" aria-label="Text input with checkbox"/>
                    </div>

                    <button onClick = {this.onSubmit} className="btn btn btn-success btn-lg btn-block"> Submit </button>

                </form>
                <table className='table mt-1'>
                    <tbody>
                    {
                        datas.map((data,index) =>
                            <tr key= {index}>
                            <td  className='text-right1'>
                                <img  src= {pendingicon} height="25" width="25"/> {data.name}
                            </td>
                                <td className='text-left1'>
                                <button onClick = {() => this.onRemove(index)} type="button" className="btn btn-outline-success" > <img  src= {deleteocn} height="20" width="20"/> </button>
                            <button onClick = {() => this.onEdit(index)} type="button" className="btn btn-outline-success" ><img  src= {editicon} height="20" width="20"/> </button>
                                    <button onClick = {() => this.onComplete(data, index)} type="button" className="btn btn-outline-success" ><img  src= {completeicon} height="20" width="20"/> </button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                    <tbody>
                    {
                            cdata.map((data,i) =>
                                <tr key={i}>
                                    <td  className='text-right1'>
                                        <img  src= {completeiconlist} height="20" width="20"/>  {data.cname.name}
                                    </td>
                                    <td className='text-left1'>
                                        <button onClick = {() => this.onCompleteRemove(i)} type="button" className="btn btn-outline-success" > <img  src= {deleteocn} height="20" width="20"/> </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                    </table>

            </div>
            </div>

        )
    }
}
export default ListItem;