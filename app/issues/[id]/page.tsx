<<<<<<< HEAD
import { prisma } from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
import AssigneeSelect from "./AssigneeSelect";




const IssuesDetailPage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;


  const sessions = await getServerSession(authOptions)

=======
import IssuesStatusBadge from "@/app/components/IssuesStatusBadge";
import { prisma } from "@/prisma/client";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";
import delay from "delay";
import {Pencil2Icon} from '@radix-ui/react-icons'
import Link from "next/link";

// interface Props {
//     params:{id:string}
// }

const IssuesDetailPage = async ({ params }: { params: { id: string } }) => {
>>>>>>> 835c5007b58c3975191dabeff4ef4c7d26a04933
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

<<<<<<< HEAD
  return (
    <>
      <Grid columns={{ initial: "1", sm: "5" }} gap={"5"}>
        <Box className="md:col-span-4">
          <IssueDetails issue={issue} />
        </Box>
        { sessions && <Box>
          <Flex direction={'column'} gap={'4'}>
            <AssigneeSelect issue={issue}/>
          <EditIssueButton issueId={issue.id} />
          <DeleteIssueButton issueId={issue.id}/>

          </Flex>
        </Box>}
=======
  await delay(3000);

  return (
    <>
      <Grid columns={{initial:"1", md:'2'}} gap={"5"}>
        <Box>
          <Heading>{issue.title}</Heading>
          <Flex gap={"3"} my={"2"}>
            <IssuesStatusBadge status={issue.status} />

            <Text>{issue.createdAt.toDateString()}</Text>
          </Flex>
          <Card className="prose" mt={"4"}>
            <ReactMarkdown className="text-cyan-50">
              {issue.description}
            </ReactMarkdown>
          </Card>
        </Box>
        <Box>
            <Button>
                <Pencil2Icon/>
                <Link href={`/issues/${issue.id}/edit`} >
                Edit Issue
                </Link>
            </Button>
        </Box>
>>>>>>> 835c5007b58c3975191dabeff4ef4c7d26a04933
      </Grid>
    </>
  );
};

export default IssuesDetailPage;
