import { type MouseEvent, useState } from 'react'
import { Grid, Popover, Typography } from '@mui/material'
import { format, parseISO } from 'date-fns'
import { ru } from 'date-fns/locale'

const useEditInfo = ({
  id,
  createdAt,
  updatedAt
}: {
  id: number
  createdAt: string
  updatedAt: string
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const popover = (
    <>
      {' '}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}>
        <Grid container width={250} p={2} zeroMinWidth rowSpacing={0.5}>
          <Grid item xs={6}>
            <Typography>Id:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5">{id}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>CreatedAt:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5">
              {createdAt
                ? format(new Date(parseISO(createdAt)), 'dd.MM.yyyy', {
                    locale: ru
                  })
                : ''}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>UpdatedAt:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5">
              {updatedAt
                ? format(new Date(parseISO(updatedAt)), 'dd.MM.yyyy', {
                    locale: ru
                  })
                : ''}
            </Typography>
          </Grid>
        </Grid>
      </Popover>
    </>
  )

  return { popover, handleOpen }
}

export default useEditInfo
