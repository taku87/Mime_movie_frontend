import React from 'react'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { green } from '@mui/material/colors'
import Button from '@mui/material/Button'

export default function CircularIntegration(props :any) {
  const { asyncEvent, success, onClick } = props

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Button
          variant="contained"
          sx={buttonSx}
          disabled={asyncEvent.loading}
          onClick={() => {
            if (onClick) {
              onClick()
            }
            asyncEvent.execute()
          }}
        >
          {props.text}
        </Button>
        {asyncEvent.loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Box>
    </Box>
  )
}