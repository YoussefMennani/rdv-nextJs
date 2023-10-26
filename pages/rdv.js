
import { Button, TextField } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function Rdv() {


    const yesterday = dayjs().subtract(1, 'day');


    return (
        <div className='bg-white p-3 flex'>
            <div className='flex-1 mx-1'>
                Formulaire
                <hr />
                <div className='flex p-2'>
                    <div className='flex-1'>
                        <TextField id="outlined-basic" label="Prénom" variant="outlined" />
                    </div>

                    <div className='flex-1'>
                        <TextField id="outlined-basic" label="Nom" variant="outlined" fullWidth />
                    </div>

                </div>

                <div className='flex p-2'>
                    <div className='flex-1'>
                        <TextField id="outlined-basic" label="Telephone" variant="outlined" />
                    </div>
                    <div className='flex-1'>
                        <Button variant="contained" color='info' endIcon={<SendIcon />} className="bg-green-600 text-white p-3 m-1 w-full  transition duration-700 ">
                            Send
                        </Button>
                    </div>

                </div>

            </div>
            <div className='flex-1  mx-1'>
                Calendrier
                <hr />

                <div className='text-right'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            defaultValue={yesterday}
                            disablePast
                            views={['year', 'month', 'day']}
                        />
                    </LocalizationProvider>

                </div>

                <div className='my-3 text-center' >
                    {
                        Array.from({ length: 10 }, (value, index) => (
                            <button className='text-white bg-sky-300 p-2 rounded-md duration-300 transition-all hover:bg-sky-700 m-1'>
                                09h-10h
                            </button>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Rdv