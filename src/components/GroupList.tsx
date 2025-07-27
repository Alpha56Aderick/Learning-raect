import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

function GroupList() {
  return (
    <>
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    </>
  );
}

export default GroupList;
