import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'


const Note = (props) => {
    
    function handleClick() {
        props.onDelete(props.id);
        
    }




  return (
    <Card className="note">
        <CardContent>
            <Typography variant="h1"  sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {props.title}
            </Typography>
            <Typography variant="body">
                {props.content}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleClick}>
                <DeleteIcon />
            </Button>
        </CardActions>
    </Card>
  );
}

export default Note