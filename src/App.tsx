import { Table } from 'antd'
import type { TableProps } from 'antd'
import './App.css'

interface DataType {
  key: string
  name: string
  age: number
  address: string
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
]

const dataSource: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
]

function App() {
  return (
    <div style={{ overflow: "auto" }}>
      <Table columns={columns} dataSource={dataSource} pagination={false} />
    </div>
  )
}

export default App
