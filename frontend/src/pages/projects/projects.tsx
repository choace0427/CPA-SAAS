import { Divider, Table, Input, Select, Dropdown, Button, Space } from 'antd';
import type { TableColumnsType, TableProps, MenuProps } from 'antd';
import { SearchOutlined, DownOutlined, SaveOutlined, EditOutlined } from '@ant-design/icons';

interface DataType {
  key: React.Key;
  client: string;
  project: string;
  startDate: string;
  originalDueDate: string;
  dueDate: string;
  assignees: any;
}

// Dropdown
const items: MenuProps['items'] = [
  {
    label: 'Save changes',
    key: '1',
    icon: <SaveOutlined />,
  },
  {
    label: 'Save as New View',
    key: '2',
    icon: <EditOutlined />,
  }
];

const menuProps = {
  items
};

// Table

const columns: TableColumnsType<DataType> = [
  {
    title: 'CLIENT',
    dataIndex: 'client',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'PROJECT',
    dataIndex: 'project',
  },
  {
    title: 'START DATE',
    dataIndex: 'startDate',
  },
  {
    title: 'ORIGINAL DUE DATE',
    dataIndex: 'originalDueDate',
  },
  {
    title: 'DUE DATE',
    dataIndex: 'dueDate',
  },
  {
    title: 'ASSIGNEES',
    dataIndex: 'assignees',
    render: (assignees: any) => (
      <div className='flex justify-start gap-2'>
        {assignees.map((assignee: string, index: number) => (
          <img key={index} className='w-8 h-8' src={`/src/assets/images/${assignee}.svg`} alt={assignee} />
        ))}
      </div>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    client: 'Michael McMullin',
    project: 'Project Alpha',
    startDate: '2023-01-01',
    originalDueDate: '2023-06-01',
    dueDate: '2023-06-15',
    assignees: ['1', '2'],
  },
  {
    key: '2',
    client: 'Jim Green',
    project: 'Project Beta',
    startDate: '2023-02-01',
    originalDueDate: '2023-07-01',
    dueDate: '2023-07-10',
    assignees: ['1'],
  },
  {
    key: '3',
    client: 'Joe Black',
    project: 'Project Gamma',
    startDate: '2023-03-01',
    originalDueDate: '2023-08-01',
    dueDate: '2023-08-20',
    assignees: ['1', '2'],
  },
  {
    key: '4',
    client: 'Disabled User',
    project: 'Project Delta',
    startDate: '2023-04-01',
    originalDueDate: '2023-09-01',
    dueDate: '2023-09-15',
    assignees: ['1', '2'],
  },
];

const rowSelection: TableProps<DataType>['rowSelection'] = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

export default function Projects() {
  return (
    <div className='w-full p-8'>
      <div>
        <div className='flex flex-row w-min gap-2'>
          <Input size="large" placeholder="Search by project name or work type" prefix={<SearchOutlined />} style={{ width: 480 }} />
          <Select
            placeholder="Select a saved view"
            style={{ width: 240 }}
            options={[
              { value: '1', label: "My Staff's Work" },
              { value: '2', label: 'My Work' },
            ]}
            size='large'
          />
          <Dropdown menu={menuProps}>
            <Button size='large' type='primary'>
              <Space>
                Save
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
        <Divider />
        <Table<DataType>
          rowSelection={{ type: 'checkbox', ...rowSelection }}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  )
}
