import React, {FC, useState} from 'react';
import styled from './Table.module.css'
import Search from "../Search/Search";

interface assignedT {
  person_name: string
  status: string
}

interface T {
  work_order_id: number
  description: string
  received_date: string
  assigned_to: Array<assignedT>
  status: string
  priority: string
}

interface TableTypes {
  data: Array<T>
}

const Table: FC<TableTypes> = ( {data} ) => {

  const [inpValue, setInpValue] = useState('')
  const handleChange = ( e: any ) => {
    setInpValue(e.target.value)
  }

  const searchDescription = ( items: T[], term: string ): T[] => {
    if(term.length === 0) {
      return items
    }
    return items.filter(( item ) => {
      return item.description.indexOf(term) > -1
    })
  }

  const filterPost = searchDescription(data, inpValue)

  return (

    <div className={ styled.TableContainer }>
      <Search onChange={handleChange}
              value={inpValue}
      />

      <div className={ styled.tableHead }>
        <div className={ styled.tableHeadWorkId }>WO ID</div>
        <div>Description</div>
        <div>Received date</div>
        <div>Assigned to</div>
        <div>Status</div>
        <div>Priority</div>
      </div>

      { filterPost.map(( item, i ) => (
        <div key={ i } className={ styled.tableColumn }>
          <div className={ styled.tableColumnWorkId }>{ item.work_order_id }</div>
          <div>{ item.description }</div>
          <div>{ item.received_date }</div>
          <div>{ item.assigned_to.length === 0 ? <b>- - - -</b> : item.assigned_to.map(( person, i ) => (
            <div key={ i }> { person.person_name }: <span
              className={ person.status === "In progress" ? styled.inProgress : styled.tableColumn__status }> { person.status }</span>
            </div>
          )) }</div>
          <div>{ item.status }</div>
          <div>{ item.priority }</div>
        </div>

      )) }
    </div>
  );
};

export default Table;