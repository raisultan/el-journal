import React from 'react'
import { Table, Input, Form, Select } from 'antd'

const data = []

// number of students
for (let i=1; i <= 30; i++) {
    const temp = {key: `${i-1}`, name: 'Raysultan', surname: 'Karimov', number: `${i}`}
    for (let g = 1; g <= 29; g++) {
        temp[`date${g}-09-2019`] = '✔️'
    }
    data.push(temp)
}

// todo: предусмотреть заполнение клетки галочкой если пользователь оставит ее пустой
  const EditableContext = React.createContext();

  const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
      <tr {...props} />
    </EditableContext.Provider>
  );

  const EditableFormRow = Form.create()(EditableRow);

  class EditableCell extends React.Component {
    state = {
      editing: false,
    };

    toggleEdit = () => {
      const editing = !this.state.editing;
      this.setState({ editing }, () => {
        if (editing) {
          this.input.focus();
        }
      });
    };

    save = e => {
      const { record, handleSave } = this.props;
      this.form.validateFields((error, values) => {
        if (error && error[e.currentTarget.id]) {
          return;
        }
        this.toggleEdit();
        handleSave({ ...record, ...values });
      });
    };

    renderCell = form => {
      this.form = form;
      const { children, dataIndex, record, title } = this.props;
      const { editing } = this.state;
      return editing ? (
        <Form.Item style={{ margin: 0 }}>
          {form.getFieldDecorator(dataIndex, {
            rules: [
              {
                required: true,
                message: `${title} is required.`,
              },
            ],
            initialValue: record[dataIndex],
          })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
        </Form.Item>
      ) : (
        <div
          className="editable-cell-value-wrap"
          style={{ paddingRight: 24 }}
          onClick={this.toggleEdit}
        >
          {children}
        </div>
      );
    };

    render() {
      const {
        editable,
        dataIndex,
        title,
        record,
        index,
        handleSave,
        children,
        ...restProps
      } = this.props;
      return (
        <td {...restProps}>
          {editable ? (
            <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
          ) : (
            children
          )}
        </td>
      );
    }
  }

  class EditableTable extends React.Component {
    constructor(props) {
      super(props);
      this.columns = [
        { title: '№', dataIndex: 'number'},
        { title: 'Surname', dataIndex: 'surname', initialEditValue: 'initial edit value'},
        { title: 'Name', dataIndex: 'name' },
        { title: '01/09/2019', dataIndex: 'date1-09-2019', editable: true,},
        { title: '02/09/2019', dataIndex: 'date2-09-2019', editable: true,},
        { title: '03/09/2019', dataIndex: 'date3-09-2019', editable: true,},
        { title: '04/09/2019', dataIndex: 'date4-09-2019', editable: true,},
        { title: '05/09/2019', dataIndex: 'date5-09-2019', editable: true,},
        { title: '06/09/2019', dataIndex: 'date6-09-2019', editable: true,},
        { title: '07/09/2019', dataIndex: 'date7-09-2019', editable: true,},
        { title: '08/09/2019', dataIndex: 'date8-09-2019', editable: true,},
        { title: '09/09/2019', dataIndex: 'date9-09-2019', editable: true,},
        { title: '10/09/2019', dataIndex: 'date10-09-2019', editable: true,},
        { title: '11/09/2019', dataIndex: 'date11-09-2019', editable: true,},
        { title: '12/09/2019', dataIndex: 'date12-09-2019', editable: true,},
        { title: '13/09/2019', dataIndex: 'date13-09-2019', editable: true,},
        { title: '14/09/2019', dataIndex: 'date14-09-2019', editable: true,},
        { title: '15/09/2019', dataIndex: 'date15-09-2019', editable: true,},
        { title: '16/09/2019', dataIndex: 'date16-09-2019', editable: true,},
        { title: '17/09/2019', dataIndex: 'date17-09-2019', editable: true,},
        { title: '18/09/2019', dataIndex: 'date18-09-2019', editable: true,},
        { title: '19/09/2019', dataIndex: 'date19-09-2019', editable: true,},
        { title: '20/09/2019', dataIndex: 'date20-09-2019', editable: true,},
        { title: '21/09/2019', dataIndex: 'date21-09-2019', editable: true,},
        { title: '22/09/2019', dataIndex: 'date22-09-2019', editable: true,},
        { title: '23/09/2019', dataIndex: 'date23-09-2019', editable: true,},
        { title: '24/09/2019', dataIndex: 'date24-09-2019', editable: true,},
        { title: '26/09/2019', dataIndex: 'date25-09-2019', editable: true,},
        { title: '27/09/2019', dataIndex: 'date26-09-2019', editable: true,},
        { title: '28/09/2019', dataIndex: 'date28-09-2019', editable: true,},
        { title: '29/09/2019', dataIndex: 'date29-09-2019', editable: true,},
      ];

      this.state = {
        dataSource: data,
        count: 30,
      };
    }

    handleSave = row => {
      const newData = [...this.state.dataSource];
      const index = newData.findIndex(item => row.key === item.key);
      const item = newData[index];
      newData.splice(index, 1, {
        ...item,
        ...row,
      });
      this.setState({ dataSource: newData });
    };

    render() {
      const { dataSource } = this.state;
      const components = {
        body: {
          row: EditableFormRow,
          cell: EditableCell,
        },
      };
      const columns = this.columns.map(col => {
        if (!col.editable) {
          return col;
        }
        return {
          ...col,
          onCell: record => ({
            record,
            editable: col.editable,
            dataIndex: col.dataIndex,
            title: col.title,
            handleSave: this.handleSave,
          }),
        };
      });
      return (
        <div>
          <Table
            components={components}
            rowClassName={() => 'editable-row'}
            bordered
            dataSource={dataSource}
            columns={columns}
            scroll={{x: true}}
          />
        </div>
      );
    }
  }

export default EditableTable