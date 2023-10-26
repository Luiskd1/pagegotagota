
import { IconButton } from "@mui/material"
import { GotagotaLayout } from "../layout/GotagotaLayout"
import { NoteView, NothingSelectedView } from "../view"
import { AddOutlined } from "@mui/icons-material"



export const GotagotaPage = () => {
  return (
    <GotagotaLayout>

      {/* <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto magni dicta delectus sint natus odit quis. Voluptatibus, quidem non? Odit, praesentium. Vitae voluptatibus, a nam iusto aliquam accusantium eos. Incidunt.</Typography> */}

      {/* <NothingSelectedView/> */}

      <NoteView/>

      <IconButton
      size="large"
      sx={{
        color:'black',
        backgroundColor:"error.main",
        "hover":{backgroundColor:"error.main",opacity:0.9},
        position:'fixed',
        right:50,
        bottom:50
      }}>
        <AddOutlined sx={{fontSize:30}}/>
      </IconButton>
      
    </GotagotaLayout>
  )
}
