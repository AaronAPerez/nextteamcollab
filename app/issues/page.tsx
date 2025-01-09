import { Button, Link } from '@radix-ui/themes'
import React from 'react'

const IssuesPage = () => {
  return (
    <>
      <div>
        <Button>
          <Link href={"/issues/new"}>New Issues</Link>
        </Button>
      </div>
     </>
  )
};

export default IssuesPage;