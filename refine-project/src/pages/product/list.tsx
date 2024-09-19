import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  MarkdownField,
  ShowButton,
} from "@refinedev/antd";
import { useMany, type BaseRecord, useTable } from "@refinedev/core";
import { Space, Table } from "antd";
import axios from "axios";
import { render } from "vue";

export const ProductList = () => {
  const { tableQuery } = useTable({
    // syncWithLocation: true,
    meta: {
      populate: ['image']
    },
    // queryOptions: {
    //   queryKey: ["articles", "populate"],
    //   queryFn: async () => {
    //     const response = await axios.get("http://localhost:1337/api/product", {
    //       params: {
    //         populate: ['image']
    //       },
    //     });
    //     return response.data;
    //   },
    // },
  });

  const dataSource =  tableQuery.data?.data || [];


  const columns = [
    {
      title: 'Image',
      key: 'image',
      dataIndex: 'image',
      render: (record: any) => {
        const data = record[0];
        return (
          <img src={"http://localhost:1337/" + data?.url} alt={record?.name} style={{ width: 50, height: 50 }} />
        )
      }
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
  ];

  return (
    <List>
      <Table dataSource={dataSource} columns={columns} />
    </List>
  );
};
