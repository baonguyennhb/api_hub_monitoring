import { Button, Table } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { PlusCircleOutlined } from '@ant-design/icons';
import { addTag } from '../redux';
import React, { useState } from 'react';

const columns = [
    {
        title: 'No',
        dataIndex: 'index',
    },
    {
        title: 'Metter ID',
        dataIndex: 'metter_id',
    },
    {
        title: 'Tag name',
        dataIndex: 'name',
    }
];

const TableTagAdd = ({ tags }) => {
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.data_hub.addTag.loading)
    const data = tags?.map((tag, index) => {
        return {
            key: tag.id,
            index: index,
            ...tag,
        }
    })
    const [selectedRow, setSelectedRow] = useState([]);
    const start = () => {
        let listId = selectedRow.map(tagId => {
            return {
                id: tagId
            }
        })
        dispatch(addTag({
            tags: listId
        }))
    };

    const onSelectChange = (newSelectedRow) => {
        console.log(newSelectedRow)
        setSelectedRow(newSelectedRow);
    };

    const rowSelection = {
        selectedRow,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRow.length > 0;
    return (
        <div>
            <div
                style={{
                    marginBottom: 16,
                }}
            >
                <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                    <PlusCircleOutlined />
                    ADD
                </Button>
                <span
                    style={{
                        marginLeft: 8,
                    }}
                >
                    {hasSelected ? `Selected ${selectedRow.length} items` : ''}
                </span>
            </div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>
    );
};

export default TableTagAdd;