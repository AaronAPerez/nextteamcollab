import { Status } from '@prisma/client'
import { Badge } from '@radix-ui/themes'
import React from 'react'

// interface Props {
//     status: Status
// }
   const statusMap : Record<Status,{label:string,color:'red'| 'violet'|'green'}> = {
        OPEN: {label: 'Open',color: 'red'},
        IN_PROGRESS: {label: 'In Progress',color: 'violet'},
        CLOSED: {label: 'Closed',color: 'green'},
   }


const IssuesStatusBadge = ({status}:{status:Status}) => {

    // if(status === 'OPEN')
    //         return <Badge color='red'>Open</Badge>
    // if(status === 'OPEN')
    //         return <Badge color='red'>Open</Badge>
    // if(status === 'OPEN')
    //         return <Badge color='red'>Open</Badge>

  return (
   <>
        <Badge color={statusMap[status].color}>

                {statusMap[status].label}
        </Badge>
   </>
  )
}

export default IssuesStatusBadge