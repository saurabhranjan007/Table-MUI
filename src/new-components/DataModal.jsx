import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '5px solid #94ECF5',
  boxShadow: 24,
  p: 4,
};

export default function DataModal({selectedData}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    console.log("selectedDataDataModal: ", selectedData)

     if(selectedData.address !== undefined){
        return (
            <div>
                <Button onClick={handleOpen} color="secondary" variant="outlined">Details</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Typography 
                        id="modal-modal-title" 
                        variant="h6" component="h2" 
                        color="secondary"
                        fontFamily="Helvetica"
                        lineHeight="40px"
                        letterSpacing="0.2rem">Detailed Data</Typography>

                    <Typography id="modal-modal-description" sx={{ mtbp: 2, textAlign: 'left', fontStyle: 'oblique', fontFamily: 'Monospace' }}>
                        <div>
                            ID: {selectedData.id},
                            Name: {selectedData.name},
                            User Name: {selectedData.username},
                            Email: {selectedData.email},
                            Phone: {selectedData.phone}, 
                            Website: {selectedData.website},
                            Street Name: {selectedData.address.street},
                            City Name: {selectedData.address.city}
                        </div>  
                    </Typography>
                </Box>
                </Modal>
            </div>);

        } else return(
            <div>
                <Button onClick={handleOpen} color="secondary" variant="outlined">Details</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Typography 
                    id="modal-modal-title" 
                    variant="h6" component="h2" 
                    color="secondary"
                    fontFamily="Helvetica"
                    lineHeight="40px"
                    letterSpacing="0.2rem">Detailed Data</Typography>
                </Box>
                </Modal>
            </div>);
}
