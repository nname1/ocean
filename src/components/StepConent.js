import React, {Component} from 'react';
import {Button, Icon, Input, List, Avatar,Table,Divider} from 'antd';
import Step1RightButton from './StepButtons/Step1RightButton';
import Step2RightButton from './StepButtons/Step2RightButton';
import Step3RightButton from './StepButtons/Step3RightButton';
import Step2LeftButton from './StepButtons/Step2LeftButton';
import Step3LeftButton from './StepButtons/Step3LeftButton';
import Step4LeftButton from './StepButtons/Step4LeftButton';
import '../css/steps.css'
const util = require('util');
const ButtonGroup = Button.Group;
const Search = Input.Search;
const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
        
    },
    {
        title: 'Ant Design Title 4',
    },
];
const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
      <a href="javascript:;">Action 一 {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
      <Divider type="vertical" />
      <a href="javascript:;" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
    ),
}];

const table_data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}];
class StepContent extends Component {
    constructor(props) {
        super(props);
    }

    step1Content() {
        return (
            <div>
                <Search placeholder="input search text" enterButton="Search" size="large"/><br/><br/><br/>
                <div class="divcss5-right"><ButtonGroup>
                    <Step1RightButton onClickFunction={this.props.actions.moveToStep2}/>
                </ButtonGroup></div></div>)
    }

    step2Content() {
        return (<div><List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                </List.Item>
            )}
        /><br/><br/><br/><div class="divcss5-right"><ButtonGroup>
            <Step2LeftButton onClickFunction={this.props.actions.moveToStep1}/>
            <Step2RightButton onClickFunction={this.props.actions.moveToStep3}/>
        </ButtonGroup></div></div>)
    }

    step3Content() {
        return (<div><Table columns={columns} dataSource={table_data} /><br/><br/><br/><br/><div class="divcss5-right"><ButtonGroup>
            <Step3LeftButton onClickFunction={this.props.actions.moveToStep2}/>
            <Step3RightButton onClickFunction={this.props.actions.moveToStep4}/>
        </ButtonGroup></div></div>)
    }

    step4Content() {
        return (<div><Icon type="smile-o" /><br/><br/><br/><br/><div class="divcss5-right"><ButtonGroup>
            <Step4LeftButton onClickFunction={this.props.actions.moveToStep3}/>
        </ButtonGroup></div></div>)
    }

    getStepContent(){
        const {step1Status,step2Status,step3Status,step4Status}=this.props.status;
        if (step1Status == "process") {
            return this.step1Content();
        } else if (step2Status == "process") {
            return (<div>{this.step2Content()}{util.inspect(this.props,{depth:5})}</div>)
        } else if (step3Status == "process") {
            return (<div>{this.step3Content()}{util.inspect(this.props,{depth:5})}</div>)
        } else if (step4Status == "process"){
            return (<div>{this.step4Content()}{util.inspect(this.props,{depth:5})}</div>)
        }else{
            return(<div>{this.step1Content()}{util.inspect(this.props,{depth:5})}</div>)
        }
    }

    render() {
        return this.getStepContent();
    }
}


export default StepContent;