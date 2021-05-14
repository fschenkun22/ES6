
import { Input, Button, List, Typography, Divider } from 'antd';


const TodoListUI = (props)=>{
        return (
            <div style={{ marginTop: '10px', marginLeft: '10px' }}>
                <div> HELLO </div>
                <Input
                    value={props.inputValue}
                    placeholder=""
                    style={{ width: '300px' }}
                    onChange={props.handleInputChage}
                />
                <Button
                    type="primary"
                    onClick={props.handleBtnClk}
                >Primary Button</Button>
    
                <Divider orientation="left">Default Size</Divider>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (
                        <List.Item
                            onClick={props.handleDelClk.bind(this, index)}
                        >
                            <Typography.Text mark> list
    
                        </Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </div>)
    
}


export default TodoListUI