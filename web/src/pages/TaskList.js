import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import TaskListResults from '../components/task/TaskListResults';
import tasks from '../__mocks__/tasks';

const TaskList = () => (
  <>
    <Helmet>
      <title>Task</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{ pt: 3 }}>
          <TaskListResults tasks={tasks} />
        </Box>
      </Container>
    </Box>
  </>
);

export default TaskList;