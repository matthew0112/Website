"use client"

import { Button, Divider, Stack, Typography } from "@mui/material";
import { useState } from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

export default function Cards() {
  const [code, setCode] = useState("")

  return (
    <Stack spacing={1} sx={{ alignItems: "center", height: "100dvh", width: "100dvw", justifyContent: "center" }}>
      <Typography>Card Games</Typography>
      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
        <FormControl
          sx={{
            m: 1,
            width: '25ch',
            // Target the input text color
            input: { color: '#ffffff' },
            // Target the label color
            '& .MuiInputLabel-root': { color: '#ffffff' },
            // Target the label color when the field is focused
            '& .MuiInputLabel-root.Mui-focused': { color: 'white' },
            // 1. Default border color
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              // 2. Hover border color
              '&:hover fieldset': {
                borderColor: 'blue',
              },
              // 3. Focused border color
              '&.Mui-focused fieldset': {
                borderColor: 'blue',
              },
            },
          }}
          variant="outlined"

        >
          <InputLabel htmlFor="code-input">Code</InputLabel>
          <OutlinedInput
            id="code-input"
            type="text"
            placeholder="123456"
            value={code}
            onChange={(e) => {
              const input = e.target.value;
              if (/^\d{0,6}$/.test(input)) {
                setCode(input);
              }
            }}
            endAdornment={
              <InputAdornment position="end">
                <Button disabled={code.length < 6}>Join</Button>
              </InputAdornment>
            }
            label="Code"
          />
        </FormControl>
      </Stack>

      <Divider>or</Divider>
      <Button variant="contained">Create</Button>
    </Stack>
  )
}