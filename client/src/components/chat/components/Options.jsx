import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

const Options = (props) => {
  return (
    <Stack flexDirection="column" gap={2} p={3}>
      {props.options.map((option) => {
        return (
          <Chip
            sx={{cursor: 'pointer', py: 1}}
            key={option.id}
            label={option.name}
            onClick={option.handler}

            color="primary"
            variant="outlined"
          />

        );
      }
      )}
    </Stack>
  );
};

export default Options;
